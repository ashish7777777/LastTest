(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{267:function(t,e,n){t.exports=n(294)},272:function(t,e,n){},278:function(t,e){},279:function(t,e){},287:function(t,e){},290:function(t,e){},291:function(t,e){},292:function(t,e,n){},294:function(t,e,n){"use strict";n.r(e);var r=n(63),i=n.n(r),a=n(225),o=n.n(a),s=(n(272),n(5)),c=n.n(s),h=n(13),l=(n(293),n(244)),g=n(245),u=n.n(g),d=(n(292),{thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]}),b={0:{color:"black",size:15},1:{color:"gold",size:6},2:{color:"green",size:10},3:{color:"gold",size:6},4:{color:"gold",size:6},5:{color:"purple",size:10},6:{color:"gold",size:6},7:{color:"gold",size:6},8:{color:"gold",size:6},9:{color:"blue",size:10},10:{color:"gold",size:6},11:{color:"gold",size:6},12:{color:"gold",size:6},13:{color:"red",size:10},14:{color:"black",size:6},15:{color:"gold",size:6},16:{color:"gold",size:6},17:{color:"orange",size:10},18:{color:"gold",size:6},19:{color:"gold",size:6},20:{color:"gold",size:6}},p=function(t,e,n,r,i,a,o,s,c,h,l){t.length>0&&t.forEach((function(t){for(var g=t.landmarks,u=0;u<Object.keys(d).length;u++)for(var p=Object.keys(d)[u],m=0;m<d[p].length-1;m++){var f=d[p][m],v=d[p][m+1];e.beginPath(),e.moveTo(g[f][0],g[f][1]),e.lineTo(g[v][0],g[v][1]),e.strokeStyle="plum",e.lineWidth=4}n.onclick=function(){s.setAttribute("src","https://ashish7777777.github.io/Ring/ring4.png"),c.setAttribute("src","https://ashish7777777.github.io/Ring/back_ring4.png")},r.onclick=function(){s.setAttribute("src","https://ashish7777777.github.io/Ring/ring1.png"),c.setAttribute("src","https://ashish7777777.github.io/Ring/back_ring1.png")},i.onclick=function(){s.setAttribute("src","https://ashish7777777.github.io/Ring/ring5.png"),c.setAttribute("src","https://ashish7777777.github.io/Ring/back_ring5.png")},a.onclick=function(){h.setAttribute("src","https://ashish7777777.github.io/bracelet/bracelet1.png"),l.setAttribute("src","https://ashish7777777.github.io/bracelet/back_bracelet1.png")},o.onclick=function(){h.setAttribute("src","https://ashish7777777.github.io/bracelet/bracelet3.png"),l.setAttribute("src","https://ashish7777777.github.io/bracelet/back_bracelet3.png")};var z=g[13][0],w=g[13][1],A=g[14][0],M=g[14][1],k=g[17][0],I=g[17][1],T=!0,x=Math.atan((M-w)/(A-z)),R=Math.atan((I-g[0][1])/(k-g[0][0])),y=Math.atan((g[9][1]-g[0][1])/(g[9][0]-g[0][0]));g[0][0]-k<0&&(R+=Math.PI),g[0][0]-g[9][0]<0&&(y+=Math.PI),T=!(R-y>0);var E=Math.sqrt(Math.pow(g[5][0]-g[13][0],2)+Math.pow(g[5][1]-g[13][1],2)),_=Math.sqrt(Math.pow(z-A,2)+Math.pow(w-M,2)),O=.12*E/120,P=Math.sqrt(Math.pow(z-g[0][0],2)+Math.pow(w-g[0][1],2)),C=P/450;x=A-z>0?-x:Math.PI+-x,e.save(),e.translate(g[14][0],g[14][1]),e.rotate(Math.PI/2-x),E>30&&(1==T?e.drawImage(s,-s.width*O/2,-s.height*O/2+.4*_,s.width*O,s.height*O):e.drawImage(c,-s.width*O/2,-s.height*O/2+.4*_,s.width*O,s.height*O)),e.restore();var H=g[0][0],N=g[0][1],B=(g[9][0],g[9][1],Math.atan((w-N)/(z-H)));Math.PI;B=z-H>0?-B:1*Math.PI-B,e.save(),e.translate(g[0][0],g[0][1]),e.rotate(Math.PI/2-B),1==T?(e.drawImage(l,-h.width*C/2,-h.height*C/2+.3*P,h.width*C,h.height*C),console.log("zzzzzzzzzzzzz")):e.drawImage(h,-h.width*C/2,-h.height*C/2+.3*P,h.width*C,h.height*C),e.restore();for(var L=1;L<g.length;L++){var j=g[L][0],U=g[L][1];e.beginPath(),e.arc(j,U,b[L].size,0,3*Math.PI),e.fillStyle=b[L].color}}))};var m=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),n=document.createElement("div");n.setAttribute("class","btn_group"),document.body.appendChild(n);var a=document.createElement("BUTTON");a.innerHTML="Ring1",a.setAttribute("id","ring_btn1"),a.setAttribute("class","btn"),n.appendChild(a);var o=document.createElement("BUTTON");o.innerHTML="Ring2",o.setAttribute("class","btn"),o.setAttribute("id","ring_btn2"),n.appendChild(o);var s=document.createElement("BUTTON");s.innerHTML="Ring3",s.setAttribute("id","ring_btn3"),s.setAttribute("class","btn"),n.appendChild(s);var g=document.createElement("BUTTON");g.innerHTML="bracelet1",g.setAttribute("id","brclet_btn1"),g.setAttribute("class","btn"),n.appendChild(g);var d=document.createElement("BUTTON");d.innerHTML="bracelet2",d.setAttribute("class","btn"),d.setAttribute("id","brclet_btn2"),n.appendChild(d),console.log(this);var b=new Image;b.setAttribute("src","https://ashish7777777.github.io/Ring/ring1.png");var m=new Image;m.setAttribute("src","https://ashish7777777.github.io/Ring/back_ring1.png");var f=new Image;f.setAttribute("src","https://ashish7777777.github.io/bracelet/bracelet3.png");var v=new Image;v.setAttribute("src","https://ashish7777777.github.io/bracelet/back_bracelet3.png");var z=function(){var t=Object(h.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a();case 2:e=t.sent,console.log("Handpose model loaded."),setInterval((function(){w(e)}),100);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var n=Object(h.a)(c.a.mark((function n(r){var i,h,l,u,z;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof t.current||null===t.current||4!==t.current.video.readyState){n.next=14;break}return i=t.current.video,h=t.current.video.videoWidth,l=t.current.video.videoHeight,t.current.video.width=h,t.current.video.height=l,e.current.width=h,e.current.height=l,n.next=10,r.estimateHands(i);case 10:u=n.sent,console.log(u),z=e.current.getContext("2d"),p(u,z,a,o,s,g,d,b,m,f,v);case 14:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return z(),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(u.a,{ref:t,style:{position:"fixed",marginLeft:"10px",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9}}),i.a.createElement("canvas",{className:"Canvas",ref:e,style:{position:"fixed",marginLeft:"10px",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[267,1,2]]]);
//# sourceMappingURL=main.b283153e.chunk.js.map