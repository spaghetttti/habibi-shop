(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{90:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),l=a(50),i=a(13),o=a(4),c=a.n(o),s=a(42);function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],t=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done)&&(a.push(i.value),!n||a.length!==n);t=!0);}catch(c){r=!0,l=c}finally{try{t||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p,m,d,b,f,w,g,h,x,y,v=a(24),j=a(47),E=a(10),O=a(11),S=Object(O.b)(p||(p=Object(E.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),k=O.c.div(m||(m=Object(E.a)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),C=O.c.input(d||(d=Object(E.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"])),"grey","grey",S),I=O.c.label(b||(b=Object(E.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"])),"grey",S),N=function(e){var n=e.handleChange,a=e.label,t=Object(j.a)(e,["handleChange","label"]);return r.a.createElement(k,null,r.a.createElement(C,Object.assign({onChange:n},t)),a?r.a.createElement(I,{className:t.value.length?"shrink":""},a):null)},q=a(48),P=a(18),z=O.c.div(f||(f=Object(E.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 800px) {\n    width : 90%;\n  }\n\n"]))),D=O.c.h2(w||(w=Object(E.a)(["\n  margin: 10px 0;\n"]))),G=O.c.div(g||(g=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),U=Object(v.b)(null,function(e){return{googleSignInStart:function(){return e(Object(P.c)())},emailSignInStart:function(n,a){return e(Object(P.b)({email:n,password:a}))}}})(function(e){var n=e.emailSignInStart,a=e.googleSignInStart,o=u(Object(t.useState)({email:"",password:""}),2),p=o[0],m=o[1],d=p.email,b=p.password,f=function(){var e=Object(s.a)(c.a.mark(function e(a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n(d,b);case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),w=function(e){var n=e.target,a=n.value,t=n.name;m(Object(i.a)({},p,Object(l.a)({},t,a)))};return r.a.createElement(z,null,r.a.createElement(D,null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:f},r.a.createElement(N,{name:"email",type:"email",handleChange:w,value:d,label:"email",required:!0}),r.a.createElement(N,{name:"password",type:"password",value:b,handleChange:w,label:"password",required:!0}),r.a.createElement(G,null,r.a.createElement(q.a,{type:"submit"}," Sign in "),r.a.createElement(q.a,{type:"button",onClick:a,isGoogleSignIn:!0},"Sign in with Google"))))}),A=O.c.div(h||(h=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  @media screen and (max-width: 800px) {\n    width : 90%;\n  }\n"]))),J=O.c.h2(x||(x=Object(E.a)(["\n  margin: 10px 0;\n"]))),T=Object(v.b)(null,function(e){return{signUpStart:function(n){return e(Object(P.j)(n))}}})(function(e){var n=e.signUpStart,a=u(Object(t.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),o=a[0],p=a[1],m=o.displayName,d=o.email,b=o.password,f=o.confirmPassword,w=function(){var e=Object(s.a)(c.a.mark(function e(a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),b===f){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:n({displayName:m,email:d,password:b});case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),g=function(e){var n=e.target,a=n.name,t=n.value;p(Object(i.a)({},o,Object(l.a)({},a,t)))};return r.a.createElement(A,null,r.a.createElement(J,null,"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:w},r.a.createElement(N,{type:"text",name:"displayName",value:m,onChange:g,label:"Display Name",required:!0}),r.a.createElement(N,{type:"email",name:"email",value:d,onChange:g,label:"Email",required:!0}),r.a.createElement(N,{type:"password",name:"password",value:b,onChange:g,label:"Password",required:!0}),r.a.createElement(N,{type:"password",name:"confirmPassword",value:f,onChange:g,label:"Confirm Password",required:!0}),r.a.createElement(q.a,{type:"submit"},"SIGN UP")))}),B=O.c.div(y||(y=Object(E.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n    width: unset;\n    align-items: center;\n\n    > *:first-child {\n      margin-bottom: 50px;\n    }\n  }\n"])));n.default=function(){return r.a.createElement(B,null,r.a.createElement(U,null),r.a.createElement(T,null))}}}]);
//# sourceMappingURL=8.ea6326b2.chunk.js.map