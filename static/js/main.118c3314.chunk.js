(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{267:function(e,t,n){e.exports=n(294)},272:function(e,t,n){},278:function(e,t){},279:function(e,t){},287:function(e,t){},290:function(e,t){},291:function(e,t){},292:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var r=n(63),o=n.n(r),i=n(225),a=n.n(i),c=(n(272),n(5)),s=n.n(c),l=n(13),h=(n(293),n(244)),u=n(245),d=n.n(u),g=(n(292),{thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]}),p={0:{color:"black",size:15},1:{color:"gold",size:6},2:{color:"green",size:10},3:{color:"gold",size:6},4:{color:"gold",size:6},5:{color:"purple",size:10},6:{color:"gold",size:6},7:{color:"gold",size:6},8:{color:"gold",size:6},9:{color:"blue",size:10},10:{color:"gold",size:6},11:{color:"gold",size:6},12:{color:"gold",size:6},13:{color:"red",size:10},14:{color:"black",size:6},15:{color:"gold",size:6},16:{color:"gold",size:6},17:{color:"orange",size:10},18:{color:"gold",size:6},19:{color:"gold",size:6},20:{color:"gold",size:6}},b=function(e,t,n,r,o,i,a,c,s){e.length>0&&e.forEach((function(e){for(var l=e.landmarks,h=0;h<Object.keys(g).length;h++)for(var u=Object.keys(g)[h],d=0;d<g[u].length-1;d++){var b=g[u][d],f=g[u][d+1];t.beginPath(),t.moveTo(l[b][0],l[b][1]),t.lineTo(l[f][0],l[f][1]),t.strokeStyle="plum",t.lineWidth=4}n.onclick=function(){c.setAttribute("src","https://ashish7777777.github.io/Ring/ring4.png")},r.onclick=function(){c.setAttribute("src","https://ashish7777777.github.io/Ring/ring2.png")},o.onclick=function(){c.setAttribute("src","https://ashish7777777.github.io/Ring/ring3.png")},i.onclick=function(){s.setAttribute("src","https://ashish7777777.github.io/bracelet/bracelet1.png")},a.onclick=function(){s.setAttribute("src","https://ashish7777777.github.io/bracelet/bracelet3.png")};try{console.log(c.src)}catch(C){}var m=l[13][0],v=l[13][1],w=l[14][0],z=l[14][1],M=Math.atan((z-v)/(w-m)),k=Math.sqrt(Math.pow(l[5][0]-l[13][0],2)+Math.pow(l[5][1]-l[13][1],2)),y=Math.sqrt(Math.pow(m-w,2)+Math.pow(v-z,2)),T=.12*k/120,x=Math.sqrt(Math.pow(m-l[0][0],2)+Math.pow(v-l[0][1],2)),A=x/450;M=w-m>0?-M:Math.PI+-M,t.save(),t.translate(l[14][0],l[14][1]),t.rotate(Math.PI/2-M),k>30&&t.drawImage(c,-c.width*T/2,-c.height*T/2+.4*y,c.width*T,c.height*T),t.restore();var E=l[0][0],I=l[0][1],O=l[9][0],R=l[9][1],H=Math.atan((R-I)/(O-E));Math.PI;H=O-E>0?-H:1*Math.PI-H,t.save(),t.translate(l[0][0],l[0][1]),t.rotate(Math.PI/2-H),t.drawImage(s,-s.width*A/2,-s.height*A/2+.3*x,s.width*A,s.height*A),t.restore();for(var N=1;N<l.length;N++){var P=l[N][0],B=l[N][1];t.beginPath(),t.arc(P,B,p[N].size,0,3*Math.PI),t.fillStyle=p[N].color}}))};var f=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=document.createElement("BUTTON");n.innerHTML="Ring1",n.setAttribute("id","ring_btn1"),document.body.appendChild(n);var i=document.createElement("BUTTON");i.innerHTML="Ring2",i.setAttribute("id","ring_btn2"),document.body.appendChild(i);var a=document.createElement("BUTTON");a.innerHTML="Ring3",a.setAttribute("id","ring_btn3"),document.body.appendChild(a);var c=document.createElement("BUTTON");c.innerHTML="bracelet1",c.setAttribute("id","brclet_btn1"),document.body.appendChild(c);var u=document.createElement("BUTTON");u.innerHTML="bracelet2",u.setAttribute("id","brclet_btn2"),document.body.appendChild(u),console.log(this);var g=new Image;g.setAttribute("src","https://ashish7777777.github.io/Ring/ring1.png");var p=new Image;p.setAttribute("src","https://ashish7777777.github.io/bracelet/bracelet1.png");var f=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a();case 2:t=e.sent,console.log("Handpose model loaded."),setInterval((function(){m(t)}),100);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var r=Object(l.a)(s.a.mark((function r(o){var l,h,d,f,m;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){r.next=14;break}return l=e.current.video,h=e.current.video.videoWidth,d=e.current.video.videoHeight,e.current.video.width=h,e.current.video.height=d,t.current.width=h,t.current.height=d,r.next=10,o.estimateHands(l);case 10:f=r.sent,console.log(f),m=t.current.getContext("2d"),b(f,m,n,i,a,c,u,g,p);case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return f(),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(d.a,{ref:e,style:{position:"fixed",marginLeft:"10px",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9}}),o.a.createElement("canvas",{className:"Canvas",ref:t,style:{position:"fixed",marginLeft:"10px",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[267,1,2]]]);
//# sourceMappingURL=main.118c3314.chunk.js.map