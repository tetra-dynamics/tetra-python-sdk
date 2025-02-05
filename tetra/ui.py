from dataclasses import asdict, dataclass
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
import os
from typing import List

import jinja2

from .hand import Hand
from .api import TetraAPI

# Set up Jinja2 environment
template_dir = os.path.join(os.path.dirname(__file__), 'server', 'templates')
env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir))

class TetraRequestHandler(BaseHTTPRequestHandler):
    def __init__(self, request, client_address, server):
        self.api = server.api
        super().__init__(request, client_address, server)

    def do_GET(self):
        static_path = self._static_path_for_url(self.path)
        if static_path is not None:
            print('static_path:', static_path)

        if static_path is not None and os.path.isfile(static_path):
            self.serve_file(static_path)
        if self.path.startswith("/v0"):
            resp = None
            if self.path == "/v0/hands":
                resp = asdict(self.api.hand_info())
            elif self.path == "/v0/hands/0/joints":
                joints = self.api.joint_info(0)
                resp = {
                    'joints': [asdict(joint) for joint in joints]
                }
            else:
                self.send_error(404, '{"error": "notfound"}')

            if resp is not None:
                self.render_json(resp)
        elif self.path == "/":
            self.render_template("index.html", {
                'joints': self.api.hands[0].joint_configs,
                'grasps': self.api.hands[0].grasps.keys()})
        else:
            self.send_error(404, "Page Not Found")
    
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = json.loads(self.rfile.read(content_length))

        if self.path == '/v0/hands/0':
            if 'grasp' in body:
                grasp_name = body['grasp']
                grasp_value = body['graspValue']
                self.api.set_grasp(0, grasp_name, grasp_value)

            if 'enabled' in body:
                enabled = body['enabled']
                self.api.set_enabled(0, enabled)

            if 'torqueLimit' in body:
                self.api.hands[0].set_torque_limit(body['torqueLimit'])

            resp = self.api.hand_info()
            self.render_json(asdict(resp))
        elif self.path == '/v0/hands/0/grasp':
            self.api.set_grasp(0, body['grasp'], body['grasp_value'])
            self.render_json({}) # TODO: return something
        elif self.path.startswith('/v0/hands/0/joints/'):
            joint_id = int(self.path[len('/v0/hands/0/joints/'):])
            position = body['position']
            self.api.hands[0].set_single_joint_position(joint_id, position)
            self.render_json({}) # TODO: return something
        else:
            self.send_error(404, '{"error": "notfound"}')

    def _static_path_for_url(self, url_path):
        if not url_path.startswith('/static/') or '..' in url_path:
            return None
        return os.path.join(os.path.dirname(__file__), 'server', url_path[1:])
    
    def serve_file(self, path):
        _, extension = os.path.splitext(path)
        content_types = {'.html': 'text/html', '.js': 'application/javascript'}
        content_type = content_types.get(extension, 'application/octet-stream')

        with open(path, "rb") as file:
            content = file.read()
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", len(content))
            self.end_headers()
            self.wfile.write(content)

    def render_template(self, template_name, context):
        try:
            template = env.get_template(template_name)
            html = template.render(context)
            
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(html.encode("utf-8"))
        except Exception as e:
            self.send_error(500, f"Template rendering error: {e}")

    def render_json(self, resp):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(resp).encode('utf-8'))

class TetraServer(HTTPServer):
    def __init__(self, server_address, handler_class, api):
        self.api = api
        super().__init__(server_address, handler_class)

def serve(port: int, hands: List[Hand]):
    api = TetraAPI(hands)
    server_address = ('', port)
    httpd = TetraServer(server_address, TetraRequestHandler, api)
    print(f"Serving on port {port}")
    httpd.serve_forever()

def main():
    import can

    with can.Bus() as bus:
        hand = Hand(bus)
        serve(4444, [hand])

    # TODO: launch a webbrowser

if __name__ == "__main__":
    main()