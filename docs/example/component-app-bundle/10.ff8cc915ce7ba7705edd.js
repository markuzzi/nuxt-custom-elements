(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,t,n){var r=n(185);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(47).default)("de61b35c",r,!0,{sourceMap:!1})},184:function(e,t,n){"use strict";n(124)},185:function(e,t,n){var r=n(46)(!1);r.push([e.i,".custom-element-app-hash[data-v-48ea244c]{padding:15px;background:#eee;border:1px solid #eee}.custom-element-app-hash .header[data-v-48ea244c],.custom-element-app-hash .router-view[data-v-48ea244c]{background:#fff;border:1px solid #eee}.custom-element-app-hash .router-view[data-v-48ea244c]{min-height:160px;padding:0 15px;margin-top:20px}",""]),e.exports=r},43:function(e,t,n){"use strict";n.r(t);n(17);var r=n(77),i=n(56),a={components:{OrganismViewHeader:function(){return n.e(1).then(n.bind(null,208))}},extends:r.a,router:Object(i.a)("hash"),data:function(){return{views:["index","view-1","view-2","view-3"]}},computed:{content:function(){return{header:{title:this.title||'App with router mode "hash"',linksTitle:"Views:",navigation:[{title:"Home",url:"/"},{title:"View 1",url:"/view-1"},{title:"View 2",url:"/view-2"},{title:"View 3",url:"/view-3"}]}}},header:function(){return this.content.header}}},o=(n(184),n(45)),u=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"custom-element-app-hash"},[t("organism-view-header",this._b({staticClass:"header"},"organism-view-header",this.header,!1)),this._v(" "),t("custom-element-router-view",{staticClass:"router-view"})],1)}),[],!1,null,"48ea244c",null);t.default=u.exports},55:function(e,t,n){var r=n(75);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(47).default)("1f385c52",r,!0,{sourceMap:!1})},56:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));n(78),n(17),n(54),n(58);var r=n(0),i=n(99);function a(e){return e.map((function(e){return{path:"/".concat(e).replace(/index$/,""),component:function(){return function(e){return n(76)("./"+e)}(e)}}}))}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"abstract",n=new i.a({mode:t,base:e.CUSTOM_ELEMENT_ROUTER_BASE||e.location.pathname});return"abstract"===t&&n.replace("/"),n}r.a.use(i.a)}).call(this,n(2))},59:function(e,t,n){var r={"./base.js":60};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=59},60:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return i})),n.d(t,"getters",(function(){return a})),n.d(t,"actions",(function(){return o}));var r=function(){return{value:!0}},i={value:function(e,t){e.value=Boolean(t)}},a={value:function(e){return e.value}},o={setValue:function(e,t){e.commit("value",t)}}},61:function(e,t,n){"use strict";n(82),n(83),n(84),n(85),n(17),n(54),n(58),n(73);var r=n(0),i=n(88);r.a.use(i.a);r.a.component("NuxtLink",{extends:r.a.component("RouterLink")});var a,o={store:new i.a.Store({modules:(a=n(59),a.keys().reduce((function(e,t){var n=t.replace(/\.\/(.*)\.js/,"$1");return e[String(n)]=Object.assign({namespaced:!0},a(t)),e}),{}))}),props:{basePath:{type:String,default:"/"},title:{type:String,default:null}}},u=n(45),s=Object(u.a)(o,void 0,void 0,!1,null,null,null);t.a=s.exports},74:function(e,t,n){"use strict";n(55)},75:function(e,t,n){var r=n(46)(!1);r.push([e.i,"div[data-v-b1e8b39c]{position:relative}.router-view-change-enter-active[data-v-b1e8b39c],.router-view-change-leave-active[data-v-b1e8b39c]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-b1e8b39c],.router-view-change-leave-to[data-v-b1e8b39c]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}",""]),e.exports=r},76:function(e,t,n){var r={"./":[52,2],"./index":[52,2],"./index.vue":[52,2],"./view-1":[64,4],"./view-1.vue":[64,4],"./view-2":[65,5],"./view-2.vue":[65,5],"./view-3":[66,6],"./view-3.vue":[66,6]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=76,e.exports=i},77:function(e,t,n){"use strict";var r={name:"CustomElementRouterView"},i=(n(74),n(45)),a=Object(i.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{attrs:{name:"router-view-change"}},[t("keep-alive",[this.$router?t("router-view"):this._e()],1)],1)],1)}),[],!1,null,"b1e8b39c",null).exports,o=n(56),u={components:{CustomElementRouterView:a},extends:n(61).a,props:{mode:{type:String,default:function(){return"history"}}},data:function(){return{views:["index"]}},created:function(){this.$router&&this.$router.addRoutes(Object(o.b)(this.views))}},s=Object(i.a)(u,void 0,void 0,!1,null,null,null);t.a=s.exports}}]);