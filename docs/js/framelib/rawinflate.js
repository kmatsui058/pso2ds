(function(L){var p,f,H=null,O,I,D,A,v,F,l,C,w,M,s,E,J,N,W=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],P=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Q=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],R=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[16,17,18,0,8,7,9,6,10,
5,11,4,12,3,13,2,14,1,15],U=function(){this.list=this.next=null},V=function(){this.n=this.b=this.e=0;this.t=null},G=function(t,x,u,b,a,q){this.BMAX=16;this.N_MAX=288;this.status=0;this.root=null;this.m=0;var r=Array(this.BMAX+1),n,c,m,k,d,e,g,h=Array(this.BMAX+1),f,l,B,y=new V,s=Array(this.BMAX);k=Array(this.N_MAX);var z,p=Array(this.BMAX+1),v,w,A;A=this.root=null;for(d=0;d<r.length;d++)r[d]=0;for(d=0;d<h.length;d++)h[d]=0;for(d=0;d<s.length;d++)s[d]=null;for(d=0;d<k.length;d++)k[d]=0;for(d=0;d<p.length;d++)p[d]=
0;n=256<x?t[256]:this.BMAX;f=t;l=0;d=x;do r[f[l]]++,l++;while(0<--d);if(r[0]==x)this.root=null,this.status=this.m=0;else{for(e=1;e<=this.BMAX&&0==r[e];e++);g=e;q<e&&(q=e);for(d=this.BMAX;0!=d&&0==r[d];d--);m=d;q>d&&(q=d);for(v=1<<e;e<d;e++,v<<=1)if(0>(v-=r[e])){this.status=2;this.m=q;return}if(0>(v-=r[d]))this.status=2,this.m=q;else{r[d]+=v;p[1]=e=0;f=r;l=1;for(B=2;0<--d;)p[B++]=e+=f[l++];f=t;d=l=0;do 0!=(e=f[l++])&&(k[p[e]++]=d);while(++d<x);x=p[m];p[0]=d=0;f=k;l=0;k=-1;z=h[0]=0;B=null;for(w=0;g<=
m;g++)for(t=r[g];0<t--;){for(;g>z+h[1+k];){z+=h[1+k];k++;w=(w=m-z)>q?q:w;if((c=1<<(e=g-z))>t+1)for(c-=t+1,B=g;++e<w&&!((c<<=1)<=r[++B]);)c-=r[B];z+e>n&&z<n&&(e=n-z);w=1<<e;h[1+k]=e;B=Array(w);for(c=0;c<w;c++)B[c]=new V;A=null==A?this.root=new U:A.next=new U;A.next=null;A.list=B;s[k]=B;0<k&&(p[k]=d,y.b=h[k],y.e=16+e,y.t=B,e=(d&(1<<z)-1)>>z-h[k],s[k-1][e].e=y.e,s[k-1][e].b=y.b,s[k-1][e].n=y.n,s[k-1][e].t=y.t)}y.b=g-z;l>=x?y.e=99:f[l]<u?(y.e=256>f[l]?16:15,y.n=f[l++]):(y.e=a[f[l]-u],y.n=b[f[l++]-u]);
c=1<<g-z;for(e=d>>z;e<w;e+=c)B[e].e=y.e,B[e].b=y.b,B[e].n=y.n,B[e].t=y.t;for(e=1<<g-1;0!=(d&e);e>>=1)d^=e;for(d^=e;(d&(1<<z)-1)!=p[k];)z-=h[k],k--}this.m=h[1];this.status=0!=v&&1!=m?1:0}}},g=function(t){for(;A<t;){var g=D,f;f=J.length==N?-1:J.charCodeAt(N++)&255;D=g|f<<A;A+=8}},h=function(f){return D&W[f]},m=function(f){D>>=f;A-=f},K=function(t,x,u){var b,a,q;if(0==u)return 0;for(q=0;;){g(s);a=w.list[h(s)];for(b=a.e;16<b;){if(99==b)return-1;m(a.b);b-=16;g(b);a=a.t[h(b)];b=a.e}m(a.b);if(16==b)f&=32767,
t[x+q++]=p[f++]=a.n;else{if(15==b)break;g(b);l=a.n+h(b);m(b);g(E);a=M.list[h(E)];for(b=a.e;16<b;){if(99==b)return-1;m(a.b);b-=16;g(b);a=a.t[h(b)];b=a.e}m(a.b);g(b);C=f-a.n-h(b);for(m(b);0<l&&q<u;)l--,C&=32767,f&=32767,t[x+q++]=p[f++]=p[C++]}if(q==u)return u}v=-1;return q},X=function(f,l,u){var b,a,q,r,n,c,p,k=Array(316);for(b=0;b<k.length;b++)k[b]=0;g(5);c=257+h(5);m(5);g(5);p=1+h(5);m(5);g(4);b=4+h(4);m(4);if(286<c||30<p)return-1;for(a=0;a<b;a++)g(3),k[T[a]]=h(3),m(3);for(;19>a;a++)k[T[a]]=0;s=7;
a=new G(k,19,19,null,null,s);if(0!=a.status)return-1;w=a.root;s=a.m;r=c+p;for(b=q=0;b<r;)if(g(s),n=w.list[h(s)],a=n.b,m(a),a=n.n,16>a)k[b++]=q=a;else if(16==a){g(2);a=3+h(2);m(2);if(b+a>r)return-1;for(;0<a--;)k[b++]=q}else{17==a?(g(3),a=3+h(3),m(3)):(g(7),a=11+h(7),m(7));if(b+a>r)return-1;for(;0<a--;)k[b++]=0;q=0}s=9;a=new G(k,c,257,P,Q,s);0==s&&(a.status=1);if(0!=a.status)return-1;w=a.root;s=a.m;for(b=0;b<p;b++)k[b]=k[b+c];E=6;a=new G(k,p,0,R,S,E);M=a.root;E=a.m;return 0==E&&257<c||0!=a.status?-1:
K(f,l,u)},Y=function(t,x,u){var b,a;for(b=0;b<u&&(!F||-1!=v);){if(0<l){if(0!=v)for(;0<l&&b<u;)l--,C&=32767,f&=32767,t[x+b++]=p[f++]=p[C++];else{for(;0<l&&b<u;)l--,f&=32767,g(8),t[x+b++]=p[f++]=h(8),m(8);0==l&&(v=-1)}if(b==u)break}if(-1==v){if(F)break;g(1);0!=h(1)&&(F=!0);m(1);g(2);v=h(2);m(2);w=null;l=0}switch(v){case 0:a=t;var q=x+b,r=u-b,n=void 0,n=A&7;m(n);g(16);n=h(16);m(16);g(16);if(n!=(~D&65535))a=-1;else{m(16);l=n;for(n=0;0<l&&n<r;)l--,f&=32767,g(8),a[q+n++]=p[f++]=h(8),m(8);0==l&&(v=-1);a=
n}break;case 1:if(null!=w)a=K(t,x+b,u-b);else a:{a=t;q=x+b;r=u-b;if(null==H){for(var c=void 0,n=Array(288),c=0;144>c;c++)n[c]=8;for(;256>c;c++)n[c]=9;for(;280>c;c++)n[c]=7;for(;288>c;c++)n[c]=8;I=7;c=new G(n,288,257,P,Q,I);if(0!=c.status){alert("HufBuild error: "+c.status);a=-1;break a}H=c.root;I=c.m;for(c=0;30>c;c++)n[c]=5;zip_fixed_bd=5;c=new G(n,30,0,R,S,zip_fixed_bd);if(1<c.status){H=null;alert("HufBuild error: "+c.status);a=-1;break a}O=c.root;zip_fixed_bd=c.m}w=H;M=O;s=I;E=zip_fixed_bd;a=K(a,
q,r)}break;case 2:a=null!=w?K(t,x+b,u-b):X(t,x+b,u-b);break;default:a=-1}if(-1==a)return F?0:-1;b+=a}return b};L.RawDeflate||(L.RawDeflate={});L.RawDeflate.inflate=function(g){var h;null==p&&(p=Array(65536));A=D=f=0;v=-1;F=!1;l=C=0;w=null;J=g;N=0;for(var m=Array(1024),b=[];0<(g=Y(m,0,m.length));){var a=Array(g);for(h=0;h<g;h++)a[h]=String.fromCharCode(m[h]);b[b.length]=a.join("")}J=null;return b.join("")}})(this);