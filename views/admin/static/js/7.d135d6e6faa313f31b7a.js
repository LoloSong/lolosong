webpackJsonp([7],{"6Qob":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("Xxa5"),o=t.n(n),s=t("exGp"),a=t.n(s),i={data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}]},loading:!1}},created:function(){this.$store.getters.token&&this.$store.dispatch("GetInfo")},methods:{login:function(){var e,r=this;this.$refs.loginForm.validate((e=a()(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return r.loading=!0,e.next=4,r.$store.dispatch("Login",r.loginForm);case 4:n=e.sent,console.log(n),0===n.code?(r.loading=!1,r.$router.push({path:"/"})):(r.loading=!1,r.$message.error(n.msg));case 7:case"end":return e.stop()}},e,r)})),function(r){return e.apply(this,arguments)}))}}},l={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[t("h3",{staticClass:"title"},[e._v("vue-element-admin")]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"username"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{placeholder:"password"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.login}},[e._v("Sign in")])],1)],1)],1)},staticRenderFns:[]};var u=t("VU/8")(i,l,!1,function(e){t("yJsC")},"data-v-060b5e40",null);r.default=u.exports},yJsC:function(e,r){}});
//# sourceMappingURL=7.d135d6e6faa313f31b7a.js.map