(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{143:function(e,t,n){"use strict";n(98)},144:function(e,t,n){var a=n(10)(!1);a.push([e.i,".custom-element-app-i18n[data-v-2b8937b3]{padding:15px;background:#eee;border:1px solid #eee}.custom-element-app-i18n .header[data-v-2b8937b3],.custom-element-app-i18n>div[data-v-2b8937b3]:last-child{background:#fff;border:1px solid #eee}.custom-element-app-i18n>div[data-v-2b8937b3]:last-child{display:flex;align-items:center;justify-content:center;min-height:160px;padding:0 15px;margin-top:20px}.custom-element-app-i18n>div:last-child>span[data-v-2b8937b3]{font-family:sans-serif;font-size:40px;font-weight:700}",""]),e.exports=a},170:function(e,t,n){"use strict";n.r(t);var a=n(31),i=n(0),s=n(142);i.a.use(s.a);var o=new s.a({locale:"en",messages:{de:{message:{hello:"hallo welt"}},en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}}}}),r={components:{OrganismViewHeader:()=>n.e(1).then(n.bind(null,169))},extends:a.a,i18n:o,computed:{content(){return{header:{title:"App with i18n",linksTitle:"Locales:",navigation:this.$i18n.availableLocales.map(e=>({class:e===this.$i18n.locale?"router-link-exact-active router-link-active":"",title:e,url:"#".concat(e),click:t=>(t.preventDefault(),this.$i18n.locale=e,!1)}))}}},header(){return this.content.header}},mounted(){console.log()}},l=(n(143),n(9)),c=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"custom-element-app-i18n"},[t("organism-view-header",this._b({staticClass:"header"},"organism-view-header",this.header,!1)),this._v(" "),t("div",[t("span",[this._v(this._s(this.$t("message").hello))])])],1)}),[],!1,null,"2b8937b3",null);t.default=c.exports},29:function(e,t,n){var a={"./base.js":30};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=29},30:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return a})),n.d(t,"mutations",(function(){return i})),n.d(t,"getters",(function(){return s})),n.d(t,"actions",(function(){return o}));var a=()=>({value:!0}),i={value(e,t){e.value=Boolean(t)}},s={value:e=>e.value},o={setValue(e,t){e.commit("value",t)}}},31:function(e,t,n){"use strict";n(45),n(48),n(51),n(52),n(53),n(54),n(55),n(56);var a=n(0),i=n(57);a.a.use(i.a);a.a.component("NuxtLink",{extends:a.a.component("RouterLink")});var s,o={store:new i.a.Store({modules:(s=n(29),s.keys().reduce((e,t)=>{var n=t.replace(/\.\/(.*)\.js/,"$1");return e[String(n)]=Object.assign({namespaced:!0},s(t)),e},{}))}),props:{basePath:{type:String,default:()=>"/"}}},r=n(9),l=Object(r.a)(o,void 0,void 0,!1,null,null,null);t.a=l.exports},98:function(e,t,n){var a=n(144);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(11).default)("741dc370",a,!0,{sourceMap:!1})}}]);