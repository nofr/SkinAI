(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n(0),c=n.n(s),a=n(29),i=n.n(a),l=(n(52),n(11)),r=n(19),u=n(7),j=(n(53),n(54),n(89));var b=function(){return Object(o.jsxs)(j.a,{className:"About",children:[Object(o.jsx)("h1",{children:"About Us"}),Object(o.jsxs)("h2",{children:["The most common early sign of skin cancer is a change in the skin or a lesion such as a beauty spot, freckle or mole.",Object(o.jsx)("br",{})," Most skin cancers can be cured if caught early. Get to know the symptoms of skin cancer to look out for. Sign up to Skin AI and get with a certain accuracy a result before even going to the doctor !"]})]})},d=n(14),g=n(15),O=(n(33),n(16)),p=n.n(O),m=n(17),h=n(18),x=n(22),f=n.n(x),C=n(88),L=n(90),S=c.a.createContext(!1),k=function(e){var t=Object(s.useState)(null),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(null),r=Object(l.a)(i,2),u=r[0],j=r[1],b=Object(s.useContext)(S),O=(b.isLogged,b.setIsLogged),x=function(e){a(Object(h.a)(Object(h.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(p.a,{isOpen:e.isLoginOpen,onRequestClose:e.closeLogin,style:e.modalStyle,contentLabel:"Example Modal",closeLogin:e.closeLogin,children:[Object(o.jsx)("span",{onClick:function(){return e.setIsLoginOpen(!1)},className:"modal-close-btn",children:Object(o.jsx)(d.a,{icon:g.e})}),Object(o.jsx)("h2",{style:{textAlign:"center",color:"#434343"},children:"Login"}),Object(o.jsxs)(C.a,{className:"login-form",onSubmit:function(t){t.preventDefault(),f.a.post("".concat(N,"/login"),c).then((function(t){200===t.status&&(O(!0),localStorage.setItem("token",t.data.token),localStorage.setItem("sessionID",t.data.user._id)),e.setIsLoginOpen(!1)})).catch((function(e){409==e.response.status&&j(e.response.data.message)}))},children:[Object(o.jsx)(C.a.Control,{type:"email",name:"email",placeholder:"Email",onChange:function(e){return x(e)}}),Object(o.jsx)(C.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:function(e){return x(e)}}),Object(o.jsx)(L.a,{type:"submit",className:"login-btn",children:" Login "}),u&&Object(o.jsxs)("span",{style:{color:"#d10000",fontSize:"18px",margin:"10px",padding:"7px",borderRadius:"9px",backgroundColor:"whitesmoke"},children:[" ",u," "]})]}),Object(o.jsx)("div",{className:"go-to-signup",onClick:function(){e.setIsLoginOpen(!1),e.setIsSignupOpen(!0)},children:" New ? Sign Up ! "})]})},y=function(e){var t=Object(s.useState)(null),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(null),r=Object(l.a)(i,2),u=r[0],j=r[1],b=Object(s.useContext)(S),O=(b.isLogged,b.setIsLogged),x=function(e){a(Object(h.a)(Object(h.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(p.a,{isOpen:e.isSignupOpen,onRequestClose:e.closeSignup,style:e.modalStyle,contentLabel:"Example Modal",closeLogin:e.closeSignup,children:[Object(o.jsx)("span",{onClick:function(){e.setIsSignupOpen(!1),e.setIsLoginOpen(!0)},className:"modal-close-btn",children:Object(o.jsx)(d.a,{icon:g.a})}),Object(o.jsx)("h2",{style:{textAlign:"center",color:"#434343"},children:"Signup"}),Object(o.jsxs)(C.a,{className:"login-form",onSubmit:function(e){e.preventDefault(),f.a.post("".concat(N,"/signup"),c).then((function(e){200===e.status&&(O(!0),localStorage.setItem("token",e.data.token),localStorage.setItem("sessionID",e.data.user._id))})).catch((function(e){var t=e.response.data,n=t.message||t.firstName||t.lastName||t.phone;409==e.response.status&&j(n)}))},children:[Object(o.jsx)(C.a.Control,{type:"email",name:"email",placeholder:"Email",onChange:function(e){return x(e)}}),Object(o.jsx)(C.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:function(e){return x(e)}}),Object(o.jsx)(C.a.Control,{type:"password",name:"confirmPassword",placeholder:"Confirm password",onChange:function(e){return x(e)}}),Object(o.jsx)(C.a.Control,{name:"firstName",placeholder:"First name",onChange:function(e){return x(e)}}),Object(o.jsx)(C.a.Control,{name:"lastName",placeholder:"Last name",onChange:function(e){return x(e)}}),Object(o.jsx)(C.a.Control,{name:"phone",placeholder:"Phone number",onChange:function(e){return x(e)}}),Object(o.jsx)(L.a,{type:"submit",className:"login-btn",children:" Signup "}),u&&Object(o.jsxs)("span",{style:{color:"#d10000",fontSize:"18px",marginTop:"10px",padding:"7px",borderRadius:"9px",backgroundColor:"whitesmoke"},children:[" ",u," "]})]})]})},I=function(e){var t=Object(s.useContext)(S),n=(t.isLogged,t.setIsLogged);return Object(o.jsx)(p.a,{isOpen:e.isLogoutOpen,onRequestClose:function(){return e.setIsLogoutOpen(!1)},style:e.modalStyle,contentLabel:"Example Modal",closeLogin:function(){return e.setIsLogoutOpen(!1)},children:Object(o.jsxs)("div",{className:"logout-modal",children:[Object(o.jsx)("h2",{children:"Are you sure ?"}),Object(o.jsx)(L.a,{className:"login-btn",onClick:function(){n(!1),localStorage.clear(),e.setIsLogoutOpen(!1)},children:" Logout "}),Object(o.jsx)(L.a,{className:"login-btn",onClick:function(){return e.setIsLogoutOpen(!1)},children:" Close "})]})})},v=function(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),u=Object(l.a)(i,2),j=u[0],b=u[1],O=Object(s.useState)(!1),p=Object(l.a)(O,2),m=p[0],h=p[1],x=Object(s.useContext)(S),f=x.isLogged,C=(x.setIsLogged,{overlay:{backgroundColor:"#2b1d13a0"},content:{borderRadius:"13px",border:"1px solid black",backgroundColor:"whitesmoke",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",justifyContent:"center"}});return Object(o.jsxs)("div",{className:"nav-container",children:[Object(o.jsx)("div",{className:"logo",children:" SkinAI "}),Object(o.jsxs)("ul",{className:"nav-links-container",children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("li",{className:"nav-links",children:Object(o.jsx)(d.a,{color:"#36d68b",icon:g.b,size:"2x"})})}),!f&&Object(o.jsx)("li",{className:"nav-links",onClick:function(){a(!0)},children:Object(o.jsx)(d.a,{color:"#36d68b",icon:g.c,size:"2x"})}),f&&Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("li",{className:"nav-links",children:Object(o.jsx)(d.a,{color:"#36d68b",icon:g.f,size:"2x"})})}),f&&Object(o.jsx)("li",{className:"nav-links",children:Object(o.jsx)(d.a,{color:"#36d68b",onClick:function(){h(!0)},icon:g.d,size:"2x"})})]}),Object(o.jsx)(k,{setIsLoginOpen:a,setIsSignupOpen:b,isLoginOpen:c,closeLogin:function(){a(!1)},modalStyle:C}),Object(o.jsx)(y,{setIsLoginOpen:a,setIsSignupOpen:b,isSignupOpen:j,closeLogin:function(){b(!1)},modalStyle:C}),Object(o.jsx)(I,{setIsLogoutOpen:h,isLogoutOpen:m,modalStyle:C})]})},N="http://localhost:3001";var w=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return localStorage.getItem("token"),Object(s.useEffect)((function(){localStorage.getItem("token")?c(!0):c(!1)})),Object(o.jsx)(S.Provider,{value:{isLogged:n,setIsLogged:c},children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(v,{}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/prediction"}),Object(o.jsx)(u.a,{path:"/",children:Object(o.jsx)(b,{})})]})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),s(e),c(e),a(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),A()}},[[87,1,2]]]);
//# sourceMappingURL=main.03273b50.chunk.js.map