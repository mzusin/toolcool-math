/* 
Tool Cool Math Helpers
Version: 1.0.19
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var T=Object.defineProperty;var ut=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var at=Object.prototype.hasOwnProperty;var tt=Math.pow;var pt=(t,r)=>{for(var e in r)T(t,e,{get:r[e],enumerable:!0})},ft=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of xt(r))!at.call(t,o)&&o!==e&&T(t,o,{get:()=>r[o],enumerable:!(n=ut(r,o))||n.enumerable});return t};var mt=t=>ft(T({},"__esModule",{value:!0}),t);var _r={};pt(_r,{circleMovement:()=>ot,circleMovementAfterMouse:()=>jr,convertRange:()=>Y,degreesToRadians:()=>lt,doRangesOverlap:()=>wr,ellipseMovement:()=>Br,equationSystem2:()=>Er,equationSystem3:()=>zr,equationSystemN:()=>Ar,getRandom:()=>p,getRandomBoolean:()=>Ir,getRandomGrayscaleHSLColor:()=>Or,getRandomHSLColor:()=>P,getRandomHSLColorWithHue:()=>Wr,getRandomHSLColorWithLightness:()=>Qr,getRandomHSLColorWithSaturation:()=>$r,getRandomHSLColorWithinRanges:()=>kr,getRandomHexColor:()=>Fr,getRandomInt:()=>nt,getRandomItemFromArray:()=>Sr,getRandomRGBColor:()=>qr,getShiftedHue:()=>Xr,getShiftedLightness:()=>Yr,getShiftedSaturation:()=>Zr,getV2Angle:()=>v,getV2AngleBetween:()=>Vt,getV3AngleBetween:()=>bt,getVNAngleBetween:()=>rt,hslToHex:()=>ct,hslToRgb:()=>st,identity2:()=>tr,identity3:()=>rr,identity4:()=>er,identityN:()=>nr,isNumber:()=>Rr,isSingularMatrix:()=>dr,lissajousCurve:()=>Gr,m2Adjugate:()=>J,m2AppendRow:()=>cr,m2DeepCopy:()=>F,m2Determinant:()=>k,m2DivideScalar:()=>et,m2Inverse:()=>U,m2MulScalar:()=>Qt,m2PrependRow:()=>ar,m2Reset:()=>Ut,m2Sub:()=>Wt,m2Sum:()=>qt,m2Transpose:()=>Jt,m2x2:()=>Yt,m3Adjugate:()=>vr,m3AppendRow:()=>ur,m3DeepCopy:()=>W,m3Determinant:()=>yr,m3DivideScalar:()=>kt,m3Inverse:()=>X,m3MulScalar:()=>Ot,m3PrependRow:()=>pr,m3Reset:()=>Xt,m3Sub:()=>$t,m3Sum:()=>Ft,m3Transpose:()=>Kt,m3x3:()=>Zt,m4x4:()=>_t,mAdjugate:()=>K,mAppendCol:()=>or,mAppendRow:()=>sr,mDeepCopy:()=>m,mDelFirstColumn:()=>hr,mDelFirstRow:()=>mr,mDelLastColumn:()=>$,mDelLastRow:()=>fr,mDeterminant:()=>L,mDivideScalar:()=>D,mEqual:()=>br,mGetColumn:()=>lr,mGetFirstColumn:()=>Mr,mGetLastColumn:()=>Q,mInverse:()=>C,mMinor:()=>O,mMul:()=>Vr,mMulScalar:()=>G,mMulVector:()=>R,mNxM:()=>Pt,mPrependCol:()=>ir,mPrependRow:()=>xr,mReset:()=>q,mSub:()=>N,mSum:()=>B,mTranspose:()=>w,mod:()=>H,radiansToDegrees:()=>Mt,rgbToHsl:()=>Ur,setDecimalPlaces:()=>c,setV2Angle:()=>ht,sineWaveMovement:()=>Nr,stringToNumber:()=>Lr,v2:()=>Bt,v2CubicBezierCurve:()=>Hr,v2Distance:()=>Ct,v2DivideScalar:()=>St,v2DotProduct:()=>zt,v2Length:()=>E,v2MulScalar:()=>dt,v2Normalize:()=>Tt,v2QuadraticBezierCurve:()=>Dr,v2SetLength:()=>Lt,v2Sub:()=>z,v2Sum:()=>gt,v3:()=>Nt,v3CrossProduct:()=>jt,v3CubicBezierCurve:()=>Tr,v3Distance:()=>Ht,v3DivideScalar:()=>wt,v3DotProduct:()=>At,v3Length:()=>Rt,v3MulScalar:()=>It,v3Normalize:()=>Et,v3QuadraticBezierCurve:()=>Cr,v3Sub:()=>vt,v3Sum:()=>yt,v4:()=>Gt,vDistance:()=>Dt,vDivideScalar:()=>S,vDotProduct:()=>b,vEqual:()=>j,vLength:()=>g,vMulScalar:()=>I,vN:()=>A,vNormalize:()=>y,vSub:()=>M,vSum:()=>d});module.exports=mt(_r);var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=tt(10,r);return Math.round(t*e)/e};var v=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},ht=(t,r,e=1/0)=>{let n=E(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},Mt=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},lt=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},rt=(t,r,e=1/0)=>{let n=y(t),o=y(r),i=b(n,o),s=Math.acos(i);return c(s,e)},Vt=(t,r,e=1/0)=>{let n=M(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},bt=(t,r,e=1/0)=>rt(t,r,e);var d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},gt=(t,r,e=1/0)=>d(t,r,e),yt=(t,r,e=1/0)=>d(t,r,e),M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},z=(t,r,e=1/0)=>M(t,r,e),vt=(t,r,e=1/0)=>M(t,r,e),I=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},dt=(t,r,e=1/0)=>I(t,r,e),It=(t,r,e=1/0)=>I(t,r,e),S=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},St=(t,r,e=1/0)=>S(t,r,e),wt=(t,r,e=1/0)=>S(t,r,e),g=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},E=(t,r=1/0)=>g(t,r),Rt=(t,r=1/0)=>g(t,r),Lt=(t,r,e=1/0)=>{let n=v(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},Dt=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},Ct=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},Ht=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},y=(t,r=1/0)=>{let e=g(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},Tt=(t,r=1/0)=>y(t,r),Et=(t,r=1/0)=>y(t,r),b=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},zt=(t,r,e=1/0)=>b(t,r,e),At=(t,r,e=1/0)=>b(t,r,e),jt=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],Bt=(t=0)=>[t,t],Nt=(t=0)=>[t,t,t],Gt=(t=0)=>[t,t,t,t],A=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},j=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var B=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(d(t[o],r[o],e));return n},qt=(t,r,e=1/0)=>B(t,r,e),Ft=(t,r,e=1/0)=>B(t,r,e),N=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},Wt=(t,r,e=1/0)=>N(t,r,e),$t=(t,r,e=1/0)=>N(t,r,e),G=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(I(o,r,e));return n},Qt=(t,r,e=1/0)=>G(t,r,e),Ot=(t,r,e=1/0)=>G(t,r,e),D=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(S(o,r,e));return n},et=(t,r,e=1/0)=>D(t,r,e),kt=(t,r,e=1/0)=>D(t,r,e),w=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Jt=t=>w(t),Kt=t=>w(t),q=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Ut=(t,r=0)=>q(t,r),Xt=(t,r=0)=>q(t,r),Yt=(t=0)=>[[t,t],[t,t]],Zt=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],_t=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Pt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(A(r,e));return n},tr=()=>[[1,0],[0,1]],rr=()=>[[1,0,0],[0,1,0],[0,0,1]],er=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],nr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},m=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},F=t=>m(t),W=t=>m(t),or=(t,r)=>{if(t.length<=0)return[];let e=m(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},ir=(t,r)=>{if(t.length<=0)return[];let e=m(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},sr=(t,r)=>{let e=m(t);return e.push(r),e},cr=(t,r)=>{let e=F(t);return e.push(r),e},ur=(t,r)=>{let e=W(t);return e.push(r),e},xr=(t,r)=>{let e=m(t);return e.unshift(r),e},ar=(t,r)=>{let e=F(t);return e.unshift(r),e},pr=(t,r)=>{let e=W(t);return e.unshift(r),e},fr=t=>{if(t.length<=0)return[];let r=m(t);return r.pop(),r},mr=t=>{if(t.length<=0)return[];let r=m(t);return r.shift(),r},$=t=>{if(t.length<=0)return[];let r=m(t);for(let e=0;e<r.length;e++)r[e].pop();return r},hr=t=>{if(t.length<=0)return[];let r=m(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Mr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},Q=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},lr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},Vr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=w(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=b(s,x,e);n[i].push(a)}}return n},R=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=b(t[o],r,e);return n},br=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!j(t[e],r[e]))return!1;return!0},gr=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},O=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=gr(t,r,e);return L(o)},L=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return k(t);let e=0;for(let n=0;n<r;n++){let o=O(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},k=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},yr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return L(t)},J=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},vr=t=>K(t),K=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return J(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=O(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return w(e)},dr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return L(t)===0},U=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=k(t);if(e===0)return null;let n=J(t);return n===null?null:et(n,e,r)},X=(t,r=1/0)=>C(t,r),C=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=L(t),o=K(t);return o===null?null:D(o,n,r)};var p=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),nt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Ir=()=>Math.random()<.5,Sr=t=>{let r=nt(0,t.length-1);return t[r]};var H=(t,r)=>(t%r+r)%r,Y=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,wr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Rr=t=>!isNaN(parseFloat(t))&&isFinite(t);var Lr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var Dr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},Cr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},Hr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+x*o[0],i*r[1]+s*e[1]+u*n[1]+x*o[1]]},Tr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+x*o[0],i*r[1]+s*e[1]+u*n[1]+x*o[1],i*r[2]+s*e[2]+u*n[2]+x*o[2]]};var Er=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=U(n);if(o===null)return null;let i=[t[2],r[2]];return R(o,i,e)},zr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=X(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return R(i,s,n)},Ar=(t,r=1/0)=>{if(t.length<=0)return null;let e=$(t),n=C(e);if(n===null)return null;let o=Q(t);return R(n,o,r)};var ot=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),jr=(t,r,e)=>{let n=z(t,r),o=v(n);return o=Y(o,0,Math.PI*2,0,Math.PI),ot(r,o,e)},Br=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Nr=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Gr=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var qr=()=>{let t=P();return st(t)},Fr=()=>{let t=P();return ct(t)},P=()=>{let t=p(1,360),r=p(0,100),e=p(0,100);return[t,r,e]},Wr=t=>{let r=p(0,100),e=p(0,100);return[t,r,e]},$r=t=>{let r=p(1,360),e=p(0,100);return[r,t,e]},Qr=t=>{let r=p(1,360),e=p(0,100);return[r,e,t]},Or=()=>[0,0,p(0,100)],kr=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=p(t,r),u=p(e,n),x=p(o,i);return[s,u,x]},Z=t=>(t*=60,t<0&&(t+=360),t*100/360),Jr=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?Z((r-e)/(o-n)):o===r?Z(2+(e-t)/(o-n)):o===e?Z(4+(t-r)/(o-n)):0),it=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Kr=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?it(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),Ur=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=it(e,n,o,i,s),x=Kr(e,n,o,i,s,u),a=Jr(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},_=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),st=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let f=o*255;return[f,f,f]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,l=_(i,s,u),h=_(i,s,x),V=_(i,s,a);return l*=255,h*=255,V*=255,l>255||h>255||V>255?[255,255,255]:l<0||h<0||V<0?[0,0,0]:[c(l,r),c(h,r),c(V,r)]},ct=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(h,V,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?h+(V-h)*6*f:f<.5?V:f<.6666666666666666?h+(V-h)*(.6666666666666666-f)*6:h),a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;o=x(l,a,r+1/3),i=x(l,a,r),s=x(l,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},Xr=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=H(e,360)),[e,t[1],t[2]]},Yr=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=H(e,100)),[t[0],t[1],e]},Zr=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};0&&(module.exports={circleMovement,circleMovementAfterMouse,convertRange,degreesToRadians,doRangesOverlap,ellipseMovement,equationSystem2,equationSystem3,equationSystemN,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getV2Angle,getV2AngleBetween,getV3AngleBetween,getVNAngleBetween,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isNumber,isSingularMatrix,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2Reset,m2Sub,m2Sum,m2Transpose,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3Reset,m3Sub,m3Sum,m3Transpose,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,radiansToDegrees,rgbToHsl,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierCurve,v2Distance,v2DivideScalar,v2DotProduct,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3Distance,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3Sub,v3Sum,v4,vDistance,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=tc-math.node.cjs.map
