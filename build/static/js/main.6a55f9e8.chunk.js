(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{119:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(30),s=n.n(c),i=n(124),o=n(8),l=n(68),u=n.n(l),d=n(43),j=(n(49),n(80),d.default.initializeApp({apiKey:"AIzaSyBgr9G-PNput-ub3WUqUFwj9ujDw42hPOk",authDomain:"connect-four-development.firebaseapp.com",databaseURL:"https://connect-four-development-default-rtdb.firebaseio.com",projectId:"connect-four-development",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBgr9G-PNput-ub3WUqUFwj9ujDw42hPOk",REACT_APP_FIREBASE_AUTH_DOMAIN:"connect-four-development.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://connect-four-development-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"connect-four-development",REACT_APP_FIREBASE_STOREAGE_BUCKET:"connect-four-development.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"790566826312",REACT_APP_FIREBASE_APP_ID:"1:790566826312:web:213915aaf3255f0eb1437d"}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:"790566826312",appId:"1:790566826312:web:213915aaf3255f0eb1437d"})),b=j.auth();"localhost"===window.location.hostname&&Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBgr9G-PNput-ub3WUqUFwj9ujDw42hPOk",REACT_APP_FIREBASE_AUTH_DOMAIN:"connect-four-development.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://connect-four-development-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"connect-four-development",REACT_APP_FIREBASE_STOREAGE_BUCKET:"connect-four-development.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"790566826312",REACT_APP_FIREBASE_APP_ID:"1:790566826312:web:213915aaf3255f0eb1437d"}).REACT_APP_TEST&&(j.database().useEmulator("localhost",9e3),j.auth().useEmulator("http://localhost:9099",{disableWarnings:!1}));var O=u.a.createClass(j.database()),f=n(2),p=r.a.createContext();function m(){return Object(a.useContext)(p)}function h(e){var t=e.children,n=Object(a.useState)(),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(!0),l=Object(o.a)(i,2),u=l[0],d=l[1];Object(a.useEffect)((function(){return b.onAuthStateChanged((function(e){s(e),d(!1)}))}),[]);var j={currentUser:c,login:function(e,t){return b.signInWithEmailAndPassword(e,t)},signup:function(e,t){return b.createUserWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},resetPassword:function(e){return b.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(f.jsx)(p.Provider,{value:j,children:!u&&t})}var x=n(12),v=n(10),g=n(24),w=n(73);function y(e){var t=e.component,n=Object(w.a)(e,["component"]),a=m().currentUser;return Object(f.jsx)(v.b,Object(g.a)(Object(g.a)({},n),{},{render:function(e){return a?Object(f.jsx)(t,Object(g.a)({},e)):Object(f.jsx)(v.a,{to:"/login"})}}))}var E=n(32),S=n(16),N=n.n(S),P=n(25),_=n(127),A=n(125),C=n(123);function R(e){var t=e.toggleGameModeCb,n=e.logout,r=e.updateProfile,c=e.userName,s=e.played,i=e.won,l=Object(v.g)(),u=Object(a.useState)(""),d=Object(o.a)(u,2),j=d[0],b=d[1];function O(){return(O=Object(P.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(""),e.prev=1,e.next=4,n();case 4:l.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),b("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_.a,{className:"box",children:Object(f.jsxs)(_.a.Body,{children:[Object(f.jsxs)("h2",{id:"userName",className:"text-center mb-4",children:["Hello, ",c,"!"]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("h4",{id:"played",className:"col-6 text-center",children:["\ud83c\udfae \u2716\ufe0f ",s]}),Object(f.jsxs)("h4",{id:"won",className:"col-6 text-center",children:["\ud83c\udfc6 \u2716\ufe0f ",i]})]}),j&&Object(f.jsx)(A.a,{variant:"danger",children:j}),Object(f.jsx)(C.a,{id:"single",onClick:function(){t("single")},className:"btn btn-warning w-100 mt-3",children:"Challenge Peanutbot"}),Object(f.jsx)(C.a,{id:"multi",onClick:function(){t("multi")},className:"btn btn-warning w-100 mt-3",children:"Play With A Friend"}),Object(f.jsx)(C.a,{id:"updateProfile",className:"btn btn-warning w-100 mt-3",onClick:r,children:"Update Profile"})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(C.a,{id:"logoutBtn",variant:"link",className:"text-decoration-none",onClick:function(){return O.apply(this,arguments)},children:"Log Out"})})]})}function I(e){var t=e.value,n=e.colIdx,a=e.handleMove;return Object(f.jsx)("div",{className:"square bg-primary",onClick:function(){return a(n)},children:Object(f.jsx)("div",{id:0===n?"testCol0":2===n?"testCol2":"","data-testid":"square",className:"circle ".concat(t?"p"+t:"")})})}var T=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7,n=[],a=0;a<e;)n.push(Array(t).fill(0)),a++;return n},B=T();var F=function(e){for(var t=e[0].length,n=e.length-1,a=[],r=0;r<t;)a.push(n),r++;return a}(T());function k(e,t,n){for(var a=e[t][n],r=t-1,c=t+1,s=n-1,i=n+1,o=1,l=1,u=1,d=1,j=!0,b=!0,O=!0,f=!0,p=!0,m=!0,h=!0,x=!0;j||b||O||f||p||m||h||x;){var v,g,w,y,E,S;if([o,l,u,d].some((function(e){return e>=4})))return a;if(j)(null===(v=e[r])||void 0===v?void 0:v[n])===a?o++:j=!1;if(b)(null===(g=e[c])||void 0===g?void 0:g[n])===a?o++:b=!1;if(O&&(e[t][s]===a?l++:O=!1),f&&(e[t][i]===a?l++:f=!1),p)(null===(w=e[r])||void 0===w?void 0:w[s])===a?u++:p=!1;if(m)(null===(y=e[c])||void 0===y?void 0:y[i])===a?u++:m=!1;if(h)(null===(E=e[r])||void 0===E?void 0:E[i])===a?d++:h=!1;if(x)(null===(S=e[c])||void 0===S?void 0:S[s])===a?d++:x=!1;r--,c++,s--,i++}return[o,l,u,d].some((function(e){return e>=4}))?a:0!==t||e[0].includes(0)?void 0:"Draw"}function U(e,t,n,a,r,c,s){var i=k(n,e,t);switch(i){case 1:return[c,10];case 2:return[c,-10];case"Draw":return[c,0];case void 0:if(0===c)return[c,0];r[t]=0===e?9:e-1;break;default:console.log("uncaught result",i)}if(s){for(var l=[],u=1/0,d=-1/0,j=0;j<a;j++)if(9!==r[j]){var b=r[j];n[b][j]=1;var O=U(b,j,n,a,r,c-1,!1);r[j]=b,n[b][j]=0;var f=Object(o.a)(O,2),p=f[0],m=f[1];(m>d||m===d&&p>u&&m>=0||m===d&&p<u&&m<0)&&(u=p,d=m,l=O)}return l}for(var h=[],x=1/0,v=1/0,g=0;g<a;g++)if(9!==r[g]){var w=r[g];n[w][g]=2;var y=U(w,g,n,a,r,c-1,!0);r[g]=w,n[w][g]=0;var E=Object(o.a)(y,2),S=E[0],N=E[1];(N<v||N===v&&S<x&&N>=0||N===v&&S>x&&N<0)&&(x=S,v=N,h=y)}return h}var D=n(72),G=n.n(D),L=r.a.createContext(),W=G.a.connect("/",{forceNew:!0}),M=(n(66),Object(a.forwardRef)((function(e,t){var n=e.game,r=e.handleResultCb,c=e.opponentName,s=e.thisPlayerNum,i=e.gameOver,l=Object(a.useState)(B),u=Object(o.a)(l,2),d=u[0],j=u[1],b=Object(a.useState)(F),O=Object(o.a)(b,2),p=O[0],m=O[1],h=Object(a.useState)("single"===n),x=Object(o.a)(h,2),v=x[0],g=x[1],w=Object(a.useMemo)((function(){return 1===s?"#f012be":"#2ecc40"}),[s]),y=Object(a.useMemo)((function(){return 1===s?"#2ecc40":"#f012be"}),[s]),E=Object(a.useContext)(L);Object(a.useImperativeHandle)(t,(function(){return{grid:d,resetGrid:S}}));var S=function(){j(B),m(F),"single"!==n||v||setTimeout((function(){N(B,F)}),100)},N=function(e,t){var n=e.map((function(e){return e.slice()})),a=t.slice(),c=function(e,t){for(var n,a=e[0].length,r=[],c=1/0,s=0;s<a;s++)if(9!==t[s]){var i=t[s];e[i][s]=2;var l=U(i,s,e,a,t,7,!0);t[s]=i,e[i][s]=0;var u=Object(o.a)(l,2),d=u[0],j=u[1];j<c||j===c&&d<n&&j>=0||j===c&&d>n&&j<0?(n=d,c=j,(r=[]).push([i,s])):j===c&&d===n&&r.push([i,s])}return r[Math.floor(Math.random()*r.length)]}(n,a),s=Object(o.a)(c,2),i=s[0],l=s[1];n[i][l]=2,j(n);var u=k(n,i,l);if(u)r(u);else{var d=0===i?9:i-1;a[l]=d,m(a),g(!0)}},P=function(e){if(!i&&v){if(9===p[e])return;var t,a=d.map((function(e){return e.slice()})),c=p[e];a[c][e]=s,j(a);var o=k(a,c,e);if(o)r(o,s);else{g(!1);var l=0===c?9:c-1;(t=p.slice())[e]=l,m(t),"single"===n&&setTimeout((function(){N(a,t)}),100)}"multi"===n&&E.emit("update-grid",{grid:a,rowChart:t,result:o})}};return E.on("go-first",(function(){g(!0),j(B),m(F)})),E.on("update-grid",(function(e){var t=e.grid,n=e.rowChart;e.result||g(!0),j(t),m(n)})),Object(a.useEffect)((function(){return"multi"===n&&E.emit("go-first"),function(){E.off("go-first")}}),[E,n]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{id:"boarder",children:Object(f.jsx)("div",{id:"grid",className:"grid",children:d.map((function(e,t){return Object(f.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(f.jsx)(I,{value:e,colIdx:t,handleMove:P},t)}))},t)}))})}),Object(f.jsxs)("h4",{"data-testid":"turn",className:"text-center mt-4",style:{color:v?w:y},children:[!c&&"Waiting for a player to join...",i?"":v?"Your turn":"Waiting for ".concat(c,"...")]})]})})));function q(e){var t=e.userName,n=e.game,r=e.incrementData,c=e.toggleGameModeCb,s=Object(a.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(a.useState)(""),j=Object(o.a)(d,2),b=j[0],O=j[1],p=Object(a.useState)(1),m=Object(o.a)(p,2),h=m[0],x=m[1],v=Object(a.useState)(0),g=Object(o.a)(v,2),w=g[0],y=g[1],E=Object(a.useState)(0),S=Object(o.a)(E,2),N=S[0],P=S[1],_=Object(a.useState)(!0),A=Object(o.a)(_,2),R=A[0],I=A[1],T=Object(a.useState)(""),F=Object(o.a)(T,2),k=F[0],U=F[1],D=Object(a.useState)(""),G=Object(o.a)(D,2),W=G[0],q=G[1],K=Object(a.useState)(!0),H=Object(o.a)(K,2),J=H[0],V=H[1],Y=Object(a.useState)(1),z=Object(o.a)(Y,2),Q=z[0],X=z[1],Z=Object(a.useState)(""),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useMemo)((function(){return 1===Q?b:l}),[l,b,Q]),ae=Object(a.useContext)(L),re=Object(a.useRef)(),ce=Object(a.useCallback)((function(e,t){e===Q?(U("\ud83e\udd42 YOU WIN! \ud83c\udf89"),r("won")):U("Draw"===e?e+"! \ud83e\udd1d":"\ud83d\ude31 YOU LOST! \ud83d\udca9"),t===Q&&ae.emit("handle-result",{result:e,lastPlayer:t}),t!==Q&&"single"!==n||q("Click Replay \u2b07\ufe0f"),"multi"===n&&t!==Q&&(q("Waiting for ".concat(ee," to restart the game...")),V(!0)),e===Q?r("played","won"):r("played"),1===e&&y((function(e){return e+1})),2===e&&P((function(e){return e+1})),I(!0)}),[ae,n,r,ee,Q]),se=Object(a.useCallback)((function(e){var t=JSON.stringify(re.current.grid)===JSON.stringify(B);R||t||e!==Q||r("played"),"multi"===n&&e===Q&&ae.emit("handle-replay",{playerNum:e}),re.current.resetGrid(),I(!1),x((function(e){return e+1})),U(""),q(""),V(!1)}),[ae,r,Q,n,R]);return ae.on("player-has-joined",(function(e){var t=e.player1,n=e.player2;t&&u(t),n&&O(n),t&&n&&(console.log({player1:t}),console.log({player2:n}),y(0),P(0),q(""),x(1),I(!1),V(!1))})),ae.on("player-disconnected",(function(e){var t=e.playerName;1===e.playerNum?u(""):O(""),q("".concat(t," left\ud83d\udca8")),U(""),I(!0),V(!0)})),Object(a.useEffect)((function(){if("single"===n&&(I(!1),V(!1),u(t),O("Peanutbot")),"multi"===n)return ae.emit("player-connecting",{userName:t},(function(){})),ae.on("full-server",(function(){c(""),alert("Sorry, server is full.")})),ae.on("player-1-connected",(function(){te(t)})),ae.on("player-2-connected",(function(){X(2),te(t)})),function(){ae.off("full-server"),ae.off("player-1-connected"),ae.off("player-2-connected")}}),[ae,n,t,c]),Object(a.useEffect)((function(){return"multi"===n&&(ae.on("handle-result",(function(e){var t=e.result,n=e.lastPlayer;ce(t,n)})),ae.on("handle-replay",(function(e){se(e)}))),function(){ae.off("handle-result"),ae.off("handle-replay")}}),[ae,n,ce,se]),Object(f.jsxs)("div",{className:"box",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)("h6",{"data-testid":"round",className:"text-primary",children:["Round: ",h]}),Object(f.jsxs)("h4",{children:[Object(f.jsx)("span",{"data-testid":"score1",style:{color:"#f012be"},children:w}),Object(f.jsx)("span",{className:"text-primary",children:" vs "}),Object(f.jsx)("span",{"data-testid":"score2",className:"text-success",children:N})]})]}),Object(f.jsxs)("div",{className:"col align-self-end",children:[Object(f.jsxs)("h6",{"data-testid":"p1Name",className:"player row justify-content-end",children:[l||"Waiting...",Object(f.jsx)("div",{style:{background:"#f012be"},className:"indicator rounded ml-2"})]}),Object(f.jsxs)("h6",{"data-testid":"p2Name",className:"player row justify-content-end",children:[b||"Waiting...",Object(f.jsx)("div",{className:"bg-success indicator rounded ml-2"})]})]})]}),Object(f.jsx)(M,{ref:re,game:n,handleResultCb:ce,opponentName:ne,thisPlayerNum:Q,gameOver:R}),Object(f.jsx)("h4",{"data-testid":"resultMsg",className:"text-center text-warning mt-4",children:k}),Object(f.jsx)("h5",{"data-testid":"info",className:"text-center text-warning mt-4",children:W}),Object(f.jsx)(C.a,{disabled:J,id:"replay","data-testid":"replay",className:"btn-warning w-100 mt-4",onClick:function(){return se(Q)},children:"Replay"}),Object(f.jsx)(C.a,{id:"quitBtn","data-testid":"quit",className:"btn btn-warning w-100 mt-3 ",onClick:function(){var e=JSON.stringify(re.current.grid)===JSON.stringify(B);W||e||r("played"),ae.emit("player-disconnected",{playerNum:Q}),c("")},children:"Quit"})]})}function K(){var e,t=Object(v.g)(),n=Object(v.h)(),r=m(),c=r.currentUser,s=r.logout,i=Object(a.useState)({}),l=Object(o.a)(i,2),u=l[0],d=l[1],j=Object(a.useState)(),b=Object(o.a)(j,2),p=b[0],h=b[1],x=Object(a.useState)(c.uid),w=Object(o.a)(x,1)[0],y=Object(a.useState)((null===(e=n.state)||void 0===e?void 0:e.userName)||c.displayName),S=Object(o.a)(y,1)[0];Object(a.useEffect)((function(){var e=O.syncState(w,{context:{setState:function(e){return d(e.data)}},state:"data",defaultValue:{played:0,won:0},then:function(){return console.log("data synced")},onFailure:function(){return console.log("access denied")}});return function(){O.removeBinding(e)}}),[w]);var N=Object(a.useCallback)((function(e){h(e)}),[]);return Object(f.jsx)(f.Fragment,{children:p?Object(f.jsx)(L.Provider,{value:W,children:Object(f.jsx)(q,{userName:S,game:p,incrementData:function(e,t){var n=Object(g.a)(Object(g.a)({},u),{},Object(E.a)({},e,u[e]+1));t&&(n=Object(g.a)(Object(g.a)({},n),{},Object(E.a)({},t,u[t]+1))),O.post(w,{data:n,then:function(e){e&&console.log(e)}})},toggleGameModeCb:N})}):Object(f.jsx)(R,{toggleGameModeCb:N,logout:s,updateProfile:function(){t.push("/update-profile")},userName:S,played:u.played,won:u.won})})}var H=n(126);function J(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),c=m(),s=c.currentUser,i=c.updatePassword,l=c.updateEmail,u=Object(a.useState)(""),d=Object(o.a)(u,2),j=d[0],b=d[1],O=Object(a.useState)(!1),p=Object(o.a)(O,2),h=p[0],g=p[1],w=Object(v.g)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_.a,{children:Object(f.jsxs)(_.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),j&&Object(f.jsx)(A.a,{variant:"danger",children:j}),Object(f.jsxs)(H.a,{onSubmit:function(a){if(a.preventDefault(),n.current.value!==r.current.value)return b("Passwords do not match");var c=[];g(!0),b(""),e.current.value!==s.displayName&&c.push(s.updateProfile({displayName:e.current.value})),t.current.value!==s.email&&c.push(l(t.current.value)),n.current.value&&c.push(i(n.current.value)),Promise.all(c).then((function(){w.push("/")})).catch((function(){b("Failed to update account"),g(!1)}))},children:[Object(f.jsxs)(H.a.Group,{id:"username",children:[Object(f.jsx)(H.a.Label,{children:"Username"}),Object(f.jsx)(H.a.Control,{id:"usernameInput",type:"text",ref:e,required:!0,defaultValue:s.displayName})]}),Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{type:"email",ref:t,required:!0,defaultValue:s.email})]}),Object(f.jsxs)(H.a.Group,{id:"password",children:[Object(f.jsx)(H.a.Label,{children:"Password"}),Object(f.jsx)(H.a.Control,{type:"password",ref:n,placeholder:"Leave blank to keep the same"})]}),Object(f.jsxs)(H.a.Group,{id:"password-confirm",children:[Object(f.jsx)(H.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(H.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),Object(f.jsx)(C.a,{id:"updateBtn",disabled:h,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(x.b,{id:"cancelLink",to:"/",children:"Cancel"})})]})}function V(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),c=m().signup,s=Object(a.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(a.useState)(!1),j=Object(o.a)(d,2),b=j[0],O=j[1],p=Object(v.g)();function h(){return(h=Object(P.a)(N.a.mark((function a(s){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),n.current.value===r.current.value){a.next=3;break}return a.abrupt("return",u("Passwords do not match"));case 3:return a.prev=3,u(""),O(!0),a.next=8,c(t.current.value,n.current.value).then((function(t){t.user.updateProfile({displayName:e.current.value})}));case 8:p.push("/",{userName:e.current.value}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(3),u("Failed to create an account"),O(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_.a,{children:Object(f.jsxs)(_.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),l&&Object(f.jsx)(A.a,{variant:"danger",children:l}),Object(f.jsxs)(H.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(f.jsxs)(H.a.Group,{id:"username",children:[Object(f.jsx)(H.a.Label,{children:"Username"}),Object(f.jsx)(H.a.Control,{id:"nameInput",type:"text",ref:e,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{id:"emailInput",type:"email",ref:t,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"password",children:[Object(f.jsx)(H.a.Label,{children:"Password"}),Object(f.jsx)(H.a.Control,{id:"passwordInput",type:"password",placeholder:"Minimum 6 characters",ref:n,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"password-confirm",children:[Object(f.jsx)(H.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(H.a.Control,{id:"confirmPasswordInput",type:"password",ref:r,required:!0})]}),Object(f.jsx)(C.a,{id:"signupBtn",disabled:b,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account?"," ",Object(f.jsx)(x.b,{className:"text-decoration-none",to:"/login",children:"Log In"})]})]})}function Y(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=m().login,r=Object(a.useState)(""),c=Object(o.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),d=u[0],j=u[1],b=Object(v.g)();function O(){return(O=Object(P.a)(N.a.mark((function a(r){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,i(""),j(!0),a.next=6,n(e.current.value,t.current.value);case 6:b.push("/"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),j(!1),i("Failed to log in");case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{"data-testid":"title",className:"title text-center text-primary",children:"Connect Four"}),Object(f.jsx)(_.a,{className:"box",children:Object(f.jsxs)(_.a.Body,{children:[s&&Object(f.jsx)(A.a,{id:"error",variant:"danger",children:s}),Object(f.jsxs)(H.a,{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{id:"emailInput",type:"email",ref:e,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"password",children:[Object(f.jsx)(H.a.Label,{children:"Password"}),Object(f.jsx)(H.a.Control,{id:"passwordInput",type:"password",ref:t,required:!0})]}),Object(f.jsx)(C.a,{id:"loginBtn",disabled:d,className:"btn-warning w-100",type:"submit",children:"Log In"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-3",children:Object(f.jsx)(x.b,{className:"text-decoration-none",to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(f.jsx)(x.b,{id:"signupLink",className:"text-decoration-none",to:"/signup",children:"Sign Up"})]})]})}function z(){var e=Object(a.useRef)(),t=m().resetPassword,n=Object(a.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),O=b[0],p=b[1];function h(){return(h=Object(P.a)(N.a.mark((function n(a){return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,d(""),s(""),p(!0),n.next=7,t(e.current.value);case 7:d("Check your inbox for further instructions"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),s("Failed to reset password");case 13:p(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_.a,{children:Object(f.jsxs)(_.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),c&&Object(f.jsx)(A.a,{variant:"danger",children:c}),u&&Object(f.jsx)(A.a,{variant:"success",children:u}),Object(f.jsxs)(H.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsx)(C.a,{disabled:O,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-3",children:Object(f.jsx)(x.b,{to:"/login",children:"Login"})})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(f.jsx)(x.b,{to:"/signup",children:"Sign Up"})]})]})}n(119);function Q(){return Object(f.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(f.jsx)("div",{className:"w-100",style:{maxWidth:"400px",minWidth:"400px"},children:Object(f.jsx)(x.a,{children:Object(f.jsx)(h,{children:Object(f.jsxs)(v.d,{children:[Object(f.jsx)(y,{exact:!0,path:"/",component:K}),Object(f.jsx)(y,{path:"/update-profile",component:J}),Object(f.jsx)(v.b,{path:"/signup",component:V}),Object(f.jsx)(v.b,{path:"/login",component:Y}),Object(f.jsx)(v.b,{path:"/forgot-password",component:z})]})})})})})}n(120);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root"))},66:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.6a55f9e8.chunk.js.map