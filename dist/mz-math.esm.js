/* 
mzMath v3.0.11
A collection of TypeScript-based math helpers.
https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md       
Copyright (c) 2023-present, Miriam Zusin          
*/
var y=Math.pow;var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=y(10,r);return Math.round(t*e)/e};var z=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},_=(t,r,e=1/0)=>{let n=J(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},ir=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},cr=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},Ht=(t,r,e=1/0)=>{let n=w(t),o=w(r),i=d(n,o),s=Math.acos(i);return c(s,e)},sr=(t,r,e=1/0)=>{let n=g(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},ur=(t,r,e=1/0)=>Ht(t,r,e);var A=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},fr=(t,r,e=1/0)=>A(t,r,e),pr=(t,r,e=1/0)=>A(t,r,e),g=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},L=(t,r,e=1/0)=>g(t,r,e),Mr=(t,r,e=1/0)=>g(t,r,e),$=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},Vr=(t,r,e=1/0)=>$(t,r,e),O=(t,r,e=1/0)=>$(t,r,e),N=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},hr=(t,r,e=1/0)=>N(t,r,e),br=(t,r,e=1/0)=>N(t,r,e),S=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},J=(t,r=1/0)=>S(t,r),yr=(t,r=1/0)=>S(t,r),Tt=(t,r,e=1/0)=>{let n=z(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},gr=(t,r,e=1/0)=>{let n=g(t,r);return S(n,e)},Ir=(t,r,e=1/0)=>{let n=g(t,r);return S(n,e)},lr=(t,r,e=1/0)=>{let n=g(t,r);return S(n,e)},w=(t,r=1/0)=>{let e=S(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},H=(t,r=1/0)=>w(t,r),I=(t,r=1/0)=>w(t,r),d=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},K=(t,r,e=1/0)=>d(t,r,e),dr=(t,r,e=1/0)=>d(t,r,e),vr=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],Sr=(t=0)=>[t,t],Rr=(t=0)=>[t,t,t],wr=(t=0)=>[t,t,t,t],U=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},zr=(t,r)=>{let e=[0,0];return e=Tt(e,t),_(e,r)},P=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0},tt=(t,r,e=1/0)=>{let n=L(r,t);return[-c(n[1],e),c(n[0],e)]};var rt=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(A(t[o],r[o],e));return n},Dr=(t,r,e=1/0)=>rt(t,r,e),Br=(t,r,e=1/0)=>rt(t,r,e),et=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(g(t[o],r[o],e));return n},Er=(t,r,e=1/0)=>et(t,r,e),Ar=(t,r,e=1/0)=>et(t,r,e),nt=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push($(o,r,e));return n},Lr=(t,r,e=1/0)=>nt(t,r,e),$r=(t,r,e=1/0)=>nt(t,r,e),j=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(N(o,r,e));return n},Dt=(t,r,e=1/0)=>j(t,r,e),Nr=(t,r,e=1/0)=>j(t,r,e),q=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},qr=t=>q(t),Xr=t=>q(t),ot=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Yr=(t,r=0)=>ot(t,r),Or=(t,r=0)=>ot(t,r),jr=(t=0)=>[[t,t],[t,t]],Gr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Qr=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Cr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(U(r,e));return n},Fr=()=>[[1,0],[0,1]],Zr=()=>[[1,0,0],[0,1,0],[0,0,1]],kr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Wr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},b=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},it=t=>b(t),ct=t=>b(t),_r=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Jr=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Kr=(t,r)=>{let e=b(t);return e.push(r),e},Ur=(t,r)=>{let e=it(t);return e.push(r),e},Pr=(t,r)=>{let e=ct(t);return e.push(r),e},te=(t,r)=>{let e=b(t);return e.unshift(r),e},re=(t,r)=>{let e=it(t);return e.unshift(r),e},ee=(t,r)=>{let e=ct(t);return e.unshift(r),e},ne=t=>{if(t.length<=0)return[];let r=b(t);return r.pop(),r},oe=t=>{if(t.length<=0)return[];let r=b(t);return r.shift(),r},st=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].pop();return r},ie=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].shift();return r},ce=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},ut=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},se=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},T=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=q(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=d(s,x,e);n[i].push(a)}}return n},V=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=d(t[o],r,e);return n},ue=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!P(t[e],r[e]))return!1;return!0},Bt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},xt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=Bt(t,r,e);return X(o)},X=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return at(t);let e=0;for(let n=0;n<r;n++){let o=xt(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},at=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},xe=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return X(t)},mt=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},ae=t=>ft(t),ft=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return mt(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=xt(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return q(e)},me=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return X(t)===0},pt=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=at(t);if(e===0)return null;let n=mt(t);return n===null?null:Dt(n,e,r)},Mt=(t,r=1/0)=>G(t,r),G=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=X(t),o=ft(t);return o===null?null:j(o,n,r)};var he=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},be=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${i}, ${s})`},ye=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${s}, 0, 1)`},ge=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,Ie=(t,r=1/0)=>[[1,0],[0,1],[c(t[0],r),c(t[1],r)]],le=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[c(t[0],r),c(t[1],r),c(t[2],r)]],Y=(t,r=1/0)=>[[1,0,c(t[0],r)],[0,1,c(t[1],r)],[0,0,1]],de=(t,r=1/0)=>[[1,0,0,c(t[0],r)],[0,1,0,c(t[1],r)],[0,0,1,c(t[2],r)],[0,0,0,1]],Et=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},Vt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},At=(t,r,e=!0,n=1/0)=>{let o=Y(r,n),i=Vt(t,e,n),s=Y(O(r,-1),n),u=T(o,i);return T(u,s)},ve=(t,r,e,n=!0,o=1/0)=>{let i=At(t,r,n,o);return V(i,e)},Se=(t,r,e=!0,n=1/0)=>{let o=H(r);return V(Et(t,e,n),o)},Re=(t,r,e=!0,n=1/0)=>{let o=I(r);return V(Vt(t,e,n),o)},Lt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},we=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},ze=(t,r,e=!0,n=1/0)=>{let o=I(r);return V(Lt(t,e,n),o)},$t=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},He=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},Te=(t,r,e=!0,n=1/0)=>{let o=I(r);return V($t(t,e,n),o)},Nt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},De=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},Be=(t,r,e=!0,n=1/0)=>{let o=I(r);return V(Nt(t,e,n),o)},qt=(t,r,e=1/0)=>{let n=Y(r,e),o=Yt(t),i=Y(O(r,-1),e),s=T(n,o);return T(s,i)},Ee=(t,r,e,n=1/0)=>{let o=qt(t,r,n);return V(o,e)},Xt=t=>[[t[0],0],[0,t[1]]],Ae=(t,r)=>V(Xt(t),r),Yt=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],Ot=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],Le=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],$e=(t,r)=>V(Ot(t),r),Ne=t=>[[t,0],[0,1]],qe=t=>[[t,0,0],[0,1,0],[0,0,1]],Xe=t=>[[t,0,0],[0,1,0],[0,0,1]],Ye=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Oe=t=>[[1,0,0],[0,t,0],[0,0,1]],je=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],Ge=t=>[[1,0,0],[0,1,0],[0,0,t]],Qe=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],Ce=t=>[[1,0],[0,t]],Fe=t=>[[1,0,0],[0,t,0],[0,0,1]],Ze=()=>[[-1,0],[0,-1]],ke=()=>[[-1,0,0],[0,-1,0],[0,0,1]],We=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],_e=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],Je=()=>[[0,-1],[-1,0]],Ke=()=>[[1,0],[0,-1]],Ue=()=>[[1,0,0],[0,-1,0],[0,0,1]],Pe=()=>[[-1,0],[0,1]],tn=()=>[[-1,0,0],[0,1,0],[0,0,1]],rn=()=>[[-1,0,0],[0,1,0],[0,0,1]],en=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],nn=()=>[[1,0,0],[0,-1,0],[0,0,1]],on=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],cn=()=>[[1,0,0],[0,1,0],[0,0,-1]],sn=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],un=t=>[[1,t],[0,1]],xn=t=>[[1,0],[t,1]];var h=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),jt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),fn=()=>Math.random()<.5,pn=t=>{let r=jt(0,t.length-1);return t[r]};var D=(t,r)=>(t%r+r)%r,Q=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,hn=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),B=t=>!isNaN(parseFloat(t))&&isFinite(t),bn=(t,r,e,n=1/0)=>{let[o,i]=t,[s,u]=r;return[c(o+s*Math.cos(e),n),c(i+u*Math.sin(e),n)]};var gn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var dn=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let i=o[0],s=o[1];n+=i*s*Math.pow(t,s-1)}return c(n,e)},ht=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},bt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},yt=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},gt=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},vn=(t,r=1/0)=>c(Math.cos(t),r),Sn=(t,r=1/0)=>c(-Math.sin(t),r),Rn=(t,r=1/0)=>c(1/y(Math.cos(t),2),r),wn=(t,r=1/0)=>c(-1/y(Math.sin(t),2),r),zn=(t,r=1/0)=>c(1/Math.sqrt(1-y(t,2)),r),Hn=(t,r=1/0)=>c(-1/Math.sqrt(1-y(t,2)),r),Tn=(t,r=1/0)=>c(1/(1+y(t,2)),r),Dn=(t,r=1/0)=>c(-1/(1+y(t,2)),r);var E=(t,r=1/0)=>{let e=t[0],n=t[1],i=t[2]-n;return e===0&&i===0?1/0:e===0?NaN:c(i/e,r)},$n=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=pt(n);if(o===null)return null;let i=[t[2],r[2]];return V(o,i,e)},Nn=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=Mt(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return V(i,s,n)},qn=(t,r=1/0)=>{if(t.length<=0)return null;let e=st(t),n=G(e);if(n===null)return null;let o=ut(t);return V(n,o,r)};var C=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],i=t[3];if(e===0){let M=E([n,o,i],r);return B(M)?[M]:[]}let s=o-i,u=n*n-4*e*s;if(u<0)return[];if(u===0)return[c(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[c((-n+a)/x,r),c((-n-a)/x,r)]};var Gt=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},_n=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},Qt=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},Jn=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},Ct=(t,r,e,n,o=1/0)=>{let i=ht(t,r,e,n);return H(i,o)},Kn=(t,r,e,n,o=1/0)=>{let i=bt(t,r,e,n);return I(i,o)},Ft=(t,r,e,n,o,i=1/0)=>{let s=yt(t,r,e,n,o);return H(s,i)},Un=(t,r,e,n,o,i=1/0)=>{let s=gt(t,r,e,n,o);return I(s,i)},Pn=(t,r,e,n,o=1/0)=>{let i=Ct(t,r,e,n,o);return[-i[1],i[0]]},to=(t,r,e,n,o,i=1/0)=>{let s=Ft(t,r,e,n,o,i);return[-s[1],s[0]]},Zt=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],i=-2*t[0]+2*r[0],u=E([o,i,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],p=E([x,a,0],n),m=[];return B(u)&&m.push(u),B(p)&&m.push(p),m},kt=(t,r,e,n,o=1/0)=>{let i=-3*t[0]+9*r[0]-9*e[0]+3*n[0],s=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[i,s,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],M=6*t[1]-12*r[1]+6*e[1],p=-3*t[1]+3*r[1],m=[a,M,p,0],f=C(x,o).filter(l=>l>=0&&l<=1),R=C(m,o).filter(l=>l>=0&&l<=1);return[...f,...R].length===2?[...f,...R]:null},ro=(t,r,e,n=1/0)=>{let o=Zt(t,r,e),i=1/0,s=1/0,u=-1/0,x=-1/0;for(let a of o){let M=Gt(a,t,r,e),p=M[0],m=M[1];i=Math.min(i,p),u=Math.max(u,p),s=Math.min(s,m),x=Math.max(x,m)}return i=c(Math.min(i,t[0],e[0]),n),u=c(Math.max(u,t[0],e[0]),n),s=c(Math.min(s,t[1],e[1]),n),x=c(Math.max(x,t[1],e[1]),n),{x:i,y:s,w:Math.abs(u-i),h:Math.abs(x-s),x2:u,y2:x}},eo=(t,r,e,n,o=1/0)=>{let i=kt(t,r,e,n)||[],s=1/0,u=1/0,x=-1/0,a=-1/0;for(let M of i){let p=Qt(M,t,r,e,n),m=p[0],f=p[1];s=Math.min(s,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,f!=null?f:1/0),a=Math.max(a,f!=null?f:-1/0)}return s=c(Math.min(s,t[0],n[0]),o),x=c(Math.max(x,t[0],n[0]),o),u=c(Math.min(u,t[1],n[1]),o),a=c(Math.max(a,t[1],n[1]),o),{x:s,y:u,w:Math.abs(x-s),h:Math.abs(a-u),x2:x,y2:a}};var Wt=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),so=(t,r,e)=>{let n=L(t,r),o=z(n);return o=Q(o,0,Math.PI*2,0,Math.PI),Wt(r,o,e)},_t=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),uo=(t,r,e)=>{let n=L(t,r),o=z(n);return o=Q(o,0,Math.PI*2,0,Math.PI),_t(r,o,e[0],e[1])},xo=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},ao=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var Vo=()=>{let t=It();return Ut(t)},ho=()=>{let t=It();return Pt(t)},It=()=>{let t=h(1,360),r=h(0,100),e=h(0,100);return[t,r,e]},bo=t=>{let r=h(0,100),e=h(0,100);return[t,r,e]},yo=t=>{let r=h(1,360),e=h(0,100);return[r,t,e]},go=t=>{let r=h(1,360),e=h(0,100);return[r,e,t]},Io=()=>[0,0,h(0,100)],lo=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=h(t,r),u=h(e,n),x=h(o,i);return[s,u,x]},F=t=>(t*=60,t<0&&(t+=360),t*100/360),Jt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?F((r-e)/(o-n)):o===r?F(2+(e-t)/(o-n)):o===e?F(4+(t-r)/(o-n)):0),lt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Kt=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?lt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),vo=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=lt(e,n,o,i,s),x=Kt(e,n,o,i,s,u),a=Jt(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},Z=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),Ut=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let f=o*255;return[f,f,f]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,M=Z(i,s,u),p=Z(i,s,x),m=Z(i,s,a);return M*=255,p*=255,m*=255,M>255||p>255||m>255?[255,255,255]:M<0||p<0||m<0?[0,0,0]:[c(M,r),c(p,r),c(m,r)]},Pt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(p,m,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?p+(m-p)*6*f:f<.5?m:f<.6666666666666666?p+(m-p)*(.6666666666666666-f)*6:p),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},So=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=D(e,360)),[e,t[1],t[2]]},Ro=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=D(e,100)),[t[0],t[1],e]},wo=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var Ho=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),To=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var Eo=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);var No=(t,r)=>t.x<=r.x+r.w&&t.x+t.w>=r.x&&t.y<=r.y+r.h&&t.h+t.y>=r.y,qo=(t,r)=>{let e=Math.abs(t.cx-r.cx),n=Math.abs(t.cy-r.cy);return Math.sqrt(e*e+n*n)<=t.r+r.r},dt=t=>{let r=[];for(let e=0;e<t.length;e++){let n=D(e+1,t.length),o=[t[e],t[n]];r.push(o)}return r},Xo=(t,r)=>{let e=[];e.push(...dt(t)),e.push(...dt(r));for(let n of e){let o=tt(n[0],n[1]),i=vt(t,o),s=vt(r,o);if(!(i.max>=s.min&&s.max>=i.min))return!1}return!0},vt=(t,r)=>{let e=1/0,n=-1/0;for(let o of t){let i=K(o,r);e=Math.min(e,i),n=Math.max(n,i)}return{min:e,max:n}};var Oo=t=>{let r=t.duration!==void 0?t.duration:1/0,e,n,o,i,s=!1,u,x=()=>{e=void 0,o=void 0,i=void 0,s=!1,n!==void 0&&window.cancelAnimationFrame(n)},a=()=>{x(),R()},M=()=>{s=!1},p=()=>{s=!0},m=v=>{e===void 0&&(e=v),o=v-e,s&&i!==v&&typeof t.callback=="function"&&t.callback(W()),o<=r?(i=v,n=window.requestAnimationFrame(m)):x()},f=(v,zt)=>{a(),typeof t.resizeCallback=="function"&&t.resizeCallback(v,zt)},R=()=>{e=void 0,o=void 0,i=void 0,s=!0,t.restartOnResize&&window.ResizeObserver&&u===void 0?(u=new ResizeObserver(f),u.observe(document.body,{box:"border-box"})):n=window.requestAnimationFrame(m)},k=()=>o,l=()=>s,St=()=>e,Rt=()=>{if(!(r===1/0||o===void 0))return o*100/r},wt=()=>u,W=()=>({start:R,stop:x,pause:M,resume:p,restart:a,isAnimating:l,getElapsedTime:k,getStartTime:St,getPercent:Rt,getResizeObserver:wt});return W()};export{Oo as animate,qo as circleCollide,Wt as circleMovement,so as circleMovementAfterMouse,Q as convertRange,Xo as convexPolygonsCollide,cr as degreesToRadians,hn as doRangesOverlap,Hn as dxArcCos,Dn as dxArcCot,zn as dxArcSin,Tn as dxArcTan,Sn as dxCos,wn as dxCot,dn as dxPolynomial,vn as dxSin,Rn as dxTan,yt as dxV2CubicBezierCurve,ht as dxV2QuadraticBezierCurve,gt as dxV3CubicBezierCurve,bt as dxV3QuadraticBezierCurve,_t as ellipseMovement,uo as ellipseMovementAfterMouse,h as getRandom,fn as getRandomBoolean,Io as getRandomGrayscaleHSLColor,It as getRandomHSLColor,bo as getRandomHSLColorWithHue,go as getRandomHSLColorWithLightness,yo as getRandomHSLColorWithSaturation,lo as getRandomHSLColorWithinRanges,ho as getRandomHexColor,jt as getRandomInt,pn as getRandomItemFromArray,Vo as getRandomRGBColor,So as getShiftedHue,Ro as getShiftedLightness,wo as getShiftedSaturation,Eo as getSquareInCircleSide,z as getV2Angle,sr as getV2AngleBetween,ur as getV3AngleBetween,Ht as getVNAngleBetween,Ho as guid,Pt as hslToHex,Ut as hslToRgb,Fr as identity2,Zr as identity3,kr as identity4,Wr as identityN,B as isNumber,me as isSingularMatrix,E as linearEquation,$n as linearEquationSystem2,Nn as linearEquationSystem3,qn as linearEquationSystemN,ao as lissajousCurve,mt as m2Adjugate,Ur as m2AppendRow,it as m2DeepCopy,at as m2Determinant,Dt as m2DivideScalar,pt as m2Inverse,Lr as m2MulScalar,re as m2PrependRow,Ze as m2ReflectionOrigin,ke as m2ReflectionOriginH,Ke as m2ReflectionX,Ue as m2ReflectionXH,Pe as m2ReflectionY,tn as m2ReflectionYH,Je as m2ReflectionYmX,Yr as m2Reset,ve as m2RotateAroundPointH,Et as m2Rotation,At as m2RotationAroundPointH,Vt as m2RotationH,Xt as m2Scale,Ee as m2ScaleAtPointH,qt as m2ScaleAtPointHMatrix,Yt as m2ScaleH,Ne as m2ScaleX,qe as m2ScaleXH,Ce as m2ScaleY,Fe as m2ScaleYH,xn as m2ShearingX,un as m2ShearingY,Er as m2Sub,Dr as m2Sum,he as m2ToCSS,Ie as m2Translation,Y as m2TranslationH,qr as m2Transpose,be as m2hToCSS,ye as m2hToCSS3d,jr as m2x2,ae as m3Adjugate,Pr as m3AppendRow,ct as m3DeepCopy,xe as m3Determinant,Nr as m3DivideScalar,Mt as m3Inverse,$r as m3MulScalar,ee as m3PrependRow,We as m3ReflectionOrigin,_e as m3ReflectionOriginH,cn as m3ReflectionXY,sn as m3ReflectionXYH,nn as m3ReflectionXZ,on as m3ReflectionXZH,rn as m3ReflectionYZ,en as m3ReflectionYZH,Or as m3Reset,Lt as m3RotationX,we as m3RotationXH,$t as m3RotationY,He as m3RotationYH,Nt as m3RotationZ,De as m3RotationZH,Ot as m3Scale,Le as m3ScaleH,Xe as m3ScaleX,Ye as m3ScaleXH,Oe as m3ScaleY,je as m3ScaleYH,Ge as m3ScaleZ,Qe as m3ScaleZH,Ar as m3Sub,Br as m3Sum,le as m3Translation,de as m3TranslationH,Xr as m3Transpose,ge as m3hToCSS3d,Gr as m3x3,Qr as m4x4,ft as mAdjugate,_r as mAppendCol,Kr as mAppendRow,b as mDeepCopy,ie as mDelFirstColumn,oe as mDelFirstRow,st as mDelLastColumn,ne as mDelLastRow,X as mDeterminant,j as mDivideScalar,ue as mEqual,se as mGetColumn,ce as mGetFirstColumn,ut as mGetLastColumn,G as mInverse,xt as mMinor,T as mMul,nt as mMulScalar,V as mMulVector,Cr as mNxM,Jr as mPrependCol,te as mPrependRow,ot as mReset,et as mSub,rt as mSum,q as mTranspose,D as mod,To as newId,bn as polarToCartesian,ir as radiansToDegrees,No as rectCollide,vo as rgbToHsl,c as setDecimalPlaces,_ as setV2Angle,xo as sineWaveMovement,gn as stringToNumber,Sr as v2,eo as v2CubicBezierBBox,Qt as v2CubicBezierCurve,kt as v2CubicBezierCurveExtrema,to as v2CubicBezierCurveNormal,Ft as v2CubicBezierCurveTangent,Ir as v2Distance,hr as v2DivideScalar,K as v2DotProduct,zr as v2FromPolarCoords,tt as v2GetNormal,J as v2Length,Vr as v2MulScalar,H as v2Normalize,ro as v2QuadraticBezierBBox,Gt as v2QuadraticBezierCurve,Zt as v2QuadraticBezierCurveExtrema,Pn as v2QuadraticBezierCurveNormal,Ct as v2QuadraticBezierCurveTangent,Se as v2Rotate,Re as v2RotateH,Ae as v2Scale,Tt as v2SetLength,L as v2Sub,fr as v2Sum,Rr as v3,vr as v3CrossProduct,Jn as v3CubicBezierCurve,Un as v3CubicBezierCurveTangent,lr as v3Distance,br as v3DivideScalar,dr as v3DotProduct,yr as v3Length,O as v3MulScalar,I as v3Normalize,_n as v3QuadraticBezierCurve,Kn as v3QuadraticBezierCurveTangent,ze as v3RotateX,Te as v3RotateY,Be as v3RotateZ,$e as v3Scale,Mr as v3Sub,pr as v3Sum,wr as v4,gr as vDistance,N as vDivideScalar,d as vDotProduct,P as vEqual,S as vLength,$ as vMulScalar,U as vN,w as vNormalize,g as vSub,A as vSum};
//# sourceMappingURL=mz-math.esm.js.map
