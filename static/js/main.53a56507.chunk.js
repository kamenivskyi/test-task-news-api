(this["webpackJsonpnews-task"]=this["webpackJsonpnews-task"]||[]).push([[0],{38:function(e,t,a){e.exports=a(53)},46:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=a(5),o=a(9),i=a(13),u=a(31),m=a(32),p=a(17),d={GET_NEWS_LIST:"GET_NEWS_LIST",GET_NEWS_LIST_LOADING:"GET_NEWS_LIST_LOADING",GET_NEWS_LIST_ERROR:"GET_NEWS_LIST_ERROR"},E={news:[],error:!1,loading:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.GET_NEWS_LIST:return Object(p.a)({},e,{news:t.payload,loading:!1});case d.GET_NEWS_LIST_ERROR:return Object(p.a)({},e,{error:!0,loading:!1});case d.GET_NEWS_LIST_LOADING:return Object(p.a)({},e,{loading:!0});default:return e}},f={SET_AUTH_STATUS_TRUE:"SET_AUTH_STATUS_TRUE",SET_AUTH_STATUS_FALSE:"SET_AUTH_STATUS_FALSE"},b={isLoggedIn:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SET_AUTH_STATUS_TRUE:return Object(p.a)({},e,{isLoggedIn:!0});case f.SET_AUTH_STATUS_FALSE:return Object(p.a)({},e,{isLoggedIn:!1});default:return e}},v=Object(i.combineReducers)({newsData:g,authData:h}),T=[m.a],N=Object(i.createStore)(v,Object(u.composeWithDevTools)(i.applyMiddleware.apply(void 0,T))),S=function(){return{type:f.SET_AUTH_STATUS_TRUE}},_=function(){return{type:f.SET_AUTH_STATUS_FALSE}},w=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},y=(a(46),[{label:"Home",linkTo:"/",classes:"nav-item"},{label:"News",linkTo:"/news",classes:"nav-item"},{label:"Profile",linkTo:"/profile",classes:"nav-item profile-link"},{label:"Login",linkTo:"/login",classes:"nav-item"}]),k=function(){var e=Object(s.b)(),t=y.map((function(e){var t=e.label,a=e.linkTo,n=e.classes;return r.a.createElement("li",{className:n,key:t},r.a.createElement(o.c,{exact:!0,className:"nav-link",to:a},t))}));return r.a.createElement("header",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Logo"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav w-100"},t),r.a.createElement("a",{href:"/login",onClick:function(t){t.preventDefault(),e(_()),w("isAuthorized",!1)}},"Logout")))},O=a(1),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Home page"),r.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus officia provident sunt excepturi? Eius recusandae ipsa vero deserunt sint sed repellat quis voluptate, deleniti repellendus assumenda soluta illo nihil nam!"))},A=a(15),x=a.n(A),j=a(18),I=a(33),U=(new function e(){var t=this;Object(I.a)(this,e),this._apiKey="bfc2f3acc4214df2ba209a463899a605",this._apiBase="https://newsapi.org/v2",this.getResource=function(){var e=Object(j.a)(x.a.mark((function e(a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch the ".concat(a,", received: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getNews=Object(j.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/top-headlines?country=us&apiKey=".concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",a.articles);case 4:case"end":return e.stop()}}),e)})))}).getNews,R=function(){return function(){var e=Object(j.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(W()),e.next=4,U();case 4:a=e.sent,t({type:d.GET_NEWS_LIST,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:d.GET_NEWS_LIST_ERROR,payload:e.t0.response});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},W=function(){return{type:d.GET_NEWS_LIST_LOADING}},G=a(37),D=function(e){var t=e.children,a=Object(G.a)(e,["children"]);return r.a.createElement("a",Object.assign({},a,{target:"_blank",rel:"noopener noreferer"}),t)};D.defaultProps={content:"link"};var q=D,F=a(4),H=a.n(F),P=(H.a.shape({title:H.a.string,description:H.a.string,author:H.a.string,url:H.a.string,urlToImage:H.a.string,publishedAt:H.a.string,content:H.a.string}),a(49),function(e){var t=e.data,a=t.title,n=t.description,c=t.author,l=t.url,s=t.urlToImage,o=t.publishedAt,i=t.content;return t?r.a.createElement("div",{className:"collection-item col-sm-6 col-md-4 col-lg-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:s||"https://via.placeholder.com/150.jpg/",className:"collection-img card-img-top",alt:a||""}),r.a.createElement("div",{className:"card-body"},a&&r.a.createElement("h5",{className:"card-title"},a),n&&r.a.createElement("p",{className:"card-text"},n),i&&r.a.createElement("p",{className:"card-text"},i)),r.a.createElement("ul",{className:"list-group list-group-flush"},c&&r.a.createElement("li",{className:"list-group-item"},"Author: ",c),o&&r.a.createElement("li",{className:"list-group-item"},"Published at: ",o)),l&&r.a.createElement("div",{className:"card-body"},r.a.createElement(q,{href:l,className:"card-link"},"Link")))):null}),B=function(){return r.a.createElement("div",{className:"m-auto text-center py-3"},r.a.createElement("button",{className:"btn btn-dark",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Loading...")))},C=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-danger text-center"}," Oops, something went wrong!"))},z=function(){var e=Object(s.c)((function(e){var t=e.newsData;return{news:t.news,loading:t.loading,error:t.error}})),t=e.news,a=e.loading,c=e.error,l=Object(s.b)();Object(n.useEffect)((function(){l(R())}),[l,R]),console.log(t);var o=t.map((function(e){return r.a.createElement(P,{data:e,key:e.title})}));return c?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-center"},"News"),r.a.createElement("div",{className:"row"},a?r.a.createElement(B,null):r.a.createElement(r.a.Fragment,null,o,r.a.createElement("p",{className:"text-center col-12 my-3"},"NEWS API -",r.a.createElement(q,{href:"https://newsapi.org/"},"https://newsapi.org/")))))},J=function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"py-2"},"Not found 404"),r.a.createElement("img",{className:"text-center",src:"https://klondike-studio.ru/images/wiki/development/error-404-page.jpg",alt:""}),r.a.createElement(o.b,{to:"/",style:{display:"block",margin:"20px auto"}},r.a.createElement("button",{type:"button",className:"btn btn-dark"},"Back to home page")))},K=function(){return Object(s.c)((function(e){return e.authData})).isLoggedIn?r.a.createElement("article",{className:"text-center"},r.a.createElement("h2",null," Profile"),r.a.createElement("img",{src:"https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg",alt:"",style:{maxWidth:"100%"}}),r.a.createElement("p",{className:"py-2"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat doloremque alias nostrum officia et rem vel repellendus architecto voluptate beatae dolorem aliquid ea ducimus, ipsum dignissimos cumque fugiat labore nemo perspiciatis culpa. Aliquam eius quasi, provident vero officiis dolorem quia consequatur minima, temporibus laudantium accusantium in, corrupti culpa molestias.")):r.a.createElement(O.a,{to:"/login"})},V=a(36),M=function(e){var t=e.initialValues,a=e.checkData,n=Object(V.a)({initialValues:t,onSubmit:function(e){var t=e.name,n=e.password;a(t,n)}}),c=n.values,l=n.handleChange,s=n.handleSubmit;return r.a.createElement("form",{className:"login-form",onSubmit:s},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username",name:"name",autoFocus:!0,value:c.name,onChange:l,required:!0}),r.a.createElement("input",{type:"password",className:"form-control my-3",placeholder:"Password",name:"password",value:c.password,onChange:l,required:!0}),r.a.createElement("button",{className:"btn btn-lg btn-dark btn-block",type:"submit"},"Sign in"))},$=(a(50),function(){var e=Object(s.c)((function(e){return e.authData})).isLoggedIn,t=Object(s.b)();return e?r.a.createElement(O.a,{to:"/profile"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"login-title"},"Please sign in"),r.a.createElement(M,{initialValues:{name:"",password:""},checkData:function(e,a){"admin"===e&&"12345"===a?(w("isAuthorized",!0),t(S())):alert("The username or password you entered is incorrect")}}))}),Q=function(){return r.a.createElement(O.d,null,r.a.createElement(O.b,{exact:!0,path:"/",component:L}),r.a.createElement(O.b,{exact:!0,path:"/news",component:z}),r.a.createElement(O.b,{exact:!0,path:"/profile",component:K}),r.a.createElement(O.b,{exact:!0,path:"/login",component:$}),r.a.createElement(O.b,{component:J}))},X=function(e){return!!localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e))},Y=(a(51),function(){return function(){var e=Object(s.b)();Object(n.useEffect)((function(){!0===X("isAuthorized")&&e(S())}),[]),Object(n.useEffect)((function(){var t=function(){var t=X("isAuthorized");e(!0===t?S():_())};return window.addEventListener("storage",t),function(){window.removeEventListener("storage",t)}}),[e])}(),r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement("div",{className:"container py-3"},r.a.createElement(Q,null)))});a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(s.a,{store:N},r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.53a56507.chunk.js.map