/* 
mzMath - a collection of TypeScript-based math helpers.
Version: 3.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var T=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var pt=Object.getOwnPropertyNames;var mt=Object.prototype.hasOwnProperty;var rt=Math.pow;var ft=(t,r)=>{for(var e in r)T(t,e,{get:r[e],enumerable:!0})},ht=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of pt(r))!mt.call(t,o)&&o!==e&&T(t,o,{get:()=>r[o],enumerable:!(n=at(r,o))||n.enumerable});return t};var Mt=t=>ht(T({},"__esModule",{value:!0}),t);var ee={};ft(ee,{circleMovement:()=>st,circleMovementAfterMouse:()=>Br,convertRange:()=>Z,degreesToRadians:()=>Vt,doRangesOverlap:()=>Rr,ellipseMovement:()=>Nr,equationSystem2:()=>zr,equationSystem3:()=>Ar,equationSystemN:()=>jr,getRandom:()=>p,getRandomBoolean:()=>Sr,getRandomGrayscaleHSLColor:()=>kr,getRandomHSLColor:()=>tt,getRandomHSLColorWithHue:()=>$r,getRandomHSLColorWithLightness:()=>Or,getRandomHSLColorWithSaturation:()=>Qr,getRandomHSLColorWithinRanges:()=>Jr,getRandomHexColor:()=>Wr,getRandomInt:()=>it,getRandomItemFromArray:()=>wr,getRandomRGBColor:()=>Fr,getShiftedHue:()=>Yr,getShiftedLightness:()=>Zr,getShiftedSaturation:()=>_r,getSquareInCircleSide:()=>re,getV2Angle:()=>d,getV2AngleBetween:()=>bt,getV3AngleBetween:()=>gt,getVNAngleBetween:()=>et,guid:()=>Pr,hslToHex:()=>xt,hslToRgb:()=>ut,identity2:()=>rr,identity3:()=>er,identity4:()=>nr,identityN:()=>or,isNumber:()=>Dr,isSingularMatrix:()=>Ir,lissajousCurve:()=>Gr,m2Adjugate:()=>K,m2AppendRow:()=>ur,m2DeepCopy:()=>W,m2Determinant:()=>J,m2DivideScalar:()=>ot,m2Inverse:()=>X,m2MulScalar:()=>Ot,m2PrependRow:()=>pr,m2Reset:()=>Xt,m2Sub:()=>$t,m2Sum:()=>Ft,m2Transpose:()=>Kt,m2x2:()=>Zt,m3Adjugate:()=>vr,m3AppendRow:()=>xr,m3DeepCopy:()=>$,m3Determinant:()=>dr,m3DivideScalar:()=>Jt,m3Inverse:()=>Y,m3MulScalar:()=>kt,m3PrependRow:()=>mr,m3Reset:()=>Yt,m3Sub:()=>Qt,m3Sum:()=>Wt,m3Transpose:()=>Ut,m3x3:()=>_t,m4x4:()=>Pt,mAdjugate:()=>U,mAppendCol:()=>ir,mAppendRow:()=>cr,mDeepCopy:()=>f,mDelFirstColumn:()=>Mr,mDelFirstRow:()=>hr,mDelLastColumn:()=>Q,mDelLastRow:()=>fr,mDeterminant:()=>D,mDivideScalar:()=>L,mEqual:()=>gr,mGetColumn:()=>Vr,mGetFirstColumn:()=>lr,mGetLastColumn:()=>O,mInverse:()=>C,mMinor:()=>k,mMul:()=>br,mMulScalar:()=>G,mMulVector:()=>R,mNxM:()=>tr,mPrependCol:()=>sr,mPrependRow:()=>ar,mReset:()=>F,mSub:()=>q,mSum:()=>N,mTranspose:()=>w,mod:()=>H,newId:()=>te,radiansToDegrees:()=>lt,rgbToHsl:()=>Xr,setDecimalPlaces:()=>c,setV2Angle:()=>E,sineWaveMovement:()=>qr,stringToNumber:()=>Lr,v2:()=>Bt,v2CubicBezierCurve:()=>Tr,v2Distance:()=>Ct,v2DivideScalar:()=>wt,v2DotProduct:()=>zt,v2FromPolarCoords:()=>Gt,v2Length:()=>z,v2MulScalar:()=>It,v2Normalize:()=>Tt,v2QuadraticBezierCurve:()=>Cr,v2SetLength:()=>nt,v2Sub:()=>A,v2Sum:()=>yt,v3:()=>Nt,v3CrossProduct:()=>jt,v3CubicBezierCurve:()=>Er,v3Distance:()=>Ht,v3DivideScalar:()=>Rt,v3DotProduct:()=>At,v3Length:()=>Dt,v3MulScalar:()=>St,v3Normalize:()=>Et,v3QuadraticBezierCurve:()=>Hr,v3Sub:()=>vt,v3Sum:()=>dt,v4:()=>qt,vDistance:()=>Lt,vDivideScalar:()=>S,vDotProduct:()=>b,vEqual:()=>B,vLength:()=>g,vMulScalar:()=>I,vN:()=>j,vNormalize:()=>y,vSub:()=>M,vSum:()=>v});module.exports=Mt(ee);var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=rt(10,r);return Math.round(t*e)/e};var d=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},E=(t,r,e=1/0)=>{let n=z(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},lt=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},Vt=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},et=(t,r,e=1/0)=>{let n=y(t),o=y(r),i=b(n,o),s=Math.acos(i);return c(s,e)},bt=(t,r,e=1/0)=>{let n=M(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},gt=(t,r,e=1/0)=>et(t,r,e);var v=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},yt=(t,r,e=1/0)=>v(t,r,e),dt=(t,r,e=1/0)=>v(t,r,e),M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},A=(t,r,e=1/0)=>M(t,r,e),vt=(t,r,e=1/0)=>M(t,r,e),I=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},It=(t,r,e=1/0)=>I(t,r,e),St=(t,r,e=1/0)=>I(t,r,e),S=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},wt=(t,r,e=1/0)=>S(t,r,e),Rt=(t,r,e=1/0)=>S(t,r,e),g=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},z=(t,r=1/0)=>g(t,r),Dt=(t,r=1/0)=>g(t,r),nt=(t,r,e=1/0)=>{let n=d(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},Lt=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},Ct=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},Ht=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},y=(t,r=1/0)=>{let e=g(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},Tt=(t,r=1/0)=>y(t,r),Et=(t,r=1/0)=>y(t,r),b=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},zt=(t,r,e=1/0)=>b(t,r,e),At=(t,r,e=1/0)=>b(t,r,e),jt=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],Bt=(t=0)=>[t,t],Nt=(t=0)=>[t,t,t],qt=(t=0)=>[t,t,t,t],j=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},Gt=(t,r)=>{let e=[0,0];return e=nt(e,t),E(e,r)},B=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var N=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(v(t[o],r[o],e));return n},Ft=(t,r,e=1/0)=>N(t,r,e),Wt=(t,r,e=1/0)=>N(t,r,e),q=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},$t=(t,r,e=1/0)=>q(t,r,e),Qt=(t,r,e=1/0)=>q(t,r,e),G=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(I(o,r,e));return n},Ot=(t,r,e=1/0)=>G(t,r,e),kt=(t,r,e=1/0)=>G(t,r,e),L=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(S(o,r,e));return n},ot=(t,r,e=1/0)=>L(t,r,e),Jt=(t,r,e=1/0)=>L(t,r,e),w=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Kt=t=>w(t),Ut=t=>w(t),F=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Xt=(t,r=0)=>F(t,r),Yt=(t,r=0)=>F(t,r),Zt=(t=0)=>[[t,t],[t,t]],_t=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Pt=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],tr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(j(r,e));return n},rr=()=>[[1,0],[0,1]],er=()=>[[1,0,0],[0,1,0],[0,0,1]],nr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],or=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},f=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},W=t=>f(t),$=t=>f(t),ir=(t,r)=>{if(t.length<=0)return[];let e=f(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},sr=(t,r)=>{if(t.length<=0)return[];let e=f(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},cr=(t,r)=>{let e=f(t);return e.push(r),e},ur=(t,r)=>{let e=W(t);return e.push(r),e},xr=(t,r)=>{let e=$(t);return e.push(r),e},ar=(t,r)=>{let e=f(t);return e.unshift(r),e},pr=(t,r)=>{let e=W(t);return e.unshift(r),e},mr=(t,r)=>{let e=$(t);return e.unshift(r),e},fr=t=>{if(t.length<=0)return[];let r=f(t);return r.pop(),r},hr=t=>{if(t.length<=0)return[];let r=f(t);return r.shift(),r},Q=t=>{if(t.length<=0)return[];let r=f(t);for(let e=0;e<r.length;e++)r[e].pop();return r},Mr=t=>{if(t.length<=0)return[];let r=f(t);for(let e=0;e<r.length;e++)r[e].shift();return r},lr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},O=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},Vr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},br=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=w(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=b(s,x,e);n[i].push(a)}}return n},R=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=b(t[o],r,e);return n},gr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!B(t[e],r[e]))return!1;return!0},yr=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},k=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=yr(t,r,e);return D(o)},D=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return J(t);let e=0;for(let n=0;n<r;n++){let o=k(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},J=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},dr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return D(t)},K=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},vr=t=>U(t),U=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return K(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=k(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return w(e)},Ir=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return D(t)===0},X=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=J(t);if(e===0)return null;let n=K(t);return n===null?null:ot(n,e,r)},Y=(t,r=1/0)=>C(t,r),C=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=D(t),o=U(t);return o===null?null:L(o,n,r)};var p=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),it=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Sr=()=>Math.random()<.5,wr=t=>{let r=it(0,t.length-1);return t[r]};var H=(t,r)=>(t%r+r)%r,Z=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,Rr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Dr=t=>!isNaN(parseFloat(t))&&isFinite(t);var Lr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var Cr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},Hr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},Tr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+x*o[0],i*r[1]+s*e[1]+u*n[1]+x*o[1]]},Er=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+x*o[0],i*r[1]+s*e[1]+u*n[1]+x*o[1],i*r[2]+s*e[2]+u*n[2]+x*o[2]]};var zr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=X(n);if(o===null)return null;let i=[t[2],r[2]];return R(o,i,e)},Ar=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=Y(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return R(i,s,n)},jr=(t,r=1/0)=>{if(t.length<=0)return null;let e=Q(t),n=C(e);if(n===null)return null;let o=O(t);return R(n,o,r)};var st=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Br=(t,r,e)=>{let n=A(t,r),o=d(n);return o=Z(o,0,Math.PI*2,0,Math.PI),st(r,o,e)},Nr=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),qr=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Gr=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var Fr=()=>{let t=tt();return ut(t)},Wr=()=>{let t=tt();return xt(t)},tt=()=>{let t=p(1,360),r=p(0,100),e=p(0,100);return[t,r,e]},$r=t=>{let r=p(0,100),e=p(0,100);return[t,r,e]},Qr=t=>{let r=p(1,360),e=p(0,100);return[r,t,e]},Or=t=>{let r=p(1,360),e=p(0,100);return[r,e,t]},kr=()=>[0,0,p(0,100)],Jr=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=p(t,r),u=p(e,n),x=p(o,i);return[s,u,x]},_=t=>(t*=60,t<0&&(t+=360),t*100/360),Kr=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?_((r-e)/(o-n)):o===r?_(2+(e-t)/(o-n)):o===e?_(4+(t-r)/(o-n)):0),ct=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Ur=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?ct(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),Xr=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=ct(e,n,o,i,s),x=Ur(e,n,o,i,s,u),a=Kr(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},P=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),ut=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let m=o*255;return[m,m,m]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,l=P(i,s,u),h=P(i,s,x),V=P(i,s,a);return l*=255,h*=255,V*=255,l>255||h>255||V>255?[255,255,255]:l<0||h<0||V<0?[0,0,0]:[c(l,r),c(h,r),c(V,r)]},xt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(h,V,m)=>(m<0&&(m+=1),m>1&&(m-=1),m<.16666666666666666?h+(V-h)*6*m:m<.5?V:m<.6666666666666666?h+(V-h)*(.6666666666666666-m)*6:h),a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;o=x(l,a,r+1/3),i=x(l,a,r),s=x(l,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},Yr=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=H(e,360)),[e,t[1],t[2]]},Zr=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=H(e,100)),[t[0],t[1],e]},_r=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var Pr=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),te=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var re=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);0&&(module.exports={circleMovement,circleMovementAfterMouse,convertRange,degreesToRadians,doRangesOverlap,ellipseMovement,equationSystem2,equationSystem3,equationSystemN,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getSquareInCircleSide,getV2Angle,getV2AngleBetween,getV3AngleBetween,getVNAngleBetween,guid,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isNumber,isSingularMatrix,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2Reset,m2Sub,m2Sum,m2Transpose,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3Reset,m3Sub,m3Sum,m3Transpose,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,newId,radiansToDegrees,rgbToHsl,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierCurve,v2Distance,v2DivideScalar,v2DotProduct,v2FromPolarCoords,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3Distance,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3Sub,v3Sum,v4,vDistance,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=mz-math.node.cjs.map
