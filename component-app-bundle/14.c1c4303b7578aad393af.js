(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{178:function(t,e,n){"use strict";
/*!
 * vue-i18n v8.22.2 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */var r=["compactDisplay","currency","currencyDisplay","currencySign","localeMatcher","notation","numberingSystem","signDisplay","style","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function a(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}var i=Array.isArray;function o(t){return null!==t&&"object"==typeof t}function s(t){return"string"==typeof t}var l=Object.prototype.toString;function c(t){return"[object Object]"===l.call(t)}function u(t){return null==t}function f(t){return"function"==typeof t}function h(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?o(t[0])||i(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(o(t[1])||i(t[1]))&&(r=t[1])),{locale:n,params:r}}function p(t){return JSON.parse(JSON.stringify(t))}function m(t,e){return!!~t.indexOf(e)}var _=Object.prototype.hasOwnProperty;function g(t,e){return _.call(t,e)}function v(t){for(var e=arguments,n=Object(t),r=1;r<arguments.length;r++){var a=e[r];if(null!=a){var i=void 0;for(i in a)g(a,i)&&(o(a[i])?n[i]=v(n[i],a[i]):n[i]=a[i])}}return n}function b(t,e){if(t===e)return!0;var n=o(t),r=o(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var a=i(t),s=i(e);if(a&&s)return t.length===e.length&&t.every((function(t,n){return b(t,e[n])}));if(a||s)return!1;var l=Object.keys(t),c=Object.keys(e);return l.length===c.length&&l.every((function(n){return b(t[n],e[n])}))}catch(t){return!1}}function d(t){return null!=t&&Object.keys(t).forEach((function(e){"string"==typeof t[e]&&(t[e]=t[e].replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"))})),t}var y={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n)if(t.i18n instanceof X){if(t.__i18n)try{var e=t.i18n&&t.i18n.messages?t.i18n.messages:{};t.__i18n.forEach((function(t){e=v(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(t){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(c(t.i18n)){var n=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof X?this.$root.$i18n:null;if(n&&(t.i18n.root=this.$root,t.i18n.formatter=n.formatter,t.i18n.fallbackLocale=n.fallbackLocale,t.i18n.formatFallbackMessages=n.formatFallbackMessages,t.i18n.silentTranslationWarn=n.silentTranslationWarn,t.i18n.silentFallbackWarn=n.silentFallbackWarn,t.i18n.pluralizationRules=n.pluralizationRules,t.i18n.preserveDirectiveContent=n.preserveDirectiveContent),t.__i18n)try{var r=t.i18n&&t.i18n.messages?t.i18n.messages:{};t.__i18n.forEach((function(t){r=v(r,JSON.parse(t))})),t.i18n.messages=r}catch(t){0}var a=t.i18n.sharedMessages;a&&c(a)&&(t.i18n.messages=v(t.i18n.messages,a)),this._i18n=new X(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),n&&n.onComponentInstanceCreated(this._i18n)}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof X?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof X&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n?(t.i18n instanceof X||c(t.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof X||t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof X)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick((function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher)}))}}},k={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.data,r=e.parent,a=e.props,i=e.slots,o=r.$i18n;if(o){var s=a.path,l=a.locale,c=a.places,u=i(),f=o.i(s,l,function(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}(u)||c?function(t,e){var n=e?function(t){0;return Array.isArray(t)?t.reduce(w,{}):Object.assign({},t)}(e):{};if(!t)return n;var r=(t=t.filter((function(t){return t.tag||""!==t.text.trim()}))).every($);0;return t.reduce(r?F:w,n)}(u.default,c):u),h=a.tag&&!0!==a.tag||!1===a.tag?a.tag:"span";return h?t(h,n,f):f}}};function F(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function w(t,e,n){return t[n]=e,t}function $(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var M,C={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,a=e.parent,i=e.data,l=a.$i18n;if(!l)return null;var c=null,u=null;s(n.format)?c=n.format:o(n.format)&&(n.format.key&&(c=n.format.key),u=Object.keys(n.format).reduce((function(t,e){var a;return m(r,e)?Object.assign({},t,((a={})[e]=n.format[e],a)):t}),null));var f=n.locale||l.locale,h=l._ntp(n.value,f,c,u),p=h.map((function(t,e){var n,r=i.scopedSlots&&i.scopedSlots[t.type];return r?r(((n={})[t.type]=t.value,n.index=e,n.parts=h,n)):t.value})),_=n.tag&&!0!==n.tag||!1===n.tag?n.tag:"span";return _?t(_,{attrs:i.attrs,class:i.class,staticClass:i.staticClass},p):p}};function T(t,e,n){I(t,n)&&O(t,e,n)}function L(t,e,n,r){if(I(t,n)){var a=n.context.$i18n;(function(t,e){var n=e.context;return t._locale===n.$i18n.locale})(t,n)&&b(e.value,e.oldValue)&&b(t._localeMessage,a.getLocaleMessage(a.locale))||O(t,e,n)}}function D(t,e,n,r){if(n.context){var i=n.context.$i18n||{};e.modifiers.preserve||i.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}else a("Vue instance does not exists in VNode context")}function I(t,e){var n=e.context;return n?!!n.$i18n||(a("VueI18n instance does not exists in Vue instance"),!1):(a("Vue instance does not exists in VNode context"),!1)}function O(t,e,n){var r,i,o=function(t){var e,n,r,a;s(t)?e=t:c(t)&&(e=t.path,n=t.locale,r=t.args,a=t.choice);return{path:e,locale:n,args:r,choice:a}}(e.value),l=o.path,u=o.locale,f=o.args,h=o.choice;if(l||u||f)if(l){var p=n.context;t._vt=t.textContent=null!=h?(r=p.$i18n).tc.apply(r,[l,h].concat(x(u,f))):(i=p.$i18n).t.apply(i,[l].concat(x(u,f))),t._locale=p.$i18n.locale,t._localeMessage=p.$i18n.getLocaleMessage(p.$i18n.locale)}else a("`path` is required in v-t directive");else a("value type not supported")}function x(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||c(e))&&n.push(e),n}function W(t){W.installed=!0;(M=t).version&&Number(M.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var a=this.$i18n;return a._tc.apply(a,[t,a.locale,a._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}})(M),M.mixin(y),M.directive("t",{bind:T,update:L,unbind:D}),M.component(k.name,k),M.component(C.name,C),M.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}var j=function(){this._caches=Object.create(null)};j.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=function(t){var e=[],n=0,r="";for(;n<t.length;){var a=t[n++];if("{"===a){r&&e.push({type:"text",value:r}),r="";var i="";for(a=t[n++];void 0!==a&&"}"!==a;)i+=a,a=t[n++];var o="}"===a,s=N.test(i)?"list":o&&S.test(i)?"named":"unknown";e.push({value:i,type:s})}else"%"===a?"{"!==t[n]&&(r+=a):r+=a}return r&&e.push({type:"text",value:r}),e}(t),this._caches[t]=n),function(t,e){var n=[],r=0,a=Array.isArray(e)?"list":o(e)?"named":"unknown";if("unknown"===a)return n;for(;r<t.length;){var i=t[r];switch(i.type){case"text":n.push(i.value);break;case"list":n.push(e[parseInt(i.value,10)]);break;case"named":"named"===a&&n.push(e[i.value]);break;case"unknown":0}r++}return n}(n,e)};var N=/^(?:\d)+/,S=/^(?:\w)+/;var H=[];H[0]={ws:[0],ident:[3,0],"[":[4],eof:[7]},H[1]={ws:[1],".":[2],"[":[4],eof:[7]},H[2]={ws:[2],ident:[3,0],0:[3,0],number:[3,0]},H[3]={ident:[3,0],0:[3,0],number:[3,0],ws:[1,1],".":[2,1],"[":[4,1],eof:[7,1]},H[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],eof:8,else:[4,0]},H[5]={"'":[4,0],eof:8,else:[5,0]},H[6]={'"':[4,0],eof:8,else:[6,0]};var P=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function R(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function E(t){var e,n,r,a=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(r=a,P.test(r)?(n=(e=a).charCodeAt(0))!==e.charCodeAt(e.length-1)||34!==n&&39!==n?e:e.slice(1,-1):"*"+a)}var V=function(){this._cache=Object.create(null)};V.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=function(t){var e,n,r,a,i,o,s,l=[],c=-1,u=0,f=0,h=[];function p(){var e=t[c+1];if(5===u&&"'"===e||6===u&&'"'===e)return c++,r="\\"+e,h[0](),!0}for(h[1]=function(){void 0!==n&&(l.push(n),n=void 0)},h[0]=function(){void 0===n?n=r:n+=r},h[2]=function(){h[0](),f++},h[3]=function(){if(f>0)f--,u=4,h[0]();else{if(f=0,void 0===n)return!1;if(!1===(n=E(n)))return!1;h[1]()}};null!==u;)if(c++,"\\"!==(e=t[c])||!p()){if(a=R(e),8===(i=(s=H[u])[a]||s.else||8))return;if(u=i[0],(o=h[i[1]])&&(r=void 0===(r=i[2])?e:r,!1===o()))return;if(7===u)return l}}(t))&&(this._cache[t]=e),e||[]},V.prototype.getPathValue=function(t,e){if(!o(t))return null;var n=this.parsePath(e);if(0===n.length)return null;for(var r=n.length,a=t,i=0;i<r;){var s=a[n[i]];if(void 0===s)return null;a=s,i++}return a};var A,z=/<\/?[\w\s="/.':;#-\/]+>/,B=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,J=/^@(?:\.([a-z]+))?:/,U=/[()]/g,q={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()},capitalize:function(t){return""+t.charAt(0).toLocaleUpperCase()+t.substr(1)}},G=new j,X=function(t){var e=this;void 0===t&&(t={}),!M&&"undefined"!=typeof window&&window.Vue&&W(window.Vue);var n=t.locale||"en-US",r=!1!==t.fallbackLocale&&(t.fallbackLocale||"en-US"),a=t.messages||{},i=t.dateTimeFormats||{},o=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||G,this._modifiers=t.modifiers||{},this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new V,this._dataListeners=[],this._componentInstanceCreatedListener=t.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._postTranslation=t.postTranslation||null,this._escapeParameterHtml=t.escapeParameterHtml||!1,this.getChoiceIndex=function(t,n){var r=Object.getPrototypeOf(e);if(r&&r.getChoiceIndex)return r.getChoiceIndex.call(e,t,n);var a,i;return e.locale in e.pluralizationRules?e.pluralizationRules[e.locale].apply(e,[t,n]):(a=t,i=n,a=Math.abs(a),2===i?a?a>1?1:0:1:a?Math.min(a,2):0)},this._exist=function(t,n){return!(!t||!n)&&(!u(e._path.getPathValue(t,n))||!!t[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(a).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,a[t])})),this._initVM({locale:n,fallbackLocale:r,messages:a,dateTimeFormats:i,numberFormats:o})},Z={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0}};X.prototype._checkLocaleMessage=function(t,e,n){var r=function(t,e,n,o){if(c(n))Object.keys(n).forEach((function(a){var i=n[a];c(i)?(o.push(a),o.push("."),r(t,e,i,o),o.pop(),o.pop()):(o.push(a),r(t,e,i,o),o.pop())}));else if(i(n))n.forEach((function(n,a){c(n)?(o.push("["+a+"]"),o.push("."),r(t,e,n,o),o.pop(),o.pop()):(o.push("["+a+"]"),r(t,e,n,o),o.pop())}));else if(s(n)){if(z.test(n)){var l="Detected HTML in message '"+n+"' of keypath '"+o.join("")+"' at '"+e+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===t?a(l):"error"===t&&function(t,e){"undefined"!=typeof console&&(console.error("[vue-i18n] "+t),e&&console.error(e.stack))}(l)}}};r(e,t,n,[])},X.prototype._initVM=function(t){var e=M.config.silent;M.config.silent=!0,this._vm=new M({data:t}),M.config.silent=e},X.prototype.destroyVM=function(){this._vm.$destroy()},X.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},X.prototype.unsubscribeDataChanging=function(t){!function(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)t.splice(n,1)}}(this._dataListeners,t)},X.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){for(var e=t._dataListeners.length;e--;)M.nextTick((function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()}))}),{deep:!0})},X.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",(function(e){t.$set(t,"locale",e),t.$forceUpdate()}),{immediate:!0})},X.prototype.onComponentInstanceCreated=function(t){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(t,this)},Z.vm.get=function(){return this._vm},Z.messages.get=function(){return p(this._getMessages())},Z.dateTimeFormats.get=function(){return p(this._getDateTimeFormats())},Z.numberFormats.get=function(){return p(this._getNumberFormats())},Z.availableLocales.get=function(){return Object.keys(this.messages).sort()},Z.locale.get=function(){return this._vm.locale},Z.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},Z.fallbackLocale.get=function(){return this._vm.fallbackLocale},Z.fallbackLocale.set=function(t){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",t)},Z.formatFallbackMessages.get=function(){return this._formatFallbackMessages},Z.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},Z.missing.get=function(){return this._missing},Z.missing.set=function(t){this._missing=t},Z.formatter.get=function(){return this._formatter},Z.formatter.set=function(t){this._formatter=t},Z.silentTranslationWarn.get=function(){return this._silentTranslationWarn},Z.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},Z.silentFallbackWarn.get=function(){return this._silentFallbackWarn},Z.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},Z.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},Z.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},Z.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},Z.warnHtmlInMessage.set=function(t){var e=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,n!==t&&("warn"===t||"error"===t)){var r=this._getMessages();Object.keys(r).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,r[t])}))}},Z.postTranslation.get=function(){return this._postTranslation},Z.postTranslation.set=function(t){this._postTranslation=t},X.prototype._getMessages=function(){return this._vm.messages},X.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},X.prototype._getNumberFormats=function(){return this._vm.numberFormats},X.prototype._warnDefault=function(t,e,n,r,a,i){if(!u(n))return n;if(this._missing){var o=this._missing.apply(null,[t,e,r,a]);if(s(o))return o}else 0;if(this._formatFallbackMessages){var l=h.apply(void 0,a);return this._render(e,i,l.params,e)}return e},X.prototype._isFallbackRoot=function(t){return!t&&!u(this._root)&&this._fallbackRoot},X.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},X.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},X.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},X.prototype._interpolate=function(t,e,n,r,a,o,l){if(!e)return null;var h,p=this._path.getPathValue(e,n);if(i(p)||c(p))return p;if(u(p)){if(!c(e))return null;if(!s(h=e[n])&&!f(h))return null}else{if(!s(p)&&!f(p))return null;h=p}return s(h)&&(h.indexOf("@:")>=0||h.indexOf("@.")>=0)&&(h=this._link(t,e,h,r,"raw",o,l)),this._render(h,a,o,n)},X.prototype._link=function(t,e,n,r,a,o,s){var l=n,c=l.match(B);for(var u in c)if(c.hasOwnProperty(u)){var f=c[u],h=f.match(J),p=h[0],_=h[1],g=f.replace(p,"").replace(U,"");if(m(s,g))return l;s.push(g);var v=this._interpolate(t,e,g,r,"raw"===a?"string":a,"raw"===a?void 0:o,s);if(this._isFallbackRoot(v)){if(!this._root)throw Error("unexpected error");var b=this._root.$i18n;v=b._translate(b._getMessages(),b.locale,b.fallbackLocale,g,r,a,o)}v=this._warnDefault(t,g,v,r,i(o)?o:[o],a),this._modifiers.hasOwnProperty(_)?v=this._modifiers[_](v):q.hasOwnProperty(_)&&(v=q[_](v)),s.pop(),l=v?l.replace(f,v):l}return l},X.prototype._createMessageContext=function(t){var e=i(t)?t:[],n=o(t)?t:{};return{list:function(t){return e[t]},named:function(t){return n[t]}}},X.prototype._render=function(t,e,n,r){if(f(t))return t(this._createMessageContext(n));var a=this._formatter.interpolate(t,n,r);return a||(a=G.interpolate(t,n,r)),"string"!==e||s(a)?a:a.join("")},X.prototype._appendItemToChain=function(t,e,n){var r=!1;return m(t,e)||(r=!0,e&&(r="!"!==e[e.length-1],e=e.replace(/!/g,""),t.push(e),n&&n[e]&&(r=n[e]))),r},X.prototype._appendLocaleToChain=function(t,e,n){var r,a=e.split("-");do{var i=a.join("-");r=this._appendItemToChain(t,i,n),a.splice(-1,1)}while(a.length&&!0===r);return r},X.prototype._appendBlockToChain=function(t,e,n){for(var r=!0,a=0;a<e.length&&"boolean"==typeof r;a++){var i=e[a];s(i)&&(r=this._appendLocaleToChain(t,i,n))}return r},X.prototype._getLocaleChain=function(t,e){if(""===t)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[t];if(!n){e||(e=this.fallbackLocale),n=[];for(var r,a=[t];i(a);)a=this._appendBlockToChain(n,a,e);(a=s(r=i(e)?e:o(e)?e.default?e.default:null:e)?[r]:r)&&this._appendBlockToChain(n,a,null),this._localeChainCache[t]=n}return n},X.prototype._translate=function(t,e,n,r,a,i,o){for(var s,l=this._getLocaleChain(e,n),c=0;c<l.length;c++){var f=l[c];if(!u(s=this._interpolate(f,t[f],r,a,i,o,[r])))return s}return null},X.prototype._t=function(t,e,n,r){for(var a,i=[],o=arguments.length-4;o-- >0;)i[o]=arguments[o+4];if(!t)return"";var s=h.apply(void 0,i);this._escapeParameterHtml&&(s.params=d(s.params));var l=s.locale||e,c=this._translate(n,l,this.fallbackLocale,t,r,"string",s.params);if(this._isFallbackRoot(c)){if(!this._root)throw Error("unexpected error");return(a=this._root).$t.apply(a,[t].concat(i))}return c=this._warnDefault(l,t,c,r,i,"string"),this._postTranslation&&null!=c&&(c=this._postTranslation(c,t)),c},X.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},X.prototype._i=function(t,e,n,r,a){var i=this._translate(n,e,this.fallbackLocale,t,r,"raw",a);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,a)}return this._warnDefault(e,t,i,r,[a],"raw")},X.prototype.i=function(t,e,n){return t?(s(e)||(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},X.prototype._tc=function(t,e,n,r,a){for(var i,o=[],s=arguments.length-5;s-- >0;)o[s]=arguments[s+5];if(!t)return"";void 0===a&&(a=1);var l={count:a,n:a},c=h.apply(void 0,o);return c.params=Object.assign(l,c.params),o=null===c.locale?[c.params]:[c.locale,c.params],this.fetchChoice((i=this)._t.apply(i,[t,e,n,r].concat(o)),a)},X.prototype.fetchChoice=function(t,e){if(!t||!s(t))return null;var n=t.split("|");return n[e=this.getChoiceIndex(e,n.length)]?n[e].trim():t},X.prototype.tc=function(t,e){for(var n,r=[],a=arguments.length-2;a-- >0;)r[a]=arguments[a+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},X.prototype._te=function(t,e,n){for(var r=[],a=arguments.length-3;a-- >0;)r[a]=arguments[a+3];var i=h.apply(void 0,r).locale||e;return this._exist(n[i],t)},X.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},X.prototype.getLocaleMessage=function(t){return p(this._vm.messages[t]||{})},X.prototype.setLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,e)},X.prototype.mergeLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,v({},this._vm.messages[t]||{},e))},X.prototype.getDateTimeFormat=function(t){return p(this._vm.dateTimeFormats[t]||{})},X.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e),this._clearDateTimeFormat(t,e)},X.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,v(this._vm.dateTimeFormats[t]||{},e)),this._clearDateTimeFormat(t,e)},X.prototype._clearDateTimeFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},X.prototype._localizeDateTime=function(t,e,n,r,a){for(var i=e,o=r[i],s=this._getLocaleChain(e,n),l=0;l<s.length;l++){var c=s[l];if(i=c,!u(o=r[c])&&!u(o[a]))break}if(u(o)||u(o[a]))return null;var f=o[a],h=i+"__"+a,p=this._dateTimeFormatters[h];return p||(p=this._dateTimeFormatters[h]=new Intl.DateTimeFormat(i,f)),p.format(t)},X.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},X.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,a=null;return 1===e.length?s(e[0])?a=e[0]:o(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(a=e[0].key)):2===e.length&&(s(e[0])&&(a=e[0]),s(e[1])&&(r=e[1])),this._d(t,r,a)},X.prototype.getNumberFormat=function(t){return p(this._vm.numberFormats[t]||{})},X.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e),this._clearNumberFormat(t,e)},X.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,v(this._vm.numberFormats[t]||{},e)),this._clearNumberFormat(t,e)},X.prototype._clearNumberFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},X.prototype._getNumberFormatter=function(t,e,n,r,a,i){for(var o=e,s=r[o],l=this._getLocaleChain(e,n),c=0;c<l.length;c++){var f=l[c];if(o=f,!u(s=r[f])&&!u(s[a]))break}if(u(s)||u(s[a]))return null;var h,p=s[a];if(i)h=new Intl.NumberFormat(o,Object.assign({},p,i));else{var m=o+"__"+a;(h=this._numberFormatters[m])||(h=this._numberFormatters[m]=new Intl.NumberFormat(o,p))}return h},X.prototype._n=function(t,e,n,r){if(!X.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var a=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),i=a&&a.format(t);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return i||""},X.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var a=this.locale,i=null,l=null;return 1===e.length?s(e[0])?i=e[0]:o(e[0])&&(e[0].locale&&(a=e[0].locale),e[0].key&&(i=e[0].key),l=Object.keys(e[0]).reduce((function(t,n){var a;return m(r,n)?Object.assign({},t,((a={})[n]=e[0][n],a)):t}),null)):2===e.length&&(s(e[0])&&(i=e[0]),s(e[1])&&(a=e[1])),this._n(t,a,i,l)},X.prototype._ntp=function(t,e,n,r){if(!X.availabilities.numberFormat)return[];if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).formatToParts(t);var a=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),i=a&&a.formatToParts(t);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return i||[]},Object.defineProperties(X.prototype,Z),Object.defineProperty(X,"availabilities",{get:function(){if(!A){var t="undefined"!=typeof Intl;A={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return A}}),X.install=W,X.version="8.22.2",e.a=X}}]);