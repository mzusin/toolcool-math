/* 
mzMath v3.0.23
A collection of TypeScript-based math helpers.
https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md       
Copyright (c) 2023-present, Miriam Zusin          
*/
var V=Math.pow;var s=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=V(10,r);return Math.round(t*e)/e};var l=(t,r)=>(t%r+r)%r,j=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,ur=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),B=t=>!isNaN(parseFloat(t))&&isFinite(t),xr=(t,r,e,n=1/0)=>{let[o,i]=t,[c,u]=r;return[s(o+c*Math.cos(e),n),s(i+u*Math.sin(e),n)]};var L=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return s(e,r)},Mr=(t,r,e=1/0)=>{let n=Math.atan2(t[1]/r[1],t[0]/r[0]);return s(n,e)},K=(t,r,e=1/0)=>{let n=U(t);return[s(Math.cos(r)*n,e),s(Math.sin(r)*n,e)]},hr=(t,r=1/0)=>{let e=t*(180/Math.PI);return s(e,r)},br=(t,r=1/0)=>{let e=t*(Math.PI/180);return s(e,r)},Tt=(t,r,e=1/0)=>{let n=T(t),o=T(r),i=S(n,o),c=Math.acos(i);return s(c,e)},Vr=(t,r,e=1/0)=>{let n=d(t,r),o=Math.atan2(n[1],n[0]);return s(o,e)},yr=(t,r,e=1/0)=>Tt(t,r,e),lr=(t,r,e)=>{let n=k(r,e),o=k(r,t),i=k(e,t),c=o+i;return Math.abs(c-n)<=.001},J=(t,r,e=0)=>(t=t%360,r=r%360,t<e&&(t+=360),r<e&&(r+=360),r>=t),k=(t,r,e=1/0)=>{let n=Math.abs(l(t,360)-l(r,360));return s(n<=180?n:360-n,e)},Lt=(t,r,e=0,n=1/0)=>(t=t%360,r=r%360,t<e&&(t+=360),r<e&&(r+=360),J(t,r,e)?s((r-t+360)%360,n):s((t-r+360)%360,n)),Ir=(t,r,e,n=0)=>{t<0&&(t=0),t>100&&(t=100);let o=Lt(r,e,n);return J(r,e,n)?l(n+t*o/100,360):l(n-t*o/100,360)};var N=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]+r[o],e));return n},Sr=(t,r,e=1/0)=>N(t,r,e),Rr=(t,r,e=1/0)=>N(t,r,e),d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]-r[o],e));return n},w=(t,r,e=1/0)=>d(t,r,e),wr=(t,r,e=1/0)=>d(t,r,e),C=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]*r,e));return n},Hr=(t,r,e=1/0)=>C(t,r,e),D=(t,r,e=1/0)=>C(t,r,e),X=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]/r,e));return n},zr=(t,r,e=1/0)=>X(t,r,e),Br=(t,r,e=1/0)=>X(t,r,e),H=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return s(Math.sqrt(e),r)},U=(t,r=1/0)=>H(t,r),Tr=(t,r=1/0)=>H(t,r),$t=(t,r,e=1/0)=>{let n=L(t);return[s(Math.cos(n)*r,e),s(Math.sin(n)*r,e)]},Lr=(t,r,e=1/0)=>{let n=d(t,r);return H(n,e)},$r=(t,r,e=1/0)=>{let n=d(t,r);return H(n,e)},Er=(t,r,e=1/0)=>{let n=d(t,r);return H(n,e)},T=(t,r=1/0)=>{let e=H(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:s(t[o]/e,r));return n},$=(t,r=1/0)=>T(t,r),g=(t,r=1/0)=>T(t,r),S=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return s(n,e)},P=(t,r,e=1/0)=>S(t,r,e),qr=(t,r,e=1/0)=>S(t,r,e),Ar=(t,r,e=1/0)=>[s(t[1]*r[2]-t[2]*r[1],e),s(t[2]*r[0]-t[0]*r[2],e),s(t[0]*r[1]-t[1]*r[0],e)],Nr=(t=0)=>[t,t],Cr=(t=0)=>[t,t,t],Xr=(t=0)=>[t,t,t,t],tt=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},Yr=(t,r)=>{let e=[0,0];return e=$t(e,t),K(e,r)},rt=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0},et=(t,r,e=1/0)=>{let n=w(r,t);return[-s(n[1],e),s(n[0],e)]};var nt=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(N(t[o],r[o],e));return n},jr=(t,r,e=1/0)=>nt(t,r,e),kr=(t,r,e=1/0)=>nt(t,r,e),ot=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(d(t[o],r[o],e));return n},Dr=(t,r,e=1/0)=>ot(t,r,e),Fr=(t,r,e=1/0)=>ot(t,r,e),it=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(C(o,r,e));return n},Qr=(t,r,e=1/0)=>it(t,r,e),Zr=(t,r,e=1/0)=>it(t,r,e),F=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(X(o,r,e));return n},Et=(t,r,e=1/0)=>F(t,r,e),Wr=(t,r,e=1/0)=>F(t,r,e),Y=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},_r=t=>Y(t),Kr=t=>Y(t),ct=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let c=0;c<o;c++)i.push(r);e.push(i)}return e},Jr=(t,r=0)=>ct(t,r),Ur=(t,r=0)=>ct(t,r),Pr=(t=0)=>[[t,t],[t,t]],te=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],re=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],ee=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(tt(r,e));return n},ne=()=>[[1,0],[0,1]],oe=()=>[[1,0,0],[0,1,0],[0,0,1]],ie=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],ce=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},I=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},st=t=>I(t),ut=t=>I(t),se=(t,r)=>{if(t.length<=0)return[];let e=I(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},ue=(t,r)=>{if(t.length<=0)return[];let e=I(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},xe=(t,r)=>{let e=I(t);return e.push(r),e},ae=(t,r)=>{let e=st(t);return e.push(r),e},me=(t,r)=>{let e=ut(t);return e.push(r),e},fe=(t,r)=>{let e=I(t);return e.unshift(r),e},pe=(t,r)=>{let e=st(t);return e.unshift(r),e},Me=(t,r)=>{let e=ut(t);return e.unshift(r),e},he=t=>{if(t.length<=0)return[];let r=I(t);return r.pop(),r},be=t=>{if(t.length<=0)return[];let r=I(t);return r.shift(),r},xt=t=>{if(t.length<=0)return[];let r=I(t);for(let e=0;e<r.length;e++)r[e].pop();return r},Ve=t=>{if(t.length<=0)return[];let r=I(t);for(let e=0;e<r.length;e++)r[e].shift();return r},ye=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},at=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},le=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},E=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=Y(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let c=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=S(c,x,e);n[i].push(a)}}return n},h=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=S(t[o],r,e);return n},Ie=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!rt(t[e],r[e]))return!1;return!0},qt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let c=[];for(let u=0;u<n;u++)u!==e&&c.push(t[i][u]);o.push(c)}return o},mt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=qt(t,r,e);return G(o)},G=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return ft(t);let e=0;for(let n=0;n<r;n++){let o=mt(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},ft=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},de=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return G(t)},pt=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},ve=t=>Mt(t),Mt=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return pt(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let c=mt(t,n,i),u=Math.pow(-1,n+i);o.push(u*c)}e.push(o)}return Y(e)},ge=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return G(t)===0},ht=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=ft(t);if(e===0)return null;let n=pt(t);return n===null?null:Et(n,e,r)},bt=(t,r=1/0)=>Q(t,r),Q=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=G(t),o=Mt(t);return o===null?null:F(o,n,r)};var ze=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},Be=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],c=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${i}, ${c})`},Te=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],c=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${c}, 0, 1)`},Le=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,$e=(t,r=1/0)=>[[1,0],[0,1],[s(t[0],r),s(t[1],r)]],Ee=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[s(t[0],r),s(t[1],r),s(t[2],r)]],O=(t,r=1/0)=>[[1,0,s(t[0],r)],[0,1,s(t[1],r)],[0,0,1]],qe=(t,r=1/0)=>[[1,0,0,s(t[0],r)],[0,1,0,s(t[1],r)],[0,0,1,s(t[2],r)],[0,0,0,1]],At=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},Vt=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Nt=(t,r,e=!0,n=1/0)=>{let o=O(r,n),i=Vt(t,e,n),c=O(D(r,-1),n),u=E(o,i);return E(u,c)},Ae=(t,r,e,n=!0,o=1/0)=>{let i=Nt(t,r,n,o);return h(i,e)},Ne=(t,r,e=!0,n=1/0)=>{let o=$(r);return h(At(t,e,n),o)},Ce=(t,r,e=!0,n=1/0)=>{let o=g(r);return h(Vt(t,e,n),o)},Ct=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},Xe=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},Ye=(t,r,e=!0,n=1/0)=>{let o=g(r);return h(Ct(t,e,n),o)},Xt=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},Ge=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},Oe=(t,r,e=!0,n=1/0)=>{let o=g(r);return h(Xt(t,e,n),o)},Yt=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},je=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},ke=(t,r,e=!0,n=1/0)=>{let o=g(r);return h(Yt(t,e,n),o)},Gt=(t,r,e=1/0)=>{let n=O(r,e),o=jt(t),i=O(D(r,-1),e),c=E(n,o);return E(c,i)},De=(t,r,e,n=1/0)=>{let o=Gt(t,r,n);return h(o,e)},Ot=t=>[[t[0],0],[0,t[1]]],Fe=(t,r)=>h(Ot(t),r),jt=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],kt=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],Qe=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],Ze=(t,r)=>h(kt(t),r),We=t=>[[t,0],[0,1]],_e=t=>[[t,0,0],[0,1,0],[0,0,1]],Ke=t=>[[t,0,0],[0,1,0],[0,0,1]],Je=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Ue=t=>[[1,0,0],[0,t,0],[0,0,1]],Pe=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],tn=t=>[[1,0,0],[0,1,0],[0,0,t]],rn=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],en=t=>[[1,0],[0,t]],nn=t=>[[1,0,0],[0,t,0],[0,0,1]],on=()=>[[-1,0],[0,-1]],cn=()=>[[-1,0,0],[0,-1,0],[0,0,1]],sn=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],un=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],xn=()=>[[0,-1],[-1,0]],an=()=>[[1,0],[0,-1]],mn=()=>[[1,0,0],[0,-1,0],[0,0,1]],fn=()=>[[-1,0],[0,1]],pn=()=>[[-1,0,0],[0,1,0],[0,0,1]],Mn=()=>[[-1,0,0],[0,1,0],[0,0,1]],hn=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],bn=()=>[[1,0,0],[0,-1,0],[0,0,1]],Vn=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],yn=()=>[[1,0,0],[0,1,0],[0,0,-1]],ln=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],In=t=>[[1,t],[0,1]],dn=t=>[[1,0],[t,1]];var b=(t,r,e=1/0)=>s(Math.random()*(r-t)+t,e),Dt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Sn=()=>Math.random()<.5,Rn=t=>{let r=Dt(0,t.length-1);return t[r]};var Hn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var Tn=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let i=o[0],c=o[1];n+=i*c*Math.pow(t,c-1)}return s(n,e)},yt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),c=2-4*t,u=2*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o)]},lt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),c=2-4*t,u=2*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o),s(i*r[2]+c*e[2]+u*n[2],o)]},It=(t,r,e,n,o,i=1/0)=>{let c=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},dt=(t,r,e,n,o,i=1/0)=>{let c=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i),s(c*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},Ln=(t,r=1/0)=>s(Math.cos(t),r),$n=(t,r=1/0)=>s(-Math.sin(t),r),En=(t,r=1/0)=>s(1/V(Math.cos(t),2),r),qn=(t,r=1/0)=>s(-1/V(Math.sin(t),2),r),An=(t,r=1/0)=>s(1/Math.sqrt(1-V(t,2)),r),Nn=(t,r=1/0)=>s(-1/Math.sqrt(1-V(t,2)),r),Cn=(t,r=1/0)=>s(1/(1+V(t,2)),r),Xn=(t,r=1/0)=>s(-1/(1+V(t,2)),r);var q=(t,r=1/0)=>{let e=t[0],n=t[1],i=t[2]-n;return e===0&&i===0?1/0:e===0?NaN:s(i/e,r)},Dn=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=ht(n);if(o===null)return null;let i=[t[2],r[2]];return h(o,i,e)},Fn=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=bt(o);if(i===null)return null;let c=[t[3],r[3],e[3]];return h(i,c,n)},Qn=(t,r=1/0)=>{if(t.length<=0)return null;let e=xt(t),n=Q(e);if(n===null)return null;let o=at(t);return h(n,o,r)},Zn=(t,r)=>{let[e,n]=w(r,t),[o,i]=t;if(e===0)return{slope:void 0,xIntercept:o,yIntercept:void 0,formula:`x = ${o}`};let c=n/e,u=i-c*o,x="";return c===0?x=`y = ${u}`:(x=`y = ${c===1?"":c}x`,u!==0&&(x+=` ${u<0?"-":"+"} ${Math.abs(u)}`)),{slope:c,xIntercept:void 0,yIntercept:u,formula:x}};var Z=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],i=t[3];if(e===0){let f=q([n,o,i],r);return B(f)?[f]:[]}let c=o-i,u=n*n-4*e*c;if(u<0)return[];if(u===0)return[s(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[s((-n+a)/x,r),s((-n-a)/x,r)]};var Ft=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),c=(1-t)*2*t,u=t*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o)]},io=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),c=(1-t)*2*t,u=t*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o),s(i*r[2]+c*e[2]+u*n[2],o)]},Qt=(t,r,e,n,o,i=1/0)=>{let c=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},co=(t,r,e,n,o,i=1/0)=>{let c=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i),s(c*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},Zt=(t,r,e,n,o=1/0)=>{let i=yt(t,r,e,n);return $(i,o)},so=(t,r,e,n,o=1/0)=>{let i=lt(t,r,e,n);return g(i,o)},Wt=(t,r,e,n,o,i=1/0)=>{let c=It(t,r,e,n,o);return $(c,i)},uo=(t,r,e,n,o,i=1/0)=>{let c=dt(t,r,e,n,o);return g(c,i)},xo=(t,r,e,n,o=1/0)=>{let i=Zt(t,r,e,n,o);return[-i[1],i[0]]},ao=(t,r,e,n,o,i=1/0)=>{let c=Wt(t,r,e,n,o,i);return[-c[1],c[0]]},_t=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],i=-2*t[0]+2*r[0],u=q([o,i,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],p=q([x,a,0],n),m=[];return B(u)&&m.push(u),B(p)&&m.push(p),m},Kt=(t,r,e,n,o=1/0)=>{let i=-3*t[0]+9*r[0]-9*e[0]+3*n[0],c=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[i,c,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],f=6*t[1]-12*r[1]+6*e[1],p=-3*t[1]+3*r[1],m=[a,f,p,0],M=Z(x,o).filter(y=>y>=0&&y<=1),v=Z(m,o).filter(y=>y>=0&&y<=1);return[...M,...v].length===2?[...M,...v]:null},mo=(t,r,e,n=1/0)=>{let o=_t(t,r,e),i=1/0,c=1/0,u=-1/0,x=-1/0;for(let a of o){let f=Ft(a,t,r,e),p=f[0],m=f[1];i=Math.min(i,p),u=Math.max(u,p),c=Math.min(c,m),x=Math.max(x,m)}return i=s(Math.min(i,t[0],e[0]),n),u=s(Math.max(u,t[0],e[0]),n),c=s(Math.min(c,t[1],e[1]),n),x=s(Math.max(x,t[1],e[1]),n),{x:i,y:c,w:Math.abs(u-i),h:Math.abs(x-c),x2:u,y2:x}},fo=(t,r,e,n,o=1/0)=>{let i=Kt(t,r,e,n)||[],c=1/0,u=1/0,x=-1/0,a=-1/0;for(let f of i){let p=Qt(f,t,r,e,n),m=p[0],M=p[1];c=Math.min(c,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,M!=null?M:1/0),a=Math.max(a,M!=null?M:-1/0)}return c=s(Math.min(c,t[0],n[0]),o),x=s(Math.max(x,t[0],n[0]),o),u=s(Math.min(u,t[1],n[1]),o),a=s(Math.max(a,t[1],n[1]),o),{x:c,y:u,w:Math.abs(x-c),h:Math.abs(a-u),x2:x,y2:a}};var Jt=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Vo=(t,r,e)=>{let n=w(t,r),o=L(n);return o=j(o,0,Math.PI*2,0,Math.PI),Jt(r,o,e)},Ut=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),yo=(t,r,e)=>{let n=w(t,r),o=L(n);return o=j(o,0,Math.PI*2,0,Math.PI),Ut(r,o,e[0],e[1])},lo=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Io=(t,r,e,n,o,i,c)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-c)];var wo=()=>{let t=gt();return er(t)},Ho=()=>{let t=gt();return nr(t)},gt=()=>{let t=b(1,360),r=b(0,100),e=b(0,100);return[t,r,e]},zo=t=>{let r=b(0,100),e=b(0,100);return[t,r,e]},Bo=t=>{let r=b(1,360),e=b(0,100);return[r,t,e]},To=t=>{let r=b(1,360),e=b(0,100);return[r,e,t]},Lo=()=>[0,0,b(0,100)],$o=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let c=b(t,r),u=b(e,n),x=b(o,i);return[c,u,x]},Pt=t=>(t*=60,t<0&&(t+=360),t),tr=(t,r,e,n=void 0,o=void 0)=>{if(n=n===void 0?Math.min(t,r,e):n,o=o===void 0?Math.max(t,r,e):o,n===o)return 0;let i=o-n,c=0;return o===t&&(c=(r-e)/i+(r<e?6:0)),o===r&&(c=2+(e-t)/i),o===e&&(c=4+(t-r)/i),Pt(c)},St=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),rr=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?St(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),Eo=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),c=Math.max(e,n,o),u=St(e,n,o,i,c),x=rr(e,n,o,i,c,u),a=tr(e,n,o,i,c);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[s(a,r),s(x,r),s(u,r)]},W=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),er=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let M=o*255;return[M,M,M]}let i=o<.5?o*(1+n):o+n-o*n,c=2*o-i,u=e+.333,x=e,a=e-.333,f=W(i,c,u),p=W(i,c,x),m=W(i,c,a);return f*=255,p*=255,m*=255,f>255||p>255||m>255?[255,255,255]:f<0||p<0||m<0?[0,0,0]:[s(f,r),s(p,r),s(m,r)]},nr=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,c;if(e===0)o=i=c=n;else{let x=(p,m,M)=>(M<0&&(M+=1),M>1&&(M-=1),M<.16666666666666666?p+(m-p)*6*M:M<.5?m:M<.6666666666666666?p+(m-p)*(.6666666666666666-M)*6:p),a=n<.5?n*(1+e):n+e-n*e,f=2*n-a;o=x(f,a,r+1/3),i=x(f,a,r),c=x(f,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(c)}`},qo=t=>{let[r,e,n]=t;return"#"+(1<<24|r<<16|e<<8|n).toString(16).slice(1)},Ao=t=>{let r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=t.replace(r,(u,x,a,f)=>x+x+a+a+f+f),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!n)return null;let o=parseInt(n[1],16),i=parseInt(n[2],16),c=parseInt(n[3],16);return[o,i,c]},vt=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92;let i=(e*.4124+n*.3576+o*.1805)/.95047,c=(e*.2126+n*.7152+o*.0722)/1,u=(e*.0193+n*.1192+o*.9505)/1.08883;return i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,c=c>.008856?Math.pow(c,1/3):7.787*c+16/116,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,[s(116*c-16,r),s(500*(i-c),r),s(200*(c-u),r)]},No=(t,r=1/0)=>{let e=(t[0]+16)/116,n=t[1]/500+e,o=e-t[2]/200;n=.95047*(n*n*n>.008856?n*n*n:(n-16/116)/7.787),e=1*(e*e*e>.008856?e*e*e:(e-16/116)/7.787),o=1.08883*(o*o*o>.008856?o*o*o:(o-16/116)/7.787);let i=n*3.2406+e*-1.5372+o*-.4986,c=n*-.9689+e*1.8758+o*.0415,u=n*.0557+e*-.204+o*1.057;return i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,c=c>.0031308?1.055*Math.pow(c,1/2.4)-.055:12.92*c,u=u>.0031308?1.055*Math.pow(u,1/2.4)-.055:12.92*u,[s(Math.max(0,Math.min(1,i))*255,r),s(Math.max(0,Math.min(1,c))*255,r),s(Math.max(0,Math.min(1,u))*255,r)]},Co=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=l(e,360)),[e,t[1],t[2]]},Xo=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=l(e,100)),[t[0],t[1],e]},Yo=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]},Go=(t,r,e=1/0)=>{let n=vt(t,e),o=vt(r,e),i=n[0]-o[0],c=n[1]-o[1],u=n[2]-o[2],x=Math.sqrt(n[1]*n[1]+n[2]*n[2]),a=Math.sqrt(o[1]*o[1]+o[2]*o[2]),f=x-a,p=c*c+u*u-f*f;p=p<0?0:Math.sqrt(p);let m=1+.045*x,M=1+.015*x,v=i/1,z=f/m,y=p/M,A=v*v+z*z+y*y;return A<0?0:Math.sqrt(A)};var jo=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),ko=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var Zo=(t,r)=>t.x<=r.x+r.w&&t.x+t.w>=r.x&&t.y<=r.y+r.h&&t.h+t.y>=r.y,Wo=(t,r)=>{let e=Math.abs(t.cx-r.cx),n=Math.abs(t.cy-r.cy);return Math.sqrt(e*e+n*n)<=t.r+r.r},Rt=t=>{let r=[];for(let e=0;e<t.length;e++){let n=l(e+1,t.length),o=[t[e],t[n]];r.push(o)}return r},_o=(t,r)=>{let e=[];e.push(...Rt(t)),e.push(...Rt(r));for(let n of e){let o=et(n[0],n[1]),i=wt(t,o),c=wt(r,o);if(!(i.max>=c.min&&c.max>=i.min))return!1}return!0},wt=(t,r)=>{let e=1/0,n=-1/0;for(let o of t){let i=P(o,r);e=Math.min(e,i),n=Math.max(n,i)}return{min:e,max:n}};var Jo=t=>{let r=t.duration!==void 0?t.duration:1/0,e,n,o,i,c=!1,u,x=()=>{e=void 0,o=void 0,i=void 0,c=!1,n!==void 0&&window.cancelAnimationFrame(n)},a=()=>{x(),v()},f=()=>{c=!1},p=()=>{c=!0},m=R=>{e===void 0&&(e=R),o=R-e,c&&i!==R&&typeof t.callback=="function"&&t.callback(_()),o<=r?(i=R,n=window.requestAnimationFrame(m)):x()},M=(R,Bt)=>{a(),typeof t.resizeCallback=="function"&&t.resizeCallback(R,Bt)},v=()=>{e=void 0,o=void 0,i=void 0,c=!0,t.restartOnResize&&window.ResizeObserver&&u===void 0?(u=new ResizeObserver(M),u.observe(document.body,{box:"border-box"})):n=window.requestAnimationFrame(m)},z=()=>o,y=()=>c,A=()=>e,Ht=()=>{if(!(r===1/0||o===void 0))return o*100/r},zt=()=>u,_=()=>({start:v,stop:x,pause:f,resume:p,restart:a,isAnimating:y,getElapsedTime:z,getStartTime:A,getPercent:Ht,getResizeObserver:zt});return _()};var ti=(t,r=1/0)=>s(2*Math.PI*t,r),ri=(t,r,e=1/0)=>s(2*Math.PI*Math.sqrt((V(t,2)+V(r,2))/2),e),ei=(t,r,e)=>(t>r&&(r+=360),e>=t&&e<=r||e+360>=t&&e+360<=r),ni=(t,r=1/0)=>s(t*2/Math.sqrt(2),r);var ci=t=>t*(t+1)/2,si=(t,r,e)=>t/2*(2*r+(t-1)*e);var xi=t=>!t||t.length<=0?void 0:t.reduce((e,n)=>e+n,0)/t.length,ai=t=>{if(!t||t.length<=0)return;let r=[...t].sort((n,o)=>n-o),e=Math.floor(r.length/2);return r.length%2===0?(r[e]+r[e-1])/2:r[e]},mi=t=>{if(!t||t.length<=0)return;let r=new Map;for(let o of t)r.set(o,(r.get(o)||0)+1);let e=0,n=[];for(let[o,i]of r)i>e?(e=i,n=[o]):i===e&&n.push(o);if(n.length!==t.length)return n.length===1?[n[0]]:n};export{Jo as animate,si as arithmeticSequenceSum,Wo as circleCollide,Jt as circleMovement,Vo as circleMovementAfterMouse,j as convertRange,_o as convexPolygonsCollide,br as degreesToRadians,ur as doRangesOverlap,Nn as dxArcCos,Xn as dxArcCot,An as dxArcSin,Cn as dxArcTan,$n as dxCos,qn as dxCot,Tn as dxPolynomial,Ln as dxSin,En as dxTan,It as dxV2CubicBezierCurve,yt as dxV2QuadraticBezierCurve,dt as dxV3CubicBezierCurve,lt as dxV3QuadraticBezierCurve,Ut as ellipseMovement,yo as ellipseMovementAfterMouse,Lt as getAnglesDistance,k as getAnglesSub,xi as getArithmeticMean,ti as getCircleCircumference,Go as getColorsDelta,ri as getEllipseCircumference,Zn as getLinearEquationBy2Points,ai as getMedian,mi as getMode,b as getRandom,Sn as getRandomBoolean,Lo as getRandomGrayscaleHSLColor,gt as getRandomHSLColor,zo as getRandomHSLColorWithHue,To as getRandomHSLColorWithLightness,Bo as getRandomHSLColorWithSaturation,$o as getRandomHSLColorWithinRanges,Ho as getRandomHexColor,Dt as getRandomInt,Rn as getRandomItemFromArray,wo as getRandomRGBColor,Co as getShiftedHue,Xo as getShiftedLightness,Yo as getShiftedSaturation,ni as getSquareInCircleSide,L as getV2Angle,Vr as getV2AngleBetween,Mr as getV2AngleInEllipse,yr as getV3AngleBetween,Tt as getVNAngleBetween,jo as guid,Ao as hexToRgb,nr as hslToHex,er as hslToRgb,ne as identity2,oe as identity3,ie as identity4,ce as identityN,lr as isAngleBetween,ei as isAngleInCircleArc,J as isClockwise,B as isNumber,ge as isSingularMatrix,No as labToRgb,q as linearEquation,Dn as linearEquationSystem2,Fn as linearEquationSystem3,Qn as linearEquationSystemN,Io as lissajousCurve,pt as m2Adjugate,ae as m2AppendRow,st as m2DeepCopy,ft as m2Determinant,Et as m2DivideScalar,ht as m2Inverse,Qr as m2MulScalar,pe as m2PrependRow,on as m2ReflectionOrigin,cn as m2ReflectionOriginH,an as m2ReflectionX,mn as m2ReflectionXH,fn as m2ReflectionY,pn as m2ReflectionYH,xn as m2ReflectionYmX,Jr as m2Reset,Ae as m2RotateAroundPointH,At as m2Rotation,Nt as m2RotationAroundPointH,Vt as m2RotationH,Ot as m2Scale,De as m2ScaleAtPointH,Gt as m2ScaleAtPointHMatrix,jt as m2ScaleH,We as m2ScaleX,_e as m2ScaleXH,en as m2ScaleY,nn as m2ScaleYH,dn as m2ShearingX,In as m2ShearingY,Dr as m2Sub,jr as m2Sum,ze as m2ToCSS,$e as m2Translation,O as m2TranslationH,_r as m2Transpose,Be as m2hToCSS,Te as m2hToCSS3d,Pr as m2x2,ve as m3Adjugate,me as m3AppendRow,ut as m3DeepCopy,de as m3Determinant,Wr as m3DivideScalar,bt as m3Inverse,Zr as m3MulScalar,Me as m3PrependRow,sn as m3ReflectionOrigin,un as m3ReflectionOriginH,yn as m3ReflectionXY,ln as m3ReflectionXYH,bn as m3ReflectionXZ,Vn as m3ReflectionXZH,Mn as m3ReflectionYZ,hn as m3ReflectionYZH,Ur as m3Reset,Ct as m3RotationX,Xe as m3RotationXH,Xt as m3RotationY,Ge as m3RotationYH,Yt as m3RotationZ,je as m3RotationZH,kt as m3Scale,Qe as m3ScaleH,Ke as m3ScaleX,Je as m3ScaleXH,Ue as m3ScaleY,Pe as m3ScaleYH,tn as m3ScaleZ,rn as m3ScaleZH,Fr as m3Sub,kr as m3Sum,Ee as m3Translation,qe as m3TranslationH,Kr as m3Transpose,Le as m3hToCSS3d,te as m3x3,re as m4x4,Mt as mAdjugate,se as mAppendCol,xe as mAppendRow,I as mDeepCopy,Ve as mDelFirstColumn,be as mDelFirstRow,xt as mDelLastColumn,he as mDelLastRow,G as mDeterminant,F as mDivideScalar,Ie as mEqual,le as mGetColumn,ye as mGetFirstColumn,at as mGetLastColumn,Q as mInverse,mt as mMinor,E as mMul,it as mMulScalar,h as mMulVector,ee as mNxM,ue as mPrependCol,fe as mPrependRow,ct as mReset,ot as mSub,nt as mSum,Y as mTranspose,l as mod,ci as naturalNumbersSequenceSum,ko as newId,Ir as percentToAngle,xr as polarToCartesian,hr as radiansToDegrees,Zo as rectCollide,qo as rgbToHex,Eo as rgbToHsl,vt as rgbToLab,s as setDecimalPlaces,K as setV2Angle,lo as sineWaveMovement,Hn as stringToNumber,Nr as v2,fo as v2CubicBezierBBox,Qt as v2CubicBezierCurve,Kt as v2CubicBezierCurveExtrema,ao as v2CubicBezierCurveNormal,Wt as v2CubicBezierCurveTangent,$r as v2Distance,zr as v2DivideScalar,P as v2DotProduct,Yr as v2FromPolarCoords,et as v2GetNormal,U as v2Length,Hr as v2MulScalar,$ as v2Normalize,mo as v2QuadraticBezierBBox,Ft as v2QuadraticBezierCurve,_t as v2QuadraticBezierCurveExtrema,xo as v2QuadraticBezierCurveNormal,Zt as v2QuadraticBezierCurveTangent,Ne as v2Rotate,Ce as v2RotateH,Fe as v2Scale,$t as v2SetLength,w as v2Sub,Sr as v2Sum,Cr as v3,Ar as v3CrossProduct,co as v3CubicBezierCurve,uo as v3CubicBezierCurveTangent,Er as v3Distance,Br as v3DivideScalar,qr as v3DotProduct,Tr as v3Length,D as v3MulScalar,g as v3Normalize,io as v3QuadraticBezierCurve,so as v3QuadraticBezierCurveTangent,Ye as v3RotateX,Oe as v3RotateY,ke as v3RotateZ,Ze as v3Scale,wr as v3Sub,Rr as v3Sum,Xr as v4,Lr as vDistance,X as vDivideScalar,S as vDotProduct,rt as vEqual,H as vLength,C as vMulScalar,tt as vN,T as vNormalize,d as vSub,N as vSum};
//# sourceMappingURL=mz-math.esm.js.map
