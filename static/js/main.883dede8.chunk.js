(this["webpackJsonpjs-oauth"]=this["webpackJsonpjs-oauth"]||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0),a=n.n(o),c=n(17),l=n.n(c),s=(n(26),n(7)),r=n(9),d=n(13),u=n.n(d),h=n(18),j=a.a.createContext(null);j.Consumer;var p=function(e){var t=e.config,n=e.children,o=e.configureManager,c=e.location,l=void 0===c?window.location:c,d=e.autoSignIn,p=void 0!==d&&d,g=a.a.useState(!1),b=Object(r.a)(g,2),f=(b[0],b[1]),v=a.a.useState(null),w=Object(r.a)(v,2),x=w[0],O=w[1];return a.a.useEffect((function(){!function(e){var t=document.createElement("link");t.rel="stylesheet",t.href="https://accounts.townshiptale.com/includes/altastyle.css",document.head.appendChild(t);var n=document.createElement("script");n.setAttribute("src","https://accounts.townshiptale.com/includes/altaapi.js"),document.head.appendChild(n),n.onload=e}((function(){window.altaApi.init(t,(function(){o&&o(window.altaApi.oidc),window.altaApi.oidc.events.addUserLoaded((function(e){console.log("User loaded"),console.log(e),O(e)})),window.altaApi.oidc.events.addUserUnloaded((function(){console.log("User unloaded"),O(null)})),window.altaApi.checkSignInCallback(l),f(!0)}))}))}),[]),a.a.useEffect((function(){if(window.altaApi){if(window.altaApi.checkSignInCallback(l))return;(function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.altaApi.getUser();case 2:!(t=e.sent)||t.expired||x?t&&!t.expired||!p||(console.log("SIGNIN"),console.log(t),window.altaApi.signIn().then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))):O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),[l,!!window.altaApi]),Object(i.jsx)(j.Provider,{value:window.altaApi?Object(s.a)(Object(s.a)({},window.altaApi),{},{userData:x}):void 0,children:n})},g=function(){return a.a.useContext(j)};function b(e){var t,n,o=e.small,a=void 0!==o&&o,c=e.style,l=e.type,s=void 0===l?"auto":l,r=g(),d="auto"===s?!(null===r||void 0===r?void 0:r.userData):"login"===s,u=null===r||void 0===r||null===(t=r.userData)||void 0===t||null===(n=t.profile)||void 0===n?void 0:n.Username,h=d?"alta_loginWithAlta":"alta_loginWithAlta alta_loggedIn";return Object(i.jsx)("div",{className:h,style:c,children:Object(i.jsxs)("button",{onClick:function(){(null===r||void 0===r?void 0:r.oidc)?(d?r.signIn:r.signOut)().then(console.log).catch(console.error):console.error("Can't login until alta login library is loaded.")},children:[Object(i.jsx)("img",{alt:"icon1",src:"https://accounts.townshiptale.com/icon.svg"}),Object(i.jsx)("img",{alt:"icon2",src:"https://accounts.townshiptale.com/icon.svg"}),Object(i.jsx)("span",{className:"alta_noHover",children:d?a?"Login":"Login with Alta":u}),Object(i.jsx)("span",{className:"alta_hover",children:d?a?"Login":"Login with Alta":"Logout"})]})})}function f(){return Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",height:"60px",position:"absolute",top:"0",left:"0"},children:[Object(i.jsx)("h2",{style:{margin:"0",height:"50px",lineHeight:"50px",marginLeft:"20px",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"ATT Friend Manager"}),Object(i.jsx)(b,{style:{marginRight:"20px"}})]})}function v(e){var t=e.username,n=(e.id,e.created_at);return Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:t}),Object(i.jsx)("br",{}),Object(i.jsxs)("code",{children:["Friends since ",new Date(n).toDateString()]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),a(e),c(e)}))},x=n(19),O=n(2);l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{config:{endpoint:"local",client_id:"client_93258882-27bf-4dde-9efd-c7c8b7a14d78",scope:"openid friend.add friend.view",redirect_uri:"https://alta-vr.github.io/Demos-ATT-Friend-Manager/logged-in"},autoSignIn:!0,children:Object(i.jsx)(x.a,{children:Object(i.jsxs)(O.c,{children:[Object(i.jsx)(O.a,{path:"/logged-in",component:function(){return Object(i.jsx)("div",{children:"Logged In... You may close this window."})}}),Object(i.jsx)(O.a,{component:function(){var e,t=g(),n=a.a.useState(),c=Object(r.a)(n,2),l=c[0],d=c[1],u=a.a.useState(),h=Object(r.a)(u,2),j=(h[0],h[1]);return a.a.useEffect((function(){j(void 0),null===t||void 0===t||t.fetch("GET","friends").then(d).catch(j)}),[null===t||void 0===t||null===(e=t.userData)||void 0===e?void 0:e.profile.sub]),(null===t||void 0===t?void 0:t.userData)?Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{}),void 0===l?Object(i.jsx)("p",{children:"Loading..."}):0==(null===l||void 0===l?void 0:l.length)?"No friends":l.map((function(e,t){return Object(o.createElement)(v,Object(s.a)(Object(s.a)({},e),{},{key:t}))}))]}):Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{}),Object(i.jsx)("h4",{children:"Login to manage your friends"})]})}})]})})})}),document.getElementById("root")),w()}},[[33,1,2]]]);
//# sourceMappingURL=main.883dede8.chunk.js.map