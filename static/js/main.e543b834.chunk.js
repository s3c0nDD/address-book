(this["webpackJsonpaddress-book"]=this["webpackJsonpaddress-book"]||[]).push([[0],{117:function(e,t,n){e.exports=n(147)},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),l=n(21),i=n(45),s=n(201),u=n(200),m=n(198),E=n(199),d=n(103),p=n(185),O=n(97),f=n.n(O),b=n(70),h=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1];return{anchorEl:n,isOpen:Boolean(n),handleClose:function(){r(null)},handleOpen:function(e){r(e.currentTarget)}}},v=n(204),g=n(209),S=n(37),j=n(61),C=n(36),T=n(26),x={INITIALIZE_REQUEST:"".concat("APP","/INITIALIZE_REQUEST"),BOTTOM_REACHED:"".concat("APP","/BOTTOM_REACHED"),MODAL_OPENED:"".concat("APP","/MODAL_OPENED"),MODAL_CLOSED:"".concat("APP","/MODAL_CLOSED"),NATIONALITY_TOGGLE:"".concat("APP","/NATIONALITY_TOGGLE"),NATIONALITY_SET:"".concat("APP","/NATIONALITY_SET"),USERS_FETCHING_STARTED:"".concat("APP","/USERS_FETCHING_STARTED"),USERS_FETCHING_ERROR:"".concat("APP","/USERS_FETCHING_ERROR"),USERS_FETCHING_SUCCESS:"".concat("APP","/USERS_FETCHING_SUCCESS"),USERS_SHOW_MORE:"".concat("APP","/USERS_SHOW_MORE")},_=200,y=1e3,I={loading:!1,error:null,users:[],usersCache:[],modalUser:null,nationalities:{swiss:!0,spanish:!0,french:!0,british:!0}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case x.USERS_SHOW_MORE:return Object(T.a)({},e,{users:[].concat(Object(C.a)(e.users),Object(C.a)(e.usersCache.slice(0,_))),usersCache:Object(C.a)(e.usersCache.slice(_))});case x.USERS_FETCHING_STARTED:return Object(T.a)({},e,{loading:!0,error:I.error});case x.USERS_FETCHING_SUCCESS:return Object(T.a)({},e,{loading:!1,usersCache:a});case x.USERS_FETCHING_ERROR:return Object(T.a)({},e,{loading:!1,error:a});case x.MODAL_OPENED:return Object(T.a)({},e,{modalUser:a});case x.MODAL_CLOSED:return Object(T.a)({},e,{modalUser:null});case x.NATIONALITY_SET:return Object(T.a)({},e,{loading:I.loading,users:I.users,usersCache:I.usersCache,nationalities:Object(T.a)({},e.nationalities,Object(j.a)({},a,!e.nationalities[a]))});default:return e}},R=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.app.modalUser}));return{user:t,isOpen:Boolean(t),doOpenModal:Object(a.useCallback)((function(t){e(function(e){return{type:x.MODAL_OPENED,payload:e}}(t))}),[e]),doCloseModal:Object(a.useCallback)((function(){e({type:x.MODAL_CLOSED})}),[e])}},A=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.app.users})),n=Object(l.c)((function(e){return e.app.usersCache})),r=Object(l.c)((function(e){return e.app.loading})),o=Object(l.c)((function(e){return e.app.error})),c=(null===t||void 0===t?void 0:t.length)<y;return Object(a.useEffect)((function(){e({type:x.INITIALIZE_REQUEST})}),[e]),console.log("usersCache",null===n||void 0===n?void 0:n.length),console.log("users",null===t||void 0===t?void 0:t.length),{doRequestMore:function(){e({type:x.BOTTOM_REACHED})},error:o,hasMore:c,loading:r,users:t}},M=n(202),k=n(186),U=n(205),w=function(e){var t=e.open;return r.a.createElement(U.a,{open:t},r.a.createElement(M.a,{variant:"filled",severity:"error",action:r.a.createElement(k.a,{color:"inherit",variant:"outlined",size:"medium",onClick:function(){window.location.reload()}},"Reload app")},"Error occurred, please click button to reload app"))},L=function(e){var t=e.autoHideDuration,n=e.message,a=e.open;return r.a.createElement(U.a,{autoHideDuration:t,open:a},r.a.createElement(M.a,{variant:"filled",severity:"info"},n))},D=n(188),P=n(190),H=n(192),G=n(191),F=n(206),B=n(189),W=n(187),Y=n(67),z=n.n(Y),Q=n(94),Z=n.n(Q),q=n(66),J=n.n(q),X=n(93),K=n.n(X),V=n(92),$=n.n(V),ee=n(101),te=function(e){var t=e.text;return r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},t)},ne=function(e){var t=e.IconComponent,n=e.CustomContent,a=e.text,o=Object(ee.a)(e,["IconComponent","CustomContent","text"]);return r.a.createElement(W.a,Object.assign({container:!0},o),r.a.createElement(W.a,{item:!0,xs:2},t),r.a.createElement(W.a,{item:!0,xs:10},a?r.a.createElement(te,{text:a}):n))},ae=Object(D.a)((function(e){return{card:{borderRadius:0},media:{height:340},content:{margin:e.spacing(2)}}})),re=function(e){var t=e.user,n=e.onCloseModal,o=ae(),c=Object(a.useMemo)((function(){return Boolean(t)}),[t]),l=Object(a.useMemo)((function(){var e,n,a;return"".concat(null===t||void 0===t||null===(e=t.name)||void 0===e?void 0:e.title," ").concat(null===t||void 0===t||null===(n=t.name)||void 0===n?void 0:n.first," ").concat(null===t||void 0===t||null===(a=t.name)||void 0===a?void 0:a.last)}),[t]);return t?r.a.createElement(F.a,{fullWidth:!0,maxWidth:"xs",onClose:n,"aria-labelledby":"user-dialog-title",open:c},r.a.createElement(B.a,{id:"user-dialog-title"},"Details"),r.a.createElement(P.a,{className:o.card},r.a.createElement(G.a,{className:o.media,image:t.picture.large,title:"".concat(l," face photo")}),r.a.createElement(H.a,{className:o.content},r.a.createElement(d.a,{gutterBottom:!0,variant:"h4",component:"h2"},l),r.a.createElement(ne,{IconComponent:r.a.createElement(J.a,{color:"primary"}),text:t.login.username}),r.a.createElement(ne,{IconComponent:r.a.createElement(z.a,{color:"primary"}),text:t.email}),r.a.createElement(ne,{IconComponent:r.a.createElement($.a,{color:"primary"}),text:t.phone}),r.a.createElement(ne,{IconComponent:r.a.createElement(K.a,{color:"primary"}),text:t.cell}),r.a.createElement(ne,{alignItems:"center",IconComponent:r.a.createElement(Z.a,{color:"primary"}),CustomContent:r.a.createElement(W.a,{container:!0,direction:"column"},r.a.createElement(W.a,{item:!0,xs:!0},r.a.createElement(te,{text:"".concat(t.location.street.name," ").concat(t.location.street.number)})),r.a.createElement(W.a,{item:!0,xs:!0},r.a.createElement(te,{text:"".concat(t.location.postcode," ").concat(t.location.city," ")})),r.a.createElement(W.a,{item:!0,xs:!0},r.a.createElement(te,{text:"".concat(t.location.state," / ").concat(t.location.country)})))})))):null},oe=n(95),ce=n.n(oe),le=n(193),ie=Object(D.a)({root:{maxWidth:260},media:{height:120}}),se=Object(a.memo)((function(e){var t=e.user,n=e.onOpenModal,o=ie(),c=Object(a.useMemo)((function(){return"".concat(null===t||void 0===t?void 0:t.name.first," ").concat(null===t||void 0===t?void 0:t.name.last)}),[t]);return r.a.createElement(P.a,{className:o.root},r.a.createElement(le.a,{onClick:function(){n(t)}},r.a.createElement(G.a,{className:o.media,image:null===t||void 0===t?void 0:t.picture.large,title:"".concat(c," face photo")}),r.a.createElement(H.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},c),r.a.createElement(W.a,{container:!0,justify:"flex-start",alignItems:"stretch"},r.a.createElement(W.a,{item:!0,xs:2},r.a.createElement(J.a,{color:"primary"})),r.a.createElement(W.a,{item:!0,xs:10,zeroMinWidth:!0},r.a.createElement(d.a,{noWrap:!0,variant:"body2",color:"textSecondary",component:"p"},null===t||void 0===t?void 0:t.login.username))),r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0,xs:2},r.a.createElement(z.a,{color:"primary"})),r.a.createElement(W.a,{item:!0,xs:10,zeroMinWidth:!0},r.a.createElement(d.a,{noWrap:!0,variant:"body2",color:"textSecondary",component:"p"},null===t||void 0===t?void 0:t.email))))))}),(function(e,t){return e.user===t.user})),ue=Object(D.a)((function(e){return{root:{margin:e.spacing(4)},catalogEnd:{marginTop:e.spacing(4)}}})),me=Object(a.memo)((function(e){var t=e.users,n=e.onOpenModal,a=e.onLoadMore,o=e.hasMore,c=ue();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{className:c.root,loadMore:a,hasMore:o,threshold:400},r.a.createElement(W.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:4},null===t||void 0===t?void 0:t.map((function(e,t){return r.a.createElement(W.a,{item:!0,key:e.id.value,xs:6,sm:4,md:3,lg:2},t,r.a.createElement(se,{user:e,onOpenModal:n}))}))),!o&&r.a.createElement(W.a,{className:c.catalogEnd,container:!0,justify:"center",alignItems:"center",spacing:4},r.a.createElement(W.a,{item:!0},r.a.createElement(d.a,{variant:"h4",color:"textSecondary"},"End of users catalog")))))}),(function(e,t){return e.users===t.users})),Ee=function(){var e=R(),t=e.user,n=e.isOpen,a=e.doOpenModal,o=e.doCloseModal,c=A(),l=c.error,i=c.hasMore,s=c.loading,u=c.users,m=c.doRequestMore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{open:l}),r.a.createElement(L,{open:s,message:"Loading ... "}),r.a.createElement(re,{user:t,isOpen:n,onCloseModal:o}),r.a.createElement(me,{hasMore:i,users:u,onLoadMore:m,onOpenModal:a}))},de=function(){var e=Object(l.b)();return{nationalities:Object(l.c)((function(e){return e.app.nationalities})),doToggleNationality:function(t){return e({type:x.NATIONALITY_TOGGLE,payload:t})}}},pe=n(210),Oe=n(197),fe=n(195),be=n(196),he=n(194),ve=n(207),ge=function(e){var t=e.checked,n=e.handleChange,a=e.name,o=a.charAt(0).toUpperCase()+a.substring(1);return r.a.createElement(he.a,{control:r.a.createElement(ve.a,{checked:t,onChange:n,name:a}),label:o})},Se=function(e){var t=e.nationalities,n=e.onToggleNationality,o=function(e){n(e.target.name)},c=Object(a.useMemo)((function(){return{maxWidth:400}}),[]);return r.a.createElement(pe.a,{component:"fieldset"},r.a.createElement(fe.a,{component:"legend"},"Select nationalities"),r.a.createElement(be.a,null,Object.keys(t).map((function(e){return r.a.createElement(ge,{key:e,checked:t[e],handleChange:o,name:e})}))),r.a.createElement(Oe.a,{style:c},"Please choose at least 1 nationality. Remember that if you toggle any switch, all previously loaded data on main page will be removed."))},je=Object(D.a)({textWrapper:{marginBottom:50}}),Ce=function(){var e=je(),t=de(),n=t.nationalities,a=t.doToggleNationality;return r.a.createElement(W.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(W.a,{item:!0,className:e.textWrapper},r.a.createElement(d.a,{variant:"body1",color:"inherit"},"Settings page")),r.a.createElement(W.a,{item:!0},r.a.createElement(Se,{nationalities:n,onToggleNationality:a})))},Te=Object(D.a)({root:{height:200},text:{margin:"0 30px"}}),xe=function(){var e=Te();return r.a.createElement(W.a,{className:e.root,container:!0,justify:"center",alignItems:"center"},r.a.createElement(W.a,{item:!0},r.a.createElement(d.a,{className:e.text,variant:"h4",color:"textSecondary"},"404 Page Not Found :(")))},_e="/",ye="/settings",Ie=function(){return r.a.createElement(S.c,null,r.a.createElement(S.a,{path:_e,component:Ee,exact:!0}),r.a.createElement(S.a,{path:ye,component:Ce}),r.a.createElement(S.a,{component:xe}))},Ne=function(e){var t=e.anchorEl,n=e.handleClose,o=e.isOpen,c=Object(a.useMemo)((function(){return{vertical:"top",horizontal:"left"}}),[]);return r.a.createElement(v.a,{anchorEl:t,anchorOrigin:c,keepMounted:!0,transformOrigin:c,open:o,onClose:n},r.a.createElement(g.a,{onClick:n,component:i.b,to:_e},"Users Gallery"),r.a.createElement(g.a,{onClick:n,component:i.b,to:ye},"Settings"))},Re=function(){var e=h(),t=e.anchorEl,n=e.isOpen,a=e.handleClose,o=e.handleOpen;return r.a.createElement(m.a,{position:"fixed"},r.a.createElement(Ne,{anchorEl:t,handleClose:a,isOpen:n}),r.a.createElement(E.a,null,r.a.createElement(p.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:o},r.a.createElement(f.a,null)),r.a.createElement(d.a,{variant:"h6",color:"inherit"},"Address Book")))},Ae=n(28),Me=function(){return Object(Ae.c)({app:N})},ke=(n(98),n(100)),Ue=n(20),we=n.n(Ue),Le=n(12),De=n(99),Pe=n.n(De),He="https://randomuser.me/api/",Ge=["name","location","email","login","phone","cell","id","picture","nat"],Fe={british:"GB",french:"FR",spanish:"ES",swiss:"CH"},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.nationalities,n=void 0===t?[]:t,a=e.usersCount,r=void 0===a?1:a,o=e.takeKeys,c=void 0===o?Ge:o,l=n.map((function(e){var t=Fe[e];return!t&&console.warn("No API mapping for nationality:",e),t})),i=null===l||void 0===l?void 0:l.filter(Boolean).join(",");return Pe.a.get(He,{params:Object(T.a)({},c&&{inc:c.join(",")},{},r&&{results:r},{},i&&{nat:i})}).then((function(e){var t;return null===(t=e.data)||void 0===t?void 0:t.results})).catch((function(e){return Promise.reject(e)}))},We=we.a.mark(Xe),Ye=we.a.mark(Ke),ze=we.a.mark(Ve),Qe=we.a.mark($e),Ze=we.a.mark(et),qe=we.a.mark(tt),Je=we.a.mark(nt);function Xe(e){var t,n,a,r;return we.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.next=3,Object(Le.f)((function(e){return e.app.nationalities}));case 3:if(n=o.sent,a=!n[t],r=Object.values(n).filter(Boolean).length,!(a||r>1)){o.next=9;break}return o.next=9,Object(Le.d)({type:x.NATIONALITY_SET,payload:t});case 9:case"end":return o.stop()}}),We)}function Ke(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.h)(x.NATIONALITY_TOGGLE,Xe);case 2:case"end":return e.stop()}}),Ye)}function Ve(){var e,t,n;return we.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Le.d)({type:x.USERS_FETCHING_STARTED});case 2:return a.next=4,Object(Le.f)((function(e){return e.app.nationalities}));case 4:return e=a.sent,t=Object.keys(e).filter((function(t){return e[t]})),a.prev=6,a.next=9,Object(Le.b)(Be,{usersCount:_,nationalities:t});case 9:return n=a.sent,console.log("FETCHED USERS:",n),a.next=13,Object(Le.d)({type:x.USERS_FETCHING_SUCCESS,payload:n});case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(6),a.next=19,Object(Le.d)({type:x.USERS_FETCHING_ERROR,payload:a.t0});case 19:case"end":return a.stop()}}),ze,null,[[6,15]])}function $e(){var e,t,n,a;return we.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Le.f)((function(e){return e.app.users}));case 2:return e=r.sent,r.next=5,Object(Le.f)((function(e){return e.app.usersCache}));case 5:return t=r.sent,n=(null===e||void 0===e?void 0:e.length)+(null===t||void 0===t?void 0:t.length)<y,a=[Object(Le.d)({type:x.USERS_SHOW_MORE})].concat(Object(C.a)(n?[Object(Le.c)(Ve)]:[Object(Le.d)({type:x.USERS_FETCHING_SUCCESS,payload:[]})])),r.next=10,Object(Le.a)(a);case 10:case"end":return r.stop()}}),Qe)}function et(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Le.a)([Object(Le.g)(x.USERS_FETCHING_SUCCESS),Object(Le.g)(x.BOTTOM_REACHED)]);case 3:return e.next=5,Object(Le.c)($e);case 5:e.next=0;break;case 7:case"end":return e.stop()}}),Ze)}function tt(){var e,t,n,a,r;return we.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=3,Object(Le.e)([Object(Le.g)(x.INITIALIZE_REQUEST),Object(Le.g)(x.NATIONALITY_SET)]);case 3:if(e=o.sent,t=Object(b.a)(e,2),n=t[0],!t[1]){o.next=9;break}return o.abrupt("return");case 9:if(!n){o.next=19;break}return o.next=12,Object(Le.f)((function(e){return e.app.users}));case 12:return a=o.sent,o.next=15,Object(Le.f)((function(e){return e.app.usersCache}));case 15:if(r=o.sent,a.length||r.length){o.next=19;break}return o.next=19,Object(Le.c)(Ve);case 19:o.next=0;break;case 21:case"end":return o.stop()}}),qe)}function nt(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([tt(),et(),Ke()]);case 2:case"end":return e.stop()}}),Je)}var at=Object(ke.a)(),rt=function(){var e=[at];return{middlewares:e,startRootSaga:function(){at.run(nt)}}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.d,n=rt(),a=n.middlewares,r=n.startRootSaga,o=Object(Ae.e)(Me(),e,t(Ae.a.apply(void 0,Object(C.a)(a))));return r(),o}(),ct=function(){var e=Object(a.useMemo)((function(){return{marginTop:80}}),[]);return r.a.createElement(l.a,{store:ot},r.a.createElement(i.a,{basename:"/address-book"},r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(Re,null),r.a.createElement(s.a,{style:e},r.a.createElement(Ie,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(ct,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.e543b834.chunk.js.map