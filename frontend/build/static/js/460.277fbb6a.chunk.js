"use strict";(self.webpackChunklaghata_frontend=self.webpackChunklaghata_frontend||[]).push([[460],{5920:function(n,e,t){var r,i,a,s,o,c,d,p,l,u,x,h,f,g,v,m=t(168),Z=t(2982),b=t(4165),j=t(5861),w=t(885),k=t(2791),y=t(7691),P=t(3584),I=t(7692),C=t(6599),S=t(184),z=y.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]))),D=y.ZP.div(i||(i=(0,m.Z)(["\n  width: 290px;\n  height: 400px;\n  border: 1px solid #000;\n  background-color: #f5f5f3;\n  border-radius: 10px;\n  transition: all 0.5s ease;\n\n  border: 1px solid;\n  z-index: 99999;\n  position: relative;\n"]))),U=y.ZP.div(a||(a=(0,m.Z)(["\n  height: 340px;\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: white;\n    border-radius: 50px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #f5f0ed;\n    border-radius: 50px;\n    border-top-right-radius: 25px;\n    border-top-left-radius: 25px;\n  }\n"]))),O=y.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 9px 10px;\n"]))),M=y.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding-top: 13px;\n"]))),N=y.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),R=y.ZP.div(d||(d=(0,m.Z)(["\n  /* max-height: 345px; */\n"]))),_=y.ZP.div(p||(p=(0,m.Z)(["\n  background-color: #fff;\n  width: fit-content;\n  border-radius: 25px;\n  padding: 10px 12px;\n  font-size: 15px;\n  font-weight: 400;\n"]))),E=y.ZP.div(l||(l=(0,m.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 6px;\n  padding-top: 13px;\n"]))),T=y.ZP.div(u||(u=(0,m.Z)(["\n  background-color: #fff;\n  width: 80%;\n  border-radius: 25px;\n  padding: 10px 12px;\n  font-size: 15px;\n  font-weight: 400;\n"]))),A=y.ZP.img(x||(x=(0,m.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n"]))),F=y.ZP.textarea(h||(h=(0,m.Z)(["\n  position: absolute;\n  bottom: 7px;\n  left: 5px;\n  padding-left: 9px;\n  padding-top: 10px;\n  width: 85%;\n  height: 40px;\n  outline: none;\n  border-radius: 25px;\n  border: 1px solid #000;\n  background-color: transparent;\n"]))),J=y.ZP.button(f||(f=(0,m.Z)(["\n  position: absolute;\n  bottom: 7px;\n  right: 5px;\n  height: 40px;\n  width: 10%;\n  border-radius: 50%;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s ease;\n  border: 1px solid;\n\n  :hover {\n    border: none;\n    transform: scale(0.9);\n  }\n\n  .sendIcon {\n    font-size: 22px;\n    color: #242526;\n  }\n"]))),L=y.ZP.div(g||(g=(0,m.Z)(["\n  background: #000;\n  color: #f5f0ed;\n  padding: 7px 10px;\n  border-radius: 25px;\n  opacity: 0;\n  cursor: pointer;\n  transition: all 0.4s ease;\n  font-size: 15px;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),Q=y.ZP.button(v||(v=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n  height: 80px;\n  cursor: pointer;\n  transition: all 0.33s ease;\n\n  :hover {\n    .msg-display {\n      opacity: 1;\n    }\n  }\n\n  img {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n  }\n"])));e.Z=function(n){var e=n.picture,t=n.renterUsername,r=n.openChat,i=n.setOpenChat,a=n.currentUserName,s=n.currentUserPicture,o=n.currentUserId,c=n.renterId,d=(0,k.useState)(""),p=(0,w.Z)(d,2),l=p[0],u=p[1],x=(0,k.useContext)(C.p),h=x.currentChatMembers,f=x.setCurrentChatMembers,g=x.message,v=x.setMessage,m=x.chatConversation,y=x.setChatConversation,B=x.notification,H=x.setNotification,K=x.socket,V=(0,k.useRef)(),W=(0,k.useRef)(!1);(0,k.useEffect)((function(){if(!1===W.current){var n=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(){var e,t,r;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({senderId:o,receiverId:c,createAt:Date.now()})},n.prev=1,n.next=4,fetch("".concat("https://laghata-app.herokuapp.com","/api/conversation"),e);case 4:return t=n.sent,n.next=7,t.json();case 7:201===(r=n.sent).status&&f(r.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0.stack);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){W.current=!0}}}),[o,c]),(0,k.useEffect)((function(){try{var n=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(){var e,t,r;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://laghata-app.herokuapp.com","/api/conversation/").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:(t=n.sent).data.length>0&&(r=t.data.find((function(n){return n.members[0]===o&&n.members[1]===c||n.members[1]===o&&n.members[0]===c})),f(r));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e.stack)}}),[]),(0,k.useEffect)((function(){K&&(K.emit("welcome-message",{currentUserName:a,renterUsername:t}),K.emit("initialisation-add-user",o),K.on("welcome-response",(function(n){u(n)})))}),[K,a,o]),(0,k.useEffect)((function(){var n=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(){var e,t;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://laghata-app.herokuapp.com","/api/messages/").concat(null===h||void 0===h?void 0:h._id));case 3:return e=n.sent,n.next=6,e.json();case 6:(t=n.sent).data.length>0&&y(t.data),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.stack);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[h]),(0,k.useEffect)((function(){K&&K.on("getMessage",(function(n){var e,t;!0===(null===h||void 0===h||null===(e=h.members)||void 0===e?void 0:e.includes(n.senderId))&&!0===(null===h||void 0===h||null===(t=h.members)||void 0===t?void 0:t.includes(n.sendToId))?y([].concat((0,Z.Z)(m),[n])):r||B.includes(n)||H([].concat((0,Z.Z)(B),[n]))}))}),[K,m,B,r]);var Y=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(e){var t,r;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t={senderId:o,conversationId:null===h||void 0===h?void 0:h._id,receiverId:c,text:g,createAt:Date.now()},K.emit("sendMessage",t),v(""),n.prev=4,r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},n.next=8,fetch("".concat("https://laghata-app.herokuapp.com","/api/message"),r);case 8:n.sent.ok&&y([].concat((0,Z.Z)(m),[t])),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),console.log(n.t0.stack);case 15:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(e){return n.apply(this,arguments)}}(),$=(0,P.Z)((function(){i(!1)}));return(0,k.useEffect)((function(){var n;null===(n=V.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})}),[m]),(0,S.jsxs)(z,{ref:$,children:[r&&(0,S.jsxs)(D,{children:[(0,S.jsxs)(U,{children:[0===m.length&&(0,S.jsxs)(E,{children:[(0,S.jsx)(A,{src:e,alt:"userProfile"}),(0,S.jsx)(T,{children:l.text})]}),(0,S.jsx)(R,{children:m.map((function(n,t){return(0,S.jsx)(O,{ref:V,children:n.senderId!==o&&n.senderId===c?(0,S.jsxs)(M,{children:[(0,S.jsx)(_,{children:n.text},t),(0,S.jsx)(A,{src:e,alt:"RenterProfile"})]}):n.senderId===o&&n.receiverId===c&&(0,S.jsxs)(N,{children:[(0,S.jsx)(A,{src:s,alt:"userProfile"}),(0,S.jsx)(_,{children:n.text})]})},t)}))})]}),(0,S.jsxs)("form",{onSubmit:Y,children:[(0,S.jsx)(F,{value:g,placeholder:"Message",onChange:function(n){return v(n.target.value)},onKeyDown:function(n){return"Enter"===n.key?Y(n):null}}),(0,S.jsx)(J,{type:"submit",children:(0,S.jsx)(I.PRb,{className:"sendIcon"})})]})]}),(0,S.jsxs)(Q,{onClick:function(){i(!r)},children:[(0,S.jsxs)(L,{className:"msg-display",children:["Hey i'm ",t,"!"]}),(0,S.jsx)("img",{src:e,alt:"renter picture"})]})]})}},1730:function(n,e,t){t.r(e),t.d(e,{default:function(){return Gn}});var r,i,a,s,o,c,d,p,l,u,x,h,f,g,v,m,Z,b,j,w,k,y,P,I,C,S,z,D,U,O,M,N,R,_,E,T=t(168),A=t(4165),F=t(5861),J=t(885),L=t(2791),Q=t(6871),B=t(7691),H=t(5524),K=t.p+"static/media/beachsurf.fe4f5e79f208b1f2f3e7.jpg",V=t.p+"static/media/cyclists.36bf851c795eb82b3b05.jpg",W=t.p+"static/media/snow1.03cd97b5dbd12ec67b85.jpg",Y=t(783),$=t(3504),q=t(2982),G=t(7161),X=t(1951),nn=t(6100),en=t(3584),tn=(t(2978),t(666),t(4067)),rn=t(184),an=B.ZP.input(r||(r=(0,T.Z)(["\n  padding: 7px;\n  width: 90%;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid;\n  outline: none;\n  color: #242526;\n"]))),sn=B.ZP.div(i||(i=(0,T.Z)(["\n  .calender {\n    width: 90%;\n  }\n"]))),on=function(n){var e=n.reservations,t=(0,L.useContext)(tn.z),r=t.dateRange,i=t.setDateRange,a=(0,L.useState)(!1),s=(0,J.Z)(a,2),o=s[0],c=s[1],d=(0,en.Z)((function(){c(!1)})),p=e.map((function(n){var e=n.bookingDate[0].startDate.slice(0,10),t=n.bookingDate[0].endDate.slice(0,10),r=new Date(e),i=new Date(t);return(0,nn.p)(r,i)})).flat(1);return(0,rn.jsxs)("div",{children:[(0,rn.jsx)(an,{value:"".concat((0,X.default)(r[0].startDate,"MM/dd/yyyy")," to ").concat((0,X.default)(r[0].endDate,"MM/dd/yyyy")),readOnly:!0,onClick:function(){return c(!o)}}),(0,rn.jsx)(sn,{ref:d,children:o&&(0,rn.jsx)(G.C0,{onChange:function(n){return i([n.selection])},ranges:r,editableDateInputs:!0,moveRangeOnFirstSelection:!1,months:1,minDate:new Date,disabledDates:(0,q.Z)(p),direction:"horizontal",className:"calender"})})]})},cn=t(4448),dn=t(5920),pn=t(6355),ln=B.ZP.div(a||(a=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid #242526;\n  padding-top: 12px;\n  margin: 10px 0 25px 0;\n"]))),un=B.ZP.div(s||(s=(0,T.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 7px;\n  padding-bottom: 12px;\n"]))),xn=B.ZP.div(o||(o=(0,T.Z)(["\n  img {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n  }\n"]))),hn=B.ZP.div(c||(c=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),fn=B.ZP.div(d||(d=(0,T.Z)(["\n  display: flex;\n  gap: 2px;\n"]))),gn=B.ZP.div(p||(p=(0,T.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n\n  p {\n    font-size: 13px;\n  }\n"]))),vn=B.ZP.div(l||(l=(0,T.Z)([""]))),mn=function(n){var e=n.review,t=Array(Number(e.rating)).fill(0);return(0,rn.jsxs)(ln,{children:[(0,rn.jsxs)(un,{children:[(0,rn.jsx)(xn,{children:(0,rn.jsx)("img",{src:e.clientPicture,alt:"user Profile"})}),(0,rn.jsxs)(hn,{children:[(0,rn.jsxs)(gn,{children:[(0,rn.jsx)("h4",{children:e.clientUsername}),(0,rn.jsx)("p",{children:e.createdAt.slice(4,15)})]}),(0,rn.jsx)(fn,{children:t.map((function(n,e){return(0,rn.jsx)(pn.QJe,{},e)}))})]})]}),(0,rn.jsx)(vn,{children:(0,rn.jsx)("div",{children:e.review})})]})},Zn=t(4942),bn=t(1413),jn=t(4798),wn=t(4827),kn=B.ZP.form(u||(u=(0,T.Z)(["\n  margin: 20px 0;\n"]))),yn=B.ZP.textarea(x||(x=(0,T.Z)(["\n  margin: 15px 0;\n  min-width: 100%;\n  max-width: 100%;\n  border-radius: 5px;\n  outline: none;\n  height: 70px;\n  padding: 9px;\n  font-size: 16px;\n"]))),Pn=B.ZP.div(h||(h=(0,T.Z)(["\n  padding-left: 2px;\n  display: flex;\n  gap: 5px;\n"]))),In=B.ZP.button(f||(f=(0,T.Z)(["\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid;\n  border-radius: 5px;\n  transition: background 0.5s ease-in-out;\n\n  :hover {\n    background-color: #dadce1;\n  }\n"]))),Cn=function(n){var e=n.setReviews,t=n.currentUserId,r=n.listingId,i=n.reviews,a=(0,wn.a)(),s=(0,L.useState)(void 0),o=(0,J.Z)(s,2),c=o[0],d=o[1],p=(0,L.useState)({review:"",clientUsername:null===a||void 0===a?void 0:a.username,clientId:t,clientPicture:null===a||void 0===a?void 0:a.picture,listingId:r,rating:0,createdAt:new Date(Date.now()).toString()}),l=(0,J.Z)(p,2),u=l[0],x=l[1],h=(0,L.useState)(!1),f=(0,J.Z)(h,2),g=f[0],v=f[1],m=function(){var n=(0,F.Z)((0,A.Z)().mark((function n(t){var r;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault();try{v(!0),e([u].concat((0,q.Z)(i))),x((function(n){return(0,bn.Z)((0,bn.Z)({},n),{},{review:"",rating:0})})),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)},fetch("".concat("https://laghata-app.herokuapp.com","/api/add-review"),r).ok,v(!1)}catch(a){console.log(a.stack),v(!1)}case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,rn.jsxs)(kn,{onSubmit:m,children:[(0,rn.jsx)(Pn,{children:Array(5).fill(0).map((function(n,e){return(0,rn.jsx)(pn.QJe,{style:{cursor:"pointer"},color:(c||u.rating)>e?"#000":"grey",value:u.rating,name:"rating",onClick:function(n){return x((function(n){return(0,bn.Z)((0,bn.Z)({},n),{},{rating:e+1})}))},onMouseOver:function(){return d(e+1)},onMouseLeave:function(){return d(void 0)}},e)}))}),(0,rn.jsx)(yn,{value:u.review,name:"review",placeholder:"Write your review here!",onChange:function(n){return x((function(e){return(0,bn.Z)((0,bn.Z)({},e),{},(0,Zn.Z)({},n.target.name,n.target.value))}))}}),(0,rn.jsx)(In,{type:"submit",disabled:0===u.rating&&""===u.review.trim(),children:g?(0,rn.jsx)(jn.p2,{height:"30",width:"30",color:"#000",ariaLabel:"circles-loading",wrapperClass:"spinner",visible:!0}):"Send Review"})]})},Sn=function(n){var e=n.currentUserId,t=n.listingId,r=n.reviewsIds,i=(0,wn.a)(),a=(0,L.useState)([]),s=(0,J.Z)(a,2),o=s[0],c=s[1];return(0,L.useEffect)((function(){try{var n=function(){var n=(0,F.Z)((0,A.Z)().mark((function n(){var e,i;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r.length>0)){n.next=9;break}return n.next=3,fetch("".concat("https://laghata-app.herokuapp.com","/api/reviews/listing/").concat(t));case 3:if(!(e=n.sent).ok){n.next=9;break}return n.next=7,e.json();case 7:(i=n.sent).data.length>0&&c(i.data);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e.stack)}}),[t]),(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)("h2",{children:"Reviews"}),i&&(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)("h4",{children:"Your Review Is Important For Us"}),(0,rn.jsx)(Cn,{setReviews:c,reviews:o,currentUserId:e,listingId:t})]}),(0,rn.jsx)("div",{children:o&&o.map((function(n){return(0,rn.jsx)(mn,{review:n},n._id)}))})]})},zn=t(6599),Dn=B.ZP.div(g||(g=(0,T.Z)(["\n  min-height: 100vh;\n\n  position: relative;\n"]))),Un=B.ZP.div(v||(v=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]))),On=B.ZP.div(m||(m=(0,T.Z)(["\n  padding-bottom: 100px;\n"]))),Mn=B.ZP.div(Z||(Z=(0,T.Z)(["\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n"]))),Nn=B.ZP.div(b||(b=(0,T.Z)(["\n  display: flex;\n  max-width: 1300px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 700px) {\n    flex-direction: column-reverse;\n    gap: 20px;\n  }\n"]))),Rn=B.ZP.div(j||(j=(0,T.Z)(["\n  height: 160px;\n  position: relative;\n\n  h2 {\n    position: absolute;\n    top: 50px;\n    left: 20px;\n    font-size: 35px;\n    font-weight: 900;\n    text-transform: capitalize;\n    color: #242526;\n  }\n"]))),_n=B.ZP.img(w||(w=(0,T.Z)(["\n  height: 160px;\n  width: 100%;\n  object-fit: cover;\n  opacity: 0.7;\n"]))),En=B.ZP.div(k||(k=(0,T.Z)(["\n  margin-top: 30px;\n  width: 85%;\n  height: 450px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 700px) {\n    height: 250px;\n  }\n"]))),Tn=B.ZP.div(y||(y=(0,T.Z)(["\n  flex: 0.7;\n  width: 80%;\n  margin: 30px auto 0 auto;\n\n  @media screen and (max-width: 700px) {\n    margin: 30px auto 10px auto;\n  }\n"]))),An=B.ZP.div(P||(P=(0,T.Z)(["\n  flex: 0.3;\n  margin: 30px auto 0 auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n\n  @media screen and (max-width: 700px) {\n    width: 80%;\n  }\n"]))),Fn=B.ZP.div(I||(I=(0,T.Z)(["\n  margin: 30px auto;\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  span {\n    font-weight: 600;\n  }\n"]))),Jn=B.ZP.div(C||(C=(0,T.Z)(["\n  p {\n    white-space: wrap;\n    overflow: hidden;\n  }\n"]))),Ln=B.ZP.div(S||(S=(0,T.Z)([""]))),Qn=B.ZP.div(z||(z=(0,T.Z)([""]))),Bn=B.ZP.div(D||(D=(0,T.Z)(["\n  display: flex;\n  gap: 7px;\n\n  p {\n    font-size: 35px;\n    font-weight: 500;\n    color: #242526;\n  }\n\n  span {\n    padding-top: 3px;\n  }\n"]))),Hn=B.ZP.div(U||(U=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  border-top: 1px solid;\n  width: 96%;\n  padding-top: 15px;\n  padding-left: 5px;\n\n  @media screen and (max-width: 700px) {\n    gap: 40px;\n  }\n"]))),Kn=B.ZP.img(O||(O=(0,T.Z)(["\n  width: 150px;\n  height: 150px;\n  border-radius: 10px;\n\n  @media screen and (max-width: 1000px) {\n    width: 130px;\n    height: 130px;\n  }\n"]))),Vn=B.ZP.div(M||(M=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n  gap: 25px;\n\n  .navlink {\n    text-decoration: none;\n  }\n"]))),Wn=B.ZP.div(N||(N=(0,T.Z)(["\n  font-size: 25px;\n  font-weight: 700;\n  color: #242526;\n  text-transform: capitalize;\n"]))),Yn=B.ZP.button(R||(R=(0,T.Z)(["\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid;\n  transition: background 0.5s ease-in-out;\n\n  :hover {\n    background-color: #dadce1;\n  }\n\n  @media screen and (max-width: 700px) {\n    padding: 10px 35px;\n  }\n"]))),$n=B.ZP.div(_||(_=(0,T.Z)([""]))),qn=B.ZP.button(E||(E=(0,T.Z)(["\n  width: 90%;\n  padding: 10px 20px;\n  font-size: 17px;\n  background: #000;\n  color: #f5f0ed;\n  border-radius: 5px;\n  transition: background 0.4s ease-in-out;\n  margin-top: 15px;\n  cursor: pointer;\n\n  :hover {\n    background: #f5f0ed;\n    color: #000;\n  }\n"]))),Gn=function(){var n=(0,L.useContext)(zn.p),e=n.openChat,t=n.setOpenChat,r=(0,wn.a)(),i=(0,L.useState)(!1),a=(0,J.Z)(i,2),s=a[0],o=a[1],c=(0,L.useState)(),d=(0,J.Z)(c,2),p=d[0],l=d[1],u=(0,L.useState)(),x=(0,J.Z)(u,2),h=x[0],f=x[1],g=(0,L.useState)(),v=(0,J.Z)(g,2),m=v[0],Z=v[1],b=(0,Q.UO)().id,j=(0,Q.s0)();return(0,L.useEffect)((function(){try{o(!0);var n=function(){var n=(0,F.Z)((0,A.Z)().mark((function n(){var e,t,r,i,a,s,c;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://laghata-app.herokuapp.com","/api/listings/listing/").concat(b));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.next=8,fetch("".concat("https://laghata-app.herokuapp.com","/api/user/").concat(null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.renterId));case 8:return i=n.sent,n.next=11,i.json();case 11:return a=n.sent,n.next=14,fetch("".concat("https://laghata-app.herokuapp.com","/api/reservations/listing/").concat(b));case 14:return s=n.sent,n.next=17,s.json();case 17:c=n.sent,r.data&&a.data?(l(r.data),f(a.data),Z(c.data),o(!1)):o(!1);case 19:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e.stack),o(!1)}}),[b]),(0,rn.jsx)(Dn,{children:(0,rn.jsx)(Un,{children:s?(0,rn.jsx)(cn.Z,{}):(0,rn.jsx)(rn.Fragment,{children:p&&h&&!s&&(0,rn.jsxs)(On,{children:[(0,rn.jsxs)(Rn,{children:[(0,rn.jsx)(_n,{src:"surf"===p.category?K:"bike"===p.category?V:"Snow"===p.category?W:Y,alt:"banner"}),(0,rn.jsx)("h2",{children:p.name})]}),(0,rn.jsxs)(Nn,{children:[(0,rn.jsxs)(Tn,{children:[(0,rn.jsx)(En,{children:(0,rn.jsx)(H.Z,{slides:p.imageSrc})}),(0,rn.jsxs)(Fn,{children:[(0,rn.jsxs)(Jn,{children:[(0,rn.jsx)("span",{children:"Description: "}),(0,rn.jsx)("p",{children:p.description})]}),(0,rn.jsxs)(Ln,{children:[(0,rn.jsx)("span",{children:"Model: "}),p.model]}),(0,rn.jsxs)(Qn,{children:[(0,rn.jsx)("span",{children:"Size: "}),p.size]}),(0,rn.jsx)(Sn,{currentUserId:null===r||void 0===r?void 0:r._id,listingId:b,reviewsIds:p.reviewsIds})]})]}),(0,rn.jsxs)(An,{children:[(0,rn.jsxs)(Bn,{children:[(0,rn.jsxs)("p",{children:["$",p.price]}),(0,rn.jsx)("span",{children:"/Day"})]}),(0,rn.jsxs)($n,{children:[(0,rn.jsx)(on,{reservations:m}),(0,rn.jsx)($.OL,{to:"/listing/".concat(p._id,"/booking"),onClick:nn.k,children:(0,rn.jsx)(qn,{children:"Book"})})]}),(0,rn.jsxs)(Hn,{children:[(0,rn.jsx)($.OL,{to:"/renter/".concat(h._id),className:"navlink",children:(0,rn.jsx)(Kn,{src:h.picture,alt:"renter picture"})}),(0,rn.jsxs)(Vn,{children:[(0,rn.jsx)($.OL,{to:"/renter/".concat(h._id),className:"navlink",children:(0,rn.jsx)(Wn,{children:h.username})}),(0,rn.jsx)(Yn,{onClick:function(){r?t(!0):j("/login")},children:"Contact"})]})]})]})]}),r&&(0,rn.jsx)(Mn,{children:(0,rn.jsx)(dn.Z,{picture:h.picture,renterUsername:h.username,renterId:h._id,openChat:e,setOpenChat:t,currentUserName:null===r||void 0===r?void 0:r.username,currentUserPicture:null===r||void 0===r?void 0:r.picture,currentUserId:null===r||void 0===r?void 0:r._id})})]})})})})}},5524:function(n,e,t){var r,i,a,s,o,c,d=t(168),p=t(885),l=t(2791),u=t(7691),x=t(4373),h=t(184),f=u.ZP.div(r||(r=(0,d.Z)(["\n  height: 100%;\n  position: relative;\n"]))),g=u.ZP.div(i||(i=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  background-position: center;\n  background-size: cover;\n"]))),v=u.ZP.div(a||(a=(0,d.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  left: 17px;\n  font-size: 45px;\n  color: #fff;\n  cursor: pointer;\n"]))),m=u.ZP.div(s||(s=(0,d.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  right: 17px;\n  font-size: 45px;\n  color: #fff;\n  cursor: pointer;\n"]))),Z=u.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 99%;\n  left: 50%;\n  transform: translate(-50%, -99%);\n"]))),b=u.ZP.div(c||(c=(0,d.Z)(["\n  margin: 0 7px;\n  cursor: pointer;\n  font-size: 50px;\n  color: #f5f0ed;\n"])));e.Z=function(n){var e=n.slides,t=(0,l.useState)(0),r=(0,p.Z)(t,2),i=r[0],a=r[1];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(f,{children:[(0,h.jsx)(v,{onClick:function(){a(0===i?e.length-1:i-1)},children:(0,h.jsx)(x.u1R,{})}),(0,h.jsx)(m,{onClick:function(){i===e.length-1?a(0):a(i+1)},children:(0,h.jsx)(x.hjJ,{})}),(0,h.jsx)(g,{style:{backgroundImage:"url(".concat(e[i],")")}}),(0,h.jsx)(Z,{children:e.map((function(n,e){return(0,h.jsx)(b,{onClick:function(){return function(n){a(n)}(e)},children:"\u25e6"},e)}))})]})})}},783:function(n,e,t){n.exports=t.p+"static/media/surf1.215ec9f8f7f5fc0e5e6f.jpg"}}]);
//# sourceMappingURL=460.277fbb6a.chunk.js.map