webpackJsonp([12],{"+BTi":function(t,e){},"+Rdb":function(t,e){},"+g8z":function(t,e){},"/I4U":function(t,e){},"/bpg":function(t,e){},"/i/W":function(t,e){},"2rGO":function(t,e){},Dte2:function(t,e){},Dzb6:function(t,e){},EvS7:function(t,e){},GXEp:function(t,e){},I4nB:function(t,e){},IcnI:function(t,e,n){"use strict";var r,a=n("/5sW"),u=n("NYxO"),o=n("Xxa5"),c=n.n(o),i=n("exGp"),s=n.n(i),f=n("bOdI"),d=n.n(f),l=n("P9l9"),p=n("TIfe"),m={state:{token:Object(p.b)(),name:"",avatar:"",roles:[]},mutations:(r={},d()(r,"SET_TOKEN",function(t,e){t.token=e}),d()(r,"SET_NAME",function(t,e){t.name=e}),d()(r,"SET_AVATAR",function(t,e){t.avatar=e}),d()(r,"SET_ROLES",function(t,e){t.roles=e}),r),actions:{Login:function(t,e){var n=this,r=t.commit;return s()(c.a.mark(function t(){var a,u,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.username.trim(),u=e.password,t.next=4,l.a.login(a,u);case 4:return 0===(o=t.sent).code&&(Object(p.d)(o.data.token),r("SET_TOKEN",o.data.token)),t.abrupt("return",o);case 7:case"end":return t.stop()}},t,n)}))()},LogOut:function(t){var e=this,n=t.commit;t.state;return s()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n("SET_TOKEN",""),Object(p.c)();case 2:case"end":return t.stop()}},t,e)}))()},GetInfo:function(t){var e=this,n=t.commit,r=t.state;return s()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getInfo(r.token);case 2:return 0===(a=t.sent).code&&(n("SET_NAME",a.data.name),n("SET_AVATAR",a.data.avatar),n("SET_ROLES",a.data.roles)),t.abrupt("return",a);case 5:case"end":return t.stop()}},t,e)}))()}}},h=n("YaEn");var v={state:{routers:h.b,addRouters:[]},mutations:d()({},"SET_ROUTES",function(t,e){t.addRouters=e,t.routers=h.b.concat(e)}),actions:{GenerateRoutes:function(t,e){var n;return(0,t.commit)("SET_ROUTES",n=function t(e,n){return e.filter(function(e){return!!function(t,e){return!t.meta||!t.meta.roles||e.some(function(e){return t.meta.roles.indexOf(e)>=0})}(e,n)&&(e.children&&e.children.length&&(e.children=t(e.children,n)),!0)})}(h.a,e)),n}}},b={token:function(t){return t.user.token},name:function(t){return t.user.name},avatar:function(t){return t.user.avatar},roles:function(t){return t.user.roles},addRoutes:function(t){return t.permission.addRouters},routers:function(t){return t.permission.routers}};n("sax8");a.default.use(u.a);var g=new u.a.Store({modules:{user:m,permission:v},getters:b,strict:!1,plugins:[]});e.a=g},LL4n:function(t,e){},M9yL:function(t,e){},Mf0D:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("oq7i"),n("+BTi");var r=n("+TD8"),a=n.n(r),u=(n("/I4U"),n("yg6k")),o=n.n(u),c=(n("cwe7"),n("2X9z")),i=n.n(c),s=(n("2rGO"),n("nu7/")),f=n.n(s),d=(n("d7TW"),n("ajQY")),l=n.n(d),p=(n("jZDA"),n("91Nw")),m=n.n(p),h=(n("bwiK"),n("SExR")),v=n.n(h),b=(n("Mf0D"),n("exT9")),g=n.n(b),w=(n("/bpg"),n("ACGT")),x=n.n(w),y=(n("/i/W"),n("V1RD")),E=n.n(y),T=(n("M9yL"),n("OSLW")),k=n.n(T),O=(n("Dzb6"),n("o6kb")),I=n.n(O),A=(n("U/ZW"),n("+nRk")),S=n.n(A),D=(n("LL4n"),n("BrEC")),R=n.n(D),j=(n("EvS7"),n("fEB+")),L=n.n(j),_=(n("qunJ"),n("vqwl")),G=n.n(_),q=(n("+Rdb"),n("Mezo")),N=n.n(q),W=(n("X+ky"),n("HJMx")),B=n.n(W),M=(n("cDSy"),n("e0Bm")),U=n.n(M),V=(n("I4nB"),n("STLj")),C=n.n(V),P=(n("GXEp"),n("mtrD")),X=n.n(P),z=(n("isE6"),n("LR6y")),Y=n.n(z),J=(n("Dte2"),n("q4le")),K=n.n(J),Z=(n("ylrw"),n("6oiW")),$=n.n(Z),H=(n("Yq4J"),n("qubY")),F=n.n(H),Q=n("/5sW"),tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},et=n("VU/8")({name:"App"},tt,!1,null,null,null).exports,nt=n("YaEn"),rt=n("IcnI"),at=n("Dd8w"),ut=n.n(at),ot=n("Y81h"),ct=n.n(ot),it=(n("UVIz"),n("TIfe")),st=["/login"];nt.c.beforeEach(function(t,e,n){ct.a.start(),Object(it.b)()?"/login"===t.path?(n({path:"/"}),ct.a.done()):0===rt.a.getters.roles.length?rt.a.dispatch("GetInfo").then(function(e){var r=e.data.roles;rt.a.dispatch("GenerateRoutes",r).then(function(e){nt.c.addRoutes(rt.a.getters.addRoutes),n(ut()({},t,{replace:!0})),ct.a.done()})}):n():-1!==st.indexOf(t.path)?(n(),ct.a.done()):(n("/login"),ct.a.done())}),nt.c.afterEach(function(){ct.a.done()});n("+g8z");var ft=n("V8mf"),dt=n.n(ft),lt=(n("TJvI"),{install:function(t){t.directive("highlight",{update:function(t){t.querySelectorAll("pre code").forEach(function(t){dt.a.highlightBlock(t)})}})}}),pt=lt;Q.default.use(l.a).use(m.a).use(v.a).use(g.a).use(x.a).use(E.a).use(k.a).use(I.a).use(S.a).use(R.a).use(L.a).use(G.a).use(N.a).use(B.a).use(U.a).use(C.a).use(X.a).use(Y.a).use(K.a).use($.a).use(F.a).use(f.a.directive),Q.default.use(pt),Q.default.prototype.$message=i.a,Q.default.prototype.$notify=o.a,Q.default.prototype.$MessageBox=a.a,Q.default.config.productionTip=!1,new Q.default({el:"#app",router:nt.c,store:rt.a,render:function(t){return t(et)}})},P9l9:function(t,e,n){"use strict";var r=n("Dd8w"),a=n.n(r),u=n("viA7"),o=n("s8Ph"),c=n("Xxa5"),i=n.n(c),s=n("exGp"),f=n.n(s),d=n("VxtT"),l={login:function(t,e){var n=this;return f()(i.a.mark(function r(){var a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.a)({url:"/user/login",method:"post",data:{username:t,password:e}});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}},r,n)}))()},getInfo:function(t){var e=this;return f()(i.a.mark(function n(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)({url:"/user/info",method:"get",params:{token:t}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},n,e)}))()}};e.a=a()({},l,u.a,o.a)},TIfe:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return c});var r=n("IcnI"),a=function(){return localStorage.getItem("token")},u=function(t){localStorage.setItem("token",t)},o=function(){localStorage.removeItem("token")},c=function(t){var e=r.a.getters&&r.a.getters.roles;if(t&&t instanceof Array&&t.length>0){var n=t;return!!e.some(function(t){return n.includes(t)})}throw new Error("need roles! Like v-permission=\"['admin','editor']\"")}},TJvI:function(t,e){},"U/ZW":function(t,e){},UVIz:function(t,e){},VxtT:function(t,e,n){"use strict";var r=n("Dd8w"),a=n.n(r),u=n("mtWM"),o=n.n(u),c=n("mw3O"),i=n.n(c),s=o.a.create({baseURL:"https://www.easy-mock.com/mock/5b0b96054f8e4212a4073ebf/admin",headers:{"Content-Type":"application/x-www-form-urlencoded"}});s.interceptors.request.use(function(t){return"post"===t.method&&(t.data=i.a.stringify(a()({},t.data))),t}),e.a=s},"X+ky":function(t,e){},YaEn:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c});var r=n("/5sW"),a=n("/ocq"),u=function(){return n.e(1).then(n.bind(null,"FNcP"))};r.default.use(a.a);var o=[{path:"/login",name:"login",component:function(){return n.e(7).then(n.bind(null,"6Qob"))},hidden:!0},{path:"/",redirect:"/dashboard",component:u,hidden:!0,children:[{path:"dashboard",name:"Dashboard",component:function(){return n.e(6).then(n.bind(null,"ID/7"))}}]},{path:"/article",component:u,children:[{path:"index",name:"文章管理",component:function(){return n.e(5).then(n.bind(null,"uwXK"))}}]},{path:"/category",component:u,children:[{path:"index",name:"分类管理",component:function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,"bBfL"))}}]},{path:"/example",redirect:"/example/table",name:"例子",component:u,children:[{path:"table",name:"表格",component:function(){return n.e(9).then(n.bind(null,"8z0v"))}},{path:"tree",name:"树结构",component:function(){return n.e(8).then(n.bind(null,"kK/p"))}}]}],c=[{path:"/permission",redirect:"/permission/index",component:u,name:"权限测试",meta:{roles:["admin"]},children:[{path:"index",component:function(){return n.e(10).then(n.bind(null,"PLNU"))},name:"权限测试页",meta:{roles:["admin"]}}]},{path:"/article",component:u,meta:{roles:["admin"]},hidden:!0,children:[{path:"createArticle",name:"创建文章",component:function(){return Promise.all([n.e(2),n.e(0)]).then(n.bind(null,"KyDB"))}},{path:"editArticle/:articleID",name:"编辑文章",component:function(){return Promise.all([n.e(3),n.e(0)]).then(n.bind(null,"AxNr"))}}]}];e.c=new a.a({mode:"history",routes:o})},Yq4J:function(t,e){},bwiK:function(t,e){},cDSy:function(t,e){},cwe7:function(t,e){},d7TW:function(t,e){},isE6:function(t,e){},jZDA:function(t,e){},oq7i:function(t,e){},qunJ:function(t,e){},s8Ph:function(t,e,n){"use strict";var r=n("Xxa5"),a=n.n(r),u=n("exGp"),o=n.n(u),c=n("VxtT");e.a={getcategory:function(){var t=this;return o()(a.a.mark(function e(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)({url:"/category",method:"get"});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},e,t)}))()},addCategory:function(t){var e=this;return o()(a.a.mark(function n(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/category/addCategory",method:"post",data:{category:t}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},n,e)}))()},deleteCategory:function(t){var e=this;return o()(a.a.mark(function n(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/category/deleteCategory",method:"post",data:{categoryID:t}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},n,e)}))()},editCategory:function(t,e){var n=this;return o()(a.a.mark(function r(){var u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.a)({url:"/category/editCategory",method:"post",data:{categoryID:t,categoryContent:e}});case 2:return u=n.sent,n.abrupt("return",u.data);case 4:case"end":return n.stop()}},r,n)}))()}}},viA7:function(t,e,n){"use strict";var r=n("Xxa5"),a=n.n(r),u=n("exGp"),o=n.n(u),c=n("VxtT");e.a={getArticleList:function(t){var e=this,n=t.page,r=t.limit;return o()(a.a.mark(function t(){var u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)({url:"/article/info",method:"get",params:{page:n,limit:r}});case 2:return u=t.sent,t.abrupt("return",u.data);case 4:case"end":return t.stop()}},t,e)}))()},getOneArticle:function(t){var e=this;return o()(a.a.mark(function n(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/article/getOneArticle",method:"get",params:{articleID:t}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},n,e)}))()},createArticle:function(t){var e=this;return o()(a.a.mark(function n(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/article/createArticle",method:"post",data:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},n,e)}))()},deleteArticle:function(t){var e=this;return o()(a.a.mark(function n(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/article/deleteArticle",method:"post",data:{articleID:t}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},n,e)}))()},editArticle:function(t){var e=this;return o()(a.a.mark(function n(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/article/editArticle",method:"post",data:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},n,e)}))()}}},ylrw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cb06e32a75e87230ca84.js.map