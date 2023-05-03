/* 
mzMath v3.0.13
A collection of TypeScript-based math helpers.
https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md       
Copyright (c) 2023-present, Miriam Zusin          
*/
var F=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var tr=Object.getOwnPropertyNames;var rr=Object.prototype.hasOwnProperty;var g=Math.pow;var er=(t,r)=>{for(var e in r)F(t,e,{get:r[e],enumerable:!0})},nr=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of tr(r))!rr.call(t,o)&&o!==e&&F(t,o,{get:()=>r[o],enumerable:!(n=Pt(r,o))||n.enumerable});return t};var or=t=>nr(F({},"__esModule",{value:!0}),t);var Un={};er(Un,{animate:()=>Kn,circleCollide:()=>_n,circleMovement:()=>Gt,circleMovementAfterMouse:()=>Hn,convertRange:()=>O,convexPolygonsCollide:()=>Jn,degreesToRadians:()=>ur,doRangesOverlap:()=>ir,dxArcCos:()=>Mn,dxArcCot:()=>Vn,dxArcSin:()=>pn,dxArcTan:()=>hn,dxCos:()=>an,dxCot:()=>fn,dxPolynomial:()=>un,dxSin:()=>xn,dxTan:()=>mn,dxV2CubicBezierCurve:()=>ht,dxV2QuadraticBezierCurve:()=>pt,dxV3CubicBezierCurve:()=>Vt,dxV3QuadraticBezierCurve:()=>Mt,ellipseMovement:()=>Qt,ellipseMovementAfterMouse:()=>Tn,getAnglesSub:()=>j,getRandom:()=>V,getRandomBoolean:()=>on,getRandomGrayscaleHSLColor:()=>qn,getRandomHSLColor:()=>It,getRandomHSLColorWithHue:()=>Ln,getRandomHSLColorWithLightness:()=>Nn,getRandomHSLColorWithSaturation:()=>$n,getRandomHSLColorWithinRanges:()=>Xn,getRandomHexColor:()=>An,getRandomInt:()=>$t,getRandomItemFromArray:()=>cn,getRandomRGBColor:()=>En,getShiftedHue:()=>Gn,getShiftedLightness:()=>Qn,getShiftedSaturation:()=>Cn,getSquareInCircleSide:()=>kn,getV2Angle:()=>H,getV2AngleBetween:()=>xr,getV3AngleBetween:()=>ar,getVNAngleBetween:()=>vt,guid:()=>Fn,hslToHex:()=>Zt,hslToRgb:()=>Ft,identity2:()=>Qr,identity3:()=>Cr,identity4:()=>Fr,identityN:()=>Zr,isAngleBetween:()=>mr,isNumber:()=>w,isSingularMatrix:()=>ae,linearEquation:()=>D,linearEquationSystem2:()=>bn,linearEquationSystem3:()=>yn,linearEquationSystemN:()=>gn,lissajousCurve:()=>Dn,m2Adjugate:()=>ut,m2AppendRow:()=>Jr,m2DeepCopy:()=>et,m2Determinant:()=>st,m2DivideScalar:()=>Rt,m2Inverse:()=>at,m2MulScalar:()=>Er,m2PrependRow:()=>Pr,m2ReflectionOrigin:()=>je,m2ReflectionOriginH:()=>Ge,m2ReflectionX:()=>Ze,m2ReflectionXH:()=>ke,m2ReflectionY:()=>We,m2ReflectionYH:()=>_e,m2ReflectionYmX:()=>Fe,m2Reset:()=>qr,m2RotateAroundPointH:()=>ye,m2Rotation:()=>wt,m2RotationAroundPointH:()=>zt,m2RotationH:()=>ft,m2Scale:()=>Et,m2ScaleAtPointH:()=>ze,m2ScaleAtPointHMatrix:()=>Dt,m2ScaleH:()=>At,m2ScaleX:()=>De,m2ScaleXH:()=>Ee,m2ScaleY:()=>Ye,m2ScaleYH:()=>Oe,m2ShearingX:()=>nn,m2ShearingY:()=>en,m2Sub:()=>Br,m2Sum:()=>Hr,m2ToCSS:()=>me,m2Translation:()=>he,m2TranslationH:()=>Y,m2Transpose:()=>$r,m2hToCSS:()=>fe,m2hToCSS3d:()=>pe,m2x2:()=>Yr,m3Adjugate:()=>xe,m3AppendRow:()=>Kr,m3DeepCopy:()=>nt,m3Determinant:()=>ue,m3DivideScalar:()=>Lr,m3Inverse:()=>mt,m3MulScalar:()=>Ar,m3PrependRow:()=>te,m3ReflectionOrigin:()=>Qe,m3ReflectionOriginH:()=>Ce,m3ReflectionXY:()=>tn,m3ReflectionXYH:()=>rn,m3ReflectionXZ:()=>Ue,m3ReflectionXZH:()=>Pe,m3ReflectionYZ:()=>Je,m3ReflectionYZH:()=>Ke,m3Reset:()=>Xr,m3RotationX:()=>Ht,m3RotationXH:()=>le,m3RotationY:()=>Tt,m3RotationYH:()=>ve,m3RotationZ:()=>Bt,m3RotationZH:()=>Re,m3Scale:()=>Lt,m3ScaleH:()=>Te,m3ScaleX:()=>Ae,m3ScaleXH:()=>Le,m3ScaleY:()=>$e,m3ScaleYH:()=>Ne,m3ScaleZ:()=>qe,m3ScaleZH:()=>Xe,m3Sub:()=>Dr,m3Sum:()=>Tr,m3Translation:()=>Ve,m3TranslationH:()=>be,m3Transpose:()=>Nr,m3hToCSS3d:()=>Me,m3x3:()=>Or,m4x4:()=>jr,mAdjugate:()=>xt,mAppendCol:()=>kr,mAppendRow:()=>_r,mDeepCopy:()=>b,mDelFirstColumn:()=>ne,mDelFirstRow:()=>ee,mDelLastColumn:()=>ot,mDelLastRow:()=>re,mDeterminant:()=>X,mDivideScalar:()=>Q,mEqual:()=>ce,mGetColumn:()=>ie,mGetFirstColumn:()=>oe,mGetLastColumn:()=>it,mInverse:()=>C,mMinor:()=>ct,mMul:()=>B,mMulScalar:()=>tt,mMulVector:()=>h,mNxM:()=>Gr,mPrependCol:()=>Wr,mPrependRow:()=>Ur,mReset:()=>rt,mSub:()=>P,mSum:()=>U,mTranspose:()=>q,mod:()=>I,newId:()=>Zn,polarToCartesian:()=>cr,radiansToDegrees:()=>sr,rectCollide:()=>Wn,rgbToHsl:()=>jn,setDecimalPlaces:()=>c,setV2Angle:()=>Z,sineWaveMovement:()=>Bn,stringToNumber:()=>sn,v2:()=>Sr,v2CubicBezierBBox:()=>zn,v2CubicBezierCurve:()=>qt,v2CubicBezierCurveExtrema:()=>jt,v2CubicBezierCurveNormal:()=>Rn,v2CubicBezierCurveTangent:()=>Yt,v2Distance:()=>Ir,v2DivideScalar:()=>Vr,v2DotProduct:()=>W,v2FromPolarCoords:()=>zr,v2GetNormal:()=>K,v2Length:()=>k,v2MulScalar:()=>hr,v2Normalize:()=>T,v2QuadraticBezierBBox:()=>wn,v2QuadraticBezierCurve:()=>Nt,v2QuadraticBezierCurveExtrema:()=>Ot,v2QuadraticBezierCurveNormal:()=>Sn,v2QuadraticBezierCurveTangent:()=>Xt,v2Rotate:()=>ge,v2RotateH:()=>Ie,v2Scale:()=>He,v2SetLength:()=>St,v2Sub:()=>L,v2Sum:()=>fr,v3:()=>Rr,v3CrossProduct:()=>vr,v3CubicBezierCurve:()=>ln,v3CubicBezierCurveTangent:()=>vn,v3Distance:()=>lr,v3DivideScalar:()=>br,v3DotProduct:()=>dr,v3Length:()=>yr,v3MulScalar:()=>G,v3Normalize:()=>l,v3QuadraticBezierCurve:()=>In,v3QuadraticBezierCurveTangent:()=>dn,v3RotateX:()=>de,v3RotateY:()=>Se,v3RotateZ:()=>we,v3Scale:()=>Be,v3Sub:()=>Mr,v3Sum:()=>pr,v4:()=>wr,vDistance:()=>gr,vDivideScalar:()=>N,vDotProduct:()=>d,vEqual:()=>J,vLength:()=>S,vMulScalar:()=>$,vN:()=>_,vNormalize:()=>z,vSub:()=>y,vSum:()=>A});module.exports=or(Un);var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=g(10,r);return Math.round(t*e)/e};var I=(t,r)=>(t%r+r)%r,O=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,ir=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),w=t=>!isNaN(parseFloat(t))&&isFinite(t),cr=(t,r,e,n=1/0)=>{let[o,i]=t,[s,u]=r;return[c(o+s*Math.cos(e),n),c(i+u*Math.sin(e),n)]};var H=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},Z=(t,r,e=1/0)=>{let n=k(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},sr=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},ur=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},vt=(t,r,e=1/0)=>{let n=z(t),o=z(r),i=d(n,o),s=Math.acos(i);return c(s,e)},xr=(t,r,e=1/0)=>{let n=y(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},ar=(t,r,e=1/0)=>vt(t,r,e),j=(t,r,e=1/0)=>{let n=Math.abs(I(t,360)-I(r,360));return c(n<=180?n:360-n,e)},mr=(t,r,e)=>{let n=j(r,e),o=j(r,t),i=j(e,t),s=o+i;return Math.abs(s-n)<=.001};var A=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},fr=(t,r,e=1/0)=>A(t,r,e),pr=(t,r,e=1/0)=>A(t,r,e),y=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},L=(t,r,e=1/0)=>y(t,r,e),Mr=(t,r,e=1/0)=>y(t,r,e),$=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},hr=(t,r,e=1/0)=>$(t,r,e),G=(t,r,e=1/0)=>$(t,r,e),N=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},Vr=(t,r,e=1/0)=>N(t,r,e),br=(t,r,e=1/0)=>N(t,r,e),S=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},k=(t,r=1/0)=>S(t,r),yr=(t,r=1/0)=>S(t,r),St=(t,r,e=1/0)=>{let n=H(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},gr=(t,r,e=1/0)=>{let n=y(t,r);return S(n,e)},Ir=(t,r,e=1/0)=>{let n=y(t,r);return S(n,e)},lr=(t,r,e=1/0)=>{let n=y(t,r);return S(n,e)},z=(t,r=1/0)=>{let e=S(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},T=(t,r=1/0)=>z(t,r),l=(t,r=1/0)=>z(t,r),d=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},W=(t,r,e=1/0)=>d(t,r,e),dr=(t,r,e=1/0)=>d(t,r,e),vr=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],Sr=(t=0)=>[t,t],Rr=(t=0)=>[t,t,t],wr=(t=0)=>[t,t,t,t],_=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},zr=(t,r)=>{let e=[0,0];return e=St(e,t),Z(e,r)},J=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0},K=(t,r,e=1/0)=>{let n=L(r,t);return[-c(n[1],e),c(n[0],e)]};var U=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(A(t[o],r[o],e));return n},Hr=(t,r,e=1/0)=>U(t,r,e),Tr=(t,r,e=1/0)=>U(t,r,e),P=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(y(t[o],r[o],e));return n},Br=(t,r,e=1/0)=>P(t,r,e),Dr=(t,r,e=1/0)=>P(t,r,e),tt=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push($(o,r,e));return n},Er=(t,r,e=1/0)=>tt(t,r,e),Ar=(t,r,e=1/0)=>tt(t,r,e),Q=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(N(o,r,e));return n},Rt=(t,r,e=1/0)=>Q(t,r,e),Lr=(t,r,e=1/0)=>Q(t,r,e),q=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},$r=t=>q(t),Nr=t=>q(t),rt=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},qr=(t,r=0)=>rt(t,r),Xr=(t,r=0)=>rt(t,r),Yr=(t=0)=>[[t,t],[t,t]],Or=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],jr=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Gr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(_(r,e));return n},Qr=()=>[[1,0],[0,1]],Cr=()=>[[1,0,0],[0,1,0],[0,0,1]],Fr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Zr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},b=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},et=t=>b(t),nt=t=>b(t),kr=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Wr=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},_r=(t,r)=>{let e=b(t);return e.push(r),e},Jr=(t,r)=>{let e=et(t);return e.push(r),e},Kr=(t,r)=>{let e=nt(t);return e.push(r),e},Ur=(t,r)=>{let e=b(t);return e.unshift(r),e},Pr=(t,r)=>{let e=et(t);return e.unshift(r),e},te=(t,r)=>{let e=nt(t);return e.unshift(r),e},re=t=>{if(t.length<=0)return[];let r=b(t);return r.pop(),r},ee=t=>{if(t.length<=0)return[];let r=b(t);return r.shift(),r},ot=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].pop();return r},ne=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].shift();return r},oe=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},it=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},ie=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},B=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=q(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=d(s,x,e);n[i].push(a)}}return n},h=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=d(t[o],r,e);return n},ce=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!J(t[e],r[e]))return!1;return!0},se=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},ct=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=se(t,r,e);return X(o)},X=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return st(t);let e=0;for(let n=0;n<r;n++){let o=ct(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},st=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},ue=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return X(t)},ut=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},xe=t=>xt(t),xt=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return ut(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=ct(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return q(e)},ae=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return X(t)===0},at=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=st(t);if(e===0)return null;let n=ut(t);return n===null?null:Rt(n,e,r)},mt=(t,r=1/0)=>C(t,r),C=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=X(t),o=xt(t);return o===null?null:Q(o,n,r)};var me=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},fe=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${i}, ${s})`},pe=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${s}, 0, 1)`},Me=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,he=(t,r=1/0)=>[[1,0],[0,1],[c(t[0],r),c(t[1],r)]],Ve=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[c(t[0],r),c(t[1],r),c(t[2],r)]],Y=(t,r=1/0)=>[[1,0,c(t[0],r)],[0,1,c(t[1],r)],[0,0,1]],be=(t,r=1/0)=>[[1,0,0,c(t[0],r)],[0,1,0,c(t[1],r)],[0,0,1,c(t[2],r)],[0,0,0,1]],wt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},ft=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},zt=(t,r,e=!0,n=1/0)=>{let o=Y(r,n),i=ft(t,e,n),s=Y(G(r,-1),n),u=B(o,i);return B(u,s)},ye=(t,r,e,n=!0,o=1/0)=>{let i=zt(t,r,n,o);return h(i,e)},ge=(t,r,e=!0,n=1/0)=>{let o=T(r);return h(wt(t,e,n),o)},Ie=(t,r,e=!0,n=1/0)=>{let o=l(r);return h(ft(t,e,n),o)},Ht=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},le=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},de=(t,r,e=!0,n=1/0)=>{let o=l(r);return h(Ht(t,e,n),o)},Tt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},ve=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},Se=(t,r,e=!0,n=1/0)=>{let o=l(r);return h(Tt(t,e,n),o)},Bt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Re=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},we=(t,r,e=!0,n=1/0)=>{let o=l(r);return h(Bt(t,e,n),o)},Dt=(t,r,e=1/0)=>{let n=Y(r,e),o=At(t),i=Y(G(r,-1),e),s=B(n,o);return B(s,i)},ze=(t,r,e,n=1/0)=>{let o=Dt(t,r,n);return h(o,e)},Et=t=>[[t[0],0],[0,t[1]]],He=(t,r)=>h(Et(t),r),At=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],Lt=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],Te=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],Be=(t,r)=>h(Lt(t),r),De=t=>[[t,0],[0,1]],Ee=t=>[[t,0,0],[0,1,0],[0,0,1]],Ae=t=>[[t,0,0],[0,1,0],[0,0,1]],Le=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],$e=t=>[[1,0,0],[0,t,0],[0,0,1]],Ne=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],qe=t=>[[1,0,0],[0,1,0],[0,0,t]],Xe=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],Ye=t=>[[1,0],[0,t]],Oe=t=>[[1,0,0],[0,t,0],[0,0,1]],je=()=>[[-1,0],[0,-1]],Ge=()=>[[-1,0,0],[0,-1,0],[0,0,1]],Qe=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],Ce=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],Fe=()=>[[0,-1],[-1,0]],Ze=()=>[[1,0],[0,-1]],ke=()=>[[1,0,0],[0,-1,0],[0,0,1]],We=()=>[[-1,0],[0,1]],_e=()=>[[-1,0,0],[0,1,0],[0,0,1]],Je=()=>[[-1,0,0],[0,1,0],[0,0,1]],Ke=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Ue=()=>[[1,0,0],[0,-1,0],[0,0,1]],Pe=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],tn=()=>[[1,0,0],[0,1,0],[0,0,-1]],rn=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],en=t=>[[1,t],[0,1]],nn=t=>[[1,0],[t,1]];var V=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),$t=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),on=()=>Math.random()<.5,cn=t=>{let r=$t(0,t.length-1);return t[r]};var sn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var un=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let i=o[0],s=o[1];n+=i*s*Math.pow(t,s-1)}return c(n,e)},pt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},Mt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},ht=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},Vt=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},xn=(t,r=1/0)=>c(Math.cos(t),r),an=(t,r=1/0)=>c(-Math.sin(t),r),mn=(t,r=1/0)=>c(1/g(Math.cos(t),2),r),fn=(t,r=1/0)=>c(-1/g(Math.sin(t),2),r),pn=(t,r=1/0)=>c(1/Math.sqrt(1-g(t,2)),r),Mn=(t,r=1/0)=>c(-1/Math.sqrt(1-g(t,2)),r),hn=(t,r=1/0)=>c(1/(1+g(t,2)),r),Vn=(t,r=1/0)=>c(-1/(1+g(t,2)),r);var D=(t,r=1/0)=>{let e=t[0],n=t[1],i=t[2]-n;return e===0&&i===0?1/0:e===0?NaN:c(i/e,r)},bn=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=at(n);if(o===null)return null;let i=[t[2],r[2]];return h(o,i,e)},yn=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=mt(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return h(i,s,n)},gn=(t,r=1/0)=>{if(t.length<=0)return null;let e=ot(t),n=C(e);if(n===null)return null;let o=it(t);return h(n,o,r)};var bt=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],i=t[3];if(e===0){let M=D([n,o,i],r);return w(M)?[M]:[]}let s=o-i,u=n*n-4*e*s;if(u<0)return[];if(u===0)return[c(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[c((-n+a)/x,r),c((-n-a)/x,r)]};var Nt=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},In=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},qt=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},ln=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},Xt=(t,r,e,n,o=1/0)=>{let i=pt(t,r,e,n);return T(i,o)},dn=(t,r,e,n,o=1/0)=>{let i=Mt(t,r,e,n);return l(i,o)},Yt=(t,r,e,n,o,i=1/0)=>{let s=ht(t,r,e,n,o);return T(s,i)},vn=(t,r,e,n,o,i=1/0)=>{let s=Vt(t,r,e,n,o);return l(s,i)},Sn=(t,r,e,n,o=1/0)=>{let i=Xt(t,r,e,n,o);return[-i[1],i[0]]},Rn=(t,r,e,n,o,i=1/0)=>{let s=Yt(t,r,e,n,o,i);return[-s[1],s[0]]},Ot=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],i=-2*t[0]+2*r[0],u=D([o,i,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],p=D([x,a,0],n),m=[];return w(u)&&m.push(u),w(p)&&m.push(p),m},jt=(t,r,e,n,o=1/0)=>{let i=-3*t[0]+9*r[0]-9*e[0]+3*n[0],s=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[i,s,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],M=6*t[1]-12*r[1]+6*e[1],p=-3*t[1]+3*r[1],m=[a,M,p,0],f=bt(x,o).filter(v=>v>=0&&v<=1),E=bt(m,o).filter(v=>v>=0&&v<=1);return[...f,...E].length===2?[...f,...E]:null},wn=(t,r,e,n=1/0)=>{let o=Ot(t,r,e),i=1/0,s=1/0,u=-1/0,x=-1/0;for(let a of o){let M=Nt(a,t,r,e),p=M[0],m=M[1];i=Math.min(i,p),u=Math.max(u,p),s=Math.min(s,m),x=Math.max(x,m)}return i=c(Math.min(i,t[0],e[0]),n),u=c(Math.max(u,t[0],e[0]),n),s=c(Math.min(s,t[1],e[1]),n),x=c(Math.max(x,t[1],e[1]),n),{x:i,y:s,w:Math.abs(u-i),h:Math.abs(x-s),x2:u,y2:x}},zn=(t,r,e,n,o=1/0)=>{let i=jt(t,r,e,n)||[],s=1/0,u=1/0,x=-1/0,a=-1/0;for(let M of i){let p=qt(M,t,r,e,n),m=p[0],f=p[1];s=Math.min(s,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,f!=null?f:1/0),a=Math.max(a,f!=null?f:-1/0)}return s=c(Math.min(s,t[0],n[0]),o),x=c(Math.max(x,t[0],n[0]),o),u=c(Math.min(u,t[1],n[1]),o),a=c(Math.max(a,t[1],n[1]),o),{x:s,y:u,w:Math.abs(x-s),h:Math.abs(a-u),x2:x,y2:a}};var Gt=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Hn=(t,r,e)=>{let n=L(t,r),o=H(n);return o=O(o,0,Math.PI*2,0,Math.PI),Gt(r,o,e)},Qt=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Tn=(t,r,e)=>{let n=L(t,r),o=H(n);return o=O(o,0,Math.PI*2,0,Math.PI),Qt(r,o,e[0],e[1])},Bn=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Dn=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var En=()=>{let t=It();return Ft(t)},An=()=>{let t=It();return Zt(t)},It=()=>{let t=V(1,360),r=V(0,100),e=V(0,100);return[t,r,e]},Ln=t=>{let r=V(0,100),e=V(0,100);return[t,r,e]},$n=t=>{let r=V(1,360),e=V(0,100);return[r,t,e]},Nn=t=>{let r=V(1,360),e=V(0,100);return[r,e,t]},qn=()=>[0,0,V(0,100)],Xn=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=V(t,r),u=V(e,n),x=V(o,i);return[s,u,x]},yt=t=>(t*=60,t<0&&(t+=360),t*100/360),Yn=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?yt((r-e)/(o-n)):o===r?yt(2+(e-t)/(o-n)):o===e?yt(4+(t-r)/(o-n)):0),Ct=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),On=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?Ct(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),jn=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=Ct(e,n,o,i,s),x=On(e,n,o,i,s,u),a=Yn(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},gt=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),Ft=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let f=o*255;return[f,f,f]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,M=gt(i,s,u),p=gt(i,s,x),m=gt(i,s,a);return M*=255,p*=255,m*=255,M>255||p>255||m>255?[255,255,255]:M<0||p<0||m<0?[0,0,0]:[c(M,r),c(p,r),c(m,r)]},Zt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(p,m,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?p+(m-p)*6*f:f<.5?m:f<.6666666666666666?p+(m-p)*(.6666666666666666-f)*6:p),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},Gn=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=I(e,360)),[e,t[1],t[2]]},Qn=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=I(e,100)),[t[0],t[1],e]},Cn=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var Fn=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),Zn=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var kn=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);var Wn=(t,r)=>t.x<=r.x+r.w&&t.x+t.w>=r.x&&t.y<=r.y+r.h&&t.h+t.y>=r.y,_n=(t,r)=>{let e=Math.abs(t.cx-r.cx),n=Math.abs(t.cy-r.cy);return Math.sqrt(e*e+n*n)<=t.r+r.r},kt=t=>{let r=[];for(let e=0;e<t.length;e++){let n=I(e+1,t.length),o=[t[e],t[n]];r.push(o)}return r},Jn=(t,r)=>{let e=[];e.push(...kt(t)),e.push(...kt(r));for(let n of e){let o=K(n[0],n[1]),i=Wt(t,o),s=Wt(r,o);if(!(i.max>=s.min&&s.max>=i.min))return!1}return!0},Wt=(t,r)=>{let e=1/0,n=-1/0;for(let o of t){let i=W(o,r);e=Math.min(e,i),n=Math.max(n,i)}return{min:e,max:n}};var Kn=t=>{let r=t.duration!==void 0?t.duration:1/0,e,n,o,i,s=!1,u,x=()=>{e=void 0,o=void 0,i=void 0,s=!1,n!==void 0&&window.cancelAnimationFrame(n)},a=()=>{x(),E()},M=()=>{s=!1},p=()=>{s=!0},m=R=>{e===void 0&&(e=R),o=R-e,s&&i!==R&&typeof t.callback=="function"&&t.callback(dt()),o<=r?(i=R,n=window.requestAnimationFrame(m)):x()},f=(R,Ut)=>{a(),typeof t.resizeCallback=="function"&&t.resizeCallback(R,Ut)},E=()=>{e=void 0,o=void 0,i=void 0,s=!0,t.restartOnResize&&window.ResizeObserver&&u===void 0?(u=new ResizeObserver(f),u.observe(document.body,{box:"border-box"})):n=window.requestAnimationFrame(m)},lt=()=>o,v=()=>s,_t=()=>e,Jt=()=>{if(!(r===1/0||o===void 0))return o*100/r},Kt=()=>u,dt=()=>({start:E,stop:x,pause:M,resume:p,restart:a,isAnimating:v,getElapsedTime:lt,getStartTime:_t,getPercent:Jt,getResizeObserver:Kt});return dt()};0&&(module.exports={animate,circleCollide,circleMovement,circleMovementAfterMouse,convertRange,convexPolygonsCollide,degreesToRadians,doRangesOverlap,dxArcCos,dxArcCot,dxArcSin,dxArcTan,dxCos,dxCot,dxPolynomial,dxSin,dxTan,dxV2CubicBezierCurve,dxV2QuadraticBezierCurve,dxV3CubicBezierCurve,dxV3QuadraticBezierCurve,ellipseMovement,ellipseMovementAfterMouse,getAnglesSub,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getSquareInCircleSide,getV2Angle,getV2AngleBetween,getV3AngleBetween,getVNAngleBetween,guid,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isAngleBetween,isNumber,isSingularMatrix,linearEquation,linearEquationSystem2,linearEquationSystem3,linearEquationSystemN,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2ReflectionOrigin,m2ReflectionOriginH,m2ReflectionX,m2ReflectionXH,m2ReflectionY,m2ReflectionYH,m2ReflectionYmX,m2Reset,m2RotateAroundPointH,m2Rotation,m2RotationAroundPointH,m2RotationH,m2Scale,m2ScaleAtPointH,m2ScaleAtPointHMatrix,m2ScaleH,m2ScaleX,m2ScaleXH,m2ScaleY,m2ScaleYH,m2ShearingX,m2ShearingY,m2Sub,m2Sum,m2ToCSS,m2Translation,m2TranslationH,m2Transpose,m2hToCSS,m2hToCSS3d,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3ReflectionOrigin,m3ReflectionOriginH,m3ReflectionXY,m3ReflectionXYH,m3ReflectionXZ,m3ReflectionXZH,m3ReflectionYZ,m3ReflectionYZH,m3Reset,m3RotationX,m3RotationXH,m3RotationY,m3RotationYH,m3RotationZ,m3RotationZH,m3Scale,m3ScaleH,m3ScaleX,m3ScaleXH,m3ScaleY,m3ScaleYH,m3ScaleZ,m3ScaleZH,m3Sub,m3Sum,m3Translation,m3TranslationH,m3Transpose,m3hToCSS3d,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,newId,polarToCartesian,radiansToDegrees,rectCollide,rgbToHsl,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierBBox,v2CubicBezierCurve,v2CubicBezierCurveExtrema,v2CubicBezierCurveNormal,v2CubicBezierCurveTangent,v2Distance,v2DivideScalar,v2DotProduct,v2FromPolarCoords,v2GetNormal,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierBBox,v2QuadraticBezierCurve,v2QuadraticBezierCurveExtrema,v2QuadraticBezierCurveNormal,v2QuadraticBezierCurveTangent,v2Rotate,v2RotateH,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3CubicBezierCurveTangent,v3Distance,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3QuadraticBezierCurveTangent,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,v4,vDistance,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=mz-math.node.cjs.map
