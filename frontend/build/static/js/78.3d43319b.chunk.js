"use strict";(self.webpackChunklaghata_frontend=self.webpackChunklaghata_frontend||[]).push([[78],{5078:function(n,e,t){t.r(e);var a,i,r,s,c,o,d,p,l,x=t(168),h=t(4165),u=t(5861),f=t(885),g=t(2791),m=t(6871),j=t(783),y=t(7691),Z=t(4448),k=t(4067),v=t(1951),b=t(4798),D=t(9040),w=t(184),P=y.ZP.div(a||(a=(0,x.Z)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 220px;\n"]))),C=y.ZP.div(i||(i=(0,x.Z)([""]))),S=y.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  max-width: 600px;\n  margin: 20px auto;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 20px;\n\n  @media screen and (max-width: 700px) {\n    flex-direction: column;\n    gap: 20px;\n  }\n"]))),I=y.ZP.div(s||(s=(0,x.Z)(["\n  height: 160px;\n  position: relative;\n\n  h2 {\n    position: absolute;\n    top: 50px;\n    left: 20px;\n    font-size: 35px;\n    font-weight: 900;\n    text-transform: capitalize;\n    color: #242526;\n  }\n"]))),B=y.ZP.img(c||(c=(0,x.Z)(["\n  height: 160px;\n  width: 100%;\n  object-fit: cover;\n  opacity: 0.7;\n"]))),z=y.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n"]))),M=y.ZP.div(d||(d=(0,x.Z)(["\n  border: 1px solid;\n\n  background-color: #f5f0ed;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n  gap: 20px;\n\n  span {\n    font-weight: 500;\n    padding-right: 5px;\n  }\n"]))),O=y.ZP.div(p||(p=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),L=y.ZP.button(l||(l=(0,x.Z)(["\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  width: 60%;\n\n  background: transparent;\n  border: 1px solid;\n  transition: background 0.5s ease-in-out;\n\n  :hover {\n    background-color: #dadce1;\n  }\n\n  @media screen and (max-width: 700px) {\n    padding: 10px 35px;\n  }\n\n  .spinner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"])));e.default=function(){var n=(0,g.useState)(!1),e=(0,f.Z)(n,2),t=e[0],a=e[1],i=(0,g.useState)(),r=(0,f.Z)(i,2),s=r[0],c=r[1],o=(0,g.useState)(),d=(0,f.Z)(o,2),p=d[0],l=d[1],x=(0,m.UO)().id,y=(0,g.useContext)(k.z),N=y.dateRange,T=y.setDateRange,_=y.bookingLoading,F=y.setBookingLoading,J=(0,m.s0)();(0,g.useEffect)((function(){try{a(!0);var n=function(){var n=(0,u.Z)((0,h.Z)().mark((function n(){var e,t,i,r;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://laghata-app.herokuapp.com","/api/listings/listing/").concat(x));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.next=8,fetch("".concat("https://laghata-app.herokuapp.com","/api/user/").concat(t.data.renterId));case 8:return i=n.sent,n.next=11,i.json();case 11:r=n.sent,t.data&&r.data?(c(t.data),l(r.data),a(!1)):a(!1);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e.stack),a(!1)}}),[x]);var R=(N[0].endDate-N[0].startDate)/864e5,$=function(){var n=(0,u.Z)((0,h.Z)().mark((function n(){var e,t;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return F(!0),n.prev=1,e={listingId:s._id,renterId:s.renterId,clientId:JSON.parse(localStorage.getItem("id")),bookingDate:[{startDate:N[0].startDate,endDate:N[0].endDate}],location:s.location},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},n.next=6,fetch("".concat("https://laghata-app.herokuapp.com","/api/listing/reservation"),t);case 6:n.sent.ok&&(F(!1),T([{startDate:new Date,endDate:(0,D.default)(new Date,1),key:"selection"}]),J("/listing/".concat(x))),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0.stack),F(!1);case 14:F(!1);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}();return(0,w.jsx)(P,{children:t?(0,w.jsx)(Z.Z,{}):(0,w.jsx)(w.Fragment,{children:s&&p&&!t&&(0,w.jsxs)(C,{children:[(0,w.jsxs)(I,{children:[(0,w.jsx)(B,{src:j,alt:"banner"}),(0,w.jsxs)("h2",{children:["Book ",s.name," From ",p.username]})]}),(0,w.jsx)(S,{children:(0,w.jsxs)(z,{children:[(0,w.jsx)("h3",{children:"Booking Details"}),(0,w.jsxs)(M,{children:[(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{children:"Price Per Day: "}),"$",s.price]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{children:"Booking Date: "}),"".concat((0,v.default)(N[0].startDate,"MM/dd/yyyy")," to ").concat((0,v.default)(N[0].endDate,"MM/dd/yyyy"))," ",1===R?(0,w.jsxs)("span",{children:["(",R,"/Day)"]}):(0,w.jsxs)("span",{children:["(",R,"/Days)"]})]}),(0,w.jsx)("p",{children:(0,w.jsxs)("span",{children:["Total Price: $",Number(s.price)*R]})}),(0,w.jsx)(O,{children:(0,w.jsx)(L,{onClick:$,children:_?(0,w.jsx)(b.p2,{height:"20",width:"20",color:"#54cbe3",ariaLabel:"circles-loading",wrapperClass:"spinner",visible:!0}):"Confirm Booking"})})]})]})})]})})})}},783:function(n,e,t){n.exports=t.p+"static/media/surf1.215ec9f8f7f5fc0e5e6f.jpg"}}]);
//# sourceMappingURL=78.3d43319b.chunk.js.map