webpackJsonp([4],{q9NR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),r=a("exGp"),c=a.n(r),s=a("Oif5"),o=a("P9l9"),l={components:{Category:a("zlCH").a},data:function(){return{loading:!0,articleData:{title:"",created:"",views:"",category:"",contentToMarked:""}}},mounted:function(){this.getArticle()},activated:function(){this.getArticle()},metaInfo:function(){return{title:this.articleData.title}},methods:{getArticle:function(){var t=this;return c()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.getArticle(t.$route.params.id);case 3:0===(a=e.sent).code&&(t.articleData=a.data,t.loading=!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("文章信息获取失败:"+e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},go:function(t){this.$router.push({path:"/articleList",query:{category:t}})}},filters:{formatTime:s.a}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("div",{staticClass:"container"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[a("header",{staticClass:"content-title"},[a("h1",[t._v(t._s(t.articleData.title))]),t._v(" "),t.articleData.created?a("div",{staticClass:"meta"},[a("time",[a("i",{staticClass:"iconfont icon-time"}),t._v(t._s(t._f("formatTime")(t.articleData.created)))]),t._v(" "),a("span",[a("i",{staticClass:"iconfont icon-eye"}),t._v("阅读量("+t._s(t.articleData.views)+")")]),t._v(" "),a("span",[a("i",{staticClass:"iconfont icon-fenlei"}),t._v(t._s(t.articleData.category))])]):t._e()]),t._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content-article",domProps:{innerHTML:t._s(t.articleData.contentToMarked)}})]),t._v(" "),a("div",{staticClass:"sidebar"},[a("category",{on:{clickCategory:t.go}})],1)])])},staticRenderFns:[]};var v=a("VU/8")(l,d,!1,function(t){a("viLS")},"data-v-19d93480",null);e.default=v.exports},viLS:function(t,e){}});