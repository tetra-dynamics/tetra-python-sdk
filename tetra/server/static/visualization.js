var IZ="173",O8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var wZ=0,V6=1,CZ=2;var L6=1,_Z=2,sJ=3,Z9=0,PJ=1,nJ=2,iJ=0,C9=1,z6=2,B6=3,I6=4,AZ=5,$9=100,PZ=101,TZ=102,SZ=103,jZ=104,yZ=200,vZ=201,fZ=202,bZ=203,hZ=204,xZ=205,gZ=206,pZ=207,mZ=208,lZ=209,dZ=210,uZ=211,cZ=212,sZ=213,nZ=214,X7=0,U7=1,G7=2,_9=3,E7=4,N7=5,q7=6,D7=7,iZ=0,oZ=1,aZ=2,H8=0,rZ=1,tZ=2,eZ=3,J$=4,Q$=5,Z$=6,$$=7;var W9=301,C8=302,O7=303,R7=304,A9=306,W$=1000,K$=1001,Y$=1002,K9=1003,H$=1004;var P9=1005;var _8=1006,F7=1007;var Y9=1008;var R8=1009,X$=1010,U$=1011,T9=1012,w6=1013,H9=1014,F8=1015,A8=1016,C6=1017,_6=1018,X9=1020,G$=35902,E$=1021,N$=1022,oJ=1023,q$=1024,D$=1025,k7=1026,S9=1027,O$=1028,A6=1029,R$=1030,P6=1031;var T6=1033,M7=33776,V7=33777,L7=33778,z7=33779,S6=35840,j6=35841,y6=35842,v6=35843,f6=36196,b6=37492,h6=37496,x6=37808,g6=37809,p6=37810,m6=37811,l6=37812,d6=37813,u6=37814,c6=37815,s6=37816,n6=37817,i6=37818,o6=37819,a6=37820,r6=37821,B7=36492,t6=36494,e6=36495,F$=36283,JQ=36284,QQ=36285,ZQ=36286;var k$=3201;var M$=0,V$=1,P8="",L$="srgb",j9="srgb-linear",$Q="linear",t0="srgb";var z$=512,B$=513,I$=514,WQ=515,w$=516,C$=517,_$=518,A$=519;var KQ="300 es",P$=2000;class X8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let $=Z[J];if($!==void 0){let W=$.indexOf(Q);if(W!==-1)$.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let $=Z.slice(0);for(let W=0,K=$.length;W<K;W++)$[W].call(this,J);J.target=null}}}var FJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$Z=1234567,B9=Math.PI/180,Q9=180/Math.PI;function U9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,$=Math.random()*4294967295|0;return(FJ[J&255]+FJ[J>>8&255]+FJ[J>>16&255]+FJ[J>>24&255]+"-"+FJ[Q&255]+FJ[Q>>8&255]+"-"+FJ[Q>>16&15|64]+FJ[Q>>24&255]+"-"+FJ[Z&63|128]+FJ[Z>>8&255]+"-"+FJ[Z>>16&255]+FJ[Z>>24&255]+FJ[$&255]+FJ[$>>8&255]+FJ[$>>16&255]+FJ[$>>24&255]).toLowerCase()}function x0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function YQ(J,Q){return(J%Q+Q)%Q}function SW(J,Q,Z,$,W){return $+(J-Q)*(W-$)/(Z-Q)}function jW(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function I9(J,Q,Z){return(1-Z)*J+Z*Q}function yW(J,Q,Z,$){return I9(J,Q,1-Math.exp(-Z*$))}function vW(J,Q=1){return Q-Math.abs(YQ(J,Q*2)-Q)}function fW(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function bW(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function hW(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function xW(J,Q){return J+Math.random()*(Q-J)}function gW(J){return J*(0.5-Math.random())}function pW(J){if(J!==void 0)$Z=J;let Q=$Z+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function mW(J){return J*B9}function lW(J){return J*Q9}function dW(J){return(J&J-1)===0&&J!==0}function uW(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function cW(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function sW(J,Q,Z,$,W){let{cos:K,sin:H}=Math,Y=K(Z/2),U=H(Z/2),X=K((Q+$)/2),E=H((Q+$)/2),G=K((Q-$)/2),N=H((Q-$)/2),O=K(($-Q)/2),L=H(($-Q)/2);switch(W){case"XYX":J.set(Y*E,U*G,U*N,Y*X);break;case"YZY":J.set(U*N,Y*E,U*G,Y*X);break;case"ZXZ":J.set(U*G,U*N,Y*E,Y*X);break;case"XZX":J.set(Y*E,U*L,U*O,Y*X);break;case"YXY":J.set(U*O,Y*E,U*L,Y*X);break;case"ZYZ":J.set(U*L,U*O,Y*E,Y*X);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function e8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function LJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var I7={DEG2RAD:B9,RAD2DEG:Q9,generateUUID:U9,clamp:x0,euclideanModulo:YQ,mapLinear:SW,inverseLerp:jW,lerp:I9,damp:yW,pingpong:vW,smoothstep:fW,smootherstep:bW,randInt:hW,randFloat:xW,randFloatSpread:gW,seededRandom:pW,degToRad:mW,radToDeg:lW,isPowerOfTwo:dW,ceilPowerOfTwo:uW,floorPowerOfTwo:cW,setQuaternionFromProperEuler:sW,normalize:LJ,denormalize:e8};class z0{constructor(J=0,Q=0){z0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6],this.y=$[1]*Q+$[4]*Z+$[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(x0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(x0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*Z-K*$+J.x,this.y=W*$+K*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class A0{constructor(J,Q,Z,$,W,K,H,Y,U){if(A0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,K,H,Y,U)}set(J,Q,Z,$,W,K,H,Y,U){let X=this.elements;return X[0]=J,X[1]=$,X[2]=H,X[3]=Q,X[4]=W,X[5]=Y,X[6]=Z,X[7]=K,X[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,K=Z[0],H=Z[3],Y=Z[6],U=Z[1],X=Z[4],E=Z[7],G=Z[2],N=Z[5],O=Z[8],L=$[0],M=$[3],q=$[6],D=$[1],C=$[4],z=$[7],_=$[2],f=$[5],I=$[8];return W[0]=K*L+H*D+Y*_,W[3]=K*M+H*C+Y*f,W[6]=K*q+H*z+Y*I,W[1]=U*L+X*D+E*_,W[4]=U*M+X*C+E*f,W[7]=U*q+X*z+E*I,W[2]=G*L+N*D+O*_,W[5]=G*M+N*C+O*f,W[8]=G*q+N*z+O*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],U=J[7],X=J[8];return Q*K*X-Q*H*U-Z*W*X+Z*H*Y+$*W*U-$*K*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],U=J[7],X=J[8],E=X*K-H*U,G=H*Y-X*W,N=U*W-K*Y,O=Q*E+Z*G+$*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/O;return J[0]=E*L,J[1]=($*U-X*Z)*L,J[2]=(H*Z-$*K)*L,J[3]=G*L,J[4]=(X*Q-$*Y)*L,J[5]=($*W-H*Q)*L,J[6]=N*L,J[7]=(Z*Y-U*Q)*L,J[8]=(K*Q-Z*W)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,$,W,K,H){let Y=Math.cos(W),U=Math.sin(W);return this.set(Z*Y,Z*U,-Z*(Y*K+U*H)+K+J,-$*U,$*Y,-$*(-U*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return this.premultiply(e7.makeScale(J,Q)),this}rotate(J){return this.premultiply(e7.makeRotation(-J)),this}translate(J,Q){return this.premultiply(e7.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<9;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var e7=new A0;function HQ(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function w9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function T$(){let J=w9("canvas");return J.style.display="block",J}var WZ={};function T8(J){if(J in WZ)return;WZ[J]=!0,console.warn(J)}function S$(J,Q,Z){return new Promise(function($,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,Z);break;default:$()}}setTimeout(K,Z)})}function j$(J){let Q=J.elements;Q[2]=0.5*Q[2]+0.5*Q[3],Q[6]=0.5*Q[6]+0.5*Q[7],Q[10]=0.5*Q[10]+0.5*Q[11],Q[14]=0.5*Q[14]+0.5*Q[15]}function y$(J){let Q=J.elements;if(Q[11]===-1)Q[10]=-Q[10]-1,Q[14]=-Q[14];else Q[10]=-Q[10],Q[14]=-Q[14]+1}var KZ=new A0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),YZ=new A0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function nW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=Y8(W.r),W.g=Y8(W.g),W.b=Y8(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=J9(W.r),W.g=J9(W.g),W.b=J9(W.b);return W},fromWorkingColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},toWorkingColorSpace:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],$=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:$,transfer:"linear",toXYZ:KZ,fromXYZ:YZ,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:$,transfer:"srgb",toXYZ:KZ,fromXYZ:YZ,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var l0=nW();function Y8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function J9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var m8;class XQ{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(m8===void 0)m8=w9("canvas");m8.width=J.width,m8.height=J.height;let Z=m8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=m8}return Q.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=w9("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let $=Z.getImageData(0,0,J.width,J.height),W=$.data;for(let K=0;K<W.length;K++)W[K]=Y8(W[K]/255)*255;return Z.putImageData($,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(Y8(Q[Z]/255)*255);else Q[Z]=Y8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var iW=0;class w7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iW++}),this.uuid=U9(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},$=this.data;if($!==null){let W;if(Array.isArray($)){W=[];for(let K=0,H=$.length;K<H;K++)if($[K].isDataTexture)W.push(J6($[K].image));else W.push(J6($[K]))}else W=J6($);Z.url=W}if(!Q)J.images[this.uuid]=Z;return Z}}function J6(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return XQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var oW=0;class BJ extends X8{constructor(J=BJ.DEFAULT_IMAGE,Q=BJ.DEFAULT_MAPPING,Z=1001,$=1001,W=1006,K=1008,H=1023,Y=1009,U=BJ.DEFAULT_ANISOTROPY,X=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:oW++}),this.uuid=U9(),this.name="",this.source=new w7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=$,this.magFilter=W,this.minFilter=K,this.anisotropy=U,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new z0(0,0),this.repeat=new z0(1,1),this.center=new z0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new A0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=X,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}BJ.DEFAULT_IMAGE=null;BJ.DEFAULT_MAPPING=300;BJ.DEFAULT_ANISOTROPY=1;class $J{constructor(J=0,Q=0,Z=0,$=1){$J.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=Z,this.w=$}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,$){return this.x=J,this.y=Q,this.z=Z,this.w=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*Z+K[8]*$+K[12]*W,this.y=K[1]*Q+K[5]*Z+K[9]*$+K[13]*W,this.z=K[2]*Q+K[6]*Z+K[10]*$+K[14]*W,this.w=K[3]*Q+K[7]*Z+K[11]*$+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,$,W,K=0.01,H=0.1,Y=J.elements,U=Y[0],X=Y[4],E=Y[8],G=Y[1],N=Y[5],O=Y[9],L=Y[2],M=Y[6],q=Y[10];if(Math.abs(X-G)<0.01&&Math.abs(E-L)<0.01&&Math.abs(O-M)<0.01){if(Math.abs(X+G)<0.1&&Math.abs(E+L)<0.1&&Math.abs(O+M)<0.1&&Math.abs(U+N+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(U+1)/2,z=(N+1)/2,_=(q+1)/2,f=(X+G)/4,I=(E+L)/4,A=(O+M)/4;if(C>z&&C>_)if(C<0.01)Z=0,$=0.707106781,W=0.707106781;else Z=Math.sqrt(C),$=f/Z,W=I/Z;else if(z>_)if(z<0.01)Z=0.707106781,$=0,W=0.707106781;else $=Math.sqrt(z),Z=f/$,W=A/$;else if(_<0.01)Z=0.707106781,$=0.707106781,W=0;else W=Math.sqrt(_),Z=I/W,$=A/W;return this.set(Z,$,W,Q),this}let D=Math.sqrt((M-O)*(M-O)+(E-L)*(E-L)+(G-X)*(G-X));if(Math.abs(D)<0.001)D=1;return this.x=(M-O)/D,this.y=(E-L)/D,this.z=(G-X)/D,this.w=Math.acos((U+N+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this.z=x0(this.z,J.z,Q.z),this.w=x0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this.z=x0(this.z,J,Q),this.w=x0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(x0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UQ extends X8{constructor(J=1,Q=1,Z={}){super();this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=1,this.scissor=new $J(0,0,J,Q),this.scissorTest=!1,this.viewport=new $J(0,0,J,Q);let $={width:J,height:Q,depth:1};Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},Z);let W=new BJ($,Z.mapping,Z.wrapS,Z.wrapT,Z.magFilter,Z.minFilter,Z.format,Z.type,Z.anisotropy,Z.colorSpace);W.flipY=!1,W.generateMipmaps=Z.generateMipmaps,W.internalFormat=Z.internalFormat,this.textures=[];let K=Z.count;for(let H=0;H<K;H++)this.textures[H]=W.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let $=0,W=this.textures.length;$<W;$++)this.textures[$].image.width=J,this.textures[$].image.height=Q,this.textures[$].image.depth=Z;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Z=0,$=J.textures.length;Z<$;Z++)this.textures[Z]=J.textures[Z].clone(),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;let Q=Object.assign({},J.texture.image);if(this.texture.source=new w7(Q),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lJ extends UQ{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class C7 extends BJ{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class GQ extends BJ{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aJ{constructor(J=0,Q=0,Z=0,$=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=$}static slerpFlat(J,Q,Z,$,W,K,H){let Y=Z[$+0],U=Z[$+1],X=Z[$+2],E=Z[$+3],G=W[K+0],N=W[K+1],O=W[K+2],L=W[K+3];if(H===0){J[Q+0]=Y,J[Q+1]=U,J[Q+2]=X,J[Q+3]=E;return}if(H===1){J[Q+0]=G,J[Q+1]=N,J[Q+2]=O,J[Q+3]=L;return}if(E!==L||Y!==G||U!==N||X!==O){let M=1-H,q=Y*G+U*N+X*O+E*L,D=q>=0?1:-1,C=1-q*q;if(C>Number.EPSILON){let _=Math.sqrt(C),f=Math.atan2(_,q*D);M=Math.sin(M*f)/_,H=Math.sin(H*f)/_}let z=H*D;if(Y=Y*M+G*z,U=U*M+N*z,X=X*M+O*z,E=E*M+L*z,M===1-H){let _=1/Math.sqrt(Y*Y+U*U+X*X+E*E);Y*=_,U*=_,X*=_,E*=_}}J[Q]=Y,J[Q+1]=U,J[Q+2]=X,J[Q+3]=E}static multiplyQuaternionsFlat(J,Q,Z,$,W,K){let H=Z[$],Y=Z[$+1],U=Z[$+2],X=Z[$+3],E=W[K],G=W[K+1],N=W[K+2],O=W[K+3];return J[Q]=H*O+X*E+Y*N-U*G,J[Q+1]=Y*O+X*G+U*E-H*N,J[Q+2]=U*O+X*N+H*G-Y*E,J[Q+3]=X*O-H*E-Y*G-U*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,$){return this._x=J,this._y=Q,this._z=Z,this._w=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:$,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,U=H(Z/2),X=H($/2),E=H(W/2),G=Y(Z/2),N=Y($/2),O=Y(W/2);switch(K){case"XYZ":this._x=G*X*E+U*N*O,this._y=U*N*E-G*X*O,this._z=U*X*O+G*N*E,this._w=U*X*E-G*N*O;break;case"YXZ":this._x=G*X*E+U*N*O,this._y=U*N*E-G*X*O,this._z=U*X*O-G*N*E,this._w=U*X*E+G*N*O;break;case"ZXY":this._x=G*X*E-U*N*O,this._y=U*N*E+G*X*O,this._z=U*X*O+G*N*E,this._w=U*X*E-G*N*O;break;case"ZYX":this._x=G*X*E-U*N*O,this._y=U*N*E+G*X*O,this._z=U*X*O-G*N*E,this._w=U*X*E+G*N*O;break;case"YZX":this._x=G*X*E+U*N*O,this._y=U*N*E+G*X*O,this._z=U*X*O-G*N*E,this._w=U*X*E-G*N*O;break;case"XZY":this._x=G*X*E-U*N*O,this._y=U*N*E-G*X*O,this._z=U*X*O+G*N*E,this._w=U*X*E+G*N*O;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,$=Math.sin(Z);return this._x=J.x*$,this._y=J.y*$,this._z=J.z*$,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],$=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],U=Q[2],X=Q[6],E=Q[10],G=Z+H+E;if(G>0){let N=0.5/Math.sqrt(G+1);this._w=0.25/N,this._x=(X-Y)*N,this._y=(W-U)*N,this._z=(K-$)*N}else if(Z>H&&Z>E){let N=2*Math.sqrt(1+Z-H-E);this._w=(X-Y)/N,this._x=0.25*N,this._y=($+K)/N,this._z=(W+U)/N}else if(H>E){let N=2*Math.sqrt(1+H-Z-E);this._w=(W-U)/N,this._x=($+K)/N,this._y=0.25*N,this._z=(Y+X)/N}else{let N=2*Math.sqrt(1+E-Z-H);this._w=(K-$)/N,this._x=(W+U)/N,this._y=(Y+X)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<Number.EPSILON)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(x0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let $=Math.min(1,Q/Z);return this.slerp(J,$),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:$,_z:W,_w:K}=J,H=Q._x,Y=Q._y,U=Q._z,X=Q._w;return this._x=Z*X+K*H+$*U-W*Y,this._y=$*X+K*Y+W*H-Z*U,this._z=W*X+K*U+Z*Y-$*H,this._w=K*X-Z*H-$*Y-W*U,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let Z=this._x,$=this._y,W=this._z,K=this._w,H=K*J._w+Z*J._x+$*J._y+W*J._z;if(H<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,H=-H;else this.copy(J);if(H>=1)return this._w=K,this._x=Z,this._y=$,this._z=W,this;let Y=1-H*H;if(Y<=Number.EPSILON){let N=1-Q;return this._w=N*K+Q*this._w,this._x=N*Z+Q*this._x,this._y=N*$+Q*this._y,this._z=N*W+Q*this._z,this.normalize(),this}let U=Math.sqrt(Y),X=Math.atan2(U,H),E=Math.sin((1-Q)*X)/U,G=Math.sin(Q*X)/U;return this._w=K*E+this._w*G,this._x=Z*E+this._x*G,this._y=$*E+this._y*G,this._z=W*E+this._z*G,this._onChangeCallback(),this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),$=Math.sqrt(1-Z),W=Math.sqrt(Z);return this.set($*Math.sin(J),$*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(J=0,Q=0,Z=0){y.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(HZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(HZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*Z+W[6]*$,this.y=W[1]*Q+W[4]*Z+W[7]*$,this.z=W[2]*Q+W[5]*Z+W[8]*$,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*Z+W[11]*$+W[15]);return this.x=(W[0]*Q+W[4]*Z+W[8]*$+W[12])*K,this.y=(W[1]*Q+W[5]*Z+W[9]*$+W[13])*K,this.z=(W[2]*Q+W[6]*Z+W[10]*$+W[14])*K,this}applyQuaternion(J){let Q=this.x,Z=this.y,$=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,U=2*(K*$-H*Z),X=2*(H*Q-W*$),E=2*(W*Z-K*Q);return this.x=Q+Y*U+K*E-H*X,this.y=Z+Y*X+H*U-W*E,this.z=$+Y*E+W*X-K*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*$,this.y=W[1]*Q+W[5]*Z+W[9]*$,this.z=W[2]*Q+W[6]*Z+W[10]*$,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this.z=x0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this.z=x0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(x0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:$,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=$*Y-W*H,this.y=W*K-Z*Y,this.z=Z*H-$*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return Q6.copy(this).projectOnVector(J),this.sub(Q6)}reflect(J){return this.sub(Q6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(x0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,$=this.z-J.z;return Q*Q+Z*Z+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let $=Math.sin(Q)*J;return this.x=$*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=$*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),$=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=$,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Q6=new y,HZ=new aJ;class S8{constructor(J=new y(1/0,1/0,1/0),Q=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(xJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(xJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=xJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let W=Z.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,xJ);else xJ.fromBufferAttribute(W,K);xJ.applyMatrix4(J.matrixWorld),this.expandByPoint(xJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();u9.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();u9.copy(Z.boundingBox)}u9.applyMatrix4(J.matrixWorld),this.union(u9)}}let $=J.children;for(let W=0,K=$.length;W<K;W++)this.expandByObject($[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,xJ),xJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(M9),c9.subVectors(this.max,M9),l8.subVectors(J.a,M9),d8.subVectors(J.b,M9),u8.subVectors(J.c,M9),U8.subVectors(d8,l8),G8.subVectors(u8,d8),z8.subVectors(l8,u8);let Q=[0,-U8.z,U8.y,0,-G8.z,G8.y,0,-z8.z,z8.y,U8.z,0,-U8.x,G8.z,0,-G8.x,z8.z,0,-z8.x,-U8.y,U8.x,0,-G8.y,G8.x,0,-z8.y,z8.x,0];if(!Z6(Q,l8,d8,u8,c9))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!Z6(Q,l8,d8,u8,c9))return!1;return s9.crossVectors(U8,G8),Q=[s9.x,s9.y,s9.z],Z6(Q,l8,d8,u8,c9)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,xJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(xJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return J8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),J8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),J8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),J8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),J8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),J8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),J8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),J8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(J8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var J8=[new y,new y,new y,new y,new y,new y,new y,new y],xJ=new y,u9=new S8,l8=new y,d8=new y,u8=new y,U8=new y,G8=new y,z8=new y,M9=new y,c9=new y,s9=new y,B8=new y;function Z6(J,Q,Z,$,W){for(let K=0,H=J.length-3;K<=H;K+=3){B8.fromArray(J,K);let Y=W.x*Math.abs(B8.x)+W.y*Math.abs(B8.y)+W.z*Math.abs(B8.z),U=Q.dot(B8),X=Z.dot(B8),E=$.dot(B8);if(Math.max(-Math.max(U,X,E),Math.min(U,X,E))>Y)return!1}return!0}var aW=new S8,V9=new y,$6=new y;class y9{constructor(J=new y,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else aW.setFromPoints(J).getCenter(Z);let $=0;for(let W=0,K=J.length;W<K;W++)$=Math.max($,Z.distanceToSquared(J[W]));return this.radius=Math.sqrt($),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;V9.subVectors(J,this.center);let Q=V9.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),$=(Z-this.radius)*0.5;this.center.addScaledVector(V9,$/Z),this.radius+=$}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else $6.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(V9.copy(J.center).add($6)),this.expandByPoint(V9.copy(J.center).sub($6));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Q8=new y,W6=new y,n9=new y,E8=new y,K6=new y,i9=new y,Y6=new y;class EQ{constructor(J=new y,Q=new y(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Q8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=Q8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return Q8.copy(this.origin).addScaledVector(this.direction,Q),Q8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,$){W6.copy(J).add(Q).multiplyScalar(0.5),n9.copy(Q).sub(J).normalize(),E8.copy(this.origin).sub(W6);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(n9),H=E8.dot(this.direction),Y=-E8.dot(n9),U=E8.lengthSq(),X=Math.abs(1-K*K),E,G,N,O;if(X>0)if(E=K*Y-H,G=K*H-Y,O=W*X,E>=0)if(G>=-O)if(G<=O){let L=1/X;E*=L,G*=L,N=E*(E+K*G+2*H)+G*(K*E+G+2*Y)+U}else G=W,E=Math.max(0,-(K*G+H)),N=-E*E+G*(G+2*Y)+U;else G=-W,E=Math.max(0,-(K*G+H)),N=-E*E+G*(G+2*Y)+U;else if(G<=-O)E=Math.max(0,-(-K*W+H)),G=E>0?-W:Math.min(Math.max(-W,-Y),W),N=-E*E+G*(G+2*Y)+U;else if(G<=O)E=0,G=Math.min(Math.max(-W,-Y),W),N=G*(G+2*Y)+U;else E=Math.max(0,-(K*W+H)),G=E>0?W:Math.min(Math.max(-W,-Y),W),N=-E*E+G*(G+2*Y)+U;else G=K>0?-W:W,E=Math.max(0,-(K*G+H)),N=-E*E+G*(G+2*Y)+U;if(Z)Z.copy(this.origin).addScaledVector(this.direction,E);if($)$.copy(W6).addScaledVector(n9,G);return N}intersectSphere(J,Q){Q8.subVectors(J.center,this.origin);let Z=Q8.dot(this.direction),$=Q8.dot(Q8)-Z*Z,W=J.radius*J.radius;if($>W)return null;let K=Math.sqrt(W-$),H=Z-K,Y=Z+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,$,W,K,H,Y,U=1/this.direction.x,X=1/this.direction.y,E=1/this.direction.z,G=this.origin;if(U>=0)Z=(J.min.x-G.x)*U,$=(J.max.x-G.x)*U;else Z=(J.max.x-G.x)*U,$=(J.min.x-G.x)*U;if(X>=0)W=(J.min.y-G.y)*X,K=(J.max.y-G.y)*X;else W=(J.max.y-G.y)*X,K=(J.min.y-G.y)*X;if(Z>K||W>$)return null;if(W>Z||isNaN(Z))Z=W;if(K<$||isNaN($))$=K;if(E>=0)H=(J.min.z-G.z)*E,Y=(J.max.z-G.z)*E;else H=(J.max.z-G.z)*E,Y=(J.min.z-G.z)*E;if(Z>Y||H>$)return null;if(H>Z||Z!==Z)Z=H;if(Y<$||$!==$)$=Y;if($<0)return null;return this.at(Z>=0?Z:$,Q)}intersectsBox(J){return this.intersectBox(J,Q8)!==null}intersectTriangle(J,Q,Z,$,W){K6.subVectors(Q,J),i9.subVectors(Z,J),Y6.crossVectors(K6,i9);let K=this.direction.dot(Y6),H;if(K>0){if($)return null;H=1}else if(K<0)H=-1,K=-K;else return null;E8.subVectors(this.origin,J);let Y=H*this.direction.dot(i9.crossVectors(E8,i9));if(Y<0)return null;let U=H*this.direction.dot(K6.cross(E8));if(U<0)return null;if(Y+U>K)return null;let X=-H*E8.dot(Y6);if(X<0)return null;return this.at(X/K,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ZJ{constructor(J,Q,Z,$,W,K,H,Y,U,X,E,G,N,O,L,M){if(ZJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,K,H,Y,U,X,E,G,N,O,L,M)}set(J,Q,Z,$,W,K,H,Y,U,X,E,G,N,O,L,M){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=Z,q[12]=$,q[1]=W,q[5]=K,q[9]=H,q[13]=Y,q[2]=U,q[6]=X,q[10]=E,q[14]=G,q[3]=N,q[7]=O,q[11]=L,q[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ZJ().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,Z=J.elements,$=1/c8.setFromMatrixColumn(J,0).length(),W=1/c8.setFromMatrixColumn(J,1).length(),K=1/c8.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*$,Q[1]=Z[1]*$,Q[2]=Z[2]*$,Q[3]=0,Q[4]=Z[4]*W,Q[5]=Z[5]*W,Q[6]=Z[6]*W,Q[7]=0,Q[8]=Z[8]*K,Q[9]=Z[9]*K,Q[10]=Z[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z,K=Math.cos(Z),H=Math.sin(Z),Y=Math.cos($),U=Math.sin($),X=Math.cos(W),E=Math.sin(W);if(J.order==="XYZ"){let G=K*X,N=K*E,O=H*X,L=H*E;Q[0]=Y*X,Q[4]=-Y*E,Q[8]=U,Q[1]=N+O*U,Q[5]=G-L*U,Q[9]=-H*Y,Q[2]=L-G*U,Q[6]=O+N*U,Q[10]=K*Y}else if(J.order==="YXZ"){let G=Y*X,N=Y*E,O=U*X,L=U*E;Q[0]=G+L*H,Q[4]=O*H-N,Q[8]=K*U,Q[1]=K*E,Q[5]=K*X,Q[9]=-H,Q[2]=N*H-O,Q[6]=L+G*H,Q[10]=K*Y}else if(J.order==="ZXY"){let G=Y*X,N=Y*E,O=U*X,L=U*E;Q[0]=G-L*H,Q[4]=-K*E,Q[8]=O+N*H,Q[1]=N+O*H,Q[5]=K*X,Q[9]=L-G*H,Q[2]=-K*U,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let G=K*X,N=K*E,O=H*X,L=H*E;Q[0]=Y*X,Q[4]=O*U-N,Q[8]=G*U+L,Q[1]=Y*E,Q[5]=L*U+G,Q[9]=N*U-O,Q[2]=-U,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let G=K*Y,N=K*U,O=H*Y,L=H*U;Q[0]=Y*X,Q[4]=L-G*E,Q[8]=O*E+N,Q[1]=E,Q[5]=K*X,Q[9]=-H*X,Q[2]=-U*X,Q[6]=N*E+O,Q[10]=G-L*E}else if(J.order==="XZY"){let G=K*Y,N=K*U,O=H*Y,L=H*U;Q[0]=Y*X,Q[4]=-E,Q[8]=U*X,Q[1]=G*E+L,Q[5]=K*X,Q[9]=N*E-O,Q[2]=O*E-N,Q[6]=H*X,Q[10]=L*E+G}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(rW,J,tW)}lookAt(J,Q,Z){let $=this.elements;if(_J.subVectors(J,Q),_J.lengthSq()===0)_J.z=1;if(_J.normalize(),N8.crossVectors(Z,_J),N8.lengthSq()===0){if(Math.abs(Z.z)===1)_J.x+=0.0001;else _J.z+=0.0001;_J.normalize(),N8.crossVectors(Z,_J)}return N8.normalize(),o9.crossVectors(_J,N8),$[0]=N8.x,$[4]=o9.x,$[8]=_J.x,$[1]=N8.y,$[5]=o9.y,$[9]=_J.y,$[2]=N8.z,$[6]=o9.z,$[10]=_J.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,K=Z[0],H=Z[4],Y=Z[8],U=Z[12],X=Z[1],E=Z[5],G=Z[9],N=Z[13],O=Z[2],L=Z[6],M=Z[10],q=Z[14],D=Z[3],C=Z[7],z=Z[11],_=Z[15],f=$[0],I=$[4],A=$[8],l=$[12],k=$[1],V=$[5],j=$[9],x=$[13],u=$[2],d=$[6],a=$[10],p=$[14],t=$[3],g=$[7],H0=$[11],U0=$[15];return W[0]=K*f+H*k+Y*u+U*t,W[4]=K*I+H*V+Y*d+U*g,W[8]=K*A+H*j+Y*a+U*H0,W[12]=K*l+H*x+Y*p+U*U0,W[1]=X*f+E*k+G*u+N*t,W[5]=X*I+E*V+G*d+N*g,W[9]=X*A+E*j+G*a+N*H0,W[13]=X*l+E*x+G*p+N*U0,W[2]=O*f+L*k+M*u+q*t,W[6]=O*I+L*V+M*d+q*g,W[10]=O*A+L*j+M*a+q*H0,W[14]=O*l+L*x+M*p+q*U0,W[3]=D*f+C*k+z*u+_*t,W[7]=D*I+C*V+z*d+_*g,W[11]=D*A+C*j+z*a+_*H0,W[15]=D*l+C*x+z*p+_*U0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],$=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],U=J[13],X=J[2],E=J[6],G=J[10],N=J[14],O=J[3],L=J[7],M=J[11],q=J[15];return O*(+W*Y*E-$*U*E-W*H*G+Z*U*G+$*H*N-Z*Y*N)+L*(+Q*Y*N-Q*U*G+W*K*G-$*K*N+$*U*X-W*Y*X)+M*(+Q*U*E-Q*H*N-W*K*E+Z*K*N+W*H*X-Z*U*X)+q*(-$*H*X-Q*Y*E+Q*H*G+$*K*E-Z*K*G+Z*Y*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let $=this.elements;if(J.isVector3)$[12]=J.x,$[13]=J.y,$[14]=J.z;else $[12]=J,$[13]=Q,$[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],U=J[7],X=J[8],E=J[9],G=J[10],N=J[11],O=J[12],L=J[13],M=J[14],q=J[15],D=E*M*U-L*G*U+L*Y*N-H*M*N-E*Y*q+H*G*q,C=O*G*U-X*M*U-O*Y*N+K*M*N+X*Y*q-K*G*q,z=X*L*U-O*E*U+O*H*N-K*L*N-X*H*q+K*E*q,_=O*E*Y-X*L*Y-O*H*G+K*L*G+X*H*M-K*E*M,f=Q*D+Z*C+$*z+W*_;if(f===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/f;return J[0]=D*I,J[1]=(L*G*W-E*M*W-L*$*N+Z*M*N+E*$*q-Z*G*q)*I,J[2]=(H*M*W-L*Y*W+L*$*U-Z*M*U-H*$*q+Z*Y*q)*I,J[3]=(E*Y*W-H*G*W-E*$*U+Z*G*U+H*$*N-Z*Y*N)*I,J[4]=C*I,J[5]=(X*M*W-O*G*W+O*$*N-Q*M*N-X*$*q+Q*G*q)*I,J[6]=(O*Y*W-K*M*W-O*$*U+Q*M*U+K*$*q-Q*Y*q)*I,J[7]=(K*G*W-X*Y*W+X*$*U-Q*G*U-K*$*N+Q*Y*N)*I,J[8]=z*I,J[9]=(O*E*W-X*L*W-O*Z*N+Q*L*N+X*Z*q-Q*E*q)*I,J[10]=(K*L*W-O*H*W+O*Z*U-Q*L*U-K*Z*q+Q*H*q)*I,J[11]=(X*H*W-K*E*W-X*Z*U+Q*E*U+K*Z*N-Q*H*N)*I,J[12]=_*I,J[13]=(X*L*$-O*E*$+O*Z*G-Q*L*G-X*Z*M+Q*E*M)*I,J[14]=(O*H*$-K*L*$-O*Z*Y+Q*L*Y+K*Z*M-Q*H*M)*I,J[15]=(K*E*$-X*H*$+X*Z*Y-Q*E*Y-K*Z*G+Q*H*G)*I,this}scale(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z;return Q[0]*=Z,Q[4]*=$,Q[8]*=W,Q[1]*=Z,Q[5]*=$,Q[9]*=W,Q[2]*=Z,Q[6]*=$,Q[10]*=W,Q[3]*=Z,Q[7]*=$,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],$=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,$))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=1-Z,K=J.x,H=J.y,Y=J.z,U=W*K,X=W*H;return this.set(U*K+Z,U*H-$*Y,U*Y+$*H,0,U*H+$*Y,X*H+Z,X*Y-$*K,0,U*Y-$*H,X*Y+$*K,W*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,$,W,K){return this.set(1,Z,W,0,J,1,K,0,Q,$,1,0,0,0,0,1),this}compose(J,Q,Z){let $=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,U=W+W,X=K+K,E=H+H,G=W*U,N=W*X,O=W*E,L=K*X,M=K*E,q=H*E,D=Y*U,C=Y*X,z=Y*E,_=Z.x,f=Z.y,I=Z.z;return $[0]=(1-(L+q))*_,$[1]=(N+z)*_,$[2]=(O-C)*_,$[3]=0,$[4]=(N-z)*f,$[5]=(1-(G+q))*f,$[6]=(M+D)*f,$[7]=0,$[8]=(O+C)*I,$[9]=(M-D)*I,$[10]=(1-(G+L))*I,$[11]=0,$[12]=J.x,$[13]=J.y,$[14]=J.z,$[15]=1,this}decompose(J,Q,Z){let $=this.elements,W=c8.set($[0],$[1],$[2]).length(),K=c8.set($[4],$[5],$[6]).length(),H=c8.set($[8],$[9],$[10]).length();if(this.determinant()<0)W=-W;J.x=$[12],J.y=$[13],J.z=$[14],gJ.copy(this);let U=1/W,X=1/K,E=1/H;return gJ.elements[0]*=U,gJ.elements[1]*=U,gJ.elements[2]*=U,gJ.elements[4]*=X,gJ.elements[5]*=X,gJ.elements[6]*=X,gJ.elements[8]*=E,gJ.elements[9]*=E,gJ.elements[10]*=E,Q.setFromRotationMatrix(gJ),Z.x=W,Z.y=K,Z.z=H,this}makePerspective(J,Q,Z,$,W,K,H=2000){let Y=this.elements,U=2*W/(Q-J),X=2*W/(Z-$),E=(Q+J)/(Q-J),G=(Z+$)/(Z-$),N,O;if(H===2000)N=-(K+W)/(K-W),O=-2*K*W/(K-W);else if(H===2001)N=-K/(K-W),O=-K*W/(K-W);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return Y[0]=U,Y[4]=0,Y[8]=E,Y[12]=0,Y[1]=0,Y[5]=X,Y[9]=G,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=N,Y[14]=O,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic(J,Q,Z,$,W,K,H=2000){let Y=this.elements,U=1/(Q-J),X=1/(Z-$),E=1/(K-W),G=(Q+J)*U,N=(Z+$)*X,O,L;if(H===2000)O=(K+W)*E,L=-2*E;else if(H===2001)O=W*E,L=-1*E;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return Y[0]=2*U,Y[4]=0,Y[8]=0,Y[12]=-G,Y[1]=0,Y[5]=2*X,Y[9]=0,Y[13]=-N,Y[2]=0,Y[6]=0,Y[10]=L,Y[14]=-O,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<16;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var c8=new y,gJ=new ZJ,rW=new y(0,0,0),tW=new y(1,1,1),N8=new y,o9=new y,_J=new y,XZ=new ZJ,UZ=new aJ;class mJ{constructor(J=0,Q=0,Z=0,$=mJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=$}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,$=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let $=J.elements,W=$[0],K=$[4],H=$[8],Y=$[1],U=$[5],X=$[9],E=$[2],G=$[6],N=$[10];switch(Q){case"XYZ":if(this._y=Math.asin(x0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-X,N),this._z=Math.atan2(-K,W);else this._x=Math.atan2(G,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-x0(X,-1,1)),Math.abs(X)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-E,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(x0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-E,N),this._z=Math.atan2(-K,U);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-x0(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(G,N),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,U);break;case"YZX":if(this._z=Math.asin(x0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-X,U),this._y=Math.atan2(-E,W);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-x0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(G,U),this._y=Math.atan2(H,W);else this._x=Math.atan2(-X,N),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return XZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(XZ,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return UZ.setFromEuler(this),this.setFromQuaternion(UZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mJ.DEFAULT_ORDER="XYZ";class _7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var eW=0,GZ=new y,s8=new aJ,Z8=new ZJ,a9=new y,L9=new y,JK=new y,QK=new aJ,EZ=new y(1,0,0),NZ=new y(0,1,0),qZ=new y(0,0,1),DZ={type:"added"},ZK={type:"removed"},n8={type:"childadded",child:null},H6={type:"childremoved",child:null};class RJ extends X8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:eW++}),this.uuid=U9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=RJ.DEFAULT_UP.clone();let J=new y,Q=new mJ,Z=new aJ,$=new y(1,1,1);function W(){Z.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange(W),Z._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:$},modelViewMatrix:{value:new ZJ},normalMatrix:{value:new A0}}),this.matrix=new ZJ,this.matrixWorld=new ZJ,this.matrixAutoUpdate=RJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=RJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return s8.setFromAxisAngle(J,Q),this.quaternion.multiply(s8),this}rotateOnWorldAxis(J,Q){return s8.setFromAxisAngle(J,Q),this.quaternion.premultiply(s8),this}rotateX(J){return this.rotateOnAxis(EZ,J)}rotateY(J){return this.rotateOnAxis(NZ,J)}rotateZ(J){return this.rotateOnAxis(qZ,J)}translateOnAxis(J,Q){return GZ.copy(J).applyQuaternion(this.quaternion),this.position.add(GZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(EZ,J)}translateY(J){return this.translateOnAxis(NZ,J)}translateZ(J){return this.translateOnAxis(qZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(Z8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)a9.copy(J);else a9.set(J,Q,Z);let $=this.parent;if(this.updateWorldMatrix(!0,!1),L9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Z8.lookAt(L9,a9,this.up);else Z8.lookAt(a9,L9,this.up);if(this.quaternion.setFromRotationMatrix(Z8),$)Z8.extractRotation($.matrixWorld),s8.setFromRotationMatrix(Z8),this.quaternion.premultiply(s8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(DZ),n8.child=J,this.dispatchEvent(n8),n8.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(ZK),H6.child=J,this.dispatchEvent(H6),H6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),Z8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),Z8.multiply(J.parent.matrixWorld);return J.applyMatrix4(Z8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(DZ),n8.child=J,this.dispatchEvent(n8),n8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,$=this.children.length;Z<$;Z++){let K=this.children[Z].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let $=this.children;for(let W=0,K=$.length;W<K;W++)$[W].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(L9,J,JK),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(L9,QK,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let $=this.children;for(let W=0,K=$.length;W<K;W++)$[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let $={};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.castShadow===!0)$.castShadow=!0;if(this.receiveShadow===!0)$.receiveShadow=!0;if(this.visible===!1)$.visible=!1;if(this.frustumCulled===!1)$.frustumCulled=!1;if(this.renderOrder!==0)$.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)$.userData=this.userData;if($.layers=this.layers.mask,$.matrix=this.matrix.toArray(),$.up=this.up.toArray(),this.matrixAutoUpdate===!1)$.matrixAutoUpdate=!1;if(this.isInstancedMesh){if($.type="InstancedMesh",$.count=this.count,$.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)$.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if($.type="BatchedMesh",$.perObjectFrustumCulled=this.perObjectFrustumCulled,$.sortObjects=this.sortObjects,$.drawRanges=this._drawRanges,$.reservedRanges=this._reservedRanges,$.visibility=this._visibility,$.active=this._active,$.bounds=this._bounds.map((H)=>({boxInitialized:H.boxInitialized,boxMin:H.box.min.toArray(),boxMax:H.box.max.toArray(),sphereInitialized:H.sphereInitialized,sphereRadius:H.sphere.radius,sphereCenter:H.sphere.center.toArray()})),$.maxInstanceCount=this._maxInstanceCount,$.maxVertexCount=this._maxVertexCount,$.maxIndexCount=this._maxIndexCount,$.geometryInitialized=this._geometryInitialized,$.geometryCount=this._geometryCount,$.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)$.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)$.boundingSphere={center:$.boundingSphere.center.toArray(),radius:$.boundingSphere.radius};if(this.boundingBox!==null)$.boundingBox={min:$.boundingBox.min.toArray(),max:$.boundingBox.max.toArray()}}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)$.background=this.background.toJSON();else if(this.background.isTexture)$.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)$.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){$.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let U=0,X=Y.length;U<X;U++){let E=Y[U];W(J.shapes,E)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if($.bindMode=this.bindMode,$.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),$.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,U=this.material.length;Y<U;Y++)H.push(W(J.materials,this.material[Y]));$.material=H}else $.material=W(J.materials,this.material);if(this.children.length>0){$.children=[];for(let H=0;H<this.children.length;H++)$.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){$.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];$.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),U=K(J.textures),X=K(J.images),E=K(J.shapes),G=K(J.skeletons),N=K(J.animations),O=K(J.nodes);if(H.length>0)Z.geometries=H;if(Y.length>0)Z.materials=Y;if(U.length>0)Z.textures=U;if(X.length>0)Z.images=X;if(E.length>0)Z.shapes=E;if(G.length>0)Z.skeletons=G;if(N.length>0)Z.animations=N;if(O.length>0)Z.nodes=O}return Z.object=$,Z;function K(H){let Y=[];for(let U in H){let X=H[U];delete X.metadata,Y.push(X)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let $=J.children[Z];this.add($.clone())}return this}}RJ.DEFAULT_UP=new y(0,1,0);RJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;RJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pJ=new y,$8=new y,X6=new y,W8=new y,i8=new y,o8=new y,OZ=new y,U6=new y,G6=new y,E6=new y,N6=new $J,q6=new $J,D6=new $J;class vJ{constructor(J=new y,Q=new y,Z=new y){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,$){$.subVectors(Z,Q),pJ.subVectors(J,Q),$.cross(pJ);let W=$.lengthSq();if(W>0)return $.multiplyScalar(1/Math.sqrt(W));return $.set(0,0,0)}static getBarycoord(J,Q,Z,$,W){pJ.subVectors($,Q),$8.subVectors(Z,Q),X6.subVectors(J,Q);let K=pJ.dot(pJ),H=pJ.dot($8),Y=pJ.dot(X6),U=$8.dot($8),X=$8.dot(X6),E=K*U-H*H;if(E===0)return W.set(0,0,0),null;let G=1/E,N=(U*Y-H*X)*G,O=(K*X-H*Y)*G;return W.set(1-N-O,O,N)}static containsPoint(J,Q,Z,$){if(this.getBarycoord(J,Q,Z,$,W8)===null)return!1;return W8.x>=0&&W8.y>=0&&W8.x+W8.y<=1}static getInterpolation(J,Q,Z,$,W,K,H,Y){if(this.getBarycoord(J,Q,Z,$,W8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,W8.x),Y.addScaledVector(K,W8.y),Y.addScaledVector(H,W8.z),Y}static getInterpolatedAttribute(J,Q,Z,$,W,K){return N6.setScalar(0),q6.setScalar(0),D6.setScalar(0),N6.fromBufferAttribute(J,Q),q6.fromBufferAttribute(J,Z),D6.fromBufferAttribute(J,$),K.setScalar(0),K.addScaledVector(N6,W.x),K.addScaledVector(q6,W.y),K.addScaledVector(D6,W.z),K}static isFrontFacing(J,Q,Z,$){return pJ.subVectors(Z,Q),$8.subVectors(J,Q),pJ.cross($8).dot($)<0?!0:!1}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,$){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[$]),this}setFromAttributeAndIndices(J,Q,Z,$){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,$),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return pJ.subVectors(this.c,this.b),$8.subVectors(this.a,this.b),pJ.cross($8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return vJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return vJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,$,W){return vJ.getInterpolation(J,this.a,this.b,this.c,Q,Z,$,W)}containsPoint(J){return vJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return vJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,$=this.b,W=this.c,K,H;i8.subVectors($,Z),o8.subVectors(W,Z),U6.subVectors(J,Z);let Y=i8.dot(U6),U=o8.dot(U6);if(Y<=0&&U<=0)return Q.copy(Z);G6.subVectors(J,$);let X=i8.dot(G6),E=o8.dot(G6);if(X>=0&&E<=X)return Q.copy($);let G=Y*E-X*U;if(G<=0&&Y>=0&&X<=0)return K=Y/(Y-X),Q.copy(Z).addScaledVector(i8,K);E6.subVectors(J,W);let N=i8.dot(E6),O=o8.dot(E6);if(O>=0&&N<=O)return Q.copy(W);let L=N*U-Y*O;if(L<=0&&U>=0&&O<=0)return H=U/(U-O),Q.copy(Z).addScaledVector(o8,H);let M=X*O-N*E;if(M<=0&&E-X>=0&&N-O>=0)return OZ.subVectors(W,$),H=(E-X)/(E-X+(N-O)),Q.copy($).addScaledVector(OZ,H);let q=1/(M+L+G);return K=L*q,H=G*q,Q.copy(Z).addScaledVector(i8,K).addScaledVector(o8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var v$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},q8={h:0,s:0,l:0},r9={h:0,s:0,l:0};function O6(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class v0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let $=J;if($&&$.isColor)this.copy($);else if(typeof $==="number")this.setHex($);else if(typeof $==="string")this.setStyle($)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,l0.toWorkingColorSpace(this,Q),this}setRGB(J,Q,Z,$=l0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,l0.toWorkingColorSpace(this,$),this}setHSL(J,Q,Z,$=l0.workingColorSpace){if(J=YQ(J,1),Q=x0(Q,0,1),Z=x0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let W=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,K=2*Z-W;this.r=O6(K,W,J+0.3333333333333333),this.g=O6(K,W,J),this.b=O6(K,W,J-0.3333333333333333)}return l0.toWorkingColorSpace(this,$),this}setStyle(J,Q="srgb"){function Z(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let $;if($=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=$[1],H=$[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return Z(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return Z(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return Z(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if($=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=$[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=v$[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=Y8(J.r),this.g=Y8(J.g),this.b=Y8(J.b),this}copyLinearToSRGB(J){return this.r=J9(J.r),this.g=J9(J.g),this.b=J9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return l0.fromWorkingColorSpace(kJ.copy(this),J),Math.round(x0(kJ.r*255,0,255))*65536+Math.round(x0(kJ.g*255,0,255))*256+Math.round(x0(kJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=l0.workingColorSpace){l0.fromWorkingColorSpace(kJ.copy(this),Q);let{r:Z,g:$,b:W}=kJ,K=Math.max(Z,$,W),H=Math.min(Z,$,W),Y,U,X=(H+K)/2;if(H===K)Y=0,U=0;else{let E=K-H;switch(U=X<=0.5?E/(K+H):E/(2-K-H),K){case Z:Y=($-W)/E+($<W?6:0);break;case $:Y=(W-Z)/E+2;break;case W:Y=(Z-$)/E+4;break}Y/=6}return J.h=Y,J.s=U,J.l=X,J}getRGB(J,Q=l0.workingColorSpace){return l0.fromWorkingColorSpace(kJ.copy(this),Q),J.r=kJ.r,J.g=kJ.g,J.b=kJ.b,J}getStyle(J="srgb"){l0.fromWorkingColorSpace(kJ.copy(this),J);let{r:Q,g:Z,b:$}=kJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${$.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round($*255)})`}offsetHSL(J,Q,Z){return this.getHSL(q8),this.setHSL(q8.h+J,q8.s+Q,q8.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(q8),J.getHSL(r9);let Z=I9(q8.h,r9.h,Q),$=I9(q8.s,r9.s,Q),W=I9(q8.l,r9.l,Q);return this.setHSL(Z,$,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,$=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*Z+W[6]*$,this.g=W[1]*Q+W[4]*Z+W[7]*$,this.b=W[2]*Q+W[5]*Z+W[8]*$,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var kJ=new v0;v0.NAMES=v$;var $K=0;class j8 extends X8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:$K++}),this.uuid=U9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new v0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if($&&$.isColor)$.set(Z);else if($&&$.isVector3&&(Z&&Z.isVector3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function $(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=$(J.textures),K=$(J.images);if(W.length>0)Z.textures=W;if(K.length>0)Z.images=K}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let $=Q.length;Z=new Array($);for(let W=0;W!==$;++W)Z[W]=Q[W].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class G9 extends j8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new v0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var XJ=new y,t9=new z0,WK=0;class fJ{constructor(J,Q,Z=!1){if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WK++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let $=0,W=this.itemSize;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)t9.fromBufferAttribute(this,Q),t9.applyMatrix3(J),this.setXY(Q,t9.x,t9.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyMatrix3(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyMatrix4(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyNormalMatrix(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)XJ.fromBufferAttribute(this,Q),XJ.transformDirection(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=e8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=LJ(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=e8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=e8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=e8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=e8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),Z=LJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),Z=LJ(Z,this.array),$=LJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),Z=LJ(Z,this.array),$=LJ($,this.array),W=LJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class A7 extends fJ{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class P7 extends fJ{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class bJ extends fJ{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var KK=0,yJ=new ZJ,R6=new RJ,a8=new y,AJ=new S8,z9=new S8,EJ=new y;class rJ extends X8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KK++}),this.uuid=U9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((HQ(J))?P7:A7)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let W=new A0().getNormalMatrix(J);Z.applyNormalMatrix(W),Z.needsUpdate=!0}let $=this.attributes.tangent;if($!==void 0)$.transformDirection(J),$.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return yJ.makeRotationFromQuaternion(J),this.applyMatrix4(yJ),this}rotateX(J){return yJ.makeRotationX(J),this.applyMatrix4(yJ),this}rotateY(J){return yJ.makeRotationY(J),this.applyMatrix4(yJ),this}rotateZ(J){return yJ.makeRotationZ(J),this.applyMatrix4(yJ),this}translate(J,Q,Z){return yJ.makeTranslation(J,Q,Z),this.applyMatrix4(yJ),this}scale(J,Q,Z){return yJ.makeScale(J,Q,Z),this.applyMatrix4(yJ),this}lookAt(J){return R6.lookAt(J),R6.updateMatrix(),this.applyMatrix4(R6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(a8).negate(),this.translate(a8.x,a8.y,a8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let $=0,W=J.length;$<W;$++){let K=J[$];Z.push(K.x,K.y,K.z||0)}this.setAttribute("position",new bJ(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let $=0;$<Z;$++){let W=J[$];Q.setXYZ($,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new S8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(AJ.setFromBufferAttribute(W),this.morphTargetsRelative)EJ.addVectors(this.boundingBox.min,AJ.min),this.boundingBox.expandByPoint(EJ),EJ.addVectors(this.boundingBox.max,AJ.max),this.boundingBox.expandByPoint(EJ);else this.boundingBox.expandByPoint(AJ.min),this.boundingBox.expandByPoint(AJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new y9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(J){let Z=this.boundingSphere.center;if(AJ.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(z9.setFromBufferAttribute(H),this.morphTargetsRelative)EJ.addVectors(AJ.min,z9.min),AJ.expandByPoint(EJ),EJ.addVectors(AJ.max,z9.max),AJ.expandByPoint(EJ);else AJ.expandByPoint(z9.min),AJ.expandByPoint(z9.max)}AJ.getCenter(Z);let $=0;for(let W=0,K=J.count;W<K;W++)EJ.fromBufferAttribute(J,W),$=Math.max($,Z.distanceToSquared(EJ));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let U=0,X=H.count;U<X;U++){if(EJ.fromBufferAttribute(H,U),Y)a8.fromBufferAttribute(J,U),EJ.add(a8);$=Math.max($,Z.distanceToSquared(EJ))}}if(this.boundingSphere.radius=Math.sqrt($),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:$,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new fJ(new Float32Array(4*Z.count),4));let K=this.getAttribute("tangent"),H=[],Y=[];for(let A=0;A<Z.count;A++)H[A]=new y,Y[A]=new y;let U=new y,X=new y,E=new y,G=new z0,N=new z0,O=new z0,L=new y,M=new y;function q(A,l,k){U.fromBufferAttribute(Z,A),X.fromBufferAttribute(Z,l),E.fromBufferAttribute(Z,k),G.fromBufferAttribute(W,A),N.fromBufferAttribute(W,l),O.fromBufferAttribute(W,k),X.sub(U),E.sub(U),N.sub(G),O.sub(G);let V=1/(N.x*O.y-O.x*N.y);if(!isFinite(V))return;L.copy(X).multiplyScalar(O.y).addScaledVector(E,-N.y).multiplyScalar(V),M.copy(E).multiplyScalar(N.x).addScaledVector(X,-O.x).multiplyScalar(V),H[A].add(L),H[l].add(L),H[k].add(L),Y[A].add(M),Y[l].add(M),Y[k].add(M)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let A=0,l=D.length;A<l;++A){let k=D[A],V=k.start,j=k.count;for(let x=V,u=V+j;x<u;x+=3)q(J.getX(x+0),J.getX(x+1),J.getX(x+2))}let C=new y,z=new y,_=new y,f=new y;function I(A){_.fromBufferAttribute($,A),f.copy(_);let l=H[A];C.copy(l),C.sub(_.multiplyScalar(_.dot(l))).normalize(),z.crossVectors(f,l);let V=z.dot(Y[A])<0?-1:1;K.setXYZW(A,C.x,C.y,C.z,V)}for(let A=0,l=D.length;A<l;++A){let k=D[A],V=k.start,j=k.count;for(let x=V,u=V+j;x<u;x+=3)I(J.getX(x+0)),I(J.getX(x+1)),I(J.getX(x+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new fJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let G=0,N=Z.count;G<N;G++)Z.setXYZ(G,0,0,0);let $=new y,W=new y,K=new y,H=new y,Y=new y,U=new y,X=new y,E=new y;if(J)for(let G=0,N=J.count;G<N;G+=3){let O=J.getX(G+0),L=J.getX(G+1),M=J.getX(G+2);$.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,L),K.fromBufferAttribute(Q,M),X.subVectors(K,W),E.subVectors($,W),X.cross(E),H.fromBufferAttribute(Z,O),Y.fromBufferAttribute(Z,L),U.fromBufferAttribute(Z,M),H.add(X),Y.add(X),U.add(X),Z.setXYZ(O,H.x,H.y,H.z),Z.setXYZ(L,Y.x,Y.y,Y.z),Z.setXYZ(M,U.x,U.y,U.z)}else for(let G=0,N=Q.count;G<N;G+=3)$.fromBufferAttribute(Q,G+0),W.fromBufferAttribute(Q,G+1),K.fromBufferAttribute(Q,G+2),X.subVectors(K,W),E.subVectors($,W),X.cross(E),Z.setXYZ(G+0,X.x,X.y,X.z),Z.setXYZ(G+1,X.x,X.y,X.z),Z.setXYZ(G+2,X.x,X.y,X.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)EJ.fromBufferAttribute(J,Q),EJ.normalize(),J.setXYZ(Q,EJ.x,EJ.y,EJ.z)}toNonIndexed(){function J(H,Y){let{array:U,itemSize:X,normalized:E}=H,G=new U.constructor(Y.length*X),N=0,O=0;for(let L=0,M=Y.length;L<M;L++){if(H.isInterleavedBufferAttribute)N=Y[L]*H.data.stride+H.offset;else N=Y[L]*X;for(let q=0;q<X;q++)G[O++]=U[N++]}return new fJ(G,X,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new rJ,Z=this.index.array,$=this.attributes;for(let H in $){let Y=$[H],U=J(Y,Z);Q.setAttribute(H,U)}let W=this.morphAttributes;for(let H in W){let Y=[],U=W[H];for(let X=0,E=U.length;X<E;X++){let G=U[X],N=J(G,Z);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let U=K[H];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let U=Z[Y];J.data.attributes[Y]=U.toJSON(J.data)}let $={},W=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],X=[];for(let E=0,G=U.length;E<G;E++){let N=U[E];X.push(N.toJSON(J.data))}if(X.length>0)$[Y]=X,W=!0}if(W)J.data.morphAttributes=$,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere={center:H.center.toArray(),radius:H.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone(Q));let $=J.attributes;for(let U in $){let X=$[U];this.setAttribute(U,X.clone(Q))}let W=J.morphAttributes;for(let U in W){let X=[],E=W[U];for(let G=0,N=E.length;G<N;G++)X.push(E[G].clone(Q));this.morphAttributes[U]=X}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let U=0,X=K.length;U<X;U++){let E=K[U];this.addGroup(E.start,E.count,E.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var RZ=new ZJ,I8=new EQ,e9=new y9,FZ=new y,J7=new y,Q7=new y,Z7=new y,F6=new y,$7=new y,kZ=new y,W7=new y;class NJ extends RJ{constructor(J=new rJ,Q=new G9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=$.length;W<K;W++){let H=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let Z=this.geometry,$=Z.attributes.position,W=Z.morphAttributes.position,K=Z.morphTargetsRelative;Q.fromBufferAttribute($,J);let H=this.morphTargetInfluences;if(W&&H){$7.set(0,0,0);for(let Y=0,U=W.length;Y<U;Y++){let X=H[Y],E=W[Y];if(X===0)continue;if(F6.fromBufferAttribute(E,J),K)$7.addScaledVector(F6,X);else $7.addScaledVector(F6.sub(Q),X)}Q.add($7)}return Q}raycast(J,Q){let Z=this.geometry,$=this.material,W=this.matrixWorld;if($===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(e9.copy(Z.boundingSphere),e9.applyMatrix4(W),I8.copy(J.ray).recast(J.near),e9.containsPoint(I8.origin)===!1){if(I8.intersectSphere(e9,FZ)===null)return;if(I8.origin.distanceToSquared(FZ)>(J.far-J.near)**2)return}if(RZ.copy(W).invert(),I8.copy(J.ray).applyMatrix4(RZ),Z.boundingBox!==null){if(I8.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,I8)}_computeIntersections(J,Q,Z){let $,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,U=W.attributes.uv,X=W.attributes.uv1,E=W.attributes.normal,G=W.groups,N=W.drawRange;if(H!==null)if(Array.isArray(K))for(let O=0,L=G.length;O<L;O++){let M=G[O],q=K[M.materialIndex],D=Math.max(M.start,N.start),C=Math.min(H.count,Math.min(M.start+M.count,N.start+N.count));for(let z=D,_=C;z<_;z+=3){let f=H.getX(z),I=H.getX(z+1),A=H.getX(z+2);if($=K7(this,q,J,Z,U,X,E,f,I,A),$)$.faceIndex=Math.floor(z/3),$.face.materialIndex=M.materialIndex,Q.push($)}}else{let O=Math.max(0,N.start),L=Math.min(H.count,N.start+N.count);for(let M=O,q=L;M<q;M+=3){let D=H.getX(M),C=H.getX(M+1),z=H.getX(M+2);if($=K7(this,K,J,Z,U,X,E,D,C,z),$)$.faceIndex=Math.floor(M/3),Q.push($)}}else if(Y!==void 0)if(Array.isArray(K))for(let O=0,L=G.length;O<L;O++){let M=G[O],q=K[M.materialIndex],D=Math.max(M.start,N.start),C=Math.min(Y.count,Math.min(M.start+M.count,N.start+N.count));for(let z=D,_=C;z<_;z+=3){let f=z,I=z+1,A=z+2;if($=K7(this,q,J,Z,U,X,E,f,I,A),$)$.faceIndex=Math.floor(z/3),$.face.materialIndex=M.materialIndex,Q.push($)}}else{let O=Math.max(0,N.start),L=Math.min(Y.count,N.start+N.count);for(let M=O,q=L;M<q;M+=3){let D=M,C=M+1,z=M+2;if($=K7(this,K,J,Z,U,X,E,D,C,z),$)$.faceIndex=Math.floor(M/3),Q.push($)}}}}function YK(J,Q,Z,$,W,K,H,Y){let U;if(Q.side===1)U=$.intersectTriangle(H,K,W,!0,Y);else U=$.intersectTriangle(W,K,H,Q.side===0,Y);if(U===null)return null;W7.copy(Y),W7.applyMatrix4(J.matrixWorld);let X=Z.ray.origin.distanceTo(W7);if(X<Z.near||X>Z.far)return null;return{distance:X,point:W7.clone(),object:J}}function K7(J,Q,Z,$,W,K,H,Y,U,X){J.getVertexPosition(Y,J7),J.getVertexPosition(U,Q7),J.getVertexPosition(X,Z7);let E=YK(J,Q,Z,$,J7,Q7,Z7,kZ);if(E){let G=new y;if(vJ.getBarycoord(kZ,J7,Q7,Z7,G),W)E.uv=vJ.getInterpolatedAttribute(W,Y,U,X,G,new z0);if(K)E.uv1=vJ.getInterpolatedAttribute(K,Y,U,X,G,new z0);if(H){if(E.normal=vJ.getInterpolatedAttribute(H,Y,U,X,G,new y),E.normal.dot($.direction)>0)E.normal.multiplyScalar(-1)}let N={a:Y,b:U,c:X,normal:new y,materialIndex:0};vJ.getNormal(J7,Q7,Z7,N.normal),E.face=N,E.barycoord=G}return E}class dJ extends rJ{constructor(J=1,Q=1,Z=1,$=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:$,heightSegments:W,depthSegments:K};let H=this;$=Math.floor($),W=Math.floor(W),K=Math.floor(K);let Y=[],U=[],X=[],E=[],G=0,N=0;O("z","y","x",-1,-1,Z,Q,J,K,W,0),O("z","y","x",1,-1,Z,Q,-J,K,W,1),O("x","z","y",1,1,J,Z,Q,$,K,2),O("x","z","y",1,-1,J,Z,-Q,$,K,3),O("x","y","z",1,-1,J,Q,Z,$,W,4),O("x","y","z",-1,-1,J,Q,-Z,$,W,5),this.setIndex(Y),this.setAttribute("position",new bJ(U,3)),this.setAttribute("normal",new bJ(X,3)),this.setAttribute("uv",new bJ(E,2));function O(L,M,q,D,C,z,_,f,I,A,l){let k=z/I,V=_/A,j=z/2,x=_/2,u=f/2,d=I+1,a=A+1,p=0,t=0,g=new y;for(let H0=0;H0<a;H0++){let U0=H0*V-x;for(let w0=0;w0<d;w0++){let h0=w0*k-j;g[L]=h0*D,g[M]=U0*C,g[q]=u,U.push(g.x,g.y,g.z),g[L]=0,g[M]=0,g[q]=f>0?1:-1,X.push(g.x,g.y,g.z),E.push(w0/I),E.push(1-H0/A),p+=1}}for(let H0=0;H0<A;H0++)for(let U0=0;U0<I;U0++){let w0=G+U0+d*H0,h0=G+U0+d*(H0+1),s=G+(U0+1)+d*(H0+1),Q0=G+(U0+1)+d*H0;Y.push(w0,h0,Q0),Y.push(h0,s,Q0),t+=6}H.addGroup(N,t,l),N+=t,G+=p}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new dJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function y8(J){let Q={};for(let Z in J){Q[Z]={};for(let $ in J[Z]){let W=J[Z][$];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][$]=null;else Q[Z][$]=W.clone();else if(Array.isArray(W))Q[Z][$]=W.slice();else Q[Z][$]=W}}return Q}function MJ(J){let Q={};for(let Z=0;Z<J.length;Z++){let $=y8(J[Z]);for(let W in $)Q[W]=$[W]}return Q}function HK(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function NQ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return l0.workingColorSpace}var T7={clone:y8,merge:MJ},XK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class TJ extends j8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XK,this.fragmentShader=UK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=y8(J.uniforms),this.uniformsGroups=HK(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let $ in this.uniforms){let K=this.uniforms[$].value;if(K&&K.isTexture)Q.uniforms[$]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[$]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[$]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[$]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[$]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[$]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[$]={type:"m4",value:K.toArray()};else Q.uniforms[$]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let $ in this.extensions)if(this.extensions[$]===!0)Z[$]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}}class S7 extends RJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ZJ,this.projectionMatrix=new ZJ,this.projectionMatrixInverse=new ZJ,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var D8=new y,MZ=new z0,VZ=new z0;class zJ extends S7{constructor(J=50,Q=1,Z=0.1,$=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=$,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=Q9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(B9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return Q9*2*Math.atan(Math.tan(B9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){D8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(D8.x,D8.y).multiplyScalar(-J/D8.z),D8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(D8.x,D8.y).multiplyScalar(-J/D8.z)}getViewSize(J,Q){return this.getViewBounds(J,MZ,VZ),Q.subVectors(VZ,MZ)}setViewOffset(J,Q,Z,$,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(B9*0.5*this.fov)/this.zoom,Z=2*Q,$=this.aspect*Z,W=-0.5*$,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=K;W+=K.offsetX*$/Y,Q-=K.offsetY*Z/U,$*=K.width/Y,Z*=K.height/U}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+$,Q,Q-Z,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var r8=-90,t8=1;class qQ extends RJ{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let $=new zJ(r8,t8,J,Q);$.layers=this.layers,this.add($);let W=new zJ(r8,t8,J,Q);W.layers=this.layers,this.add(W);let K=new zJ(r8,t8,J,Q);K.layers=this.layers,this.add(K);let H=new zJ(r8,t8,J,Q);H.layers=this.layers,this.add(H);let Y=new zJ(r8,t8,J,Q);Y.layers=this.layers,this.add(Y);let U=new zJ(r8,t8,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,$,W,K,H,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),$.up.set(0,1,0),$.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),$.up.set(0,-1,0),$.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:$}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,U,X]=this.children,E=J.getRenderTarget(),G=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let L=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,$),J.render(Q,W),J.setRenderTarget(Z,1,$),J.render(Q,K),J.setRenderTarget(Z,2,$),J.render(Q,H),J.setRenderTarget(Z,3,$),J.render(Q,Y),J.setRenderTarget(Z,4,$),J.render(Q,U),Z.texture.generateMipmaps=L,J.setRenderTarget(Z,5,$),J.render(Q,X),J.setRenderTarget(E,G,N),J.xr.enabled=O,Z.texture.needsPMREMUpdate=!0}}class j7 extends BJ{constructor(J,Q,Z,$,W,K,H,Y,U,X){J=J!==void 0?J:[],Q=Q!==void 0?Q:301;super(J,Q,Z,$,W,K,H,Y,U,X);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class DQ extends lJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},$=[Z,Z,Z,Z,Z,Z];this.texture=new j7($,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:1006}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},$=new dJ(5,5,5),W=new TJ({name:"CubemapFromEquirect",uniforms:y8(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let K=new NJ($,W),H=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new qQ(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q,Z,$){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,Z,$);J.setRenderTarget(W)}}class wJ extends RJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var GK={type:"move"};class v9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new wJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new wJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new wJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let $=null,W=null,K=null,H=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){K=!0;for(let L of J.hand.values()){let M=Q.getJointPose(L,Z),q=this._getHandJoint(U,L);if(M!==null)q.matrix.fromArray(M.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=M.radius;q.visible=M!==null}let X=U.joints["index-finger-tip"],E=U.joints["thumb-tip"],G=X.position.distanceTo(E.position),N=0.02,O=0.005;if(U.inputState.pinching&&G>N+O)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&G<=N-O)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,Z),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1}}if(H!==null){if($=Q.getPose(J.targetRaySpace,Z),$===null&&W!==null)$=W;if($!==null){if(H.matrix.fromArray($.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,$.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy($.linearVelocity);else H.hasLinearVelocity=!1;if($.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy($.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(GK)}}}if(H!==null)H.visible=$!==null;if(Y!==null)Y.visible=W!==null;if(U!==null)U.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new wJ;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}class y7 extends RJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mJ,this.environmentIntensity=1,this.environmentRotation=new mJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var k6=new y,EK=new y,NK=new A0;class K8{constructor(J=new y(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,$){return this.normal.set(J,Q,Z),this.constant=$,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let $=k6.subVectors(Z,Q).cross(EK.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint($,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let Z=J.delta(k6),$=this.normal.dot(Z);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||NK.getNormalMatrix(J),$=this.coplanarPoint(k6).applyMatrix4(J),W=this.normal.applyMatrix3(Z).normalize();return this.constant=-$.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var w8=new y9,Y7=new y;class f9{constructor(J=new K8,Q=new K8,Z=new K8,$=new K8,W=new K8,K=new K8){this.planes=[J,Q,Z,$,W,K]}set(J,Q,Z,$,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy(Z),H[3].copy($),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000){let Z=this.planes,$=J.elements,W=$[0],K=$[1],H=$[2],Y=$[3],U=$[4],X=$[5],E=$[6],G=$[7],N=$[8],O=$[9],L=$[10],M=$[11],q=$[12],D=$[13],C=$[14],z=$[15];if(Z[0].setComponents(Y-W,G-U,M-N,z-q).normalize(),Z[1].setComponents(Y+W,G+U,M+N,z+q).normalize(),Z[2].setComponents(Y+K,G+X,M+O,z+D).normalize(),Z[3].setComponents(Y-K,G-X,M-O,z-D).normalize(),Z[4].setComponents(Y-H,G-E,M-L,z-C).normalize(),Q===2000)Z[5].setComponents(Y+H,G+E,M+L,z+C).normalize();else if(Q===2001)Z[5].setComponents(H,E,L,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();w8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();w8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(w8)}intersectsSprite(J){return w8.center.set(0,0,0),w8.radius=0.7071067811865476,w8.applyMatrix4(J.matrixWorld),this.intersectsSphere(w8)}intersectsSphere(J){let Q=this.planes,Z=J.center,$=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint(Z)<$)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let $=Q[Z];if(Y7.x=$.normal.x>0?J.max.x:J.min.x,Y7.y=$.normal.y>0?J.max.y:J.min.y,Y7.z=$.normal.z>0?J.max.z:J.min.z,$.distanceToPoint(Y7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class v7 extends BJ{constructor(J,Q,Z,$,W,K,H,Y,U,X=1026){if(X!==1026&&X!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Z===void 0&&X===1026)Z=1014;if(Z===void 0&&X===1027)Z=1020;super(null,$,W,K,H,Y,X,Z,U);this.isDepthTexture=!0,this.image={width:J,height:Q},this.magFilter=H!==void 0?H:1003,this.minFilter=Y!==void 0?Y:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class b9 extends rJ{constructor(J=1,Q=1,Z=1,$=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:$};let W=J/2,K=Q/2,H=Math.floor(Z),Y=Math.floor($),U=H+1,X=Y+1,E=J/H,G=Q/Y,N=[],O=[],L=[],M=[];for(let q=0;q<X;q++){let D=q*G-K;for(let C=0;C<U;C++){let z=C*E-W;O.push(z,-D,0),L.push(0,0,1),M.push(C/H),M.push(1-q/Y)}}for(let q=0;q<Y;q++)for(let D=0;D<H;D++){let C=D+U*q,z=D+U*(q+1),_=D+1+U*(q+1),f=D+1+U*q;N.push(C,z,f),N.push(z,_,f)}this.setIndex(N),this.setAttribute("position",new bJ(O,3)),this.setAttribute("normal",new bJ(L,3)),this.setAttribute("uv",new bJ(M,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b9(J.width,J.height,J.widthSegments,J.heightSegments)}}class f7 extends j8{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new v0(16777215),this.specular=new v0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new v0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class OQ extends j8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class RQ extends j8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function H7(J,Q,Z){if(!J||!Z&&J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function qK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class E9{constructor(J,Q,Z,$){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=$!==void 0?$:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,$=Q[Z],W=Q[Z-1];Z:{J:{let K;Q:{$:if(!(J<$)){for(let H=Z+2;;){if($===void 0){if(J<W)break $;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===H)break;if(W=$,$=Q[++Z],J<$)break J}K=Q.length;break Q}if(!(J>=W)){let H=Q[1];if(J<H)Z=2,W=H;for(let Y=Z-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if($=W,W=Q[--Z-1],J>=W)break J}K=Z,Z=0;break Q}break Z}while(Z<K){let H=Z+K>>>1;if(J<Q[H])K=H;else Z=H+1}if($=Q[Z],W=Q[Z-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,W,$)}return this.interpolate_(Z,W,J,$)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$;for(let K=0;K!==$;++K)Q[K]=Z[W+K];return Q}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class FQ extends E9{constructor(J,Q,Z,$){super(J,Q,Z,$);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let $=this.parameterPositions,W=J-2,K=J+1,H=$[W],Y=$[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-Z;break;case 2402:W=$.length-2,H=Q+$[W]-$[W+1];break;default:W=J,H=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*Z-Q;break;case 2402:K=1,Y=Z+$[1]-$[0];break;default:K=J-1,Y=Q}let U=(Z-Q)*0.5,X=this.valueSize;this._weightPrev=U/(Q-H),this._weightNext=U/(Y-Z),this._offsetPrev=W*X,this._offsetNext=K*X}interpolate_(J,Q,Z,$){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,U=Y-H,X=this._offsetPrev,E=this._offsetNext,G=this._weightPrev,N=this._weightNext,O=(Z-Q)/($-Q),L=O*O,M=L*O,q=-G*M+2*G*L-G*O,D=(1+G)*M+(-1.5-2*G)*L+(-0.5+G)*O+1,C=(-1-N)*M+(1.5+N)*L+0.5*O,z=N*M-N*L;for(let _=0;_!==H;++_)W[_]=q*K[X+_]+D*K[U+_]+C*K[Y+_]+z*K[E+_];return W}}class kQ extends E9{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,U=Y-H,X=(Z-Q)/($-Q),E=1-X;for(let G=0;G!==H;++G)W[G]=K[U+G]*E+K[Y+G]*X;return W}}class MQ extends E9{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J){return this.copySampleValue_(J-1)}}class uJ{constructor(J,Q,Z,$){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=H7(Q,this.TimeBufferType),this.values=H7(Z,this.ValueBufferType),this.setInterpolation($||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:H7(J.times,Array),values:H7(J.values,Array)};let $=J.getInterpolation();if($!==J.DefaultInterpolation)Z.interpolation=$}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new MQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new kQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new FQ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]*=J}return this}trim(J,Q){let Z=this.times,$=Z.length,W=0,K=$-1;while(W!==$&&Z[W]<J)++W;while(K!==-1&&Z[K]>Q)--K;if(++K,W!==0||K!==$){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=Z.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,$=this.values,W=Z.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=Z[H];if(typeof Y==="number"&&isNaN(Y)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){console.error("THREE.KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if($!==void 0){if(qK($))for(let H=0,Y=$.length;H!==Y;++H){let U=$[H];if(isNaN(U)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,H,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),$=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,U=J[H],X=J[H+1];if(U!==X&&(H!==1||U!==J[0]))if(!$){let E=H*Z,G=E-Z,N=E+Z;for(let O=0;O!==Z;++O){let L=Q[E+O];if(L!==Q[G+O]||L!==Q[N+O]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let E=H*Z,G=K*Z;for(let N=0;N!==Z;++N)Q[G+N]=Q[E+N]}++K}}if(W>0){J[K]=J[W];for(let H=W*Z,Y=K*Z,U=0;U!==Z;++U)Q[Y+U]=Q[H+U];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),$=new this.constructor(this.name,J,Q);return $.createInterpolant=this.createInterpolant,$}}uJ.prototype.TimeBufferType=Float32Array;uJ.prototype.ValueBufferType=Float32Array;uJ.prototype.DefaultInterpolation=2301;class v8 extends uJ{constructor(J,Q,Z){super(J,Q,Z)}}v8.prototype.ValueTypeName="bool";v8.prototype.ValueBufferType=Array;v8.prototype.DefaultInterpolation=2300;v8.prototype.InterpolantFactoryMethodLinear=void 0;v8.prototype.InterpolantFactoryMethodSmooth=void 0;class VQ extends uJ{}VQ.prototype.ValueTypeName="color";class LQ extends uJ{}LQ.prototype.ValueTypeName="number";class zQ extends E9{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=(Z-Q)/($-Q),U=J*H;for(let X=U+H;U!==X;U+=4)aJ.slerpFlat(W,0,K,U-H,K,U,Y);return W}}class b7 extends uJ{InterpolantFactoryMethodLinear(J){return new zQ(this.times,this.values,this.getValueSize(),J)}}b7.prototype.ValueTypeName="quaternion";b7.prototype.InterpolantFactoryMethodSmooth=void 0;class f8 extends uJ{constructor(J,Q,Z){super(J,Q,Z)}}f8.prototype.ValueTypeName="string";f8.prototype.ValueBufferType=Array;f8.prototype.DefaultInterpolation=2300;f8.prototype.InterpolantFactoryMethodLinear=void 0;f8.prototype.InterpolantFactoryMethodSmooth=void 0;class BQ extends uJ{}BQ.prototype.ValueTypeName="vector";class IQ{constructor(J,Q,Z){let $=this,W=!1,K=0,H=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this.itemStart=function(X){if(H++,W===!1){if($.onStart!==void 0)$.onStart(X,K,H)}W=!0},this.itemEnd=function(X){if(K++,$.onProgress!==void 0)$.onProgress(X,K,H);if(K===H){if(W=!1,$.onLoad!==void 0)$.onLoad()}},this.itemError=function(X){if($.onError!==void 0)$.onError(X)},this.resolveURL=function(X){if(Y)return Y(X);return X},this.setURLModifier=function(X){return Y=X,this},this.addHandler=function(X,E){return U.push(X,E),this},this.removeHandler=function(X){let E=U.indexOf(X);if(E!==-1)U.splice(E,2);return this},this.getHandler=function(X){for(let E=0,G=U.length;E<G;E+=2){let N=U[E],O=U[E+1];if(N.global)N.lastIndex=0;if(N.test(X))return O}return null}}}var f$=new IQ;class wQ{constructor(J){this.manager=J!==void 0?J:f$,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let Z=this;return new Promise(function($,W){Z.load(J,$,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}wQ.DEFAULT_MATERIAL_NAME="__DEFAULT";class h7 extends RJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new v0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}var M6=new ZJ,LZ=new y,zZ=new y;class b${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z0(512,512),this.map=null,this.mapPass=null,this.matrix=new ZJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new f9,this._frameExtents=new z0(1,1),this._viewportCount=1,this._viewports=[new $J(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,Z=this.matrix;LZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(LZ),zZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(zZ),Q.updateMatrixWorld(),M6.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(M6),Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Z.multiply(M6)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class N9 extends S7{constructor(J=-1,Q=1,Z=1,$=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=$,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,$,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,$=(this.top+this.bottom)/2,W=Z-J,K=Z+J,H=$+Q,Y=$-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,X=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=U*this.view.offsetX,K=W+U*this.view.width,H-=X*this.view.offsetY,Y=H-X*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class h$ extends b${constructor(){super(new N9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class q9 extends h7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(RJ.DEFAULT_UP),this.updateMatrix(),this.target=new RJ,this.shadow=new h$}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class x7 extends h7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class CQ extends zJ{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J,this.index=0}}class g7{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=BZ(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=BZ();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}function BZ(){return performance.now()}var _Q="\\[\\]\\.:\\/",DK=new RegExp("["+_Q+"]","g"),AQ="[^"+_Q+"]",OK="[^"+_Q.replace("\\.","")+"]",RK=/((?:WC+[\/:])*)/.source.replace("WC",AQ),FK=/(WCOD+)?/.source.replace("WCOD",OK),kK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",AQ),MK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",AQ),VK=new RegExp("^"+RK+FK+kK+MK+"$"),LK=["material","materials","bones","map"];class x${constructor(J,Q,Z){let $=Z||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,$)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,$=this._bindings[Z];if($!==void 0)$.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let $=this._targetGroup.nCachedObjects_,W=Z.length;$!==W;++$)Z[$].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class o0{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,Z);else return new o0.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(DK,"")}static parseTrackName(J){let Q=VK.exec(J);if(Q===null)throw new Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},$=Z.nodeName&&Z.nodeName.lastIndexOf(".");if($!==void 0&&$!==-1){let W=Z.nodeName.substring($+1);if(LK.indexOf(W)!==-1)Z.nodeName=Z.nodeName.substring(0,$),Z.objectName=W}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=Z(H.children);if(Y)return Y}return null},$=Z(J.children);if($)return $}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)J[Q++]=Z[$]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,$=Q.propertyName,W=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let U=Q.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let X=0;X<J.length;X++)if(J[X].name===U){U=X;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(U!==void 0){if(J[U]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let K=J[$];if(K===void 0){let U=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+U+"."+$+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if($==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=$;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=x$;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OG=new Float32Array(1);class p7 extends X8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function PQ(J,Q,Z,$){let W=zK($);switch(Z){case 1021:return J*Q;case 1024:return J*Q;case 1025:return J*Q*2;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function zK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"173"}}));if(typeof window!=="undefined")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="173";function XW(){let J=null,Q=!1,Z=null,$=null;function W(K,H){Z(K,H),$=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if(Z===null)return;$=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame($),Q=!1},setAnimationLoop:function(K){Z=K},setContext:function(K){J=K}}}function BK(J){let Q=new WeakMap;function Z(Y,U){let{array:X,usage:E}=Y,G=X.byteLength,N=J.createBuffer();J.bindBuffer(U,N),J.bufferData(U,X,E),Y.onUploadCallback();let O;if(X instanceof Float32Array)O=J.FLOAT;else if(X instanceof Uint16Array)if(Y.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(X instanceof Int16Array)O=J.SHORT;else if(X instanceof Uint32Array)O=J.UNSIGNED_INT;else if(X instanceof Int32Array)O=J.INT;else if(X instanceof Int8Array)O=J.BYTE;else if(X instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(X instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+X);return{buffer:N,type:O,bytesPerElement:X.BYTES_PER_ELEMENT,version:Y.version,size:G}}function $(Y,U,X){let{array:E,updateRanges:G}=U;if(J.bindBuffer(X,Y),G.length===0)J.bufferSubData(X,0,E);else{G.sort((O,L)=>O.start-L.start);let N=0;for(let O=1;O<G.length;O++){let L=G[N],M=G[O];if(M.start<=L.start+L.count+1)L.count=Math.max(L.count,M.start+M.count-L.start);else++N,G[N]=M}G.length=N+1;for(let O=0,L=G.length;O<L;O++){let M=G[O];J.bufferSubData(X,M.start*E.BYTES_PER_ELEMENT,E,M.start,M.count)}U.clearUpdateRanges()}U.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function H(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let E=Q.get(Y);if(!E||E.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let X=Q.get(Y);if(X===void 0)Q.set(Y,Z(Y,U));else if(X.version<Y.version){if(X.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");$(X.buffer,Y,U),X.version=Y.version}}return{get:W,remove:K,update:H}}var IK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wK=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_K=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jK=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bK=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hK=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xK=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gK=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nK=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iK=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oK=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JY="gl_FragColor = linearToOutputTexel( gl_FragColor );",QY=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$Y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WY=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HY=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XY=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GY=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EY=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DY=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OY=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RY=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kY=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VY=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LY=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zY=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BY=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IY=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wY=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CY=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_Y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AY=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PY=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yY=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gY=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lY=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sY=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tY=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$H=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GH=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NH=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RH=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FH=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kH=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IH=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_H=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TH=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SH=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jH=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fH=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bH=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xH=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gH=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pH=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mH=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lH=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dH=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uH=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cH=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sH=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nH=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iH=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oH=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aH=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rH=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tH=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eH=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JX=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QX=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0={alphahash_fragment:IK,alphahash_pars_fragment:wK,alphamap_fragment:CK,alphamap_pars_fragment:_K,alphatest_fragment:AK,alphatest_pars_fragment:PK,aomap_fragment:TK,aomap_pars_fragment:SK,batching_pars_vertex:jK,batching_vertex:yK,begin_vertex:vK,beginnormal_vertex:fK,bsdfs:bK,iridescence_fragment:hK,bumpmap_pars_fragment:xK,clipping_planes_fragment:gK,clipping_planes_pars_fragment:pK,clipping_planes_pars_vertex:mK,clipping_planes_vertex:lK,color_fragment:dK,color_pars_fragment:uK,color_pars_vertex:cK,color_vertex:sK,common:nK,cube_uv_reflection_fragment:iK,defaultnormal_vertex:oK,displacementmap_pars_vertex:aK,displacementmap_vertex:rK,emissivemap_fragment:tK,emissivemap_pars_fragment:eK,colorspace_fragment:JY,colorspace_pars_fragment:QY,envmap_fragment:ZY,envmap_common_pars_fragment:$Y,envmap_pars_fragment:WY,envmap_pars_vertex:KY,envmap_physical_pars_fragment:RY,envmap_vertex:YY,fog_vertex:HY,fog_pars_vertex:XY,fog_fragment:UY,fog_pars_fragment:GY,gradientmap_pars_fragment:EY,lightmap_pars_fragment:NY,lights_lambert_fragment:qY,lights_lambert_pars_fragment:DY,lights_pars_begin:OY,lights_toon_fragment:FY,lights_toon_pars_fragment:kY,lights_phong_fragment:MY,lights_phong_pars_fragment:VY,lights_physical_fragment:LY,lights_physical_pars_fragment:zY,lights_fragment_begin:BY,lights_fragment_maps:IY,lights_fragment_end:wY,logdepthbuf_fragment:CY,logdepthbuf_pars_fragment:_Y,logdepthbuf_pars_vertex:AY,logdepthbuf_vertex:PY,map_fragment:TY,map_pars_fragment:SY,map_particle_fragment:jY,map_particle_pars_fragment:yY,metalnessmap_fragment:vY,metalnessmap_pars_fragment:fY,morphinstance_vertex:bY,morphcolor_vertex:hY,morphnormal_vertex:xY,morphtarget_pars_vertex:gY,morphtarget_vertex:pY,normal_fragment_begin:mY,normal_fragment_maps:lY,normal_pars_fragment:dY,normal_pars_vertex:uY,normal_vertex:cY,normalmap_pars_fragment:sY,clearcoat_normal_fragment_begin:nY,clearcoat_normal_fragment_maps:iY,clearcoat_pars_fragment:oY,iridescence_pars_fragment:aY,opaque_fragment:rY,packing:tY,premultiplied_alpha_fragment:eY,project_vertex:JH,dithering_fragment:QH,dithering_pars_fragment:ZH,roughnessmap_fragment:$H,roughnessmap_pars_fragment:WH,shadowmap_pars_fragment:KH,shadowmap_pars_vertex:YH,shadowmap_vertex:HH,shadowmask_pars_fragment:XH,skinbase_vertex:UH,skinning_pars_vertex:GH,skinning_vertex:EH,skinnormal_vertex:NH,specularmap_fragment:qH,specularmap_pars_fragment:DH,tonemapping_fragment:OH,tonemapping_pars_fragment:RH,transmission_fragment:FH,transmission_pars_fragment:kH,uv_pars_fragment:MH,uv_pars_vertex:VH,uv_vertex:LH,worldpos_vertex:zH,background_vert:BH,background_frag:IH,backgroundCube_vert:wH,backgroundCube_frag:CH,cube_vert:_H,cube_frag:AH,depth_vert:PH,depth_frag:TH,distanceRGBA_vert:SH,distanceRGBA_frag:jH,equirect_vert:yH,equirect_frag:vH,linedashed_vert:fH,linedashed_frag:bH,meshbasic_vert:hH,meshbasic_frag:xH,meshlambert_vert:gH,meshlambert_frag:pH,meshmatcap_vert:mH,meshmatcap_frag:lH,meshnormal_vert:dH,meshnormal_frag:uH,meshphong_vert:cH,meshphong_frag:sH,meshphysical_vert:nH,meshphysical_frag:iH,meshtoon_vert:oH,meshtoon_frag:aH,points_vert:rH,points_frag:tH,shadow_vert:eH,shadow_frag:JX,sprite_vert:QX,sprite_frag:ZX},Z0={common:{diffuse:{value:new v0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new A0},alphaMap:{value:null},alphaMapTransform:{value:new A0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new A0}},envmap:{envMap:{value:null},envMapRotation:{value:new A0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new A0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new A0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new A0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new A0},normalScale:{value:new z0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new A0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new A0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new A0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new A0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new v0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new v0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new A0},alphaTest:{value:0},uvTransform:{value:new A0}},sprite:{diffuse:{value:new v0(16777215)},opacity:{value:1},center:{value:new z0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new A0},alphaMap:{value:null},alphaMapTransform:{value:new A0},alphaTest:{value:0}}},tJ={basic:{uniforms:MJ([Z0.common,Z0.specularmap,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.fog]),vertexShader:j0.meshbasic_vert,fragmentShader:j0.meshbasic_frag},lambert:{uniforms:MJ([Z0.common,Z0.specularmap,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.fog,Z0.lights,{emissive:{value:new v0(0)}}]),vertexShader:j0.meshlambert_vert,fragmentShader:j0.meshlambert_frag},phong:{uniforms:MJ([Z0.common,Z0.specularmap,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.fog,Z0.lights,{emissive:{value:new v0(0)},specular:{value:new v0(1118481)},shininess:{value:30}}]),vertexShader:j0.meshphong_vert,fragmentShader:j0.meshphong_frag},standard:{uniforms:MJ([Z0.common,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.roughnessmap,Z0.metalnessmap,Z0.fog,Z0.lights,{emissive:{value:new v0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:j0.meshphysical_vert,fragmentShader:j0.meshphysical_frag},toon:{uniforms:MJ([Z0.common,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.gradientmap,Z0.fog,Z0.lights,{emissive:{value:new v0(0)}}]),vertexShader:j0.meshtoon_vert,fragmentShader:j0.meshtoon_frag},matcap:{uniforms:MJ([Z0.common,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.fog,{matcap:{value:null}}]),vertexShader:j0.meshmatcap_vert,fragmentShader:j0.meshmatcap_frag},points:{uniforms:MJ([Z0.points,Z0.fog]),vertexShader:j0.points_vert,fragmentShader:j0.points_frag},dashed:{uniforms:MJ([Z0.common,Z0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:j0.linedashed_vert,fragmentShader:j0.linedashed_frag},depth:{uniforms:MJ([Z0.common,Z0.displacementmap]),vertexShader:j0.depth_vert,fragmentShader:j0.depth_frag},normal:{uniforms:MJ([Z0.common,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,{opacity:{value:1}}]),vertexShader:j0.meshnormal_vert,fragmentShader:j0.meshnormal_frag},sprite:{uniforms:MJ([Z0.sprite,Z0.fog]),vertexShader:j0.sprite_vert,fragmentShader:j0.sprite_frag},background:{uniforms:{uvTransform:{value:new A0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:j0.background_vert,fragmentShader:j0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new A0}},vertexShader:j0.backgroundCube_vert,fragmentShader:j0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:j0.cube_vert,fragmentShader:j0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:j0.equirect_vert,fragmentShader:j0.equirect_frag},distanceRGBA:{uniforms:MJ([Z0.common,Z0.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:j0.distanceRGBA_vert,fragmentShader:j0.distanceRGBA_frag},shadow:{uniforms:MJ([Z0.lights,Z0.fog,{color:{value:new v0(0)},opacity:{value:1}}]),vertexShader:j0.shadow_vert,fragmentShader:j0.shadow_frag}};tJ.physical={uniforms:MJ([tJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new A0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new A0},clearcoatNormalScale:{value:new z0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new A0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new A0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new A0},sheen:{value:0},sheenColor:{value:new v0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new A0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new A0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new A0},transmissionSamplerSize:{value:new z0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new A0},attenuationDistance:{value:0},attenuationColor:{value:new v0(0)},specularColor:{value:new v0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new A0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new A0},anisotropyVector:{value:new z0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new A0}}]),vertexShader:j0.meshphysical_vert,fragmentShader:j0.meshphysical_frag};var m7={r:0,b:0,g:0},b8=new mJ,$X=new ZJ;function WX(J,Q,Z,$,W,K,H){let Y=new v0(0),U=K===!0?0:1,X,E,G=null,N=0,O=null;function L(z){let _=z.isScene===!0?z.background:null;if(_&&_.isTexture)_=(z.backgroundBlurriness>0?Z:Q).get(_);return _}function M(z){let _=!1,f=L(z);if(f===null)D(Y,U);else if(f&&f.isColor)D(f,1),_=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,H);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,H);if(J.autoClear||_)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function q(z,_){let f=L(_);if(f&&(f.isCubeTexture||f.mapping===A9)){if(E===void 0)E=new NJ(new dJ(1,1,1),new TJ({name:"BackgroundCubeMaterial",uniforms:y8(tJ.backgroundCube.uniforms),vertexShader:tJ.backgroundCube.vertexShader,fragmentShader:tJ.backgroundCube.fragmentShader,side:PJ,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(I,A,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(E);if(b8.copy(_.backgroundRotation),b8.x*=-1,b8.y*=-1,b8.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1)b8.y*=-1,b8.z*=-1;if(E.material.uniforms.envMap.value=f,E.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4($X.makeRotationFromEuler(b8)),E.material.toneMapped=l0.getTransfer(f.colorSpace)!==t0,G!==f||N!==f.version||O!==J.toneMapping)E.material.needsUpdate=!0,G=f,N=f.version,O=J.toneMapping;E.layers.enableAll(),z.unshift(E,E.geometry,E.material,0,0,null)}else if(f&&f.isTexture){if(X===void 0)X=new NJ(new b9(2,2),new TJ({name:"BackgroundMaterial",uniforms:y8(tJ.background.uniforms),vertexShader:tJ.background.vertexShader,fragmentShader:tJ.background.fragmentShader,side:Z9,depthTest:!1,depthWrite:!1,fog:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=f,X.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,X.material.toneMapped=l0.getTransfer(f.colorSpace)!==t0,f.matrixAutoUpdate===!0)f.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(f.matrix),G!==f||N!==f.version||O!==J.toneMapping)X.material.needsUpdate=!0,G=f,N=f.version,O=J.toneMapping;X.layers.enableAll(),z.unshift(X,X.geometry,X.material,0,0,null)}}function D(z,_){z.getRGB(m7,NQ(J)),$.buffers.color.setClear(m7.r,m7.g,m7.b,_,H)}function C(){if(E!==void 0)E.geometry.dispose(),E.material.dispose(),E=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return Y},setClearColor:function(z,_=1){Y.set(z),U=_,D(Y,U)},getClearAlpha:function(){return U},setClearAlpha:function(z){U=z,D(Y,U)},render:M,addToRenderList:q,dispose:C}}function KX(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),$={},W=N(null),K=W,H=!1;function Y(V,j,x,u,d){let a=!1,p=G(u,x,j);if(K!==p)K=p,X(K.object);if(a=O(V,u,x,d),a)L(V,u,x,d);if(d!==null)Q.update(d,J.ELEMENT_ARRAY_BUFFER);if(a||H){if(H=!1,_(V,j,x,u),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(d).buffer)}}function U(){return J.createVertexArray()}function X(V){return J.bindVertexArray(V)}function E(V){return J.deleteVertexArray(V)}function G(V,j,x){let u=x.wireframe===!0,d=$[V.id];if(d===void 0)d={},$[V.id]=d;let a=d[j.id];if(a===void 0)a={},d[j.id]=a;let p=a[u];if(p===void 0)p=N(U()),a[u]=p;return p}function N(V){let j=[],x=[],u=[];for(let d=0;d<Z;d++)j[d]=0,x[d]=0,u[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:x,attributeDivisors:u,object:V,attributes:{},index:null}}function O(V,j,x,u){let d=K.attributes,a=j.attributes,p=0,t=x.getAttributes();for(let g in t)if(t[g].location>=0){let U0=d[g],w0=a[g];if(w0===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)w0=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)w0=V.instanceColor}if(U0===void 0)return!0;if(U0.attribute!==w0)return!0;if(w0&&U0.data!==w0.data)return!0;p++}if(K.attributesNum!==p)return!0;if(K.index!==u)return!0;return!1}function L(V,j,x,u){let d={},a=j.attributes,p=0,t=x.getAttributes();for(let g in t)if(t[g].location>=0){let U0=a[g];if(U0===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)U0=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)U0=V.instanceColor}let w0={};if(w0.attribute=U0,U0&&U0.data)w0.data=U0.data;d[g]=w0,p++}K.attributes=d,K.attributesNum=p,K.index=u}function M(){let V=K.newAttributes;for(let j=0,x=V.length;j<x;j++)V[j]=0}function q(V){D(V,0)}function D(V,j){let{newAttributes:x,enabledAttributes:u,attributeDivisors:d}=K;if(x[V]=1,u[V]===0)J.enableVertexAttribArray(V),u[V]=1;if(d[V]!==j)J.vertexAttribDivisor(V,j),d[V]=j}function C(){let{newAttributes:V,enabledAttributes:j}=K;for(let x=0,u=j.length;x<u;x++)if(j[x]!==V[x])J.disableVertexAttribArray(x),j[x]=0}function z(V,j,x,u,d,a,p){if(p===!0)J.vertexAttribIPointer(V,j,x,d,a);else J.vertexAttribPointer(V,j,x,u,d,a)}function _(V,j,x,u){M();let d=u.attributes,a=x.getAttributes(),p=j.defaultAttributeValues;for(let t in a){let g=a[t];if(g.location>=0){let H0=d[t];if(H0===void 0){if(t==="instanceMatrix"&&V.instanceMatrix)H0=V.instanceMatrix;if(t==="instanceColor"&&V.instanceColor)H0=V.instanceColor}if(H0!==void 0){let{normalized:U0,itemSize:w0}=H0,h0=Q.get(H0);if(h0===void 0)continue;let{buffer:s,type:Q0,bytesPerElement:R0}=h0,V0=Q0===J.INT||Q0===J.UNSIGNED_INT||H0.gpuType===w6;if(H0.isInterleavedBufferAttribute){let $0=H0.data,g0=$0.stride,f0=H0.offset;if($0.isInstancedInterleavedBuffer){for(let p0=0;p0<g.locationSize;p0++)D(g.location+p0,$0.meshPerAttribute);if(V.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=$0.meshPerAttribute*$0.count}else for(let p0=0;p0<g.locationSize;p0++)q(g.location+p0);J.bindBuffer(J.ARRAY_BUFFER,s);for(let p0=0;p0<g.locationSize;p0++)z(g.location+p0,w0/g.locationSize,Q0,U0,g0*R0,(f0+w0/g.locationSize*p0)*R0,V0)}else{if(H0.isInstancedBufferAttribute){for(let $0=0;$0<g.locationSize;$0++)D(g.location+$0,H0.meshPerAttribute);if(V.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let $0=0;$0<g.locationSize;$0++)q(g.location+$0);J.bindBuffer(J.ARRAY_BUFFER,s);for(let $0=0;$0<g.locationSize;$0++)z(g.location+$0,w0/g.locationSize,Q0,U0,w0*R0,w0/g.locationSize*$0*R0,V0)}}else if(p!==void 0){let U0=p[t];if(U0!==void 0)switch(U0.length){case 2:J.vertexAttrib2fv(g.location,U0);break;case 3:J.vertexAttrib3fv(g.location,U0);break;case 4:J.vertexAttrib4fv(g.location,U0);break;default:J.vertexAttrib1fv(g.location,U0)}}}}C()}function f(){l();for(let V in $){let j=$[V];for(let x in j){let u=j[x];for(let d in u)E(u[d].object),delete u[d];delete j[x]}delete $[V]}}function I(V){if($[V.id]===void 0)return;let j=$[V.id];for(let x in j){let u=j[x];for(let d in u)E(u[d].object),delete u[d];delete j[x]}delete $[V.id]}function A(V){for(let j in $){let x=$[j];if(x[V.id]===void 0)continue;let u=x[V.id];for(let d in u)E(u[d].object),delete u[d];delete x[V.id]}}function l(){if(k(),H=!0,K===W)return;K=W,X(K.object)}function k(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:l,resetDefaultState:k,dispose:f,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:q,disableUnusedAttributes:C}}function YX(J,Q,Z){let $;function W(X){$=X}function K(X,E){J.drawArrays($,X,E),Z.update(E,$,1)}function H(X,E,G){if(G===0)return;J.drawArraysInstanced($,X,E,G),Z.update(E,$,G)}function Y(X,E,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL($,X,0,E,0,G);let O=0;for(let L=0;L<G;L++)O+=E[L];Z.update(O,$,1)}function U(X,E,G,N){if(G===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let L=0;L<X.length;L++)H(X[L],E[L],N[L]);else{O.multiDrawArraysInstancedWEBGL($,X,0,E,0,N,0,G);let L=0;for(let M=0;M<G;M++)L+=E[M]*N[M];Z.update(L,$,1)}}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y,this.renderMultiDrawInstances=U}function HX(J,Q,Z,$){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(A){if(A!==oJ&&$.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(A){let l=A===A8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==R8&&$.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==F8&&!l)return!1;return!0}function U(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let X=Z.precision!==void 0?Z.precision:"highp",E=U(X);if(E!==X)console.warn("THREE.WebGLRenderer:",X,"not supported, using",E,"instead."),X=E;let G=Z.logarithmicDepthBuffer===!0,N=Z.reverseDepthBuffer===!0&&Q.has("EXT_clip_control"),O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),D=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),_=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),f=L>0,I=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:U,textureFormatReadable:H,textureTypeReadable:Y,precision:X,logarithmicDepthBuffer:G,reverseDepthBuffer:N,maxTextures:O,maxVertexTextures:L,maxTextureSize:M,maxCubemapSize:q,maxAttributes:D,maxVertexUniforms:C,maxVaryings:z,maxFragmentUniforms:_,vertexTextures:f,maxSamples:I}}function XX(J){let Q=this,Z=null,$=0,W=!1,K=!1,H=new K8,Y=new A0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(G,N){let O=G.length!==0||N||$!==0||W;return W=N,$=G.length,O},this.beginShadows=function(){K=!0,E(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(G,N){Z=E(G,N,0)},this.setState=function(G,N,O){let{clippingPlanes:L,clipIntersection:M,clipShadows:q}=G,D=J.get(G);if(!W||L===null||L.length===0||K&&!q)if(K)E(null);else X();else{let C=K?0:$,z=C*4,_=D.clippingState||null;U.value=_,_=E(L,N,z,O);for(let f=0;f!==z;++f)_[f]=Z[f];D.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function X(){if(U.value!==Z)U.value=Z,U.needsUpdate=$>0;Q.numPlanes=$,Q.numIntersection=0}function E(G,N,O,L){let M=G!==null?G.length:0,q=null;if(M!==0){if(q=U.value,L!==!0||q===null){let D=O+M*4,C=N.matrixWorldInverse;if(Y.getNormalMatrix(C),q===null||q.length<D)q=new Float32Array(D);for(let z=0,_=O;z!==M;++z,_+=4)H.copy(G[z]).applyMatrix4(C,Y),H.normal.toArray(q,_),q[_+3]=H.constant}U.value=q,U.needsUpdate=!0}return Q.numPlanes=M,Q.numIntersection=0,q}}function UX(J){let Q=new WeakMap;function Z(H,Y){if(Y===O7)H.mapping=W9;else if(Y===R7)H.mapping=C8;return H}function $(H){if(H&&H.isTexture){let Y=H.mapping;if(Y===O7||Y===R7)if(Q.has(H)){let U=Q.get(H).texture;return Z(U,H.mapping)}else{let U=H.image;if(U&&U.height>0){let X=new DQ(U.height);return X.fromEquirectangularTexture(J,H),Q.set(H,X),H.addEventListener("dispose",W),Z(X.texture,H.mapping)}else return null}}return H}function W(H){let Y=H.target;Y.removeEventListener("dispose",W);let U=Q.get(Y);if(U!==void 0)Q.delete(Y),U.dispose()}function K(){Q=new WeakMap}return{get:$,dispose:K}}var O9=4,g$=[0.125,0.215,0.35,0.446,0.526,0.582],g8=20,TQ=new N9,p$=new v0,SQ=null,jQ=0,yQ=0,vQ=!1,x8=(1+Math.sqrt(5))/2,D9=1/x8,m$=[new y(-x8,D9,0),new y(x8,D9,0),new y(-D9,0,x8),new y(D9,0,x8),new y(0,x8,-D9),new y(0,x8,D9),new y(-1,1,-1),new y(1,1,-1),new y(-1,1,1),new y(1,1,1)];class bQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,Z=0.1,$=100){SQ=this._renderer.getRenderTarget(),jQ=this._renderer.getActiveCubeFace(),yQ=this._renderer.getActiveMipmapLevel(),vQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,Z,$,W),Q>0)this._blur(W,0,0,Q);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=u$(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=d$(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(SQ,jQ,yQ),this._renderer.xr.enabled=vQ,J.scissorTest=!1,l7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===W9||J.mapping===C8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);SQ=this._renderer.getRenderTarget(),jQ=this._renderer.getActiveCubeFace(),yQ=this._renderer.getActiveMipmapLevel(),vQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:_8,minFilter:_8,generateMipmaps:!1,type:A8,format:oJ,colorSpace:j9,depthBuffer:!1},$=l$(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=l$(J,Q,Z);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GX(W)),this._blurMaterial=EX(W,J,Q)}return $}_compileMaterial(J){let Q=new NJ(this._lodPlanes[0],J);this._renderer.compile(Q,TQ)}_sceneToCubeUV(J,Q,Z,$){let H=new zJ(90,1,Q,Z),Y=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],X=this._renderer,E=X.autoClear,G=X.toneMapping;X.getClearColor(p$),X.toneMapping=H8,X.autoClear=!1;let N=new G9({name:"PMREM.Background",side:PJ,depthWrite:!1,depthTest:!1}),O=new NJ(new dJ,N),L=!1,M=J.background;if(M){if(M.isColor)N.color.copy(M),J.background=null,L=!0}else N.color.copy(p$),L=!0;for(let q=0;q<6;q++){let D=q%3;if(D===0)H.up.set(0,Y[q],0),H.lookAt(U[q],0,0);else if(D===1)H.up.set(0,0,Y[q]),H.lookAt(0,U[q],0);else H.up.set(0,Y[q],0),H.lookAt(0,0,U[q]);let C=this._cubeSize;if(l7($,D*C,q>2?C:0,C,C),X.setRenderTarget($),L)X.render(O,H);X.render(J,H)}O.geometry.dispose(),O.material.dispose(),X.toneMapping=G,X.autoClear=E,J.background=M}_textureToCubeUV(J,Q){let Z=this._renderer,$=J.mapping===W9||J.mapping===C8;if($){if(this._cubemapMaterial===null)this._cubemapMaterial=u$();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=d$();let W=$?this._cubemapMaterial:this._equirectMaterial,K=new NJ(this._lodPlanes[0],W),H=W.uniforms;H.envMap.value=J;let Y=this._cubeSize;l7(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(K,TQ)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let $=this._lodPlanes.length;for(let W=1;W<$;W++){let K=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),H=m$[($-W-1)%m$.length];this._blur(J,W-1,W,K,H)}Q.autoClear=Z}_blur(J,Q,Z,$,W){let K=this._pingPongRenderTarget;this._halfBlur(J,K,Q,Z,$,"latitudinal",W),this._halfBlur(K,J,Z,Z,$,"longitudinal",W)}_halfBlur(J,Q,Z,$,W,K,H){let Y=this._renderer,U=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let X=3,E=new NJ(this._lodPlanes[$],U),G=U.uniforms,N=this._sizeLods[Z]-1,O=isFinite(W)?Math.PI/(2*N):2*Math.PI/(2*g8-1),L=W/O,M=isFinite(W)?1+Math.floor(X*L):g8;if(M>g8)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${g8}`);let q=[],D=0;for(let I=0;I<g8;++I){let A=I/L,l=Math.exp(-A*A/2);if(q.push(l),I===0)D+=l;else if(I<M)D+=2*l}for(let I=0;I<q.length;I++)q[I]=q[I]/D;if(G.envMap.value=J.texture,G.samples.value=M,G.weights.value=q,G.latitudinal.value=K==="latitudinal",H)G.poleAxis.value=H;let{_lodMax:C}=this;G.dTheta.value=O,G.mipInt.value=C-Z;let z=this._sizeLods[$],_=3*z*($>C-O9?$-C+O9:0),f=4*(this._cubeSize-z);l7(Q,_,f,3*z,2*z),Y.setRenderTarget(Q),Y.render(E,TQ)}}function GX(J){let Q=[],Z=[],$=[],W=J,K=J-O9+1+g$.length;for(let H=0;H<K;H++){let Y=Math.pow(2,W);Z.push(Y);let U=1/Y;if(H>J-O9)U=g$[H-J+O9-1];else if(H===0)U=0;$.push(U);let X=1/(Y-2),E=-X,G=1+X,N=[E,E,G,E,G,G,E,E,G,G,E,G],O=6,L=6,M=3,q=2,D=1,C=new Float32Array(M*L*O),z=new Float32Array(q*L*O),_=new Float32Array(D*L*O);for(let I=0;I<O;I++){let A=I%3*2/3-1,l=I>2?0:-1,k=[A,l,0,A+0.6666666666666666,l,0,A+0.6666666666666666,l+1,0,A,l,0,A+0.6666666666666666,l+1,0,A,l+1,0];C.set(k,M*L*I),z.set(N,q*L*I);let V=[I,I,I,I,I,I];_.set(V,D*L*I)}let f=new rJ;if(f.setAttribute("position",new fJ(C,M)),f.setAttribute("uv",new fJ(z,q)),f.setAttribute("faceIndex",new fJ(_,D)),Q.push(f),W>O9)W--}return{lodPlanes:Q,sizeLods:Z,sigmas:$}}function l$(J,Q,Z){let $=new lJ(J,Q,Z);return $.texture.mapping=A9,$.texture.name="PMREM.cubeUv",$.scissorTest=!0,$}function l7(J,Q,Z,$,W){J.viewport.set(Q,Z,$,W),J.scissor.set(Q,Z,$,W)}function EX(J,Q,Z){let $=new Float32Array(g8),W=new y(0,1,0);return new TJ({name:"SphericalGaussianBlur",defines:{n:g8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:$},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:xQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:iJ,depthTest:!1,depthWrite:!1})}function d$(){return new TJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:iJ,depthTest:!1,depthWrite:!1})}function u$(){return new TJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:iJ,depthTest:!1,depthWrite:!1})}function xQ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NX(J){let Q=new WeakMap,Z=null;function $(Y){if(Y&&Y.isTexture){let U=Y.mapping,X=U===O7||U===R7,E=U===W9||U===C8;if(X||E){let G=Q.get(Y),N=G!==void 0?G.texture.pmremVersion:0;if(Y.isRenderTargetTexture&&Y.pmremVersion!==N){if(Z===null)Z=new bQ(J);return G=X?Z.fromEquirectangular(Y,G):Z.fromCubemap(Y,G),G.texture.pmremVersion=Y.pmremVersion,Q.set(Y,G),G.texture}else if(G!==void 0)return G.texture;else{let O=Y.image;if(X&&O&&O.height>0||E&&O&&W(O)){if(Z===null)Z=new bQ(J);return G=X?Z.fromEquirectangular(Y):Z.fromCubemap(Y),G.texture.pmremVersion=Y.pmremVersion,Q.set(Y,G),Y.addEventListener("dispose",K),G.texture}else return null}}}return Y}function W(Y){let U=0,X=6;for(let E=0;E<X;E++)if(Y[E]!==void 0)U++;return U===X}function K(Y){let U=Y.target;U.removeEventListener("dispose",K);let X=Q.get(U);if(X!==void 0)Q.delete(U),X.dispose()}function H(){if(Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:$,dispose:H}}function qX(J){let Q={};function Z($){if(Q[$]!==void 0)return Q[$];let W;switch($){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension($)}return Q[$]=W,W}return{has:function($){return Z($)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function($){let W=Z($);if(W===null)T8("THREE.WebGLRenderer: "+$+" extension not supported.");return W}}}function DX(J,Q,Z,$){let W={},K=new WeakMap;function H(G){let N=G.target;if(N.index!==null)Q.remove(N.index);for(let L in N.attributes)Q.remove(N.attributes[L]);N.removeEventListener("dispose",H),delete W[N.id];let O=K.get(N);if(O)Q.remove(O),K.delete(N);if($.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Z.memory.geometries--}function Y(G,N){if(W[N.id]===!0)return N;return N.addEventListener("dispose",H),W[N.id]=!0,Z.memory.geometries++,N}function U(G){let N=G.attributes;for(let O in N)Q.update(N[O],J.ARRAY_BUFFER)}function X(G){let N=[],O=G.index,L=G.attributes.position,M=0;if(O!==null){let C=O.array;M=O.version;for(let z=0,_=C.length;z<_;z+=3){let f=C[z+0],I=C[z+1],A=C[z+2];N.push(f,I,I,A,A,f)}}else if(L!==void 0){let C=L.array;M=L.version;for(let z=0,_=C.length/3-1;z<_;z+=3){let f=z+0,I=z+1,A=z+2;N.push(f,I,I,A,A,f)}}else return;let q=new((HQ(N))?P7:A7)(N,1);q.version=M;let D=K.get(G);if(D)Q.remove(D);K.set(G,q)}function E(G){let N=K.get(G);if(N){let O=G.index;if(O!==null){if(N.version<O.version)X(G)}}else X(G);return K.get(G)}return{get:Y,update:U,getWireframeAttribute:E}}function OX(J,Q,Z){let $;function W(N){$=N}let K,H;function Y(N){K=N.type,H=N.bytesPerElement}function U(N,O){J.drawElements($,O,K,N*H),Z.update(O,$,1)}function X(N,O,L){if(L===0)return;J.drawElementsInstanced($,O,K,N*H,L),Z.update(O,$,L)}function E(N,O,L){if(L===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL($,O,0,K,N,0,L);let q=0;for(let D=0;D<L;D++)q+=O[D];Z.update(q,$,1)}function G(N,O,L,M){if(L===0)return;let q=Q.get("WEBGL_multi_draw");if(q===null)for(let D=0;D<N.length;D++)X(N[D]/H,O[D],M[D]);else{q.multiDrawElementsInstancedWEBGL($,O,0,K,N,0,M,0,L);let D=0;for(let C=0;C<L;C++)D+=O[C]*M[C];Z.update(D,$,1)}}this.setMode=W,this.setIndex=Y,this.render=U,this.renderInstances=X,this.renderMultiDraw=E,this.renderMultiDrawInstances=G}function RX(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function $(K,H,Y){switch(Z.calls++,H){case J.TRIANGLES:Z.triangles+=Y*(K/3);break;case J.LINES:Z.lines+=Y*(K/2);break;case J.LINE_STRIP:Z.lines+=Y*(K-1);break;case J.LINE_LOOP:Z.lines+=Y*K;break;case J.POINTS:Z.points+=Y*K;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",H);break}}function W(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:W,update:$}}function FX(J,Q,Z){let $=new WeakMap,W=new $J;function K(H,Y,U){let X=H.morphTargetInfluences,E=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,G=E!==void 0?E.length:0,N=$.get(Y);if(N===void 0||N.count!==G){let k=function(){A.dispose(),$.delete(Y),Y.removeEventListener("dispose",k)};if(N!==void 0)N.texture.dispose();let O=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,M=Y.morphAttributes.color!==void 0,q=Y.morphAttributes.position||[],D=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],z=0;if(O===!0)z=1;if(L===!0)z=2;if(M===!0)z=3;let _=Y.attributes.position.count*z,f=1;if(_>Q.maxTextureSize)f=Math.ceil(_/Q.maxTextureSize),_=Q.maxTextureSize;let I=new Float32Array(_*f*4*G),A=new C7(I,_,f,G);A.type=F8,A.needsUpdate=!0;let l=z*4;for(let V=0;V<G;V++){let j=q[V],x=D[V],u=C[V],d=_*f*4*V;for(let a=0;a<j.count;a++){let p=a*l;if(O===!0)W.fromBufferAttribute(j,a),I[d+p+0]=W.x,I[d+p+1]=W.y,I[d+p+2]=W.z,I[d+p+3]=0;if(L===!0)W.fromBufferAttribute(x,a),I[d+p+4]=W.x,I[d+p+5]=W.y,I[d+p+6]=W.z,I[d+p+7]=0;if(M===!0)W.fromBufferAttribute(u,a),I[d+p+8]=W.x,I[d+p+9]=W.y,I[d+p+10]=W.z,I[d+p+11]=u.itemSize===4?W.w:1}}N={count:G,texture:A,size:new z0(_,f)},$.set(Y,N),Y.addEventListener("dispose",k)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",H.morphTexture,Z);else{let O=0;for(let M=0;M<X.length;M++)O+=X[M];let L=Y.morphTargetsRelative?1:1-O;U.getUniforms().setValue(J,"morphTargetBaseInfluence",L),U.getUniforms().setValue(J,"morphTargetInfluences",X)}U.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Z),U.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function kX(J,Q,Z,$){let W=new WeakMap;function K(U){let X=$.render.frame,E=U.geometry,G=Q.get(U,E);if(W.get(G)!==X)Q.update(G),W.set(G,X);if(U.isInstancedMesh){if(U.hasEventListener("dispose",Y)===!1)U.addEventListener("dispose",Y);if(W.get(U)!==X){if(Z.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Z.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,X)}}if(U.isSkinnedMesh){let N=U.skeleton;if(W.get(N)!==X)N.update(),W.set(N,X)}return G}function H(){W=new WeakMap}function Y(U){let X=U.target;if(X.removeEventListener("dispose",Y),Z.remove(X.instanceMatrix),X.instanceColor!==null)Z.remove(X.instanceColor)}return{update:K,dispose:H}}var UW=new BJ,c$=new v7(1,1),GW=new C7,EW=new GQ,NW=new j7,s$=[],n$=[],i$=new Float32Array(16),o$=new Float32Array(9),a$=new Float32Array(4);function R9(J,Q,Z){let $=J[0];if($<=0||$>0)return J;let W=Q*Z,K=s$[W];if(K===void 0)K=new Float32Array(W),s$[W]=K;if(Q!==0){$.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=Z,J[H].toArray(K,Y)}return K}function UJ(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,$=J.length;Z<$;Z++)if(J[Z]!==Q[Z])return!1;return!0}function GJ(J,Q){for(let Z=0,$=Q.length;Z<$;Z++)J[Z]=Q[Z]}function u7(J,Q){let Z=n$[Q];if(Z===void 0)Z=new Int32Array(Q),n$[Q]=Z;for(let $=0;$!==Q;++$)Z[$]=J.allocateTextureUnit();return Z}function MX(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function VX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(UJ(Z,Q))return;J.uniform2fv(this.addr,Q),GJ(Z,Q)}}function LX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(UJ(Z,Q))return;J.uniform3fv(this.addr,Q),GJ(Z,Q)}}function zX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(UJ(Z,Q))return;J.uniform4fv(this.addr,Q),GJ(Z,Q)}}function BX(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(UJ(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),GJ(Z,Q)}else{if(UJ(Z,$))return;a$.set($),J.uniformMatrix2fv(this.addr,!1,a$),GJ(Z,$)}}function IX(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(UJ(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),GJ(Z,Q)}else{if(UJ(Z,$))return;o$.set($),J.uniformMatrix3fv(this.addr,!1,o$),GJ(Z,$)}}function wX(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(UJ(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),GJ(Z,Q)}else{if(UJ(Z,$))return;i$.set($),J.uniformMatrix4fv(this.addr,!1,i$),GJ(Z,$)}}function CX(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function _X(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(UJ(Z,Q))return;J.uniform2iv(this.addr,Q),GJ(Z,Q)}}function AX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(UJ(Z,Q))return;J.uniform3iv(this.addr,Q),GJ(Z,Q)}}function PX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(UJ(Z,Q))return;J.uniform4iv(this.addr,Q),GJ(Z,Q)}}function TX(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function SX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(UJ(Z,Q))return;J.uniform2uiv(this.addr,Q),GJ(Z,Q)}}function jX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(UJ(Z,Q))return;J.uniform3uiv(this.addr,Q),GJ(Z,Q)}}function yX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(UJ(Z,Q))return;J.uniform4uiv(this.addr,Q),GJ(Z,Q)}}function vX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)c$.compareFunction=WQ,K=c$;else K=UW;Z.setTexture2D(Q||K,W)}function fX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture3D(Q||EW,W)}function bX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTextureCube(Q||NW,W)}function hX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture2DArray(Q||GW,W)}function xX(J){switch(J){case 5126:return MX;case 35664:return VX;case 35665:return LX;case 35666:return zX;case 35674:return BX;case 35675:return IX;case 35676:return wX;case 5124:case 35670:return CX;case 35667:case 35671:return _X;case 35668:case 35672:return AX;case 35669:case 35673:return PX;case 5125:return TX;case 36294:return SX;case 36295:return jX;case 36296:return yX;case 35678:case 36198:case 36298:case 36306:case 35682:return vX;case 35679:case 36299:case 36307:return fX;case 35680:case 36300:case 36308:case 36293:return bX;case 36289:case 36303:case 36311:case 36292:return hX}}function gX(J,Q){J.uniform1fv(this.addr,Q)}function pX(J,Q){let Z=R9(Q,this.size,2);J.uniform2fv(this.addr,Z)}function mX(J,Q){let Z=R9(Q,this.size,3);J.uniform3fv(this.addr,Z)}function lX(J,Q){let Z=R9(Q,this.size,4);J.uniform4fv(this.addr,Z)}function dX(J,Q){let Z=R9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function uX(J,Q){let Z=R9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function cX(J,Q){let Z=R9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function sX(J,Q){J.uniform1iv(this.addr,Q)}function nX(J,Q){J.uniform2iv(this.addr,Q)}function iX(J,Q){J.uniform3iv(this.addr,Q)}function oX(J,Q){J.uniform4iv(this.addr,Q)}function aX(J,Q){J.uniform1uiv(this.addr,Q)}function rX(J,Q){J.uniform2uiv(this.addr,Q)}function tX(J,Q){J.uniform3uiv(this.addr,Q)}function eX(J,Q){J.uniform4uiv(this.addr,Q)}function JU(J,Q,Z){let $=this.cache,W=Q.length,K=u7(Z,W);if(!UJ($,K))J.uniform1iv(this.addr,K),GJ($,K);for(let H=0;H!==W;++H)Z.setTexture2D(Q[H]||UW,K[H])}function QU(J,Q,Z){let $=this.cache,W=Q.length,K=u7(Z,W);if(!UJ($,K))J.uniform1iv(this.addr,K),GJ($,K);for(let H=0;H!==W;++H)Z.setTexture3D(Q[H]||EW,K[H])}function ZU(J,Q,Z){let $=this.cache,W=Q.length,K=u7(Z,W);if(!UJ($,K))J.uniform1iv(this.addr,K),GJ($,K);for(let H=0;H!==W;++H)Z.setTextureCube(Q[H]||NW,K[H])}function $U(J,Q,Z){let $=this.cache,W=Q.length,K=u7(Z,W);if(!UJ($,K))J.uniform1iv(this.addr,K),GJ($,K);for(let H=0;H!==W;++H)Z.setTexture2DArray(Q[H]||GW,K[H])}function WU(J){switch(J){case 5126:return gX;case 35664:return pX;case 35665:return mX;case 35666:return lX;case 35674:return dX;case 35675:return uX;case 35676:return cX;case 5124:case 35670:return sX;case 35667:case 35671:return nX;case 35668:case 35672:return iX;case 35669:case 35673:return oX;case 5125:return aX;case 36294:return rX;case 36295:return tX;case 36296:return eX;case 35678:case 36198:case 36298:case 36306:case 35682:return JU;case 35679:case 36299:case 36307:return QU;case 35680:case 36300:case 36308:case 36293:return ZU;case 36289:case 36303:case 36311:case 36292:return $U}}class qW{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=xX(Q.type)}}class DW{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=WU(Q.type)}}class OW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let $=this.seq;for(let W=0,K=$.length;W!==K;++W){let H=$[W];H.setValue(J,Q[H.id],Z)}}}var fQ=/(\w+)(\])?(\[|\.)?/g;function r$(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function KU(J,Q,Z){let $=J.name,W=$.length;fQ.lastIndex=0;while(!0){let K=fQ.exec($),H=fQ.lastIndex,Y=K[1],U=K[2]==="]",X=K[3];if(U)Y=Y|0;if(X===void 0||X==="["&&H+2===W){r$(Z,X===void 0?new qW(Y,J,Q):new DW(Y,J,Q));break}else{let G=Z.map[Y];if(G===void 0)G=new OW(Y),r$(Z,G);Z=G}}}class x9{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let $=0;$<Z;++$){let W=J.getActiveUniform(Q,$),K=J.getUniformLocation(Q,W.name);KU(W,K,this)}}setValue(J,Q,Z,$){let W=this.map[Q];if(W!==void 0)W.setValue(J,Z,$)}setOptional(J,Q,Z){let $=Q[Z];if($!==void 0)this.setValue(J,Z,$)}static upload(J,Q,Z,$){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=Z[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,$)}}static seqWithValue(J,Q){let Z=[];for(let $=0,W=J.length;$!==W;++$){let K=J[$];if(K.id in Q)Z.push(K)}return Z}}function t$(J,Q,Z){let $=J.createShader(Q);return J.shaderSource($,Z),J.compileShader($),$}var YU=37297,HU=0;function XU(J,Q){let Z=J.split(`
`),$=[],W=Math.max(Q-6,0),K=Math.min(Q+6,Z.length);for(let H=W;H<K;H++){let Y=H+1;$.push(`${Y===Q?">":" "} ${Y}: ${Z[H]}`)}return $.join(`
`)}var e$=new A0;function UU(J){l0._getMatrix(e$,l0.workingColorSpace,J);let Q=`mat3( ${e$.elements.map((Z)=>Z.toFixed(4))} )`;switch(l0.getTransfer(J)){case $Q:return[Q,"LinearTransferOETF"];case t0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function JW(J,Q,Z){let $=J.getShaderParameter(Q,J.COMPILE_STATUS),W=J.getShaderInfoLog(Q).trim();if($&&W==="")return"";let K=/ERROR: 0:(\d+)/.exec(W);if(K){let H=parseInt(K[1]);return Z.toUpperCase()+`

`+W+`

`+XU(J.getShaderSource(Q),H)}else return W}function GU(J,Q){let Z=UU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function EU(J,Q){let Z;switch(Q){case rZ:Z="Linear";break;case tZ:Z="Reinhard";break;case eZ:Z="Cineon";break;case J$:Z="ACESFilmic";break;case Z$:Z="AgX";break;case $$:Z="Neutral";break;case Q$:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var d7=new y;function NU(){l0.getLuminanceCoefficients(d7);let J=d7.x.toFixed(4),Q=d7.y.toFixed(4),Z=d7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function qU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(h9).join(`
`)}function DU(J){let Q=[];for(let Z in J){let $=J[Z];if($===!1)continue;Q.push("#define "+Z+" "+$)}return Q.join(`
`)}function OU(J,Q){let Z={},$=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<$;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;Z[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return Z}function h9(J){return J!==""}function QW(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function ZW(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var RU=/^[ \t]*#include +<([\w\d./]+)>/gm;function hQ(J){return J.replace(RU,kU)}var FU=new Map;function kU(J,Q){let Z=j0[Q];if(Z===void 0){let $=FU.get(Q);if($!==void 0)Z=j0[$],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,$);else throw new Error("Can not resolve #include <"+Q+">")}return hQ(Z)}var MU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $W(J){return J.replace(MU,VU)}function VU(J,Q,Z,$){let W="";for(let K=parseInt(Q);K<parseInt(Z);K++)W+=$.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function WW(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function LU(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===L6)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===_Z)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===sJ)Q="SHADOWMAP_TYPE_VSM";return Q}function zU(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case W9:case C8:Q="ENVMAP_TYPE_CUBE";break;case A9:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function BU(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case C8:Q="ENVMAP_MODE_REFRACTION";break}return Q}function IU(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case iZ:Q="ENVMAP_BLENDING_MULTIPLY";break;case oZ:Q="ENVMAP_BLENDING_MIX";break;case aZ:Q="ENVMAP_BLENDING_ADD";break}return Q}function wU(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,$=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:$,maxMip:Z}}function CU(J,Q,Z,$){let W=J.getContext(),K=Z.defines,H=Z.vertexShader,Y=Z.fragmentShader,U=LU(Z),X=zU(Z),E=BU(Z),G=IU(Z),N=wU(Z),O=qU(Z),L=DU(K),M=W.createProgram(),q,D,C=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(q=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,L].filter(h9).join(`
`),q.length>0)q+=`
`;if(D=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,L].filter(h9).join(`
`),D.length>0)D+=`
`}else q=[WW(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,L,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+E:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(h9).join(`
`),D=[WW(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,L,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+X:"",Z.envMap?"#define "+E:"",Z.envMap?"#define "+G:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==H8?"#define TONE_MAPPING":"",Z.toneMapping!==H8?j0.tonemapping_pars_fragment:"",Z.toneMapping!==H8?EU("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",j0.colorspace_pars_fragment,GU("linearToOutputTexel",Z.outputColorSpace),NU(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(h9).join(`
`);if(H=hQ(H),H=QW(H,Z),H=ZW(H,Z),Y=hQ(Y),Y=QW(Y,Z),Y=ZW(Y,Z),H=$W(H),Y=$W(Y),Z.isRawShaderMaterial!==!0)C=`#version 300 es
`,q=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,D=["#define varying in",Z.glslVersion===KQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===KQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let z=C+q+H,_=C+D+Y,f=t$(W,W.VERTEX_SHADER,z),I=t$(W,W.FRAGMENT_SHADER,_);if(W.attachShader(M,f),W.attachShader(M,I),Z.index0AttributeName!==void 0)W.bindAttribLocation(M,0,Z.index0AttributeName);else if(Z.morphTargets===!0)W.bindAttribLocation(M,0,"position");W.linkProgram(M);function A(j){if(J.debug.checkShaderErrors){let x=W.getProgramInfoLog(M).trim(),u=W.getShaderInfoLog(f).trim(),d=W.getShaderInfoLog(I).trim(),a=!0,p=!0;if(W.getProgramParameter(M,W.LINK_STATUS)===!1)if(a=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,M,f,I);else{let t=JW(W,f,"vertex"),g=JW(W,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(M,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+x+`
`+t+`
`+g)}else if(x!=="")console.warn("THREE.WebGLProgram: Program Info Log:",x);else if(u===""||d==="")p=!1;if(p)j.diagnostics={runnable:a,programLog:x,vertexShader:{log:u,prefix:q},fragmentShader:{log:d,prefix:D}}}W.deleteShader(f),W.deleteShader(I),l=new x9(W,M),k=OU(W,M)}let l;this.getUniforms=function(){if(l===void 0)A(this);return l};let k;this.getAttributes=function(){if(k===void 0)A(this);return k};let V=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=W.getProgramParameter(M,YU);return V},this.destroy=function(){$.releaseStatesOfProgram(this),W.deleteProgram(M),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=HU++,this.cacheKey=Q,this.usedTimes=1,this.program=M,this.vertexShader=f,this.fragmentShader=I,this}var _U=0;class RW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:Z}=J,$=this._getShaderStage(Q),W=this._getShaderStage(Z),K=this._getShaderCacheForMaterial(J);if(K.has($)===!1)K.add($),$.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new FW(J),Q.set(J,Z);return Z}}class FW{constructor(J){this.id=_U++,this.code=J,this.usedTimes=0}}function AU(J,Q,Z,$,W,K,H){let Y=new _7,U=new RW,X=new Set,E=[],G=W.logarithmicDepthBuffer,N=W.vertexTextures,O=W.precision,L={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(k){if(X.add(k),k===0)return"uv";return`uv${k}`}function q(k,V,j,x,u){let d=x.fog,a=u.geometry,p=k.isMeshStandardMaterial?x.environment:null,t=(k.isMeshStandardMaterial?Z:Q).get(k.envMap||p),g=!!t&&t.mapping===A9?t.image.height:null,H0=L[k.type];if(k.precision!==null){if(O=W.getMaxPrecision(k.precision),O!==k.precision)console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",O,"instead.")}let U0=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,w0=U0!==void 0?U0.length:0,h0=0;if(a.morphAttributes.position!==void 0)h0=1;if(a.morphAttributes.normal!==void 0)h0=2;if(a.morphAttributes.color!==void 0)h0=3;let s,Q0,R0,V0;if(H0){let s0=tJ[H0];s=s0.vertexShader,Q0=s0.fragmentShader}else s=k.vertexShader,Q0=k.fragmentShader,U.update(k),R0=U.getVertexShaderID(k),V0=U.getFragmentShaderID(k);let $0=J.getRenderTarget(),g0=J.state.buffers.depth.getReversed(),f0=u.isInstancedMesh===!0,p0=u.isBatchedMesh===!0,JJ=!!k.map,c0=!!k.matcap,w=!!t,qJ=!!k.aoMap,a0=!!k.lightMap,r0=!!k.bumpMap,E0=!!k.normalMap,WJ=!!k.displacementMap,F0=!!k.emissiveMap,_0=!!k.metalnessMap,B=!!k.roughnessMap,R=k.anisotropy>0,v=k.clearcoat>0,i=k.dispersion>0,o=k.iridescence>0,m=k.sheen>0,L0=k.transmission>0,W0=R&&!!k.anisotropyMap,q0=v&&!!k.clearcoatMap,P0=v&&!!k.clearcoatNormalMap,J0=v&&!!k.clearcoatRoughnessMap,G0=o&&!!k.iridescenceMap,b0=o&&!!k.iridescenceThicknessMap,B0=m&&!!k.sheenColorMap,D0=m&&!!k.sheenRoughnessMap,T0=!!k.specularMap,y0=!!k.specularColorMap,QJ=!!k.specularIntensityMap,P=L0&&!!k.transmissionMap,e=L0&&!!k.thicknessMap,c=!!k.gradientMap,n=!!k.alphaMap,X0=k.alphaTest>0,Y0=!!k.alphaHash,S0=!!k.extensions,KJ=H8;if(k.toneMapped){if($0===null||$0.isXRRenderTarget===!0)KJ=J.toneMapping}let DJ={shaderID:H0,shaderType:k.type,shaderName:k.name,vertexShader:s,fragmentShader:Q0,defines:k.defines,customVertexShaderID:R0,customFragmentShaderID:V0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:O,batching:p0,batchingColor:p0&&u._colorsTexture!==null,instancing:f0,instancingColor:f0&&u.instanceColor!==null,instancingMorph:f0&&u.morphTexture!==null,supportsVertexTextures:N,outputColorSpace:$0===null?J.outputColorSpace:$0.isXRRenderTarget===!0?$0.texture.colorSpace:j9,alphaToCoverage:!!k.alphaToCoverage,map:JJ,matcap:c0,envMap:w,envMapMode:w&&t.mapping,envMapCubeUVHeight:g,aoMap:qJ,lightMap:a0,bumpMap:r0,normalMap:E0,displacementMap:N&&WJ,emissiveMap:F0,normalMapObjectSpace:E0&&k.normalMapType===V$,normalMapTangentSpace:E0&&k.normalMapType===M$,metalnessMap:_0,roughnessMap:B,anisotropy:R,anisotropyMap:W0,clearcoat:v,clearcoatMap:q0,clearcoatNormalMap:P0,clearcoatRoughnessMap:J0,dispersion:i,iridescence:o,iridescenceMap:G0,iridescenceThicknessMap:b0,sheen:m,sheenColorMap:B0,sheenRoughnessMap:D0,specularMap:T0,specularColorMap:y0,specularIntensityMap:QJ,transmission:L0,transmissionMap:P,thicknessMap:e,gradientMap:c,opaque:k.transparent===!1&&k.blending===C9&&k.alphaToCoverage===!1,alphaMap:n,alphaTest:X0,alphaHash:Y0,combine:k.combine,mapUv:JJ&&M(k.map.channel),aoMapUv:qJ&&M(k.aoMap.channel),lightMapUv:a0&&M(k.lightMap.channel),bumpMapUv:r0&&M(k.bumpMap.channel),normalMapUv:E0&&M(k.normalMap.channel),displacementMapUv:WJ&&M(k.displacementMap.channel),emissiveMapUv:F0&&M(k.emissiveMap.channel),metalnessMapUv:_0&&M(k.metalnessMap.channel),roughnessMapUv:B&&M(k.roughnessMap.channel),anisotropyMapUv:W0&&M(k.anisotropyMap.channel),clearcoatMapUv:q0&&M(k.clearcoatMap.channel),clearcoatNormalMapUv:P0&&M(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J0&&M(k.clearcoatRoughnessMap.channel),iridescenceMapUv:G0&&M(k.iridescenceMap.channel),iridescenceThicknessMapUv:b0&&M(k.iridescenceThicknessMap.channel),sheenColorMapUv:B0&&M(k.sheenColorMap.channel),sheenRoughnessMapUv:D0&&M(k.sheenRoughnessMap.channel),specularMapUv:T0&&M(k.specularMap.channel),specularColorMapUv:y0&&M(k.specularColorMap.channel),specularIntensityMapUv:QJ&&M(k.specularIntensityMap.channel),transmissionMapUv:P&&M(k.transmissionMap.channel),thicknessMapUv:e&&M(k.thicknessMap.channel),alphaMapUv:n&&M(k.alphaMap.channel),vertexTangents:!!a.attributes.tangent&&(E0||R),vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!a.attributes.color&&a.attributes.color.itemSize===4,pointsUvs:u.isPoints===!0&&!!a.attributes.uv&&(JJ||n),fog:!!d,useFog:k.fog===!0,fogExp2:!!d&&d.isFogExp2,flatShading:k.flatShading===!0,sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:G,reverseDepthBuffer:g0,skinning:u.isSkinnedMesh===!0,morphTargets:a.morphAttributes.position!==void 0,morphNormals:a.morphAttributes.normal!==void 0,morphColors:a.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:h0,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:KJ,decodeVideoTexture:JJ&&k.map.isVideoTexture===!0&&l0.getTransfer(k.map.colorSpace)===t0,decodeVideoTextureEmissive:F0&&k.emissiveMap.isVideoTexture===!0&&l0.getTransfer(k.emissiveMap.colorSpace)===t0,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===nJ,flipSided:k.side===PJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:S0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(S0&&k.extensions.multiDraw===!0||p0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return DJ.vertexUv1s=X.has(1),DJ.vertexUv2s=X.has(2),DJ.vertexUv3s=X.has(3),X.clear(),DJ}function D(k){let V=[];if(k.shaderID)V.push(k.shaderID);else V.push(k.customVertexShaderID),V.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let j in k.defines)V.push(j),V.push(k.defines[j]);if(k.isRawShaderMaterial===!1)C(V,k),z(V,k),V.push(J.outputColorSpace);return V.push(k.customProgramCacheKey),V.join()}function C(k,V){k.push(V.precision),k.push(V.outputColorSpace),k.push(V.envMapMode),k.push(V.envMapCubeUVHeight),k.push(V.mapUv),k.push(V.alphaMapUv),k.push(V.lightMapUv),k.push(V.aoMapUv),k.push(V.bumpMapUv),k.push(V.normalMapUv),k.push(V.displacementMapUv),k.push(V.emissiveMapUv),k.push(V.metalnessMapUv),k.push(V.roughnessMapUv),k.push(V.anisotropyMapUv),k.push(V.clearcoatMapUv),k.push(V.clearcoatNormalMapUv),k.push(V.clearcoatRoughnessMapUv),k.push(V.iridescenceMapUv),k.push(V.iridescenceThicknessMapUv),k.push(V.sheenColorMapUv),k.push(V.sheenRoughnessMapUv),k.push(V.specularMapUv),k.push(V.specularColorMapUv),k.push(V.specularIntensityMapUv),k.push(V.transmissionMapUv),k.push(V.thicknessMapUv),k.push(V.combine),k.push(V.fogExp2),k.push(V.sizeAttenuation),k.push(V.morphTargetsCount),k.push(V.morphAttributeCount),k.push(V.numDirLights),k.push(V.numPointLights),k.push(V.numSpotLights),k.push(V.numSpotLightMaps),k.push(V.numHemiLights),k.push(V.numRectAreaLights),k.push(V.numDirLightShadows),k.push(V.numPointLightShadows),k.push(V.numSpotLightShadows),k.push(V.numSpotLightShadowsWithMaps),k.push(V.numLightProbes),k.push(V.shadowMapType),k.push(V.toneMapping),k.push(V.numClippingPlanes),k.push(V.numClipIntersection),k.push(V.depthPacking)}function z(k,V){if(Y.disableAll(),V.supportsVertexTextures)Y.enable(0);if(V.instancing)Y.enable(1);if(V.instancingColor)Y.enable(2);if(V.instancingMorph)Y.enable(3);if(V.matcap)Y.enable(4);if(V.envMap)Y.enable(5);if(V.normalMapObjectSpace)Y.enable(6);if(V.normalMapTangentSpace)Y.enable(7);if(V.clearcoat)Y.enable(8);if(V.iridescence)Y.enable(9);if(V.alphaTest)Y.enable(10);if(V.vertexColors)Y.enable(11);if(V.vertexAlphas)Y.enable(12);if(V.vertexUv1s)Y.enable(13);if(V.vertexUv2s)Y.enable(14);if(V.vertexUv3s)Y.enable(15);if(V.vertexTangents)Y.enable(16);if(V.anisotropy)Y.enable(17);if(V.alphaHash)Y.enable(18);if(V.batching)Y.enable(19);if(V.dispersion)Y.enable(20);if(V.batchingColor)Y.enable(21);if(k.push(Y.mask),Y.disableAll(),V.fog)Y.enable(0);if(V.useFog)Y.enable(1);if(V.flatShading)Y.enable(2);if(V.logarithmicDepthBuffer)Y.enable(3);if(V.reverseDepthBuffer)Y.enable(4);if(V.skinning)Y.enable(5);if(V.morphTargets)Y.enable(6);if(V.morphNormals)Y.enable(7);if(V.morphColors)Y.enable(8);if(V.premultipliedAlpha)Y.enable(9);if(V.shadowMapEnabled)Y.enable(10);if(V.doubleSided)Y.enable(11);if(V.flipSided)Y.enable(12);if(V.useDepthPacking)Y.enable(13);if(V.dithering)Y.enable(14);if(V.transmission)Y.enable(15);if(V.sheen)Y.enable(16);if(V.opaque)Y.enable(17);if(V.pointsUvs)Y.enable(18);if(V.decodeVideoTexture)Y.enable(19);if(V.decodeVideoTextureEmissive)Y.enable(20);if(V.alphaToCoverage)Y.enable(21);k.push(Y.mask)}function _(k){let V=L[k.type],j;if(V){let x=tJ[V];j=T7.clone(x.uniforms)}else j=k.uniforms;return j}function f(k,V){let j;for(let x=0,u=E.length;x<u;x++){let d=E[x];if(d.cacheKey===V){j=d,++j.usedTimes;break}}if(j===void 0)j=new CU(J,V,k,K),E.push(j);return j}function I(k){if(--k.usedTimes===0){let V=E.indexOf(k);E[V]=E[E.length-1],E.pop(),k.destroy()}}function A(k){U.remove(k)}function l(){U.dispose()}return{getParameters:q,getProgramCacheKey:D,getUniforms:_,acquireProgram:f,releaseProgram:I,releaseShaderCache:A,programs:E,dispose:l}}function PU(){let J=new WeakMap;function Q(H){return J.has(H)}function Z(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function $(H){J.delete(H)}function W(H,Y,U){J.get(H)[Y]=U}function K(){J=new WeakMap}return{has:Q,get:Z,remove:$,update:W,dispose:K}}function TU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function KW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function YW(){let J=[],Q=0,Z=[],$=[],W=[];function K(){Q=0,Z.length=0,$.length=0,W.length=0}function H(G,N,O,L,M,q){let D=J[Q];if(D===void 0)D={id:G.id,object:G,geometry:N,material:O,groupOrder:L,renderOrder:G.renderOrder,z:M,group:q},J[Q]=D;else D.id=G.id,D.object=G,D.geometry=N,D.material=O,D.groupOrder=L,D.renderOrder=G.renderOrder,D.z=M,D.group=q;return Q++,D}function Y(G,N,O,L,M,q){let D=H(G,N,O,L,M,q);if(O.transmission>0)$.push(D);else if(O.transparent===!0)W.push(D);else Z.push(D)}function U(G,N,O,L,M,q){let D=H(G,N,O,L,M,q);if(O.transmission>0)$.unshift(D);else if(O.transparent===!0)W.unshift(D);else Z.unshift(D)}function X(G,N){if(Z.length>1)Z.sort(G||TU);if($.length>1)$.sort(N||KW);if(W.length>1)W.sort(N||KW)}function E(){for(let G=Q,N=J.length;G<N;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Z,transmissive:$,transparent:W,init:K,push:Y,unshift:U,finish:E,sort:X}}function SU(){let J=new WeakMap;function Q($,W){let K=J.get($),H;if(K===void 0)H=new YW,J.set($,[H]);else if(W>=K.length)H=new YW,K.push(H);else H=K[W];return H}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function jU(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={direction:new y,color:new v0};break;case"SpotLight":Z={position:new y,direction:new y,color:new v0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new y,color:new v0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new y,skyColor:new v0,groundColor:new v0};break;case"RectAreaLight":Z={color:new v0,position:new y,halfWidth:new y,halfHeight:new y};break}return J[Q.id]=Z,Z}}}function yU(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var vU=0;function fU(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function bU(J){let Q=new jU,Z=yU(),$={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let X=0;X<9;X++)$.probe.push(new y);let W=new y,K=new ZJ,H=new ZJ;function Y(X){let E=0,G=0,N=0;for(let k=0;k<9;k++)$.probe[k].set(0,0,0);let O=0,L=0,M=0,q=0,D=0,C=0,z=0,_=0,f=0,I=0,A=0;X.sort(fU);for(let k=0,V=X.length;k<V;k++){let j=X[k],x=j.color,u=j.intensity,d=j.distance,a=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)E+=x.r*u,G+=x.g*u,N+=x.b*u;else if(j.isLightProbe){for(let p=0;p<9;p++)$.probe[p].addScaledVector(j.sh.coefficients[p],u);A++}else if(j.isDirectionalLight){let p=Q.get(j);if(p.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let t=j.shadow,g=Z.get(j);g.shadowIntensity=t.intensity,g.shadowBias=t.bias,g.shadowNormalBias=t.normalBias,g.shadowRadius=t.radius,g.shadowMapSize=t.mapSize,$.directionalShadow[O]=g,$.directionalShadowMap[O]=a,$.directionalShadowMatrix[O]=j.shadow.matrix,C++}$.directional[O]=p,O++}else if(j.isSpotLight){let p=Q.get(j);p.position.setFromMatrixPosition(j.matrixWorld),p.color.copy(x).multiplyScalar(u),p.distance=d,p.coneCos=Math.cos(j.angle),p.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),p.decay=j.decay,$.spot[M]=p;let t=j.shadow;if(j.map){if($.spotLightMap[f]=j.map,f++,t.updateMatrices(j),j.castShadow)I++}if($.spotLightMatrix[M]=t.matrix,j.castShadow){let g=Z.get(j);g.shadowIntensity=t.intensity,g.shadowBias=t.bias,g.shadowNormalBias=t.normalBias,g.shadowRadius=t.radius,g.shadowMapSize=t.mapSize,$.spotShadow[M]=g,$.spotShadowMap[M]=a,_++}M++}else if(j.isRectAreaLight){let p=Q.get(j);p.color.copy(x).multiplyScalar(u),p.halfWidth.set(j.width*0.5,0,0),p.halfHeight.set(0,j.height*0.5,0),$.rectArea[q]=p,q++}else if(j.isPointLight){let p=Q.get(j);if(p.color.copy(j.color).multiplyScalar(j.intensity),p.distance=j.distance,p.decay=j.decay,j.castShadow){let t=j.shadow,g=Z.get(j);g.shadowIntensity=t.intensity,g.shadowBias=t.bias,g.shadowNormalBias=t.normalBias,g.shadowRadius=t.radius,g.shadowMapSize=t.mapSize,g.shadowCameraNear=t.camera.near,g.shadowCameraFar=t.camera.far,$.pointShadow[L]=g,$.pointShadowMap[L]=a,$.pointShadowMatrix[L]=j.shadow.matrix,z++}$.point[L]=p,L++}else if(j.isHemisphereLight){let p=Q.get(j);p.skyColor.copy(j.color).multiplyScalar(u),p.groundColor.copy(j.groundColor).multiplyScalar(u),$.hemi[D]=p,D++}}if(q>0)if(J.has("OES_texture_float_linear")===!0)$.rectAreaLTC1=Z0.LTC_FLOAT_1,$.rectAreaLTC2=Z0.LTC_FLOAT_2;else $.rectAreaLTC1=Z0.LTC_HALF_1,$.rectAreaLTC2=Z0.LTC_HALF_2;$.ambient[0]=E,$.ambient[1]=G,$.ambient[2]=N;let l=$.hash;if(l.directionalLength!==O||l.pointLength!==L||l.spotLength!==M||l.rectAreaLength!==q||l.hemiLength!==D||l.numDirectionalShadows!==C||l.numPointShadows!==z||l.numSpotShadows!==_||l.numSpotMaps!==f||l.numLightProbes!==A)$.directional.length=O,$.spot.length=M,$.rectArea.length=q,$.point.length=L,$.hemi.length=D,$.directionalShadow.length=C,$.directionalShadowMap.length=C,$.pointShadow.length=z,$.pointShadowMap.length=z,$.spotShadow.length=_,$.spotShadowMap.length=_,$.directionalShadowMatrix.length=C,$.pointShadowMatrix.length=z,$.spotLightMatrix.length=_+f-I,$.spotLightMap.length=f,$.numSpotLightShadowsWithMaps=I,$.numLightProbes=A,l.directionalLength=O,l.pointLength=L,l.spotLength=M,l.rectAreaLength=q,l.hemiLength=D,l.numDirectionalShadows=C,l.numPointShadows=z,l.numSpotShadows=_,l.numSpotMaps=f,l.numLightProbes=A,$.version=vU++}function U(X,E){let G=0,N=0,O=0,L=0,M=0,q=E.matrixWorldInverse;for(let D=0,C=X.length;D<C;D++){let z=X[D];if(z.isDirectionalLight){let _=$.directional[G];_.direction.setFromMatrixPosition(z.matrixWorld),W.setFromMatrixPosition(z.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(q),G++}else if(z.isSpotLight){let _=$.spot[O];_.position.setFromMatrixPosition(z.matrixWorld),_.position.applyMatrix4(q),_.direction.setFromMatrixPosition(z.matrixWorld),W.setFromMatrixPosition(z.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(q),O++}else if(z.isRectAreaLight){let _=$.rectArea[L];_.position.setFromMatrixPosition(z.matrixWorld),_.position.applyMatrix4(q),H.identity(),K.copy(z.matrixWorld),K.premultiply(q),H.extractRotation(K),_.halfWidth.set(z.width*0.5,0,0),_.halfHeight.set(0,z.height*0.5,0),_.halfWidth.applyMatrix4(H),_.halfHeight.applyMatrix4(H),L++}else if(z.isPointLight){let _=$.point[N];_.position.setFromMatrixPosition(z.matrixWorld),_.position.applyMatrix4(q),N++}else if(z.isHemisphereLight){let _=$.hemi[M];_.direction.setFromMatrixPosition(z.matrixWorld),_.direction.transformDirection(q),M++}}}return{setup:Y,setupView:U,state:$}}function HW(J){let Q=new bU(J),Z=[],$=[];function W(E){X.camera=E,Z.length=0,$.length=0}function K(E){Z.push(E)}function H(E){$.push(E)}function Y(){Q.setup(Z)}function U(E){Q.setupView(Z,E)}let X={lightsArray:Z,shadowsArray:$,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:X,setupLights:Y,setupLightsView:U,pushLight:K,pushShadow:H}}function hU(J){let Q=new WeakMap;function Z(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new HW(J),Q.set(W,[Y]);else if(K>=H.length)Y=new HW(J),H.push(Y);else Y=H[K];return Y}function $(){Q=new WeakMap}return{get:Z,dispose:$}}var xU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pU(J,Q,Z){let $=new f9,W=new z0,K=new z0,H=new $J,Y=new OQ({depthPacking:k$}),U=new RQ,X={},E=Z.maxTextureSize,G={[Z9]:PJ,[PJ]:Z9,[nJ]:nJ},N=new TJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z0},radius:{value:4}},vertexShader:xU,fragmentShader:gU}),O=N.clone();O.defines.HORIZONTAL_PASS=1;let L=new rJ;L.setAttribute("position",new fJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new NJ(L,N),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L6;let D=this.type;this.render=function(I,A,l){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(I.length===0)return;let k=J.getRenderTarget(),V=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),x=J.state;x.setBlending(iJ),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);let u=D!==sJ&&this.type===sJ,d=D===sJ&&this.type!==sJ;for(let a=0,p=I.length;a<p;a++){let t=I[a],g=t.shadow;if(g===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;W.copy(g.mapSize);let H0=g.getFrameExtents();if(W.multiply(H0),K.copy(g.mapSize),W.x>E||W.y>E){if(W.x>E)K.x=Math.floor(E/H0.x),W.x=K.x*H0.x,g.mapSize.x=K.x;if(W.y>E)K.y=Math.floor(E/H0.y),W.y=K.y*H0.y,g.mapSize.y=K.y}if(g.map===null||u===!0||d===!0){let w0=this.type!==sJ?{minFilter:K9,magFilter:K9}:{};if(g.map!==null)g.map.dispose();g.map=new lJ(W.x,W.y,w0),g.map.texture.name=t.name+".shadowMap",g.camera.updateProjectionMatrix()}J.setRenderTarget(g.map),J.clear();let U0=g.getViewportCount();for(let w0=0;w0<U0;w0++){let h0=g.getViewport(w0);H.set(K.x*h0.x,K.y*h0.y,K.x*h0.z,K.y*h0.w),x.viewport(H),g.updateMatrices(t,w0),$=g.getFrustum(),_(A,l,g.camera,t,this.type)}if(g.isPointLightShadow!==!0&&this.type===sJ)C(g,l);g.needsUpdate=!1}D=this.type,q.needsUpdate=!1,J.setRenderTarget(k,V,j)};function C(I,A){let l=Q.update(M);if(N.defines.VSM_SAMPLES!==I.blurSamples)N.defines.VSM_SAMPLES=I.blurSamples,O.defines.VSM_SAMPLES=I.blurSamples,N.needsUpdate=!0,O.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new lJ(W.x,W.y);N.uniforms.shadow_pass.value=I.map.texture,N.uniforms.resolution.value=I.mapSize,N.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(A,null,l,N,M,null),O.uniforms.shadow_pass.value=I.mapPass.texture,O.uniforms.resolution.value=I.mapSize,O.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(A,null,l,O,M,null)}function z(I,A,l,k){let V=null,j=l.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(j!==void 0)V=j;else if(V=l.isPointLight===!0?U:Y,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let x=V.uuid,u=A.uuid,d=X[x];if(d===void 0)d={},X[x]=d;let a=d[u];if(a===void 0)a=V.clone(),d[u]=a,A.addEventListener("dispose",f);V=a}if(V.visible=A.visible,V.wireframe=A.wireframe,k===sJ)V.side=A.shadowSide!==null?A.shadowSide:A.side;else V.side=A.shadowSide!==null?A.shadowSide:G[A.side];if(V.alphaMap=A.alphaMap,V.alphaTest=A.alphaTest,V.map=A.map,V.clipShadows=A.clipShadows,V.clippingPlanes=A.clippingPlanes,V.clipIntersection=A.clipIntersection,V.displacementMap=A.displacementMap,V.displacementScale=A.displacementScale,V.displacementBias=A.displacementBias,V.wireframeLinewidth=A.wireframeLinewidth,V.linewidth=A.linewidth,l.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let x=J.properties.get(V);x.light=l}return V}function _(I,A,l,k,V){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&V===sJ)&&(!I.frustumCulled||$.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,I.matrixWorld);let u=Q.update(I),d=I.material;if(Array.isArray(d)){let a=u.groups;for(let p=0,t=a.length;p<t;p++){let g=a[p],H0=d[g.materialIndex];if(H0&&H0.visible){let U0=z(I,H0,k,V);I.onBeforeShadow(J,I,A,l,u,U0,g),J.renderBufferDirect(l,null,u,U0,I,g),I.onAfterShadow(J,I,A,l,u,U0,g)}}}else if(d.visible){let a=z(I,d,k,V);I.onBeforeShadow(J,I,A,l,u,a,null),J.renderBufferDirect(l,null,u,a,I,null),I.onAfterShadow(J,I,A,l,u,a,null)}}}let x=I.children;for(let u=0,d=x.length;u<d;u++)_(x[u],A,l,k,V)}function f(I){I.target.removeEventListener("dispose",f);for(let l in X){let k=X[l],V=I.target.uuid;if(V in k)k[V].dispose(),delete k[V]}}}var mU={[X7]:U7,[G7]:q7,[E7]:D7,[_9]:N7,[U7]:X7,[q7]:G7,[D7]:E7,[N7]:_9};function lU(J,Q){function Z(){let P=!1,e=new $J,c=null,n=new $J(0,0,0,0);return{setMask:function(X0){if(c!==X0&&!P)J.colorMask(X0,X0,X0,X0),c=X0},setLocked:function(X0){P=X0},setClear:function(X0,Y0,S0,KJ,DJ){if(DJ===!0)X0*=KJ,Y0*=KJ,S0*=KJ;if(e.set(X0,Y0,S0,KJ),n.equals(e)===!1)J.clearColor(X0,Y0,S0,KJ),n.copy(e)},reset:function(){P=!1,c=null,n.set(-1,0,0,0)}}}function $(){let P=!1,e=!1,c=null,n=null,X0=null;return{setReversed:function(Y0){if(e!==Y0){let S0=Q.get("EXT_clip_control");if(e)S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.ZERO_TO_ONE_EXT);else S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.NEGATIVE_ONE_TO_ONE_EXT);let KJ=X0;X0=null,this.setClear(KJ)}e=Y0},getReversed:function(){return e},setTest:function(Y0){if(Y0)$0(J.DEPTH_TEST);else g0(J.DEPTH_TEST)},setMask:function(Y0){if(c!==Y0&&!P)J.depthMask(Y0),c=Y0},setFunc:function(Y0){if(e)Y0=mU[Y0];if(n!==Y0){switch(Y0){case X7:J.depthFunc(J.NEVER);break;case U7:J.depthFunc(J.ALWAYS);break;case G7:J.depthFunc(J.LESS);break;case _9:J.depthFunc(J.LEQUAL);break;case E7:J.depthFunc(J.EQUAL);break;case N7:J.depthFunc(J.GEQUAL);break;case q7:J.depthFunc(J.GREATER);break;case D7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}n=Y0}},setLocked:function(Y0){P=Y0},setClear:function(Y0){if(X0!==Y0){if(e)Y0=1-Y0;J.clearDepth(Y0),X0=Y0}},reset:function(){P=!1,c=null,n=null,X0=null,e=!1}}}function W(){let P=!1,e=null,c=null,n=null,X0=null,Y0=null,S0=null,KJ=null,DJ=null;return{setTest:function(s0){if(!P)if(s0)$0(J.STENCIL_TEST);else g0(J.STENCIL_TEST)},setMask:function(s0){if(e!==s0&&!P)J.stencilMask(s0),e=s0},setFunc:function(s0,eJ,cJ){if(c!==s0||n!==eJ||X0!==cJ)J.stencilFunc(s0,eJ,cJ),c=s0,n=eJ,X0=cJ},setOp:function(s0,eJ,cJ){if(Y0!==s0||S0!==eJ||KJ!==cJ)J.stencilOp(s0,eJ,cJ),Y0=s0,S0=eJ,KJ=cJ},setLocked:function(s0){P=s0},setClear:function(s0){if(DJ!==s0)J.clearStencil(s0),DJ=s0},reset:function(){P=!1,e=null,c=null,n=null,X0=null,Y0=null,S0=null,KJ=null,DJ=null}}}let K=new Z,H=new $,Y=new W,U=new WeakMap,X=new WeakMap,E={},G={},N=new WeakMap,O=[],L=null,M=!1,q=null,D=null,C=null,z=null,_=null,f=null,I=null,A=new v0(0,0,0),l=0,k=!1,V=null,j=null,x=null,u=null,d=null,a=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),p=!1,t=0,g=J.getParameter(J.VERSION);if(g.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(g)[1]),p=t>=1;else if(g.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(g)[1]),p=t>=2;let H0=null,U0={},w0=J.getParameter(J.SCISSOR_BOX),h0=J.getParameter(J.VIEWPORT),s=new $J().fromArray(w0),Q0=new $J().fromArray(h0);function R0(P,e,c,n){let X0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(P,Y0),J.texParameteri(P,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(P,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let S0=0;S0<c;S0++)if(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texImage3D(e,0,J.RGBA,1,1,n,0,J.RGBA,J.UNSIGNED_BYTE,X0);else J.texImage2D(e+S0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,X0);return Y0}let V0={};V0[J.TEXTURE_2D]=R0(J.TEXTURE_2D,J.TEXTURE_2D,1),V0[J.TEXTURE_CUBE_MAP]=R0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),V0[J.TEXTURE_2D_ARRAY]=R0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),V0[J.TEXTURE_3D]=R0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),$0(J.DEPTH_TEST),H.setFunc(_9),r0(!1),E0(V6),$0(J.CULL_FACE),qJ(iJ);function $0(P){if(E[P]!==!0)J.enable(P),E[P]=!0}function g0(P){if(E[P]!==!1)J.disable(P),E[P]=!1}function f0(P,e){if(G[P]!==e){if(J.bindFramebuffer(P,e),G[P]=e,P===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=e;if(P===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=e;return!0}return!1}function p0(P,e){let c=O,n=!1;if(P){if(c=N.get(e),c===void 0)c=[],N.set(e,c);let X0=P.textures;if(c.length!==X0.length||c[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,S0=X0.length;Y0<S0;Y0++)c[Y0]=J.COLOR_ATTACHMENT0+Y0;c.length=X0.length,n=!0}}else if(c[0]!==J.BACK)c[0]=J.BACK,n=!0;if(n)J.drawBuffers(c)}function JJ(P){if(L!==P)return J.useProgram(P),L=P,!0;return!1}let c0={[$9]:J.FUNC_ADD,[PZ]:J.FUNC_SUBTRACT,[TZ]:J.FUNC_REVERSE_SUBTRACT};c0[SZ]=J.MIN,c0[jZ]=J.MAX;let w={[yZ]:J.ZERO,[vZ]:J.ONE,[fZ]:J.SRC_COLOR,[hZ]:J.SRC_ALPHA,[dZ]:J.SRC_ALPHA_SATURATE,[mZ]:J.DST_COLOR,[gZ]:J.DST_ALPHA,[bZ]:J.ONE_MINUS_SRC_COLOR,[xZ]:J.ONE_MINUS_SRC_ALPHA,[lZ]:J.ONE_MINUS_DST_COLOR,[pZ]:J.ONE_MINUS_DST_ALPHA,[uZ]:J.CONSTANT_COLOR,[cZ]:J.ONE_MINUS_CONSTANT_COLOR,[sZ]:J.CONSTANT_ALPHA,[nZ]:J.ONE_MINUS_CONSTANT_ALPHA};function qJ(P,e,c,n,X0,Y0,S0,KJ,DJ,s0){if(P===iJ){if(M===!0)g0(J.BLEND),M=!1;return}if(M===!1)$0(J.BLEND),M=!0;if(P!==AZ){if(P!==q||s0!==k){if(D!==$9||_!==$9)J.blendEquation(J.FUNC_ADD),D=$9,_=$9;if(s0)switch(P){case C9:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z6:J.blendFunc(J.ONE,J.ONE);break;case B6:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case I6:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case C9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z6:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case B6:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case I6:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}C=null,z=null,f=null,I=null,A.set(0,0,0),l=0,q=P,k=s0}return}if(X0=X0||e,Y0=Y0||c,S0=S0||n,e!==D||X0!==_)J.blendEquationSeparate(c0[e],c0[X0]),D=e,_=X0;if(c!==C||n!==z||Y0!==f||S0!==I)J.blendFuncSeparate(w[c],w[n],w[Y0],w[S0]),C=c,z=n,f=Y0,I=S0;if(KJ.equals(A)===!1||DJ!==l)J.blendColor(KJ.r,KJ.g,KJ.b,DJ),A.copy(KJ),l=DJ;q=P,k=!1}function a0(P,e){P.side===nJ?g0(J.CULL_FACE):$0(J.CULL_FACE);let c=P.side===PJ;if(e)c=!c;r0(c),P.blending===C9&&P.transparent===!1?qJ(iJ):qJ(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),H.setFunc(P.depthFunc),H.setTest(P.depthTest),H.setMask(P.depthWrite),K.setMask(P.colorWrite);let n=P.stencilWrite;if(Y.setTest(n),n)Y.setMask(P.stencilWriteMask),Y.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),Y.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);F0(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$0(J.SAMPLE_ALPHA_TO_COVERAGE):g0(J.SAMPLE_ALPHA_TO_COVERAGE)}function r0(P){if(V!==P){if(P)J.frontFace(J.CW);else J.frontFace(J.CCW);V=P}}function E0(P){if(P!==wZ){if($0(J.CULL_FACE),P!==j)if(P===V6)J.cullFace(J.BACK);else if(P===CZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else g0(J.CULL_FACE);j=P}function WJ(P){if(P!==x){if(p)J.lineWidth(P);x=P}}function F0(P,e,c){if(P){if($0(J.POLYGON_OFFSET_FILL),u!==e||d!==c)J.polygonOffset(e,c),u=e,d=c}else g0(J.POLYGON_OFFSET_FILL)}function _0(P){if(P)$0(J.SCISSOR_TEST);else g0(J.SCISSOR_TEST)}function B(P){if(P===void 0)P=J.TEXTURE0+a-1;if(H0!==P)J.activeTexture(P),H0=P}function R(P,e,c){if(c===void 0)if(H0===null)c=J.TEXTURE0+a-1;else c=H0;let n=U0[c];if(n===void 0)n={type:void 0,texture:void 0},U0[c]=n;if(n.type!==P||n.texture!==e){if(H0!==c)J.activeTexture(c),H0=c;J.bindTexture(P,e||V0[P]),n.type=P,n.texture=e}}function v(){let P=U0[H0];if(P!==void 0&&P.type!==void 0)J.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function i(){try{J.compressedTexImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function o(){try{J.compressedTexImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function m(){try{J.texSubImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function L0(){try{J.texSubImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function P0(){try{J.texStorage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J0(){try{J.texStorage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G0(){try{J.texImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b0(){try{J.texImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B0(P){if(s.equals(P)===!1)J.scissor(P.x,P.y,P.z,P.w),s.copy(P)}function D0(P){if(Q0.equals(P)===!1)J.viewport(P.x,P.y,P.z,P.w),Q0.copy(P)}function T0(P,e){let c=X.get(e);if(c===void 0)c=new WeakMap,X.set(e,c);let n=c.get(P);if(n===void 0)n=J.getUniformBlockIndex(e,P.name),c.set(P,n)}function y0(P,e){let n=X.get(e).get(P);if(U.get(e)!==n)J.uniformBlockBinding(e,n,P.__bindingPointIndex),U.set(e,n)}function QJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),E={},H0=null,U0={},G={},N=new WeakMap,O=[],L=null,M=!1,q=null,D=null,C=null,z=null,_=null,f=null,I=null,A=new v0(0,0,0),l=0,k=!1,V=null,j=null,x=null,u=null,d=null,s.set(0,0,J.canvas.width,J.canvas.height),Q0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:$0,disable:g0,bindFramebuffer:f0,drawBuffers:p0,useProgram:JJ,setBlending:qJ,setMaterial:a0,setFlipSided:r0,setCullFace:E0,setLineWidth:WJ,setPolygonOffset:F0,setScissorTest:_0,activeTexture:B,bindTexture:R,unbindTexture:v,compressedTexImage2D:i,compressedTexImage3D:o,texImage2D:G0,texImage3D:b0,updateUBOMapping:T0,uniformBlockBinding:y0,texStorage2D:P0,texStorage3D:J0,texSubImage2D:m,texSubImage3D:L0,compressedTexSubImage2D:W0,compressedTexSubImage3D:q0,scissor:B0,viewport:D0,reset:QJ}}function dU(J,Q,Z,$,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),X=new z0,E=new WeakMap,G,N=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function L(B,R){return O?new OffscreenCanvas(B,R):w9("canvas")}function M(B,R,v){let i=1,o=_0(B);if(o.width>v||o.height>v)i=v/Math.max(o.width,o.height);if(i<1)if(typeof HTMLImageElement!=="undefined"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&B instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&B instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&B instanceof VideoFrame){let m=Math.floor(i*o.width),L0=Math.floor(i*o.height);if(G===void 0)G=L(m,L0);let W0=R?L(m,L0):G;return W0.width=m,W0.height=L0,W0.getContext("2d").drawImage(B,0,0,m,L0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+o.width+"x"+o.height+") to ("+m+"x"+L0+")."),W0}else{if("data"in B)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+o.width+"x"+o.height+").");return B}return B}function q(B){return B.generateMipmaps}function D(B){J.generateMipmap(B)}function C(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function z(B,R,v,i,o=!1){if(B!==null){if(J[B]!==void 0)return J[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let m=R;if(R===J.RED){if(v===J.FLOAT)m=J.R32F;if(v===J.HALF_FLOAT)m=J.R16F;if(v===J.UNSIGNED_BYTE)m=J.R8}if(R===J.RED_INTEGER){if(v===J.UNSIGNED_BYTE)m=J.R8UI;if(v===J.UNSIGNED_SHORT)m=J.R16UI;if(v===J.UNSIGNED_INT)m=J.R32UI;if(v===J.BYTE)m=J.R8I;if(v===J.SHORT)m=J.R16I;if(v===J.INT)m=J.R32I}if(R===J.RG){if(v===J.FLOAT)m=J.RG32F;if(v===J.HALF_FLOAT)m=J.RG16F;if(v===J.UNSIGNED_BYTE)m=J.RG8}if(R===J.RG_INTEGER){if(v===J.UNSIGNED_BYTE)m=J.RG8UI;if(v===J.UNSIGNED_SHORT)m=J.RG16UI;if(v===J.UNSIGNED_INT)m=J.RG32UI;if(v===J.BYTE)m=J.RG8I;if(v===J.SHORT)m=J.RG16I;if(v===J.INT)m=J.RG32I}if(R===J.RGB_INTEGER){if(v===J.UNSIGNED_BYTE)m=J.RGB8UI;if(v===J.UNSIGNED_SHORT)m=J.RGB16UI;if(v===J.UNSIGNED_INT)m=J.RGB32UI;if(v===J.BYTE)m=J.RGB8I;if(v===J.SHORT)m=J.RGB16I;if(v===J.INT)m=J.RGB32I}if(R===J.RGBA_INTEGER){if(v===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(v===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(v===J.UNSIGNED_INT)m=J.RGBA32UI;if(v===J.BYTE)m=J.RGBA8I;if(v===J.SHORT)m=J.RGBA16I;if(v===J.INT)m=J.RGBA32I}if(R===J.RGB){if(v===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5}if(R===J.RGBA){let L0=o?$Q:l0.getTransfer(i);if(v===J.FLOAT)m=J.RGBA32F;if(v===J.HALF_FLOAT)m=J.RGBA16F;if(v===J.UNSIGNED_BYTE)m=L0===t0?J.SRGB8_ALPHA8:J.RGBA8;if(v===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(v===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function _(B,R){let v;if(B){if(R===null||R===H9||R===X9)v=J.DEPTH24_STENCIL8;else if(R===F8)v=J.DEPTH32F_STENCIL8;else if(R===T9)v=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===H9||R===X9)v=J.DEPTH_COMPONENT24;else if(R===F8)v=J.DEPTH_COMPONENT32F;else if(R===T9)v=J.DEPTH_COMPONENT16;return v}function f(B,R){if(q(B)===!0||B.isFramebufferTexture&&B.minFilter!==K9&&B.minFilter!==_8)return Math.log2(Math.max(R.width,R.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return R.mipmaps.length;else return 1}function I(B){let R=B.target;if(R.removeEventListener("dispose",I),l(R),R.isVideoTexture)E.delete(R)}function A(B){let R=B.target;R.removeEventListener("dispose",A),V(R)}function l(B){let R=$.get(B);if(R.__webglInit===void 0)return;let v=B.source,i=N.get(v);if(i){let o=i[R.__cacheKey];if(o.usedTimes--,o.usedTimes===0)k(B);if(Object.keys(i).length===0)N.delete(v)}$.remove(B)}function k(B){let R=$.get(B);J.deleteTexture(R.__webglTexture);let v=B.source,i=N.get(v);delete i[R.__cacheKey],H.memory.textures--}function V(B){let R=$.get(B);if(B.depthTexture)B.depthTexture.dispose(),$.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let i=0;i<6;i++){if(Array.isArray(R.__webglFramebuffer[i]))for(let o=0;o<R.__webglFramebuffer[i].length;o++)J.deleteFramebuffer(R.__webglFramebuffer[i][o]);else J.deleteFramebuffer(R.__webglFramebuffer[i]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[i])}else{if(Array.isArray(R.__webglFramebuffer))for(let i=0;i<R.__webglFramebuffer.length;i++)J.deleteFramebuffer(R.__webglFramebuffer[i]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let i=0;i<R.__webglColorRenderbuffer.length;i++)if(R.__webglColorRenderbuffer[i])J.deleteRenderbuffer(R.__webglColorRenderbuffer[i])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let v=B.textures;for(let i=0,o=v.length;i<o;i++){let m=$.get(v[i]);if(m.__webglTexture)J.deleteTexture(m.__webglTexture),H.memory.textures--;$.remove(v[i])}$.remove(B)}let j=0;function x(){j=0}function u(){let B=j;if(B>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return j+=1,B}function d(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function a(B,R){let v=$.get(B);if(B.isVideoTexture)WJ(B);if(B.isRenderTargetTexture===!1&&B.version>0&&v.__version!==B.version){let i=B.image;if(i===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(i.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q0(v,B,R);return}}Z.bindTexture(J.TEXTURE_2D,v.__webglTexture,J.TEXTURE0+R)}function p(B,R){let v=$.get(B);if(B.version>0&&v.__version!==B.version){Q0(v,B,R);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,v.__webglTexture,J.TEXTURE0+R)}function t(B,R){let v=$.get(B);if(B.version>0&&v.__version!==B.version){Q0(v,B,R);return}Z.bindTexture(J.TEXTURE_3D,v.__webglTexture,J.TEXTURE0+R)}function g(B,R){let v=$.get(B);if(B.version>0&&v.__version!==B.version){R0(v,B,R);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,v.__webglTexture,J.TEXTURE0+R)}let H0={[W$]:J.REPEAT,[K$]:J.CLAMP_TO_EDGE,[Y$]:J.MIRRORED_REPEAT},U0={[K9]:J.NEAREST,[H$]:J.NEAREST_MIPMAP_NEAREST,[P9]:J.NEAREST_MIPMAP_LINEAR,[_8]:J.LINEAR,[F7]:J.LINEAR_MIPMAP_NEAREST,[Y9]:J.LINEAR_MIPMAP_LINEAR},w0={[z$]:J.NEVER,[A$]:J.ALWAYS,[B$]:J.LESS,[WQ]:J.LEQUAL,[I$]:J.EQUAL,[_$]:J.GEQUAL,[w$]:J.GREATER,[C$]:J.NOTEQUAL};function h0(B,R){if(R.type===F8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===_8||R.magFilter===F7||R.magFilter===P9||R.magFilter===Y9||R.minFilter===_8||R.minFilter===F7||R.minFilter===P9||R.minFilter===Y9))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,H0[R.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,H0[R.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,H0[R.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,U0[R.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,U0[R.minFilter]),R.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,w0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===K9)return;if(R.minFilter!==P9&&R.minFilter!==Y9)return;if(R.type===F8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||$.get(R).__currentAnisotropy){let v=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),$.get(R).__currentAnisotropy=R.anisotropy}}}function s(B,R){let v=!1;if(B.__webglInit===void 0)B.__webglInit=!0,R.addEventListener("dispose",I);let i=R.source,o=N.get(i);if(o===void 0)o={},N.set(i,o);let m=d(R);if(m!==B.__cacheKey){if(o[m]===void 0)o[m]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,v=!0;o[m].usedTimes++;let L0=o[B.__cacheKey];if(L0!==void 0){if(o[B.__cacheKey].usedTimes--,L0.usedTimes===0)k(R)}B.__cacheKey=m,B.__webglTexture=o[m].texture}return v}function Q0(B,R,v){let i=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)i=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)i=J.TEXTURE_3D;let o=s(B,R),m=R.source;Z.bindTexture(i,B.__webglTexture,J.TEXTURE0+v);let L0=$.get(m);if(m.version!==L0.__version||o===!0){Z.activeTexture(J.TEXTURE0+v);let W0=l0.getPrimaries(l0.workingColorSpace),q0=R.colorSpace===P8?null:l0.getPrimaries(R.colorSpace),P0=R.colorSpace===P8||W0===q0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,P0);let J0=M(R.image,!1,W.maxTextureSize);J0=F0(R,J0);let G0=K.convert(R.format,R.colorSpace),b0=K.convert(R.type),B0=z(R.internalFormat,G0,b0,R.colorSpace,R.isVideoTexture);h0(i,R);let D0,T0=R.mipmaps,y0=R.isVideoTexture!==!0,QJ=L0.__version===void 0||o===!0,P=m.dataReady,e=f(R,J0);if(R.isDepthTexture){if(B0=_(R.format===S9,R.type),QJ)if(y0)Z.texStorage2D(J.TEXTURE_2D,1,B0,J0.width,J0.height);else Z.texImage2D(J.TEXTURE_2D,0,B0,J0.width,J0.height,0,G0,b0,null)}else if(R.isDataTexture)if(T0.length>0){if(y0&&QJ)Z.texStorage2D(J.TEXTURE_2D,e,B0,T0[0].width,T0[0].height);for(let c=0,n=T0.length;c<n;c++)if(D0=T0[c],y0){if(P)Z.texSubImage2D(J.TEXTURE_2D,c,0,0,D0.width,D0.height,G0,b0,D0.data)}else Z.texImage2D(J.TEXTURE_2D,c,B0,D0.width,D0.height,0,G0,b0,D0.data);R.generateMipmaps=!1}else if(y0){if(QJ)Z.texStorage2D(J.TEXTURE_2D,e,B0,J0.width,J0.height);if(P)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,J0.width,J0.height,G0,b0,J0.data)}else Z.texImage2D(J.TEXTURE_2D,0,B0,J0.width,J0.height,0,G0,b0,J0.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(y0&&QJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,e,B0,T0[0].width,T0[0].height,J0.depth);for(let c=0,n=T0.length;c<n;c++)if(D0=T0[c],R.format!==oJ)if(G0!==null)if(y0){if(P)if(R.layerUpdates.size>0){let X0=PQ(D0.width,D0.height,R.format,R.type);for(let Y0 of R.layerUpdates){let S0=D0.data.subarray(Y0*X0/D0.data.BYTES_PER_ELEMENT,(Y0+1)*X0/D0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,Y0,D0.width,D0.height,1,G0,S0)}R.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,D0.width,D0.height,J0.depth,G0,D0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,c,B0,D0.width,D0.height,J0.depth,0,D0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(y0){if(P)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,D0.width,D0.height,J0.depth,G0,b0,D0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,c,B0,D0.width,D0.height,J0.depth,0,G0,b0,D0.data)}else{if(y0&&QJ)Z.texStorage2D(J.TEXTURE_2D,e,B0,T0[0].width,T0[0].height);for(let c=0,n=T0.length;c<n;c++)if(D0=T0[c],R.format!==oJ)if(G0!==null)if(y0){if(P)Z.compressedTexSubImage2D(J.TEXTURE_2D,c,0,0,D0.width,D0.height,G0,D0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,c,B0,D0.width,D0.height,0,D0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(y0){if(P)Z.texSubImage2D(J.TEXTURE_2D,c,0,0,D0.width,D0.height,G0,b0,D0.data)}else Z.texImage2D(J.TEXTURE_2D,c,B0,D0.width,D0.height,0,G0,b0,D0.data)}else if(R.isDataArrayTexture)if(y0){if(QJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,e,B0,J0.width,J0.height,J0.depth);if(P)if(R.layerUpdates.size>0){let c=PQ(J0.width,J0.height,R.format,R.type);for(let n of R.layerUpdates){let X0=J0.data.subarray(n*c/J0.data.BYTES_PER_ELEMENT,(n+1)*c/J0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,n,J0.width,J0.height,1,G0,b0,X0)}R.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,G0,b0,J0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,B0,J0.width,J0.height,J0.depth,0,G0,b0,J0.data);else if(R.isData3DTexture)if(y0){if(QJ)Z.texStorage3D(J.TEXTURE_3D,e,B0,J0.width,J0.height,J0.depth);if(P)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,G0,b0,J0.data)}else Z.texImage3D(J.TEXTURE_3D,0,B0,J0.width,J0.height,J0.depth,0,G0,b0,J0.data);else if(R.isFramebufferTexture){if(QJ)if(y0)Z.texStorage2D(J.TEXTURE_2D,e,B0,J0.width,J0.height);else{let{width:c,height:n}=J0;for(let X0=0;X0<e;X0++)Z.texImage2D(J.TEXTURE_2D,X0,B0,c,n,0,G0,b0,null),c>>=1,n>>=1}}else if(T0.length>0){if(y0&&QJ){let c=_0(T0[0]);Z.texStorage2D(J.TEXTURE_2D,e,B0,c.width,c.height)}for(let c=0,n=T0.length;c<n;c++)if(D0=T0[c],y0){if(P)Z.texSubImage2D(J.TEXTURE_2D,c,0,0,G0,b0,D0)}else Z.texImage2D(J.TEXTURE_2D,c,B0,G0,b0,D0);R.generateMipmaps=!1}else if(y0){if(QJ){let c=_0(J0);Z.texStorage2D(J.TEXTURE_2D,e,B0,c.width,c.height)}if(P)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,G0,b0,J0)}else Z.texImage2D(J.TEXTURE_2D,0,B0,G0,b0,J0);if(q(R))D(i);if(L0.__version=m.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function R0(B,R,v){if(R.image.length!==6)return;let i=s(B,R),o=R.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+v);let m=$.get(o);if(o.version!==m.__version||i===!0){Z.activeTexture(J.TEXTURE0+v);let L0=l0.getPrimaries(l0.workingColorSpace),W0=R.colorSpace===P8?null:l0.getPrimaries(R.colorSpace),q0=R.colorSpace===P8||L0===W0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,q0);let P0=R.isCompressedTexture||R.image[0].isCompressedTexture,J0=R.image[0]&&R.image[0].isDataTexture,G0=[];for(let n=0;n<6;n++){if(!P0&&!J0)G0[n]=M(R.image[n],!0,W.maxCubemapSize);else G0[n]=J0?R.image[n].image:R.image[n];G0[n]=F0(R,G0[n])}let b0=G0[0],B0=K.convert(R.format,R.colorSpace),D0=K.convert(R.type),T0=z(R.internalFormat,B0,D0,R.colorSpace),y0=R.isVideoTexture!==!0,QJ=m.__version===void 0||i===!0,P=o.dataReady,e=f(R,b0);h0(J.TEXTURE_CUBE_MAP,R);let c;if(P0){if(y0&&QJ)Z.texStorage2D(J.TEXTURE_CUBE_MAP,e,T0,b0.width,b0.height);for(let n=0;n<6;n++){c=G0[n].mipmaps;for(let X0=0;X0<c.length;X0++){let Y0=c[X0];if(R.format!==oJ)if(B0!==null)if(y0){if(P)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0,0,0,Y0.width,Y0.height,B0,Y0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0,T0,Y0.width,Y0.height,0,Y0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(y0){if(P)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0,0,0,Y0.width,Y0.height,B0,D0,Y0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0,T0,Y0.width,Y0.height,0,B0,D0,Y0.data)}}}else{if(c=R.mipmaps,y0&&QJ){if(c.length>0)e++;let n=_0(G0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,e,T0,n.width,n.height)}for(let n=0;n<6;n++)if(J0){if(y0){if(P)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,G0[n].width,G0[n].height,B0,D0,G0[n].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,T0,G0[n].width,G0[n].height,0,B0,D0,G0[n].data);for(let X0=0;X0<c.length;X0++){let S0=c[X0].image[n].image;if(y0){if(P)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0+1,0,0,S0.width,S0.height,B0,D0,S0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0+1,T0,S0.width,S0.height,0,B0,D0,S0.data)}}else{if(y0){if(P)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,B0,D0,G0[n])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,T0,B0,D0,G0[n]);for(let X0=0;X0<c.length;X0++){let Y0=c[X0];if(y0){if(P)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0+1,0,0,B0,D0,Y0.image[n])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+n,X0+1,T0,B0,D0,Y0.image[n])}}}if(q(R))D(J.TEXTURE_CUBE_MAP);if(m.__version=o.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function V0(B,R,v,i,o,m){let L0=K.convert(v.format,v.colorSpace),W0=K.convert(v.type),q0=z(v.internalFormat,L0,W0,v.colorSpace),P0=$.get(R),J0=$.get(v);if(J0.__renderTarget=R,!P0.__hasExternalTextures){let G0=Math.max(1,R.width>>m),b0=Math.max(1,R.height>>m);if(o===J.TEXTURE_3D||o===J.TEXTURE_2D_ARRAY)Z.texImage3D(o,m,q0,G0,b0,R.depth,0,L0,W0,null);else Z.texImage2D(o,m,q0,G0,b0,0,L0,W0,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,B),E0(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,o,J0.__webglTexture,0,r0(R));else if(o===J.TEXTURE_2D||o>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,i,o,J0.__webglTexture,m);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function $0(B,R,v){if(J.bindRenderbuffer(J.RENDERBUFFER,B),R.depthBuffer){let i=R.depthTexture,o=i&&i.isDepthTexture?i.type:null,m=_(R.stencilBuffer,o),L0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,W0=r0(R);if(E0(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,W0,m,R.width,R.height);else if(v)J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,m,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,m,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,L0,J.RENDERBUFFER,B)}else{let i=R.textures;for(let o=0;o<i.length;o++){let m=i[o],L0=K.convert(m.format,m.colorSpace),W0=K.convert(m.type),q0=z(m.internalFormat,L0,W0,m.colorSpace),P0=r0(R);if(v&&E0(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,P0,q0,R.width,R.height);else if(E0(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,P0,q0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,q0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function g0(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let i=$.get(R.depthTexture);if(i.__renderTarget=R,!i.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;a(R.depthTexture,0);let o=i.__webglTexture,m=r0(R);if(R.depthTexture.format===k7)if(E0(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,o,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,o,0);else if(R.depthTexture.format===S9)if(E0(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,o,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,o,0);else throw new Error("Unknown depthTexture format")}function f0(B){let R=$.get(B),v=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let i=B.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(i){let o=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,i.removeEventListener("dispose",o)};i.addEventListener("dispose",o),R.__depthDisposeCallback=o}R.__boundDepthTexture=i}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(v)throw new Error("target.depthTexture not supported in Cube render targets");g0(R.__webglFramebuffer,B)}else if(v){R.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[i]),R.__webglDepthbuffer[i]===void 0)R.__webglDepthbuffer[i]=J.createRenderbuffer(),$0(R.__webglDepthbuffer[i],B,!1);else{let o=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,m=R.__webglDepthbuffer[i];J.bindRenderbuffer(J.RENDERBUFFER,m),J.framebufferRenderbuffer(J.FRAMEBUFFER,o,J.RENDERBUFFER,m)}}else if(Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),$0(R.__webglDepthbuffer,B,!1);else{let i=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,o=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,o),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,o)}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function p0(B,R,v){let i=$.get(B);if(R!==void 0)V0(i.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(v!==void 0)f0(B)}function JJ(B){let R=B.texture,v=$.get(B),i=$.get(R);B.addEventListener("dispose",A);let o=B.textures,m=B.isWebGLCubeRenderTarget===!0,L0=o.length>1;if(!L0){if(i.__webglTexture===void 0)i.__webglTexture=J.createTexture();i.__version=R.version,H.memory.textures++}if(m){v.__webglFramebuffer=[];for(let W0=0;W0<6;W0++)if(R.mipmaps&&R.mipmaps.length>0){v.__webglFramebuffer[W0]=[];for(let q0=0;q0<R.mipmaps.length;q0++)v.__webglFramebuffer[W0][q0]=J.createFramebuffer()}else v.__webglFramebuffer[W0]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){v.__webglFramebuffer=[];for(let W0=0;W0<R.mipmaps.length;W0++)v.__webglFramebuffer[W0]=J.createFramebuffer()}else v.__webglFramebuffer=J.createFramebuffer();if(L0)for(let W0=0,q0=o.length;W0<q0;W0++){let P0=$.get(o[W0]);if(P0.__webglTexture===void 0)P0.__webglTexture=J.createTexture(),H.memory.textures++}if(B.samples>0&&E0(B)===!1){v.__webglMultisampledFramebuffer=J.createFramebuffer(),v.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let W0=0;W0<o.length;W0++){let q0=o[W0];v.__webglColorRenderbuffer[W0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,v.__webglColorRenderbuffer[W0]);let P0=K.convert(q0.format,q0.colorSpace),J0=K.convert(q0.type),G0=z(q0.internalFormat,P0,J0,q0.colorSpace,B.isXRRenderTarget===!0),b0=r0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,b0,G0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.RENDERBUFFER,v.__webglColorRenderbuffer[W0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)v.__webglDepthRenderbuffer=J.createRenderbuffer(),$0(v.__webglDepthRenderbuffer,B,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(m){Z.bindTexture(J.TEXTURE_CUBE_MAP,i.__webglTexture),h0(J.TEXTURE_CUBE_MAP,R);for(let W0=0;W0<6;W0++)if(R.mipmaps&&R.mipmaps.length>0)for(let q0=0;q0<R.mipmaps.length;q0++)V0(v.__webglFramebuffer[W0][q0],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,q0);else V0(v.__webglFramebuffer[W0],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0);if(q(R))D(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(L0){for(let W0=0,q0=o.length;W0<q0;W0++){let P0=o[W0],J0=$.get(P0);if(Z.bindTexture(J.TEXTURE_2D,J0.__webglTexture),h0(J.TEXTURE_2D,P0),V0(v.__webglFramebuffer,B,P0,J.COLOR_ATTACHMENT0+W0,J.TEXTURE_2D,0),q(P0))D(J.TEXTURE_2D)}Z.unbindTexture()}else{let W0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)W0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(W0,i.__webglTexture),h0(W0,R),R.mipmaps&&R.mipmaps.length>0)for(let q0=0;q0<R.mipmaps.length;q0++)V0(v.__webglFramebuffer[q0],B,R,J.COLOR_ATTACHMENT0,W0,q0);else V0(v.__webglFramebuffer,B,R,J.COLOR_ATTACHMENT0,W0,0);if(q(R))D(W0);Z.unbindTexture()}if(B.depthBuffer)f0(B)}function c0(B){let R=B.textures;for(let v=0,i=R.length;v<i;v++){let o=R[v];if(q(o)){let m=C(B),L0=$.get(o).__webglTexture;Z.bindTexture(m,L0),D(m),Z.unbindTexture()}}}let w=[],qJ=[];function a0(B){if(B.samples>0){if(E0(B)===!1){let{textures:R,width:v,height:i}=B,o=J.COLOR_BUFFER_BIT,m=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,L0=$.get(B),W0=R.length>1;if(W0)for(let q0=0;q0<R.length;q0++)Z.bindFramebuffer(J.FRAMEBUFFER,L0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,L0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,L0.__webglMultisampledFramebuffer),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,L0.__webglFramebuffer);for(let q0=0;q0<R.length;q0++){if(B.resolveDepthBuffer){if(B.depthBuffer)o|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)o|=J.STENCIL_BUFFER_BIT}if(W0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,L0.__webglColorRenderbuffer[q0]);let P0=$.get(R[q0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,P0,0)}if(J.blitFramebuffer(0,0,v,i,0,0,v,i,o,J.NEAREST),U===!0){if(w.length=0,qJ.length=0,w.push(J.COLOR_ATTACHMENT0+q0),B.depthBuffer&&B.resolveDepthBuffer===!1)w.push(m),qJ.push(m),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,qJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,w)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),W0)for(let q0=0;q0<R.length;q0++){Z.bindFramebuffer(J.FRAMEBUFFER,L0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.RENDERBUFFER,L0.__webglColorRenderbuffer[q0]);let P0=$.get(R[q0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,L0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.TEXTURE_2D,P0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,L0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&U){let R=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function r0(B){return Math.min(W.maxSamples,B.samples)}function E0(B){let R=$.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function WJ(B){let R=H.render.frame;if(E.get(B)!==R)E.set(B,R),B.update()}function F0(B,R){let{colorSpace:v,format:i,type:o}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return R;if(v!==j9&&v!==P8)if(l0.getTransfer(v)===t0){if(i!==oJ||o!==R8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",v);return R}function _0(B){if(typeof HTMLImageElement!=="undefined"&&B instanceof HTMLImageElement)X.width=B.naturalWidth||B.width,X.height=B.naturalHeight||B.height;else if(typeof VideoFrame!=="undefined"&&B instanceof VideoFrame)X.width=B.displayWidth,X.height=B.displayHeight;else X.width=B.width,X.height=B.height;return X}this.allocateTextureUnit=u,this.resetTextureUnits=x,this.setTexture2D=a,this.setTexture2DArray=p,this.setTexture3D=t,this.setTextureCube=g,this.rebindTextures=p0,this.setupRenderTarget=JJ,this.updateRenderTargetMipmap=c0,this.updateMultisampleRenderTarget=a0,this.setupDepthRenderbuffer=f0,this.setupFrameBufferTexture=V0,this.useMultisampledRTT=E0}function uU(J,Q){function Z($,W=P8){let K,H=l0.getTransfer(W);if($===R8)return J.UNSIGNED_BYTE;if($===C6)return J.UNSIGNED_SHORT_4_4_4_4;if($===_6)return J.UNSIGNED_SHORT_5_5_5_1;if($===G$)return J.UNSIGNED_INT_5_9_9_9_REV;if($===X$)return J.BYTE;if($===U$)return J.SHORT;if($===T9)return J.UNSIGNED_SHORT;if($===w6)return J.INT;if($===H9)return J.UNSIGNED_INT;if($===F8)return J.FLOAT;if($===A8)return J.HALF_FLOAT;if($===E$)return J.ALPHA;if($===N$)return J.RGB;if($===oJ)return J.RGBA;if($===q$)return J.LUMINANCE;if($===D$)return J.LUMINANCE_ALPHA;if($===k7)return J.DEPTH_COMPONENT;if($===S9)return J.DEPTH_STENCIL;if($===O$)return J.RED;if($===A6)return J.RED_INTEGER;if($===R$)return J.RG;if($===P6)return J.RG_INTEGER;if($===T6)return J.RGBA_INTEGER;if($===M7||$===V7||$===L7||$===z7)if(H===t0)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if($===M7)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if($===V7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if($===L7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if($===z7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if($===M7)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if($===V7)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if($===L7)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if($===z7)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if($===S6||$===j6||$===y6||$===v6)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if($===S6)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if($===j6)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if($===y6)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if($===v6)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if($===f6||$===b6||$===h6)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if($===f6||$===b6)return H===t0?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if($===h6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC}else return null;if($===x6||$===g6||$===p6||$===m6||$===l6||$===d6||$===u6||$===c6||$===s6||$===n6||$===i6||$===o6||$===a6||$===r6)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if($===x6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if($===g6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if($===p6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if($===m6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if($===l6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if($===d6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if($===u6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if($===c6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if($===s6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if($===n6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if($===i6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if($===o6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if($===a6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if($===r6)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if($===B7||$===t6||$===e6)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if($===B7)return H===t0?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if($===t6)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if($===e6)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if($===F$||$===JQ||$===QQ||$===ZQ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if($===B7)return K.COMPRESSED_RED_RGTC1_EXT;if($===JQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if($===QQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if($===ZQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if($===X9)return J.UNSIGNED_INT_24_8;return J[$]!==void 0?J[$]:null}return{convert:Z}}var cU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,Z){if(this.texture===null){let $=new BJ,W=J.properties.get($);if(W.__webglTexture=Q.texture,Q.depthNear!==Z.depthNear||Q.depthFar!==Z.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new TJ({vertexShader:cU,fragmentShader:sU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new NJ(new b9(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MW extends X8{constructor(J,Q){super();let Z=this,$=null,W=1,K=null,H="local-floor",Y=1,U=null,X=null,E=null,G=null,N=null,O=null,L=new kW,M=Q.getContextAttributes(),q=null,D=null,C=[],z=[],_=new z0,f=null,I=new zJ;I.viewport=new $J;let A=new zJ;A.viewport=new $J;let l=[I,A],k=new CQ,V=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let Q0=C[s];if(Q0===void 0)Q0=new v9,C[s]=Q0;return Q0.getTargetRaySpace()},this.getControllerGrip=function(s){let Q0=C[s];if(Q0===void 0)Q0=new v9,C[s]=Q0;return Q0.getGripSpace()},this.getHand=function(s){let Q0=C[s];if(Q0===void 0)Q0=new v9,C[s]=Q0;return Q0.getHandSpace()};function x(s){let Q0=z.indexOf(s.inputSource);if(Q0===-1)return;let R0=C[Q0];if(R0!==void 0)R0.update(s.inputSource,s.frame,U||K),R0.dispatchEvent({type:s.type,data:s.inputSource})}function u(){$.removeEventListener("select",x),$.removeEventListener("selectstart",x),$.removeEventListener("selectend",x),$.removeEventListener("squeeze",x),$.removeEventListener("squeezestart",x),$.removeEventListener("squeezeend",x),$.removeEventListener("end",u),$.removeEventListener("inputsourceschange",d);for(let s=0;s<C.length;s++){let Q0=z[s];if(Q0===null)continue;z[s]=null,C[s].disconnect(Q0)}V=null,j=null,L.reset(),J.setRenderTarget(q),N=null,G=null,E=null,$=null,D=null,h0.stop(),Z.isPresenting=!1,J.setPixelRatio(f),J.setSize(_.width,_.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(W=s,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(H=s,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||K},this.setReferenceSpace=function(s){U=s},this.getBaseLayer=function(){return G!==null?G:N},this.getBinding=function(){return E},this.getFrame=function(){return O},this.getSession=function(){return $},this.setSession=async function(s){if($=s,$!==null){if(q=J.getRenderTarget(),$.addEventListener("select",x),$.addEventListener("selectstart",x),$.addEventListener("selectend",x),$.addEventListener("squeeze",x),$.addEventListener("squeezestart",x),$.addEventListener("squeezeend",x),$.addEventListener("end",u),$.addEventListener("inputsourceschange",d),M.xrCompatible!==!0)await Q.makeXRCompatible();if(f=J.getPixelRatio(),J.getSize(_),!(typeof XRWebGLBinding!=="undefined"&&("createProjectionLayer"in XRWebGLBinding.prototype))){let R0={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer($,Q,R0),$.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),D=new lJ(N.framebufferWidth,N.framebufferHeight,{format:oJ,type:R8,colorSpace:J.outputColorSpace,stencilBuffer:M.stencil})}else{let R0=null,V0=null,$0=null;if(M.depth)$0=M.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,R0=M.stencil?S9:k7,V0=M.stencil?X9:H9;let g0={colorFormat:Q.RGBA8,depthFormat:$0,scaleFactor:W};E=new XRWebGLBinding($,Q),G=E.createProjectionLayer(g0),$.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),D=new lJ(G.textureWidth,G.textureHeight,{format:oJ,type:R8,depthTexture:new v7(G.textureWidth,G.textureHeight,V0,void 0,void 0,void 0,void 0,void 0,void 0,R0),stencilBuffer:M.stencil,colorSpace:J.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(Y),U=null,K=await $.requestReferenceSpace(H),h0.setContext($),h0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if($!==null)return $.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function d(s){for(let Q0=0;Q0<s.removed.length;Q0++){let R0=s.removed[Q0],V0=z.indexOf(R0);if(V0>=0)z[V0]=null,C[V0].disconnect(R0)}for(let Q0=0;Q0<s.added.length;Q0++){let R0=s.added[Q0],V0=z.indexOf(R0);if(V0===-1){for(let g0=0;g0<C.length;g0++)if(g0>=z.length){z.push(R0),V0=g0;break}else if(z[g0]===null){z[g0]=R0,V0=g0;break}if(V0===-1)break}let $0=C[V0];if($0)$0.connect(R0)}}let a=new y,p=new y;function t(s,Q0,R0){a.setFromMatrixPosition(Q0.matrixWorld),p.setFromMatrixPosition(R0.matrixWorld);let V0=a.distanceTo(p),$0=Q0.projectionMatrix.elements,g0=R0.projectionMatrix.elements,f0=$0[14]/($0[10]-1),p0=$0[14]/($0[10]+1),JJ=($0[9]+1)/$0[5],c0=($0[9]-1)/$0[5],w=($0[8]-1)/$0[0],qJ=(g0[8]+1)/g0[0],a0=f0*w,r0=f0*qJ,E0=V0/(-w+qJ),WJ=E0*-w;if(Q0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(WJ),s.translateZ(E0),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),$0[10]===-1)s.projectionMatrix.copy(Q0.projectionMatrix),s.projectionMatrixInverse.copy(Q0.projectionMatrixInverse);else{let F0=f0+E0,_0=p0+E0,B=a0-WJ,R=r0+(V0-WJ),v=JJ*p0/_0*F0,i=c0*p0/_0*F0;s.projectionMatrix.makePerspective(B,R,v,i,F0,_0),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function g(s,Q0){if(Q0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(Q0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if($===null)return;let{near:Q0,far:R0}=s;if(L.texture!==null){if(L.depthNear>0)Q0=L.depthNear;if(L.depthFar>0)R0=L.depthFar}if(k.near=A.near=I.near=Q0,k.far=A.far=I.far=R0,V!==k.near||j!==k.far)$.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,j=k.far;I.layers.mask=s.layers.mask|2,A.layers.mask=s.layers.mask|4,k.layers.mask=I.layers.mask|A.layers.mask;let V0=s.parent,$0=k.cameras;g(k,V0);for(let g0=0;g0<$0.length;g0++)g($0[g0],V0);if($0.length===2)t(k,I,A);else k.projectionMatrix.copy(I.projectionMatrix);H0(s,k,V0)};function H0(s,Q0,R0){if(R0===null)s.matrix.copy(Q0.matrixWorld);else s.matrix.copy(R0.matrixWorld),s.matrix.invert(),s.matrix.multiply(Q0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(Q0.projectionMatrix),s.projectionMatrixInverse.copy(Q0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=Q9*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return k},this.getFoveation=function(){if(G===null&&N===null)return;return Y},this.setFoveation=function(s){if(Y=s,G!==null)G.fixedFoveation=s;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=s},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(k)};let U0=null;function w0(s,Q0){if(X=Q0.getViewerPose(U||K),O=Q0,X!==null){let R0=X.views;if(N!==null)J.setRenderTargetFramebuffer(D,N.framebuffer),J.setRenderTarget(D);let V0=!1;if(R0.length!==k.cameras.length)k.cameras.length=0,V0=!0;for(let f0=0;f0<R0.length;f0++){let p0=R0[f0],JJ=null;if(N!==null)JJ=N.getViewport(p0);else{let w=E.getViewSubImage(G,p0);if(JJ=w.viewport,f0===0)J.setRenderTargetTextures(D,w.colorTexture,G.ignoreDepthValues?void 0:w.depthStencilTexture),J.setRenderTarget(D)}let c0=l[f0];if(c0===void 0)c0=new zJ,c0.layers.enable(f0),c0.viewport=new $J,l[f0]=c0;if(c0.matrix.fromArray(p0.transform.matrix),c0.matrix.decompose(c0.position,c0.quaternion,c0.scale),c0.projectionMatrix.fromArray(p0.projectionMatrix),c0.projectionMatrixInverse.copy(c0.projectionMatrix).invert(),c0.viewport.set(JJ.x,JJ.y,JJ.width,JJ.height),f0===0)k.matrix.copy(c0.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);if(V0===!0)k.cameras.push(c0)}let $0=$.enabledFeatures;if($0&&$0.includes("depth-sensing")&&$.depthUsage=="gpu-optimized"&&E){let f0=E.getDepthInformation(R0[0]);if(f0&&f0.isValid&&f0.texture)L.init(J,f0,$.renderState)}}for(let R0=0;R0<C.length;R0++){let V0=z[R0],$0=C[R0];if(V0!==null&&$0!==void 0)$0.update(V0,Q0,U||K)}if(U0)U0(s,Q0);if(Q0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:Q0});O=null}let h0=new XW;h0.setAnimationLoop(w0),this.setAnimationLoop=function(s){U0=s},this.dispose=function(){}}}var h8=new mJ,nU=new ZJ;function iU(J,Q){function Z(q,D){if(q.matrixAutoUpdate===!0)q.updateMatrix();D.value.copy(q.matrix)}function $(q,D){if(D.color.getRGB(q.fogColor.value,NQ(J)),D.isFog)q.fogNear.value=D.near,q.fogFar.value=D.far;else if(D.isFogExp2)q.fogDensity.value=D.density}function W(q,D,C,z,_){if(D.isMeshBasicMaterial)K(q,D);else if(D.isMeshLambertMaterial)K(q,D);else if(D.isMeshToonMaterial)K(q,D),G(q,D);else if(D.isMeshPhongMaterial)K(q,D),E(q,D);else if(D.isMeshStandardMaterial){if(K(q,D),N(q,D),D.isMeshPhysicalMaterial)O(q,D,_)}else if(D.isMeshMatcapMaterial)K(q,D),L(q,D);else if(D.isMeshDepthMaterial)K(q,D);else if(D.isMeshDistanceMaterial)K(q,D),M(q,D);else if(D.isMeshNormalMaterial)K(q,D);else if(D.isLineBasicMaterial){if(H(q,D),D.isLineDashedMaterial)Y(q,D)}else if(D.isPointsMaterial)U(q,D,C,z);else if(D.isSpriteMaterial)X(q,D);else if(D.isShadowMaterial)q.color.value.copy(D.color),q.opacity.value=D.opacity;else if(D.isShaderMaterial)D.uniformsNeedUpdate=!1}function K(q,D){if(q.opacity.value=D.opacity,D.color)q.diffuse.value.copy(D.color);if(D.emissive)q.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity);if(D.map)q.map.value=D.map,Z(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,Z(D.alphaMap,q.alphaMapTransform);if(D.bumpMap){if(q.bumpMap.value=D.bumpMap,Z(D.bumpMap,q.bumpMapTransform),q.bumpScale.value=D.bumpScale,D.side===PJ)q.bumpScale.value*=-1}if(D.normalMap){if(q.normalMap.value=D.normalMap,Z(D.normalMap,q.normalMapTransform),q.normalScale.value.copy(D.normalScale),D.side===PJ)q.normalScale.value.negate()}if(D.displacementMap)q.displacementMap.value=D.displacementMap,Z(D.displacementMap,q.displacementMapTransform),q.displacementScale.value=D.displacementScale,q.displacementBias.value=D.displacementBias;if(D.emissiveMap)q.emissiveMap.value=D.emissiveMap,Z(D.emissiveMap,q.emissiveMapTransform);if(D.specularMap)q.specularMap.value=D.specularMap,Z(D.specularMap,q.specularMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest;let C=Q.get(D),z=C.envMap,_=C.envMapRotation;if(z){if(q.envMap.value=z,h8.copy(_),h8.x*=-1,h8.y*=-1,h8.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1)h8.y*=-1,h8.z*=-1;q.envMapRotation.value.setFromMatrix4(nU.makeRotationFromEuler(h8)),q.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=D.reflectivity,q.ior.value=D.ior,q.refractionRatio.value=D.refractionRatio}if(D.lightMap)q.lightMap.value=D.lightMap,q.lightMapIntensity.value=D.lightMapIntensity,Z(D.lightMap,q.lightMapTransform);if(D.aoMap)q.aoMap.value=D.aoMap,q.aoMapIntensity.value=D.aoMapIntensity,Z(D.aoMap,q.aoMapTransform)}function H(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,D.map)q.map.value=D.map,Z(D.map,q.mapTransform)}function Y(q,D){q.dashSize.value=D.dashSize,q.totalSize.value=D.dashSize+D.gapSize,q.scale.value=D.scale}function U(q,D,C,z){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.size.value=D.size*C,q.scale.value=z*0.5,D.map)q.map.value=D.map,Z(D.map,q.uvTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,Z(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function X(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.rotation.value=D.rotation,D.map)q.map.value=D.map,Z(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,Z(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function E(q,D){q.specular.value.copy(D.specular),q.shininess.value=Math.max(D.shininess,0.0001)}function G(q,D){if(D.gradientMap)q.gradientMap.value=D.gradientMap}function N(q,D){if(q.metalness.value=D.metalness,D.metalnessMap)q.metalnessMap.value=D.metalnessMap,Z(D.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=D.roughness,D.roughnessMap)q.roughnessMap.value=D.roughnessMap,Z(D.roughnessMap,q.roughnessMapTransform);if(D.envMap)q.envMapIntensity.value=D.envMapIntensity}function O(q,D,C){if(q.ior.value=D.ior,D.sheen>0){if(q.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),q.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap)q.sheenColorMap.value=D.sheenColorMap,Z(D.sheenColorMap,q.sheenColorMapTransform);if(D.sheenRoughnessMap)q.sheenRoughnessMap.value=D.sheenRoughnessMap,Z(D.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(D.clearcoat>0){if(q.clearcoat.value=D.clearcoat,q.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap)q.clearcoatMap.value=D.clearcoatMap,Z(D.clearcoatMap,q.clearcoatMapTransform);if(D.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,Z(D.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(D.clearcoatNormalMap){if(q.clearcoatNormalMap.value=D.clearcoatNormalMap,Z(D.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===PJ)q.clearcoatNormalScale.value.negate()}}if(D.dispersion>0)q.dispersion.value=D.dispersion;if(D.iridescence>0){if(q.iridescence.value=D.iridescence,q.iridescenceIOR.value=D.iridescenceIOR,q.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap)q.iridescenceMap.value=D.iridescenceMap,Z(D.iridescenceMap,q.iridescenceMapTransform);if(D.iridescenceThicknessMap)q.iridescenceThicknessMap.value=D.iridescenceThicknessMap,Z(D.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(D.transmission>0){if(q.transmission.value=D.transmission,q.transmissionSamplerMap.value=C.texture,q.transmissionSamplerSize.value.set(C.width,C.height),D.transmissionMap)q.transmissionMap.value=D.transmissionMap,Z(D.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=D.thickness,D.thicknessMap)q.thicknessMap.value=D.thicknessMap,Z(D.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=D.attenuationDistance,q.attenuationColor.value.copy(D.attenuationColor)}if(D.anisotropy>0){if(q.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap)q.anisotropyMap.value=D.anisotropyMap,Z(D.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=D.specularIntensity,q.specularColor.value.copy(D.specularColor),D.specularColorMap)q.specularColorMap.value=D.specularColorMap,Z(D.specularColorMap,q.specularColorMapTransform);if(D.specularIntensityMap)q.specularIntensityMap.value=D.specularIntensityMap,Z(D.specularIntensityMap,q.specularIntensityMapTransform)}function L(q,D){if(D.matcap)q.matcap.value=D.matcap}function M(q,D){let C=Q.get(D).light;q.referencePosition.value.setFromMatrixPosition(C.matrixWorld),q.nearDistance.value=C.shadow.camera.near,q.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:$,refreshMaterialUniforms:W}}function oU(J,Q,Z,$){let W={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(C,z){let _=z.program;$.uniformBlockBinding(C,_)}function X(C,z){let _=W[C.id];if(_===void 0)L(C),_=E(C),W[C.id]=_,C.addEventListener("dispose",q);let f=z.program;$.updateUBOMapping(C,f);let I=Q.render.frame;if(K[C.id]!==I)N(C),K[C.id]=I}function E(C){let z=G();C.__bindingPointIndex=z;let _=J.createBuffer(),f=C.__size,I=C.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,f,I),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,_),_}function G(){for(let C=0;C<Y;C++)if(H.indexOf(C)===-1)return H.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(C){let z=W[C.id],_=C.uniforms,f=C.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let I=0,A=_.length;I<A;I++){let l=Array.isArray(_[I])?_[I]:[_[I]];for(let k=0,V=l.length;k<V;k++){let j=l[k];if(O(j,I,k,f)===!0){let x=j.__offset,u=Array.isArray(j.value)?j.value:[j.value],d=0;for(let a=0;a<u.length;a++){let p=u[a],t=M(p);if(typeof p==="number"||typeof p==="boolean")j.__data[0]=p,J.bufferSubData(J.UNIFORM_BUFFER,x+d,j.__data);else if(p.isMatrix3)j.__data[0]=p.elements[0],j.__data[1]=p.elements[1],j.__data[2]=p.elements[2],j.__data[3]=0,j.__data[4]=p.elements[3],j.__data[5]=p.elements[4],j.__data[6]=p.elements[5],j.__data[7]=0,j.__data[8]=p.elements[6],j.__data[9]=p.elements[7],j.__data[10]=p.elements[8],j.__data[11]=0;else p.toArray(j.__data,d),d+=t.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,x,j.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(C,z,_,f){let I=C.value,A=z+"_"+_;if(f[A]===void 0){if(typeof I==="number"||typeof I==="boolean")f[A]=I;else f[A]=I.clone();return!0}else{let l=f[A];if(typeof I==="number"||typeof I==="boolean"){if(l!==I)return f[A]=I,!0}else if(l.equals(I)===!1)return l.copy(I),!0}return!1}function L(C){let z=C.uniforms,_=0,f=16;for(let A=0,l=z.length;A<l;A++){let k=Array.isArray(z[A])?z[A]:[z[A]];for(let V=0,j=k.length;V<j;V++){let x=k[V],u=Array.isArray(x.value)?x.value:[x.value];for(let d=0,a=u.length;d<a;d++){let p=u[d],t=M(p),g=_%f,H0=g%t.boundary,U0=g+H0;if(_+=H0,U0!==0&&f-U0<t.storage)_+=f-U0;x.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=_,_+=t.storage}}}let I=_%f;if(I>0)_+=f-I;return C.__size=_,C.__cache={},this}function M(C){let z={boundary:0,storage:0};if(typeof C==="number"||typeof C==="boolean")z.boundary=4,z.storage=4;else if(C.isVector2)z.boundary=8,z.storage=8;else if(C.isVector3||C.isColor)z.boundary=16,z.storage=12;else if(C.isVector4)z.boundary=16,z.storage=16;else if(C.isMatrix3)z.boundary=48,z.storage=48;else if(C.isMatrix4)z.boundary=64,z.storage=64;else if(C.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C);return z}function q(C){let z=C.target;z.removeEventListener("dispose",q);let _=H.indexOf(z.__bindingPointIndex);H.splice(_,1),J.deleteBuffer(W[z.id]),delete W[z.id],delete K[z.id]}function D(){for(let C in W)J.deleteBuffer(W[C]);H=[],W={},K={}}return{bind:U,update:X,dispose:D}}class gQ{constructor(J={}){let{canvas:Q=T$(),context:Z=null,depth:$=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:X="default",failIfMajorPerformanceCaveat:E=!1,reverseDepthBuffer:G=!1}=J;this.isWebGLRenderer=!0;let N;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=Z.getContextAttributes().alpha}else N=K;let O=new Uint32Array(4),L=new Int32Array(4),M=null,q=null,D=[],C=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=L$,this.toneMapping=H8,this.toneMappingExposure=1;let z=this,_=!1,f=0,I=0,A=null,l=-1,k=null,V=new $J,j=new $J,x=null,u=new v0(0),d=0,a=Q.width,p=Q.height,t=1,g=null,H0=null,U0=new $J(0,0,a,p),w0=new $J(0,0,a,p),h0=!1,s=new f9,Q0=!1,R0=!1;this.transmissionResolutionScale=1;let V0=new ZJ,$0=new ZJ,g0=new y,f0=new $J,p0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},JJ=!1;function c0(){return A===null?t:1}let w=Z;function qJ(F,T){return Q.getContext(F,T)}try{let F={alpha:!0,depth:$,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:X,failIfMajorPerformanceCaveat:E};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${IZ}`);if(Q.addEventListener("webglcontextlost",c,!1),Q.addEventListener("webglcontextrestored",n,!1),Q.addEventListener("webglcontextcreationerror",X0,!1),w===null){if(w=qJ("webgl2",F),w===null)if(qJ("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let a0,r0,E0,WJ,F0,_0,B,R,v,i,o,m,L0,W0,q0,P0,J0,G0,b0,B0,D0,T0,y0,QJ;function P(){if(a0=new qX(w),a0.init(),T0=new uU(w,a0),r0=new HX(w,a0,J,T0),E0=new lU(w,a0),r0.reverseDepthBuffer&&G)E0.buffers.depth.setReversed(!0);WJ=new RX(w),F0=new PU,_0=new dU(w,a0,E0,F0,r0,T0,WJ),B=new UX(z),R=new NX(z),v=new BK(w),y0=new KX(w,v),i=new DX(w,v,WJ,y0),o=new kX(w,i,v,WJ),b0=new FX(w,r0,_0),P0=new XX(F0),m=new AU(z,B,R,a0,r0,y0,P0),L0=new iU(z,F0),W0=new SU,q0=new hU(a0),G0=new WX(z,B,R,E0,o,N,Y),J0=new pU(z,o,r0),QJ=new oU(w,WJ,r0,E0),B0=new YX(w,a0,WJ),D0=new OX(w,a0,WJ),WJ.programs=m.programs,z.capabilities=r0,z.extensions=a0,z.properties=F0,z.renderLists=W0,z.shadowMap=J0,z.state=E0,z.info=WJ}P();let e=new MW(z,w);this.xr=e,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let F=a0.get("WEBGL_lose_context");if(F)F.loseContext()},this.forceContextRestore=function(){let F=a0.get("WEBGL_lose_context");if(F)F.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(F){if(F===void 0)return;t=F,this.setSize(a,p,!1)},this.getSize=function(F){return F.set(a,p)},this.setSize=function(F,T,b=!0){if(e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(a=F,p=T,Q.width=Math.floor(F*t),Q.height=Math.floor(T*t),b===!0)Q.style.width=F+"px",Q.style.height=T+"px";this.setViewport(0,0,F,T)},this.getDrawingBufferSize=function(F){return F.set(a*t,p*t).floor()},this.setDrawingBufferSize=function(F,T,b){a=F,p=T,t=b,Q.width=Math.floor(F*b),Q.height=Math.floor(T*b),this.setViewport(0,0,F,T)},this.getCurrentViewport=function(F){return F.copy(V)},this.getViewport=function(F){return F.copy(U0)},this.setViewport=function(F,T,b,h){if(F.isVector4)U0.set(F.x,F.y,F.z,F.w);else U0.set(F,T,b,h);E0.viewport(V.copy(U0).multiplyScalar(t).round())},this.getScissor=function(F){return F.copy(w0)},this.setScissor=function(F,T,b,h){if(F.isVector4)w0.set(F.x,F.y,F.z,F.w);else w0.set(F,T,b,h);E0.scissor(j.copy(w0).multiplyScalar(t).round())},this.getScissorTest=function(){return h0},this.setScissorTest=function(F){E0.setScissorTest(h0=F)},this.setOpaqueSort=function(F){g=F},this.setTransparentSort=function(F){H0=F},this.getClearColor=function(F){return F.copy(G0.getClearColor())},this.setClearColor=function(){G0.setClearColor.apply(G0,arguments)},this.getClearAlpha=function(){return G0.getClearAlpha()},this.setClearAlpha=function(){G0.setClearAlpha.apply(G0,arguments)},this.clear=function(F=!0,T=!0,b=!0){let h=0;if(F){let S=!1;if(A!==null){let r=A.texture.format;S=r===T6||r===P6||r===A6}if(S){let r=A.texture.type,K0=r===R8||r===H9||r===T9||r===X9||r===C6||r===_6,N0=G0.getClearColor(),O0=G0.getClearAlpha(),I0=N0.r,C0=N0.g,k0=N0.b;if(K0)O[0]=I0,O[1]=C0,O[2]=k0,O[3]=O0,w.clearBufferuiv(w.COLOR,0,O);else L[0]=I0,L[1]=C0,L[2]=k0,L[3]=O0,w.clearBufferiv(w.COLOR,0,L)}else h|=w.COLOR_BUFFER_BIT}if(T)h|=w.DEPTH_BUFFER_BIT;if(b)h|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);w.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",c,!1),Q.removeEventListener("webglcontextrestored",n,!1),Q.removeEventListener("webglcontextcreationerror",X0,!1),G0.dispose(),W0.dispose(),q0.dispose(),F0.dispose(),B.dispose(),R.dispose(),o.dispose(),y0.dispose(),QJ.dispose(),m.dispose(),e.dispose(),e.removeEventListener("sessionstart",cJ),e.removeEventListener("sessionend",rQ),V8.stop()};function c(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function n(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let F=WJ.autoReset,T=J0.enabled,b=J0.autoUpdate,h=J0.needsUpdate,S=J0.type;P(),WJ.autoReset=F,J0.enabled=T,J0.autoUpdate=b,J0.needsUpdate=h,J0.type=S}function X0(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Y0(F){let T=F.target;T.removeEventListener("dispose",Y0),S0(T)}function S0(F){KJ(F),F0.remove(F)}function KJ(F){let T=F0.get(F).programs;if(T!==void 0){if(T.forEach(function(b){m.releaseProgram(b)}),F.isShaderMaterial)m.releaseShaderCache(F)}}this.renderBufferDirect=function(F,T,b,h,S,r){if(T===null)T=p0;let K0=S.isMesh&&S.matrixWorld.determinant()<0,N0=wW(F,T,b,h,S);E0.setMaterial(h,K0);let O0=b.index,I0=1;if(h.wireframe===!0){if(O0=i.getWireframeAttribute(b),O0===void 0)return;I0=2}let C0=b.drawRange,k0=b.attributes.position,m0=C0.start*I0,n0=(C0.start+C0.count)*I0;if(r!==null)m0=Math.max(m0,r.start*I0),n0=Math.min(n0,(r.start+r.count)*I0);if(O0!==null)m0=Math.max(m0,0),n0=Math.min(n0,O0.count);else if(k0!==void 0&&k0!==null)m0=Math.max(m0,0),n0=Math.min(n0,k0.count);let HJ=n0-m0;if(HJ<0||HJ===1/0)return;y0.setup(S,h,N0,b,O0);let YJ,d0=B0;if(O0!==null)YJ=v.get(O0),d0=D0,d0.setIndex(YJ);if(S.isMesh)if(h.wireframe===!0)E0.setLineWidth(h.wireframeLinewidth*c0()),d0.setMode(w.LINES);else d0.setMode(w.TRIANGLES);else if(S.isLine){let M0=h.linewidth;if(M0===void 0)M0=1;if(E0.setLineWidth(M0*c0()),S.isLineSegments)d0.setMode(w.LINES);else if(S.isLineLoop)d0.setMode(w.LINE_LOOP);else d0.setMode(w.LINE_STRIP)}else if(S.isPoints)d0.setMode(w.POINTS);else if(S.isSprite)d0.setMode(w.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)d0.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(!a0.get("WEBGL_multi_draw")){let{_multiDrawStarts:M0,_multiDrawCounts:OJ,_multiDrawCount:i0}=S,hJ=O0?v.get(O0).bytesPerElement:1,p8=F0.get(h).currentProgram.getUniforms();for(let CJ=0;CJ<i0;CJ++)p8.setValue(w,"_gl_DrawID",CJ),d0.render(M0[CJ]/hJ,OJ[CJ])}else d0.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else if(S.isInstancedMesh)d0.renderInstances(m0,HJ,S.count);else if(b.isInstancedBufferGeometry){let M0=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,OJ=Math.min(b.instanceCount,M0);d0.renderInstances(m0,HJ,OJ)}else d0.render(m0,HJ)};function DJ(F,T,b){if(F.transparent===!0&&F.side===nJ&&F.forceSinglePass===!1)F.side=PJ,F.needsUpdate=!0,d9(F,T,b),F.side=Z9,F.needsUpdate=!0,d9(F,T,b),F.side=nJ;else d9(F,T,b)}this.compile=function(F,T,b=null){if(b===null)b=F;if(q=q0.get(b),q.init(T),C.push(q),b.traverseVisible(function(S){if(S.isLight&&S.layers.test(T.layers)){if(q.pushLight(S),S.castShadow)q.pushShadow(S)}}),F!==b)F.traverseVisible(function(S){if(S.isLight&&S.layers.test(T.layers)){if(q.pushLight(S),S.castShadow)q.pushShadow(S)}});q.setupLights();let h=new Set;return F.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;let r=S.material;if(r)if(Array.isArray(r))for(let K0=0;K0<r.length;K0++){let N0=r[K0];DJ(N0,b,S),h.add(N0)}else DJ(r,b,S),h.add(r)}),C.pop(),q=null,h},this.compileAsync=function(F,T,b=null){let h=this.compile(F,T,b);return new Promise((S)=>{function r(){if(h.forEach(function(K0){if(F0.get(K0).currentProgram.isReady())h.delete(K0)}),h.size===0){S(F);return}setTimeout(r,10)}if(a0.get("KHR_parallel_shader_compile")!==null)r();else setTimeout(r,10)})};let s0=null;function eJ(F){if(s0)s0(F)}function cJ(){V8.stop()}function rQ(){V8.start()}let V8=new XW;if(V8.setAnimationLoop(eJ),typeof self!=="undefined")V8.setContext(self);this.setAnimationLoop=function(F){s0=F,e.setAnimationLoop(F),F===null?V8.stop():V8.start()},e.addEventListener("sessionstart",cJ),e.addEventListener("sessionend",rQ),this.render=function(F,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(e.enabled===!0&&e.isPresenting===!0){if(e.cameraAutoUpdate===!0)e.updateCamera(T);T=e.getCamera()}if(F.isScene===!0)F.onBeforeRender(z,F,T,A);if(q=q0.get(F,C.length),q.init(T),C.push(q),$0.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),s.setFromProjectionMatrix($0),R0=this.localClippingEnabled,Q0=P0.init(this.clippingPlanes,R0),M=W0.get(F,D.length),M.init(),D.push(M),e.enabled===!0&&e.isPresenting===!0){let r=z.xr.getDepthSensingMesh();if(r!==null)r7(r,T,-1/0,z.sortObjects)}if(r7(F,T,0,z.sortObjects),M.finish(),z.sortObjects===!0)M.sort(g,H0);if(JJ=e.enabled===!1||e.isPresenting===!1||e.hasDepthSensing()===!1,JJ)G0.addToRenderList(M,F);if(this.info.render.frame++,Q0===!0)P0.beginShadows();let b=q.state.shadowsArray;if(J0.render(b,F,T),Q0===!0)P0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:h,transmissive:S}=M;if(q.setupLights(),T.isArrayCamera){let r=T.cameras;if(S.length>0)for(let K0=0,N0=r.length;K0<N0;K0++){let O0=r[K0];eQ(h,S,F,O0)}if(JJ)G0.render(F);for(let K0=0,N0=r.length;K0<N0;K0++){let O0=r[K0];tQ(M,F,O0,O0.viewport)}}else{if(S.length>0)eQ(h,S,F,T);if(JJ)G0.render(F);tQ(M,F,T)}if(A!==null&&I===0)_0.updateMultisampleRenderTarget(A),_0.updateRenderTargetMipmap(A);if(F.isScene===!0)F.onAfterRender(z,F,T);if(y0.resetDefaultState(),l=-1,k=null,C.pop(),C.length>0){if(q=C[C.length-1],Q0===!0)P0.setGlobalState(z.clippingPlanes,q.state.camera)}else q=null;if(D.pop(),D.length>0)M=D[D.length-1];else M=null};function r7(F,T,b,h){if(F.visible===!1)return;if(F.layers.test(T.layers)){if(F.isGroup)b=F.renderOrder;else if(F.isLOD){if(F.autoUpdate===!0)F.update(T)}else if(F.isLight){if(q.pushLight(F),F.castShadow)q.pushShadow(F)}else if(F.isSprite){if(!F.frustumCulled||s.intersectsSprite(F)){if(h)f0.setFromMatrixPosition(F.matrixWorld).applyMatrix4($0);let K0=o.update(F),N0=F.material;if(N0.visible)M.push(F,K0,N0,b,f0.z,null)}}else if(F.isMesh||F.isLine||F.isPoints){if(!F.frustumCulled||s.intersectsObject(F)){let K0=o.update(F),N0=F.material;if(h){if(F.boundingSphere!==void 0){if(F.boundingSphere===null)F.computeBoundingSphere();f0.copy(F.boundingSphere.center)}else{if(K0.boundingSphere===null)K0.computeBoundingSphere();f0.copy(K0.boundingSphere.center)}f0.applyMatrix4(F.matrixWorld).applyMatrix4($0)}if(Array.isArray(N0)){let O0=K0.groups;for(let I0=0,C0=O0.length;I0<C0;I0++){let k0=O0[I0],m0=N0[k0.materialIndex];if(m0&&m0.visible)M.push(F,K0,m0,b,f0.z,k0)}}else if(N0.visible)M.push(F,K0,N0,b,f0.z,null)}}}let r=F.children;for(let K0=0,N0=r.length;K0<N0;K0++)r7(r[K0],T,b,h)}function tQ(F,T,b,h){let{opaque:S,transmissive:r,transparent:K0}=F;if(q.setupLightsView(b),Q0===!0)P0.setGlobalState(z.clippingPlanes,b);if(h)E0.viewport(V.copy(h));if(S.length>0)l9(S,T,b);if(r.length>0)l9(r,T,b);if(K0.length>0)l9(K0,T,b);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function eQ(F,T,b,h){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(q.state.transmissionRenderTarget[h.id]===void 0)q.state.transmissionRenderTarget[h.id]=new lJ(1,1,{generateMipmaps:!0,type:a0.has("EXT_color_buffer_half_float")||a0.has("EXT_color_buffer_float")?A8:R8,minFilter:Y9,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:l0.workingColorSpace});let r=q.state.transmissionRenderTarget[h.id],K0=h.viewport||V;r.setSize(K0.z*z.transmissionResolutionScale,K0.w*z.transmissionResolutionScale);let N0=z.getRenderTarget();if(z.setRenderTarget(r),z.getClearColor(u),d=z.getClearAlpha(),d<1)z.setClearColor(16777215,0.5);if(z.clear(),JJ)G0.render(b);let O0=z.toneMapping;z.toneMapping=H8;let I0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(q.setupLightsView(h),Q0===!0)P0.setGlobalState(z.clippingPlanes,h);if(l9(F,b,h),_0.updateMultisampleRenderTarget(r),_0.updateRenderTargetMipmap(r),a0.has("WEBGL_multisampled_render_to_texture")===!1){let C0=!1;for(let k0=0,m0=T.length;k0<m0;k0++){let n0=T[k0],HJ=n0.object,YJ=n0.geometry,d0=n0.material,M0=n0.group;if(d0.side===nJ&&HJ.layers.test(h.layers)){let OJ=d0.side;d0.side=PJ,d0.needsUpdate=!0,JZ(HJ,b,h,YJ,d0,M0),d0.side=OJ,d0.needsUpdate=!0,C0=!0}}if(C0===!0)_0.updateMultisampleRenderTarget(r),_0.updateRenderTargetMipmap(r)}if(z.setRenderTarget(N0),z.setClearColor(u,d),I0!==void 0)h.viewport=I0;z.toneMapping=O0}function l9(F,T,b){let h=T.isScene===!0?T.overrideMaterial:null;for(let S=0,r=F.length;S<r;S++){let K0=F[S],N0=K0.object,O0=K0.geometry,I0=h===null?K0.material:h,C0=K0.group;if(N0.layers.test(b.layers))JZ(N0,T,b,O0,I0,C0)}}function JZ(F,T,b,h,S,r){if(F.onBeforeRender(z,T,b,h,S,r),F.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),S.onBeforeRender(z,T,b,h,F,r),S.transparent===!0&&S.side===nJ&&S.forceSinglePass===!1)S.side=PJ,S.needsUpdate=!0,z.renderBufferDirect(b,T,h,S,F,r),S.side=Z9,S.needsUpdate=!0,z.renderBufferDirect(b,T,h,S,F,r),S.side=nJ;else z.renderBufferDirect(b,T,h,S,F,r);F.onAfterRender(z,T,b,h,S,r)}function d9(F,T,b){if(T.isScene!==!0)T=p0;let h=F0.get(F),S=q.state.lights,r=q.state.shadowsArray,K0=S.state.version,N0=m.getParameters(F,S.state,r,T,b),O0=m.getProgramCacheKey(N0),I0=h.programs;if(h.environment=F.isMeshStandardMaterial?T.environment:null,h.fog=T.fog,h.envMap=(F.isMeshStandardMaterial?R:B).get(F.envMap||h.environment),h.envMapRotation=h.environment!==null&&F.envMap===null?T.environmentRotation:F.envMapRotation,I0===void 0)F.addEventListener("dispose",Y0),I0=new Map,h.programs=I0;let C0=I0.get(O0);if(C0!==void 0){if(h.currentProgram===C0&&h.lightsStateVersion===K0)return ZZ(F,N0),C0}else N0.uniforms=m.getUniforms(F),F.onBeforeCompile(N0,z),C0=m.acquireProgram(N0,O0),I0.set(O0,C0),h.uniforms=N0.uniforms;let k0=h.uniforms;if(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)k0.clippingPlanes=P0.uniform;if(ZZ(F,N0),h.needsLights=_W(F),h.lightsStateVersion=K0,h.needsLights)k0.ambientLightColor.value=S.state.ambient,k0.lightProbe.value=S.state.probe,k0.directionalLights.value=S.state.directional,k0.directionalLightShadows.value=S.state.directionalShadow,k0.spotLights.value=S.state.spot,k0.spotLightShadows.value=S.state.spotShadow,k0.rectAreaLights.value=S.state.rectArea,k0.ltc_1.value=S.state.rectAreaLTC1,k0.ltc_2.value=S.state.rectAreaLTC2,k0.pointLights.value=S.state.point,k0.pointLightShadows.value=S.state.pointShadow,k0.hemisphereLights.value=S.state.hemi,k0.directionalShadowMap.value=S.state.directionalShadowMap,k0.directionalShadowMatrix.value=S.state.directionalShadowMatrix,k0.spotShadowMap.value=S.state.spotShadowMap,k0.spotLightMatrix.value=S.state.spotLightMatrix,k0.spotLightMap.value=S.state.spotLightMap,k0.pointShadowMap.value=S.state.pointShadowMap,k0.pointShadowMatrix.value=S.state.pointShadowMatrix;return h.currentProgram=C0,h.uniformsList=null,C0}function QZ(F){if(F.uniformsList===null){let T=F.currentProgram.getUniforms();F.uniformsList=x9.seqWithValue(T.seq,F.uniforms)}return F.uniformsList}function ZZ(F,T){let b=F0.get(F);b.outputColorSpace=T.outputColorSpace,b.batching=T.batching,b.batchingColor=T.batchingColor,b.instancing=T.instancing,b.instancingColor=T.instancingColor,b.instancingMorph=T.instancingMorph,b.skinning=T.skinning,b.morphTargets=T.morphTargets,b.morphNormals=T.morphNormals,b.morphColors=T.morphColors,b.morphTargetsCount=T.morphTargetsCount,b.numClippingPlanes=T.numClippingPlanes,b.numIntersection=T.numClipIntersection,b.vertexAlphas=T.vertexAlphas,b.vertexTangents=T.vertexTangents,b.toneMapping=T.toneMapping}function wW(F,T,b,h,S){if(T.isScene!==!0)T=p0;_0.resetTextureUnits();let r=T.fog,K0=h.isMeshStandardMaterial?T.environment:null,N0=A===null?z.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:j9,O0=(h.isMeshStandardMaterial?R:B).get(h.envMap||K0),I0=h.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,C0=!!b.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),k0=!!b.morphAttributes.position,m0=!!b.morphAttributes.normal,n0=!!b.morphAttributes.color,HJ=H8;if(h.toneMapped){if(A===null||A.isXRRenderTarget===!0)HJ=z.toneMapping}let YJ=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,d0=YJ!==void 0?YJ.length:0,M0=F0.get(h),OJ=q.state.lights;if(Q0===!0){if(R0===!0||F!==k){let VJ=F===k&&h.id===l;P0.setState(h,F,VJ)}}let i0=!1;if(h.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==OJ.state.version)i0=!0;else if(M0.outputColorSpace!==N0)i0=!0;else if(S.isBatchedMesh&&M0.batching===!1)i0=!0;else if(!S.isBatchedMesh&&M0.batching===!0)i0=!0;else if(S.isBatchedMesh&&M0.batchingColor===!0&&S.colorTexture===null)i0=!0;else if(S.isBatchedMesh&&M0.batchingColor===!1&&S.colorTexture!==null)i0=!0;else if(S.isInstancedMesh&&M0.instancing===!1)i0=!0;else if(!S.isInstancedMesh&&M0.instancing===!0)i0=!0;else if(S.isSkinnedMesh&&M0.skinning===!1)i0=!0;else if(!S.isSkinnedMesh&&M0.skinning===!0)i0=!0;else if(S.isInstancedMesh&&M0.instancingColor===!0&&S.instanceColor===null)i0=!0;else if(S.isInstancedMesh&&M0.instancingColor===!1&&S.instanceColor!==null)i0=!0;else if(S.isInstancedMesh&&M0.instancingMorph===!0&&S.morphTexture===null)i0=!0;else if(S.isInstancedMesh&&M0.instancingMorph===!1&&S.morphTexture!==null)i0=!0;else if(M0.envMap!==O0)i0=!0;else if(h.fog===!0&&M0.fog!==r)i0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==P0.numPlanes||M0.numIntersection!==P0.numIntersection))i0=!0;else if(M0.vertexAlphas!==I0)i0=!0;else if(M0.vertexTangents!==C0)i0=!0;else if(M0.morphTargets!==k0)i0=!0;else if(M0.morphNormals!==m0)i0=!0;else if(M0.morphColors!==n0)i0=!0;else if(M0.toneMapping!==HJ)i0=!0;else if(M0.morphTargetsCount!==d0)i0=!0}else i0=!0,M0.__version=h.version;let hJ=M0.currentProgram;if(i0===!0)hJ=d9(h,T,S);let p8=!1,CJ=!1,k9=!1,e0=hJ.getUniforms(),SJ=M0.uniforms;if(E0.useProgram(hJ.program))p8=!0,CJ=!0,k9=!0;if(h.id!==l)l=h.id,CJ=!0;if(p8||k!==F){if(E0.buffers.depth.getReversed())V0.copy(F.projectionMatrix),j$(V0),y$(V0),e0.setValue(w,"projectionMatrix",V0);else e0.setValue(w,"projectionMatrix",F.projectionMatrix);e0.setValue(w,"viewMatrix",F.matrixWorldInverse);let IJ=e0.map.cameraPosition;if(IJ!==void 0)IJ.setValue(w,g0.setFromMatrixPosition(F.matrixWorld));if(r0.logarithmicDepthBuffer)e0.setValue(w,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)e0.setValue(w,"isOrthographic",F.isOrthographicCamera===!0);if(k!==F)k=F,CJ=!0,k9=!0}if(S.isSkinnedMesh){e0.setOptional(w,S,"bindMatrix"),e0.setOptional(w,S,"bindMatrixInverse");let VJ=S.skeleton;if(VJ){if(VJ.boneTexture===null)VJ.computeBoneTexture();e0.setValue(w,"boneTexture",VJ.boneTexture,_0)}}if(S.isBatchedMesh){if(e0.setOptional(w,S,"batchingTexture"),e0.setValue(w,"batchingTexture",S._matricesTexture,_0),e0.setOptional(w,S,"batchingIdTexture"),e0.setValue(w,"batchingIdTexture",S._indirectTexture,_0),e0.setOptional(w,S,"batchingColorTexture"),S._colorsTexture!==null)e0.setValue(w,"batchingColorTexture",S._colorsTexture,_0)}let jJ=b.morphAttributes;if(jJ.position!==void 0||jJ.normal!==void 0||jJ.color!==void 0)b0.update(S,b,hJ);if(CJ||M0.receiveShadow!==S.receiveShadow)M0.receiveShadow=S.receiveShadow,e0.setValue(w,"receiveShadow",S.receiveShadow);if(h.isMeshGouraudMaterial&&h.envMap!==null)SJ.envMap.value=O0,SJ.flipEnvMap.value=O0.isCubeTexture&&O0.isRenderTargetTexture===!1?-1:1;if(h.isMeshStandardMaterial&&h.envMap===null&&T.environment!==null)SJ.envMapIntensity.value=T.environmentIntensity;if(CJ){if(e0.setValue(w,"toneMappingExposure",z.toneMappingExposure),M0.needsLights)CW(SJ,k9);if(r&&h.fog===!0)L0.refreshFogUniforms(SJ,r);L0.refreshMaterialUniforms(SJ,h,t,p,q.state.transmissionRenderTarget[F.id]),x9.upload(w,QZ(M0),SJ,_0)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)x9.upload(w,QZ(M0),SJ,_0),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)e0.setValue(w,"center",S.center);if(e0.setValue(w,"modelViewMatrix",S.modelViewMatrix),e0.setValue(w,"normalMatrix",S.normalMatrix),e0.setValue(w,"modelMatrix",S.matrixWorld),h.isShaderMaterial||h.isRawShaderMaterial){let VJ=h.uniformsGroups;for(let IJ=0,t7=VJ.length;IJ<t7;IJ++){let L8=VJ[IJ];QJ.update(L8,hJ),QJ.bind(L8,hJ)}}return hJ}function CW(F,T){F.ambientLightColor.needsUpdate=T,F.lightProbe.needsUpdate=T,F.directionalLights.needsUpdate=T,F.directionalLightShadows.needsUpdate=T,F.pointLights.needsUpdate=T,F.pointLightShadows.needsUpdate=T,F.spotLights.needsUpdate=T,F.spotLightShadows.needsUpdate=T,F.rectAreaLights.needsUpdate=T,F.hemisphereLights.needsUpdate=T}function _W(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(F,T,b){F0.get(F.texture).__webglTexture=T,F0.get(F.depthTexture).__webglTexture=b;let h=F0.get(F);if(h.__hasExternalTextures=!0,h.__autoAllocateDepthBuffer=b===void 0,!h.__autoAllocateDepthBuffer){if(a0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),h.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(F,T){let b=F0.get(F);b.__webglFramebuffer=T,b.__useDefaultFramebuffer=T===void 0};let AW=w.createFramebuffer();this.setRenderTarget=function(F,T=0,b=0){A=F,f=T,I=b;let h=!0,S=null,r=!1,K0=!1;if(F){let O0=F0.get(F);if(O0.__useDefaultFramebuffer!==void 0)E0.bindFramebuffer(w.FRAMEBUFFER,null),h=!1;else if(O0.__webglFramebuffer===void 0)_0.setupRenderTarget(F);else if(O0.__hasExternalTextures)_0.rebindTextures(F,F0.get(F.texture).__webglTexture,F0.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let k0=F.depthTexture;if(O0.__boundDepthTexture!==k0){if(k0!==null&&F0.has(k0)&&(F.width!==k0.image.width||F.height!==k0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_0.setupDepthRenderbuffer(F)}}let I0=F.texture;if(I0.isData3DTexture||I0.isDataArrayTexture||I0.isCompressedArrayTexture)K0=!0;let C0=F0.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget){if(Array.isArray(C0[T]))S=C0[T][b];else S=C0[T];r=!0}else if(F.samples>0&&_0.useMultisampledRTT(F)===!1)S=F0.get(F).__webglMultisampledFramebuffer;else if(Array.isArray(C0))S=C0[b];else S=C0;V.copy(F.viewport),j.copy(F.scissor),x=F.scissorTest}else V.copy(U0).multiplyScalar(t).floor(),j.copy(w0).multiplyScalar(t).floor(),x=h0;if(b!==0)S=AW;if(E0.bindFramebuffer(w.FRAMEBUFFER,S)&&h)E0.drawBuffers(F,S);if(E0.viewport(V),E0.scissor(j),E0.setScissorTest(x),r){let O0=F0.get(F.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+T,O0.__webglTexture,b)}else if(K0){let O0=F0.get(F.texture),I0=T;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,O0.__webglTexture,b,I0)}else if(F!==null&&b!==0){let O0=F0.get(F.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,O0.__webglTexture,b)}l=-1},this.readRenderTargetPixels=function(F,T,b,h,S,r,K0){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let N0=F0.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&K0!==void 0)N0=N0[K0];if(N0){E0.bindFramebuffer(w.FRAMEBUFFER,N0);try{let O0=F.texture,I0=O0.format,C0=O0.type;if(!r0.textureFormatReadable(I0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!r0.textureTypeReadable(C0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=F.width-h&&(b>=0&&b<=F.height-S))w.readPixels(T,b,h,S,T0.convert(I0),T0.convert(C0),r)}finally{let O0=A!==null?F0.get(A).__webglFramebuffer:null;E0.bindFramebuffer(w.FRAMEBUFFER,O0)}}},this.readRenderTargetPixelsAsync=async function(F,T,b,h,S,r,K0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let N0=F0.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&K0!==void 0)N0=N0[K0];if(N0){let O0=F.texture,I0=O0.format,C0=O0.type;if(!r0.textureFormatReadable(I0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!r0.textureTypeReadable(C0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(T>=0&&T<=F.width-h&&(b>=0&&b<=F.height-S)){E0.bindFramebuffer(w.FRAMEBUFFER,N0);let k0=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,k0),w.bufferData(w.PIXEL_PACK_BUFFER,r.byteLength,w.STREAM_READ),w.readPixels(T,b,h,S,T0.convert(I0),T0.convert(C0),0);let m0=A!==null?F0.get(A).__webglFramebuffer:null;E0.bindFramebuffer(w.FRAMEBUFFER,m0);let n0=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await S$(w,n0,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,k0),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,r),w.deleteBuffer(k0),w.deleteSync(n0),r}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,T=null,b=0){if(F.isTexture!==!0)T8("WebGLRenderer: copyFramebufferToTexture function signature has changed."),T=arguments[0]||null,F=arguments[1];let h=Math.pow(2,-b),S=Math.floor(F.image.width*h),r=Math.floor(F.image.height*h),K0=T!==null?T.x:0,N0=T!==null?T.y:0;_0.setTexture2D(F,0),w.copyTexSubImage2D(w.TEXTURE_2D,b,0,0,K0,N0,S,r),E0.unbindTexture()};let PW=w.createFramebuffer(),TW=w.createFramebuffer();if(this.copyTextureToTexture=function(F,T,b=null,h=null,S=0,r=null){if(F.isTexture!==!0)T8("WebGLRenderer: copyTextureToTexture function signature has changed."),h=arguments[0]||null,F=arguments[1],T=arguments[2],r=arguments[3]||0,b=null;if(r===null)if(S!==0)T8("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),r=S,S=0;else r=0;let K0,N0,O0,I0,C0,k0,m0,n0,HJ,YJ=F.isCompressedTexture?F.mipmaps[r]:F.image;if(b!==null)K0=b.max.x-b.min.x,N0=b.max.y-b.min.y,O0=b.isBox3?b.max.z-b.min.z:1,I0=b.min.x,C0=b.min.y,k0=b.isBox3?b.min.z:0;else{let jJ=Math.pow(2,-S);if(K0=Math.floor(YJ.width*jJ),N0=Math.floor(YJ.height*jJ),F.isDataArrayTexture)O0=YJ.depth;else if(F.isData3DTexture)O0=Math.floor(YJ.depth*jJ);else O0=1;I0=0,C0=0,k0=0}if(h!==null)m0=h.x,n0=h.y,HJ=h.z;else m0=0,n0=0,HJ=0;let d0=T0.convert(T.format),M0=T0.convert(T.type),OJ;if(T.isData3DTexture)_0.setTexture3D(T,0),OJ=w.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)_0.setTexture2DArray(T,0),OJ=w.TEXTURE_2D_ARRAY;else _0.setTexture2D(T,0),OJ=w.TEXTURE_2D;w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,T.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,T.unpackAlignment);let i0=w.getParameter(w.UNPACK_ROW_LENGTH),hJ=w.getParameter(w.UNPACK_IMAGE_HEIGHT),p8=w.getParameter(w.UNPACK_SKIP_PIXELS),CJ=w.getParameter(w.UNPACK_SKIP_ROWS),k9=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,YJ.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,YJ.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,I0),w.pixelStorei(w.UNPACK_SKIP_ROWS,C0),w.pixelStorei(w.UNPACK_SKIP_IMAGES,k0);let e0=F.isDataArrayTexture||F.isData3DTexture,SJ=T.isDataArrayTexture||T.isData3DTexture;if(F.isDepthTexture){let jJ=F0.get(F),VJ=F0.get(T),IJ=F0.get(jJ.__renderTarget),t7=F0.get(VJ.__renderTarget);E0.bindFramebuffer(w.READ_FRAMEBUFFER,IJ.__webglFramebuffer),E0.bindFramebuffer(w.DRAW_FRAMEBUFFER,t7.__webglFramebuffer);for(let L8=0;L8<O0;L8++){if(e0)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,F0.get(F).__webglTexture,S,k0+L8),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,F0.get(T).__webglTexture,r,HJ+L8);w.blitFramebuffer(I0,C0,K0,N0,m0,n0,K0,N0,w.DEPTH_BUFFER_BIT,w.NEAREST)}E0.bindFramebuffer(w.READ_FRAMEBUFFER,null),E0.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(S!==0||F.isRenderTargetTexture||F0.has(F)){let jJ=F0.get(F),VJ=F0.get(T);E0.bindFramebuffer(w.READ_FRAMEBUFFER,PW),E0.bindFramebuffer(w.DRAW_FRAMEBUFFER,TW);for(let IJ=0;IJ<O0;IJ++){if(e0)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,jJ.__webglTexture,S,k0+IJ);else w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,jJ.__webglTexture,S);if(SJ)w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,VJ.__webglTexture,r,HJ+IJ);else w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,VJ.__webglTexture,r);if(S!==0)w.blitFramebuffer(I0,C0,K0,N0,m0,n0,K0,N0,w.COLOR_BUFFER_BIT,w.NEAREST);else if(SJ)w.copyTexSubImage3D(OJ,r,m0,n0,HJ+IJ,I0,C0,K0,N0);else w.copyTexSubImage2D(OJ,r,m0,n0,I0,C0,K0,N0)}E0.bindFramebuffer(w.READ_FRAMEBUFFER,null),E0.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(SJ)if(F.isDataTexture||F.isData3DTexture)w.texSubImage3D(OJ,r,m0,n0,HJ,K0,N0,O0,d0,M0,YJ.data);else if(T.isCompressedArrayTexture)w.compressedTexSubImage3D(OJ,r,m0,n0,HJ,K0,N0,O0,d0,YJ.data);else w.texSubImage3D(OJ,r,m0,n0,HJ,K0,N0,O0,d0,M0,YJ);else if(F.isDataTexture)w.texSubImage2D(w.TEXTURE_2D,r,m0,n0,K0,N0,d0,M0,YJ.data);else if(F.isCompressedTexture)w.compressedTexSubImage2D(w.TEXTURE_2D,r,m0,n0,YJ.width,YJ.height,d0,YJ.data);else w.texSubImage2D(w.TEXTURE_2D,r,m0,n0,K0,N0,d0,M0,YJ);if(w.pixelStorei(w.UNPACK_ROW_LENGTH,i0),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,hJ),w.pixelStorei(w.UNPACK_SKIP_PIXELS,p8),w.pixelStorei(w.UNPACK_SKIP_ROWS,CJ),w.pixelStorei(w.UNPACK_SKIP_IMAGES,k9),r===0&&T.generateMipmaps)w.generateMipmap(OJ);E0.unbindTexture()},this.copyTextureToTexture3D=function(F,T,b=null,h=null,S=0){if(F.isTexture!==!0)T8("WebGLRenderer: copyTextureToTexture3D function signature has changed."),b=arguments[0]||null,h=arguments[1]||null,F=arguments[2],T=arguments[3],S=arguments[4]||0;return T8('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,T,b,h,S)},this.initRenderTarget=function(F){if(F0.get(F).__webglFramebuffer===void 0)_0.setupRenderTarget(F)},this.initTexture=function(F){if(F.isCubeTexture)_0.setTextureCube(F,0);else if(F.isData3DTexture)_0.setTexture3D(F,0);else if(F.isDataArrayTexture||F.isCompressedArrayTexture)_0.setTexture2DArray(F,0);else _0.setTexture2D(F,0);E0.unbindTexture()},this.resetState=function(){f=0,I=0,A=null,E0.reset(),y0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return P$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorspace=l0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=l0._getUnpackColorSpace()}}var mQ={type:"change"},uQ={type:"start"},cQ={type:"end"},VW=0.000001,u0={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},c7=new z0,k8=new z0,aU=new y,s7=new y,lQ=new y,F9=new aJ,LW=new y,n7=new y,dQ=new y,i7=new y;class sQ extends p7{constructor(J,Q=null){super(J,Q);if(this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=0.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=0.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:O8.ROTATE,MIDDLE:O8.DOLLY,RIGHT:O8.PAN},this.state=u0.NONE,this.keyState=u0.NONE,this.target=new y,this._lastPosition=new y,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new y,this._movePrev=new z0,this._moveCurr=new z0,this._lastAxis=new y,this._zoomStart=new z0,this._zoomEnd=new z0,this._panStart=new z0,this._panEnd=new z0,this._pointers=[],this._pointerPositions={},this._onPointerMove=tU.bind(this),this._onPointerDown=rU.bind(this),this._onPointerUp=eU.bind(this),this._onPointerCancel=JG.bind(this),this._onContextMenu=HG.bind(this),this._onMouseWheel=YG.bind(this),this._onKeyDown=ZG.bind(this),this._onKeyUp=QG.bind(this),this._onTouchStart=XG.bind(this),this._onTouchMove=UG.bind(this),this._onTouchEnd=GG.bind(this),this._onMouseDown=$G.bind(this),this._onMouseMove=WG.bind(this),this._onMouseUp=KG.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,Q!==null)this.connect(),this.handleResize();this.update()}connect(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){let J=this.domElement.getBoundingClientRect(),Q=this.domElement.ownerDocument.documentElement;this.screen.left=J.left+window.pageXOffset-Q.clientLeft,this.screen.top=J.top+window.pageYOffset-Q.clientTop,this.screen.width=J.width,this.screen.height=J.height}update(){if(this._eye.subVectors(this.object.position,this.target),!this.noRotate)this._rotateCamera();if(!this.noZoom)this._zoomCamera();if(!this.noPan)this._panCamera();if(this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera){if(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>VW)this.dispatchEvent(mQ),this._lastPosition.copy(this.object.position)}else if(this.object.isOrthographicCamera){if(this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>VW||this._lastZoom!==this.object.zoom)this.dispatchEvent(mQ),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}else console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=u0.NONE,this.keyState=u0.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(mQ),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(k8.copy(this._panEnd).sub(this._panStart),k8.lengthSq()){if(this.object.isOrthographicCamera){let J=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,Q=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;k8.x*=J,k8.y*=Q}if(k8.multiplyScalar(this._eye.length()*this.panSpeed),s7.copy(this._eye).cross(this.object.up).setLength(k8.x),s7.add(aU.copy(this.object.up).setLength(k8.y)),this.object.position.add(s7),this.target.add(s7),this.staticMoving)this._panStart.copy(this._panEnd);else this._panStart.add(k8.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){i7.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let J=i7.length();if(J)this._eye.copy(this.object.position).sub(this.target),LW.copy(this._eye).normalize(),n7.copy(this.object.up).normalize(),dQ.crossVectors(n7,LW).normalize(),n7.setLength(this._moveCurr.y-this._movePrev.y),dQ.setLength(this._moveCurr.x-this._movePrev.x),i7.copy(n7.add(dQ)),lQ.crossVectors(i7,this._eye).normalize(),J*=this.rotateSpeed,F9.setFromAxisAngle(lQ,J),this._eye.applyQuaternion(F9),this.object.up.applyQuaternion(F9),this._lastAxis.copy(lQ),this._lastAngle=J;else if(!this.staticMoving&&this._lastAngle)this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),F9.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(F9),this.object.up.applyQuaternion(F9);this._movePrev.copy(this._moveCurr)}_zoomCamera(){let J;if(this.state===u0.TOUCH_ZOOM_PAN)if(J=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera)this._eye.multiplyScalar(J);else if(this.object.isOrthographicCamera){if(this.object.zoom=I7.clamp(this.object.zoom/J,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom)this.object.updateProjectionMatrix()}else console.warn("THREE.TrackballControls: Unsupported camera type");else{if(J=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,J!==1&&J>0)if(this.object.isPerspectiveCamera)this._eye.multiplyScalar(J);else if(this.object.isOrthographicCamera){if(this.object.zoom=I7.clamp(this.object.zoom/J,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom)this.object.updateProjectionMatrix()}else console.warn("THREE.TrackballControls: Unsupported camera type");if(this.staticMoving)this._zoomStart.copy(this._zoomEnd);else this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor}}_getMouseOnScreen(J,Q){return c7.set((J-this.screen.left)/this.screen.width,(Q-this.screen.top)/this.screen.height),c7}_getMouseOnCircle(J,Q){return c7.set((J-this.screen.width*0.5-this.screen.left)/(this.screen.width*0.5),(this.screen.height+2*(this.screen.top-Q))/this.screen.width),c7}_addPointer(J){this._pointers.push(J)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q].pointerId==J.pointerId){this._pointers.splice(Q,1);return}}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new z0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q.pointerId]}_checkDistances(){if(!this.noZoom||!this.noPan){if(this._eye.lengthSq()>this.maxDistance*this.maxDistance)this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd);if(this._eye.lengthSq()<this.minDistance*this.minDistance)this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)}}}function rU(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J)}function tU(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function eU(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchEnd(J);else this._onMouseUp();if(this._removePointer(J),this._pointers.length===0)this.domElement.releasePointerCapture(J.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)}function JG(J){this._removePointer(J)}function QG(){if(this.enabled===!1)return;this.keyState=u0.NONE,window.addEventListener("keydown",this._onKeyDown)}function ZG(J){if(this.enabled===!1)return;if(window.removeEventListener("keydown",this._onKeyDown),this.keyState!==u0.NONE)return;else if(J.code===this.keys[u0.ROTATE]&&!this.noRotate)this.keyState=u0.ROTATE;else if(J.code===this.keys[u0.ZOOM]&&!this.noZoom)this.keyState=u0.ZOOM;else if(J.code===this.keys[u0.PAN]&&!this.noPan)this.keyState=u0.PAN}function $G(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case O8.DOLLY:this.state=u0.ZOOM;break;case O8.ROTATE:this.state=u0.ROTATE;break;case O8.PAN:this.state=u0.PAN;break;default:this.state=u0.NONE}let Z=this.keyState!==u0.NONE?this.keyState:this.state;if(Z===u0.ROTATE&&!this.noRotate)this._moveCurr.copy(this._getMouseOnCircle(J.pageX,J.pageY)),this._movePrev.copy(this._moveCurr);else if(Z===u0.ZOOM&&!this.noZoom)this._zoomStart.copy(this._getMouseOnScreen(J.pageX,J.pageY)),this._zoomEnd.copy(this._zoomStart);else if(Z===u0.PAN&&!this.noPan)this._panStart.copy(this._getMouseOnScreen(J.pageX,J.pageY)),this._panEnd.copy(this._panStart);this.dispatchEvent(uQ)}function WG(J){let Q=this.keyState!==u0.NONE?this.keyState:this.state;if(Q===u0.ROTATE&&!this.noRotate)this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(J.pageX,J.pageY));else if(Q===u0.ZOOM&&!this.noZoom)this._zoomEnd.copy(this._getMouseOnScreen(J.pageX,J.pageY));else if(Q===u0.PAN&&!this.noPan)this._panEnd.copy(this._getMouseOnScreen(J.pageX,J.pageY))}function KG(){this.state=u0.NONE,this.dispatchEvent(cQ)}function YG(J){if(this.enabled===!1)return;if(this.noZoom===!0)return;switch(J.preventDefault(),J.deltaMode){case 2:this._zoomStart.y-=J.deltaY*0.025;break;case 1:this._zoomStart.y-=J.deltaY*0.01;break;default:this._zoomStart.y-=J.deltaY*0.00025;break}this.dispatchEvent(uQ),this.dispatchEvent(cQ)}function HG(J){if(this.enabled===!1)return;J.preventDefault()}function XG(J){switch(this._trackPointer(J),this._pointers.length){case 1:this.state=u0.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=u0.TOUCH_ZOOM_PAN;let Q=this._pointers[0].pageX-this._pointers[1].pageX,Z=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(Q*Q+Z*Z);let $=(this._pointers[0].pageX+this._pointers[1].pageX)/2,W=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen($,W)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(uQ)}function UG(J){switch(this._trackPointer(J),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(J.pageX,J.pageY));break;default:let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,$=J.pageY-Q.y;this._touchZoomDistanceEnd=Math.sqrt(Z*Z+$*$);let W=(J.pageX+Q.x)/2,K=(J.pageY+Q.y)/2;this._panEnd.copy(this._getMouseOnScreen(W,K));break}}function GG(J){switch(this._pointers.length){case 0:this.state=u0.NONE;break;case 1:this.state=u0.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(J.pageX,J.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=u0.TOUCH_ZOOM_PAN;for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q].pointerId!==J.pointerId){let Z=this._pointerPositions[this._pointers[Q].pointerId];this._moveCurr.copy(this._getMouseOnCircle(Z.x,Z.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(cQ)}var zW={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class M8{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var EG=new N9(-1,1,1,-1,0,1);class BW extends rJ{constructor(){super();this.setAttribute("position",new bJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bJ([0,2,0,0,2,0],2))}}var NG=new BW;class nQ{constructor(J){this._mesh=new NJ(NG,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,EG)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class g9 extends M8{constructor(J,Q){super();if(this.textureID=Q!==void 0?Q:"tDiffuse",J instanceof TJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=T7.clone(J.uniforms),this.material=new TJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this.fsQuad=new nQ(this.material)}render(J,Q,Z){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Z.texture;if(this.fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this.fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this.fsQuad.render(J)}}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class o7 extends M8{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,Z){let $=J.getContext(),W=J.state;W.buffers.color.setMask(!1),W.buffers.depth.setMask(!1),W.buffers.color.setLocked(!0),W.buffers.depth.setLocked(!0);let K,H;if(this.inverse)K=0,H=1;else K=1,H=0;if(W.buffers.stencil.setTest(!0),W.buffers.stencil.setOp($.REPLACE,$.REPLACE,$.REPLACE),W.buffers.stencil.setFunc($.ALWAYS,K,4294967295),W.buffers.stencil.setClear(H),W.buffers.stencil.setLocked(!0),J.setRenderTarget(Z),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),W.buffers.color.setLocked(!1),W.buffers.depth.setLocked(!1),W.buffers.color.setMask(!0),W.buffers.depth.setMask(!0),W.buffers.stencil.setLocked(!1),W.buffers.stencil.setFunc($.EQUAL,1,4294967295),W.buffers.stencil.setOp($.KEEP,$.KEEP,$.KEEP),W.buffers.stencil.setLocked(!0)}}class iQ extends M8{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class oQ{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let Z=J.getSize(new z0);this._width=Z.width,this._height=Z.height,Q=new lJ(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:A8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new g9(zW),this.copyPass.material.blending=iJ,this.clock=new g7}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(J===void 0)J=this.clock.getDelta();let Q=this.renderer.getRenderTarget(),Z=!1;for(let $=0,W=this.passes.length;$<W;$++){let K=this.passes[$];if(K.enabled===!1)continue;if(K.renderToScreen=this.renderToScreen&&this.isLastEnabledPass($),K.render(this.renderer,this.writeBuffer,this.readBuffer,J,Z),K.needsSwap){if(Z){let H=this.renderer.getContext(),Y=this.renderer.state.buffers.stencil;Y.setFunc(H.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),Y.setFunc(H.EQUAL,1,4294967295)}this.swapBuffers()}if(o7!==void 0){if(K instanceof o7)Z=!0;else if(K instanceof iQ)Z=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new z0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let Z=this._width*this._pixelRatio,$=this._height*this._pixelRatio;this.renderTarget1.setSize(Z,$),this.renderTarget2.setSize(Z,$);for(let W=0;W<this.passes.length;W++)this.passes[W].setSize(Z,$)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aQ extends M8{constructor(J,Q,Z=null,$=null,W=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=Z,this.clearColor=$,this.clearAlpha=W,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new v0}render(J,Q,Z){let $=J.autoClear;J.autoClear=!1;let W,K;if(this.overrideMaterial!==null)K=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)W=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Z),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(W);if(this.overrideMaterial!==null)this.scene.overrideMaterial=K;J.autoClear=$}}var qG={uniforms:{tDiffuse:{value:null},resolution:{value:new z0},pixelSize:{value:1},rBits:{value:3},gBits:{value:3},bBits:{value:3}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float pixelSize;
    uniform float rBits;
    uniform float gBits;
    uniform float bBits;
    varying vec2 vUv;

    vec3 rgbQuantize(vec3 color) {
      float r = floor(color.r * (pow(2.0, rBits) - 1.0)) / (pow(2.0, rBits) - 1.0);
      float g = floor(color.g * (pow(2.0, gBits) - 1.0)) / (pow(2.0, gBits) - 1.0);
      float b = floor(color.b * (pow(2.0, bBits) - 1.0)) / (pow(2.0, bBits) - 1.0);
      return vec3(r, g, b);
    }

    vec2 pixelate(vec2 uv) {
      vec2 pixels = resolution.xy / pixelSize;
      uv *= pixels;
      uv = floor(uv) + 0.5;
      return uv / pixels;
    }

    void main() {
      vec2 pixelatedUV = pixelate(vUv);
      vec4 color = texture2D(tDiffuse, pixelatedUV);
      vec3 quantizedColor = rgbQuantize(color.rgb);
      gl_FragColor = vec4(quantizedColor, color.a);
    }
  `};function IW(J){let Q=new y7;Q.background=new v0(657930);let Z=new zJ(75,J.clientWidth/J.clientHeight,0.1,1000);Z.position.set(0,5,12);let $=new gQ({antialias:!1,alpha:!0});$.setSize(J.clientWidth,J.clientHeight),J.appendChild($.domElement);let W=new wJ,K=new x7(13421772);W.add(K);let H=new q9(43775,1);H.position.set(-10,0,5);let Y=new q9(16711935,1);H.position.set(10,0,5);let U=new q9(65535,1);U.position.set(0,-10,5),W.add(H),W.add(U),W.add(Y),Z.add(W),Q.add(Z);let X=new sQ(Z,$.domElement);X.rotateSpeed=3,X.noZoom=!0,X.noPan=!0,X.staticMoving=!1,X.dynamicDampingFactor=0.2,X.target.set(0,0,0);let E=new oQ($),G=new aQ(Q,Z);E.addPass(G);let N=new g9(qG);return N.uniforms.resolution.value.set(J.clientWidth,J.clientHeight),E.addPass(N),{scene:Q,camera:Z,renderer:$,controls:X,composer:E}}var p9=new f7({color:65535,shininess:15,specular:16777215}),m9=new G9({color:65535,wireframe:!0,fog:!0});class a7{material;rootGroup;handState;handType;fingerConfigs;rotationState={};constructor(J,Q){this.handType=J,this.material=Q||p9,this.rootGroup=new wJ,this.initFingerConfigs(),this.handState=this.createHand()}initFingerConfigs(){let J={mcp:{length:1.5,width:0.5,depth:0.4,rotationAxis:"x"},pip:{length:1,width:0.5,depth:0.4,rotationAxis:"x"}},Q={mcp:{length:1.2,width:0.5,depth:0.4,rotationAxis:"x",baseRotation:{x:-Math.PI/2}},pip:{length:0.8,width:0.5,depth:0.4,rotationAxis:"x"}};this.fingerConfigs={thumb:Q,index:J,middle:J,ring:J}}createPalm(){let J=new wJ;this.rootGroup.add(J);let Q=new dJ(2,4,0.15),Z=new NJ(Q,this.material);Z.position.z=-0.15,J.add(Z);let $=new dJ(2,0.25,0.25),W=new NJ($,this.material);W.position.y=1.85,W.position.z=0.05,J.add(W);let K=new dJ(2.25,1.75,0.5),H=new NJ(K,this.material);return H.position.x=this.handType==="RIGHT"?0.15:-0.15,H.position.y=-1.15,H.position.z=0.15,J.add(H),{group:J,mainPalm:Z,upperPalm:W,lowerPalm:H}}createFinger(J,Q){let Z=this.fingerConfigs[J],$={group:new wJ,mcp:null,pip:null,canSpread:J==="thumb"||J==="index",rotationAxes:{mcp:Z.mcp.rotationAxis,pip:Z.pip.rotationAxis,spread:J==="thumb"?"y":"z"}},W=this.handType==="RIGHT"?Q*0.75-0.8:Q*0.75-1.5;$.group.position.set(W,2,0);let K=$.group;if(J==="thumb"){let Y=new wJ;if($.base=Y,$.group.add(Y),K=Y,this.handType==="RIGHT")$.group.position.x-=0.5,$.group.position.y-=2,$.group.rotation.z=0,$.group.rotation.y=-Math.PI/2;else $.group.position.x+=0.5,$.group.position.y-=2,$.group.rotation.z=0,$.group.rotation.y=Math.PI/2}let H=0;return["mcp","pip"].forEach((Y)=>{let U=Z[Y],X=new wJ,E=new dJ(U.width,U.length,U.depth),G=new NJ(E,this.material);if(G.position.y=U.length/2,X.add(G),X.position.y=H,H=U.length,U.baseRotation)Object.entries(U.baseRotation).forEach(([N,O])=>{X.rotation[N]=O});K.add(X),$[Y]=X,K=X}),$}createHand(){let J={};return J.palm=this.createPalm(),(this.handType==="RIGHT"?["ring","middle","index","thumb"]:["thumb","index","middle","ring"]).forEach((Z,$)=>{let W=this.createFinger(Z,$);J[Z]=W,J.palm.group.add(W.group)}),J}getHandState(){return this.handState}setMaterial(J){this.material=J,this.handState.palm.mainPalm.material=J,this.handState.palm.upperPalm.material=J,this.handState.palm.lowerPalm.material=J,Object.values(this.handState).forEach((Q)=>{if(Q.mcp)Q.mcp.children[0].material=J,Q.pip.children[0].material=J})}spreadFinger(J,Q){let Z=this.handState[J];if(!Z||!Z.canSpread)return;let $=this.handType==="RIGHT"?1:-1;if(this.rotationState[J]={...this.rotationState[J],spread:Q},J==="thumb"&&Z.base){let W=Math.PI/2;Z.group.rotation.y=W,Z.base.rotation.y=$*Q}else Z.group.rotation.z=$*Q}bendFinger(J,Q,Z){let $=this.handState[J];if(!$)return;this.rotationState[J]={...this.rotationState[J],[Q]:Z};let W=this.handType==="RIGHT"?1:-1,K=$[Q],H=$.rotationAxes[Q];if(K)if(J==="thumb"){if(Q==="mcp")K.rotation[H]=W*(Math.PI/2-Z);else if(Q==="pip"){let Y=this.handType==="RIGHT"?-1:1;K.rotation[H]=Y*Z}}else K.rotation[H]=-W*Z}setPosition(J,Q,Z){this.rootGroup.position.set(J,Q,Z)}setRotation(J,Q,Z){this.rootGroup.rotation.set(J,Q,Z)}setScale(J,Q,Z){this.rootGroup.scale.set(J,Q,Z)}}class DG{constructor(J){this.container=J,this.scene=IW(J);let Q=new a7("LEFT",m9),Z=new a7("RIGHT",m9);Q.setPosition(-5,-1,0),Q.setRotation(Math.PI/12,Math.PI/6,0),this.leftHand=Q,Z.setPosition(5,-1,0),Z.setRotation(Math.PI/12,-Math.PI/6,0),this.rightHand=Z;let{scene:$,camera:W,renderer:K,controls:H}=this.scene;$.add(Q.rootGroup),$.add(Z.rootGroup);function Y(){K.render($,W),H.update()}K.setAnimationLoop(Y)}updateHands(J){if(this.leftHand.setMaterial(J.left.connected?p9:m9),this.rightHand.setMaterial(J.right.connected?p9:m9),J.left.connected)this.updateJoints(this.leftHand,J.left.joints);if(J.right.connected)this.updateJoints(this.rightHand,J.right.joints)}updateJoints(J,Q){console.log("joints:",Q);for(let Z=0;Z<Q.length;Z++){let $=Q[Z];if(Z>2&&J===this.rightHand||Z==0)$*=-1;if(Z==0)J.spreadFinger("thumb",$);else if(Z==1)J.bendFinger("thumb","mcp",$);else if(Z==2)J.bendFinger("thumb","pip",$);else if(Z==3)J.spreadFinger("index",$);else if(Z==4)J.bendFinger("index","mcp",$);else if(Z==5)J.bendFinger("index","pip",$);else if(Z==6)J.bendFinger("middle","mcp",$);else if(Z==7)J.bendFinger("middle","pip",$);else if(Z==8)J.bendFinger("ring","mcp",$);else J.bendFinger("ring","pip",$)}}handleResize(){let{camera:J,renderer:Q,composer:Z}=this.scene,$=this.container;J.aspect=$.clientWidth/$.clientHeight,J.updateProjectionMatrix(),Q.setSize($.clientWidth,$.clientHeight),Z?.setSize($.clientWidth,$.clientHeight);let W=Z?.passes[1];if(W?.uniforms?.resolution)W.uniforms.resolution.value.set($.clientWidth,$.clientHeight)}}export{DG as Visualization};
