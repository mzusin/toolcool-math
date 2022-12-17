/* 
Tool Cool Math Helpers
Version: 1.0.19
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var z=Math.pow;var u=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=z(10,r);return Math.round(t*e)/e};var v=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return u(e,r)},Mt=(t,r,e=1/0)=>{let n=A(t);return[u(Math.cos(r)*n,e),u(Math.sin(r)*n,e)]},lt=(t,r=1/0)=>{let e=t*(180/Math.PI);return u(e,r)},Vt=(t,r=1/0)=>{let e=t*(Math.PI/180);return u(e,r)},rt=(t,r,e=1/0)=>{let n=y(t),o=y(r),i=b(n,o),s=Math.acos(i);return u(s,e)},bt=(t,r,e=1/0)=>{let n=M(t,r),o=Math.atan2(n[1],n[0]);return u(o,e)},gt=(t,r,e=1/0)=>rt(t,r,e);var d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]+r[o],e));return n},It=(t,r,e=1/0)=>d(t,r,e),St=(t,r,e=1/0)=>d(t,r,e),M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]-r[o],e));return n},j=(t,r,e=1/0)=>M(t,r,e),wt=(t,r,e=1/0)=>M(t,r,e),I=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]*r,e));return n},Rt=(t,r,e=1/0)=>I(t,r,e),Lt=(t,r,e=1/0)=>I(t,r,e),S=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]/r,e));return n},Dt=(t,r,e=1/0)=>S(t,r,e),Ct=(t,r,e=1/0)=>S(t,r,e),g=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return u(Math.sqrt(e),r)},A=(t,r=1/0)=>g(t,r),Ht=(t,r=1/0)=>g(t,r),Tt=(t,r,e=1/0)=>{let n=v(t);return[u(Math.cos(n)*r,e),u(Math.sin(n)*r,e)]},Et=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},zt=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},At=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},y=(t,r=1/0)=>{let e=g(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:u(t[o]/e,r));return n},jt=(t,r=1/0)=>y(t,r),Bt=(t,r=1/0)=>y(t,r),b=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return u(n,e)},Nt=(t,r,e=1/0)=>b(t,r,e),Gt=(t,r,e=1/0)=>b(t,r,e),qt=(t,r,e=1/0)=>[u(t[1]*r[2]-t[2]*r[1],e),u(t[2]*r[0]-t[0]*r[2],e),u(t[0]*r[1]-t[1]*r[0],e)],Ft=(t=0)=>[t,t],Wt=(t=0)=>[t,t,t],$t=(t=0)=>[t,t,t,t],B=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},N=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var G=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(d(t[o],r[o],e));return n},kt=(t,r,e=1/0)=>G(t,r,e),Jt=(t,r,e=1/0)=>G(t,r,e),q=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},Kt=(t,r,e=1/0)=>q(t,r,e),Ut=(t,r,e=1/0)=>q(t,r,e),F=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(I(o,r,e));return n},Xt=(t,r,e=1/0)=>F(t,r,e),Yt=(t,r,e=1/0)=>F(t,r,e),D=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(S(o,r,e));return n},et=(t,r,e=1/0)=>D(t,r,e),Zt=(t,r,e=1/0)=>D(t,r,e),w=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},_t=t=>w(t),Pt=t=>w(t),W=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},tr=(t,r=0)=>W(t,r),rr=(t,r=0)=>W(t,r),er=(t=0)=>[[t,t],[t,t]],nr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],or=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],ir=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(B(r,e));return n},sr=()=>[[1,0],[0,1]],cr=()=>[[1,0,0],[0,1,0],[0,0,1]],ur=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],xr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},h=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},$=t=>h(t),Q=t=>h(t),ar=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},pr=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},fr=(t,r)=>{let e=h(t);return e.push(r),e},mr=(t,r)=>{let e=$(t);return e.push(r),e},hr=(t,r)=>{let e=Q(t);return e.push(r),e},Mr=(t,r)=>{let e=h(t);return e.unshift(r),e},lr=(t,r)=>{let e=$(t);return e.unshift(r),e},Vr=(t,r)=>{let e=Q(t);return e.unshift(r),e},br=t=>{if(t.length<=0)return[];let r=h(t);return r.pop(),r},gr=t=>{if(t.length<=0)return[];let r=h(t);return r.shift(),r},O=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].pop();return r},yr=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].shift();return r},vr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},k=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},dr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},Ir=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=w(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let c=0;c<o.length;c++){let x=o[c],a=b(s,x,e);n[i].push(a)}}return n},R=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=b(t[o],r,e);return n},Sr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!N(t[e],r[e]))return!1;return!0},nt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let c=0;c<n;c++)c!==e&&s.push(t[i][c]);o.push(s)}return o},J=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=nt(t,r,e);return L(o)},L=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return K(t);let e=0;for(let n=0;n<r;n++){let o=J(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},K=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},wr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return L(t)},U=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Rr=t=>X(t),X=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return U(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=J(t,n,i),c=Math.pow(-1,n+i);o.push(c*s)}e.push(o)}return w(e)},Lr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return L(t)===0},Y=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=K(t);if(e===0)return null;let n=U(t);return n===null?null:et(n,e,r)},Z=(t,r=1/0)=>C(t,r),C=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=L(t),o=X(t);return o===null?null:D(o,n,r)};var p=(t,r,e=1/0)=>u(Math.random()*(r-t)+t,e),ot=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Hr=()=>Math.random()<.5,Tr=t=>{let r=ot(0,t.length-1);return t[r]};var H=(t,r)=>(t%r+r)%r,_=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,zr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Ar=t=>!isNaN(parseFloat(t))&&isFinite(t);var Br=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var Gr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},qr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},Fr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1]]},Wr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1],i*r[2]+s*e[2]+c*n[2]+x*o[2]]};var Or=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Y(n);if(o===null)return null;let i=[t[2],r[2]];return R(o,i,e)},kr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=Z(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return R(i,s,n)},Jr=(t,r=1/0)=>{if(t.length<=0)return null;let e=O(t),n=C(e);if(n===null)return null;let o=k(t);return R(n,o,r)};var it=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Zr=(t,r,e)=>{let n=j(t,r),o=v(n);return o=_(o,0,Math.PI*2,0,Math.PI),it(r,o,e)},_r=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Pr=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},te=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var ie=()=>{let t=P();return ut(t)},se=()=>{let t=P();return xt(t)},P=()=>{let t=p(1,360),r=p(0,100),e=p(0,100);return[t,r,e]},ce=t=>{let r=p(0,100),e=p(0,100);return[t,r,e]},ue=t=>{let r=p(1,360),e=p(0,100);return[r,t,e]},xe=t=>{let r=p(1,360),e=p(0,100);return[r,e,t]},ae=()=>[0,0,p(0,100)],pe=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=p(t,r),c=p(e,n),x=p(o,i);return[s,c,x]},T=t=>(t*=60,t<0&&(t+=360),t*100/360),st=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?T((r-e)/(o-n)):o===r?T(2+(e-t)/(o-n)):o===e?T(4+(t-r)/(o-n)):0),tt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),ct=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?tt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),fe=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),c=tt(e,n,o,i,s),x=ct(e,n,o,i,s,c),a=st(e,n,o,i,s);return a>360||x>100||c>100?[0,0,100]:a<0||x<0||c<0?[0,0,0]:[u(a,r),u(x,r),u(c,r)]},E=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),ut=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let f=o*255;return[f,f,f]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,c=e+.333,x=e,a=e-.333,l=E(i,s,c),m=E(i,s,x),V=E(i,s,a);return l*=255,m*=255,V*=255,l>255||m>255||V>255?[255,255,255]:l<0||m<0||V<0?[0,0,0]:[u(l,r),u(m,r),u(V,r)]},xt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(m,V,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?m+(V-m)*6*f:f<.5?V:f<.6666666666666666?m+(V-m)*(.6666666666666666-f)*6:m),a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;o=x(l,a,r+1/3),i=x(l,a,r),s=x(l,a,r-1/3)}let c=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${c(o)}${c(i)}${c(s)}`},me=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=H(e,360)),[e,t[1],t[2]]},he=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=H(e,100)),[t[0],t[1],e]},Me=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};export{it as circleMovement,Zr as circleMovementAfterMouse,_ as convertRange,Vt as degreesToRadians,zr as doRangesOverlap,_r as ellipseMovement,Or as equationSystem2,kr as equationSystem3,Jr as equationSystemN,p as getRandom,Hr as getRandomBoolean,ae as getRandomGrayscaleHSLColor,P as getRandomHSLColor,ce as getRandomHSLColorWithHue,xe as getRandomHSLColorWithLightness,ue as getRandomHSLColorWithSaturation,pe as getRandomHSLColorWithinRanges,se as getRandomHexColor,ot as getRandomInt,Tr as getRandomItemFromArray,ie as getRandomRGBColor,me as getShiftedHue,he as getShiftedLightness,Me as getShiftedSaturation,v as getV2Angle,bt as getV2AngleBetween,gt as getV3AngleBetween,rt as getVNAngleBetween,xt as hslToHex,ut as hslToRgb,sr as identity2,cr as identity3,ur as identity4,xr as identityN,Ar as isNumber,Lr as isSingularMatrix,te as lissajousCurve,U as m2Adjugate,mr as m2AppendRow,$ as m2DeepCopy,K as m2Determinant,et as m2DivideScalar,Y as m2Inverse,Xt as m2MulScalar,lr as m2PrependRow,tr as m2Reset,Kt as m2Sub,kt as m2Sum,_t as m2Transpose,er as m2x2,Rr as m3Adjugate,hr as m3AppendRow,Q as m3DeepCopy,wr as m3Determinant,Zt as m3DivideScalar,Z as m3Inverse,Yt as m3MulScalar,Vr as m3PrependRow,rr as m3Reset,Ut as m3Sub,Jt as m3Sum,Pt as m3Transpose,nr as m3x3,or as m4x4,X as mAdjugate,ar as mAppendCol,fr as mAppendRow,h as mDeepCopy,yr as mDelFirstColumn,gr as mDelFirstRow,O as mDelLastColumn,br as mDelLastRow,L as mDeterminant,D as mDivideScalar,Sr as mEqual,dr as mGetColumn,vr as mGetFirstColumn,k as mGetLastColumn,C as mInverse,J as mMinor,Ir as mMul,F as mMulScalar,R as mMulVector,ir as mNxM,pr as mPrependCol,Mr as mPrependRow,W as mReset,q as mSub,G as mSum,w as mTranspose,H as mod,lt as radiansToDegrees,fe as rgbToHsl,u as setDecimalPlaces,Mt as setV2Angle,Pr as sineWaveMovement,Br as stringToNumber,Ft as v2,Fr as v2CubicBezierCurve,zt as v2Distance,Dt as v2DivideScalar,Nt as v2DotProduct,A as v2Length,Rt as v2MulScalar,jt as v2Normalize,Gr as v2QuadraticBezierCurve,Tt as v2SetLength,j as v2Sub,It as v2Sum,Wt as v3,qt as v3CrossProduct,Wr as v3CubicBezierCurve,At as v3Distance,Ct as v3DivideScalar,Gt as v3DotProduct,Ht as v3Length,Lt as v3MulScalar,Bt as v3Normalize,qr as v3QuadraticBezierCurve,wt as v3Sub,St as v3Sum,$t as v4,Et as vDistance,S as vDivideScalar,b as vDotProduct,N as vEqual,g as vLength,I as vMulScalar,B as vN,y as vNormalize,M as vSub,d as vSum};
//# sourceMappingURL=tc-math.esm.js.map
