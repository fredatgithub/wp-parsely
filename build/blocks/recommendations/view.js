!function(){"use strict";var e={418:function(e){var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(r){s=r(i);for(var p=0;p<s.length;p++)t.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},251:function(e,r,n){n(418);var t=n(196),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,a={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:i.current}}r.jsx=c,r.jsxs=c},893:function(e,r,n){e.exports=n(251)},196:function(e){e.exports=window.React}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e=n(893),r=n(196),t=window.wp.element,o=window.wp.domReady,a=n.n(o),i=window.wp.i18n,s=window.wp.apiFetch,l=n.n(s),c=window.wp.compose,u=window.wp.url,p="RECOMMENDATIONS_BLOCK_ERROR",d="RECOMMENDATIONS_BLOCK_RECOMMENDATIONS";function f(){return f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}const m=(0,t.createContext)(),y=(e,r)=>{switch(r.type){case p:return{...e,isLoaded:!0,error:r.error,recommendations:void 0};case"RECOMMENDATIONS_BLOCK_LOADED":return{...e,isLoaded:!0};case d:{const{recommendations:n}=r;if(!Array.isArray(n))return{...e,recommendations:void 0};const t=n.map((e=>{let{title:r,url:n,image_url:t,thumb_url_medium:o}=e;return{title:r,url:n,image_url:t,thumb_url_medium:o}}));return{...e,isLoaded:!0,error:void 0,recommendations:t}}default:return{...e}}},h=()=>(0,t.useContext)(m);var b=e=>{var r,n;const o={isLoaded:!1,recommendations:void 0,uuid:null===(r=window.PARSELY)||void 0===r||null===(n=r.config)||void 0===n?void 0:n.uuid,clientId:e.clientId},[a,i]=(0,t.useReducer)(y,o);return(0,t.createElement)(m.Provider,f({value:{state:a,dispatch:i}},e))},v=function(){return v=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},v.apply(this,arguments)},w=function(e,r,n,t){return new(n||(n=Promise))((function(o,a){function i(e){try{l(t.next(e))}catch(e){a(e)}}function s(e){try{l(t.throw(e))}catch(e){a(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,s)}l((t=t.apply(e,r||[])).next())}))},g=function(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,t&&(o=2&s[0]?t.return:s[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,s[1])).done)return o;switch(t=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,t=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=r.call(e,i)}catch(e){s=[6,e],t=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},O=function(e){var r=e.boost,n=e.limit,o=e.sort,a=e.isEditMode,i=h().dispatch,s={boost:r,limit:n,sort:o,url:window.location.href};function f(){return w(this,void 0,void 0,(function(){return g(this,(function(e){return[2,l()({path:(0,u.addQueryArgs)("/wp-parsely/v1/related",{query:s})})]}))}))}var m=function(e,r,n){if(n||2===arguments.length)for(var t,o=0,a=r.length;o<a;o++)!t&&o in r||(t||(t=Array.prototype.slice.call(r,0,o)),t[o]=r[o]);return e.concat(t||Array.prototype.slice.call(r))}([],Object.values(s),!0),y=(0,t.useCallback)((function(){return w(this,void 0,void 0,(function(){var e,r,n,t;return g(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,f()];case 1:return e=o.sent(),[3,3];case 2:return n=o.sent(),r=n,[3,3];case 3:return(null==e?void 0:e.error)&&(r=e.error),r?(i(function(e){return{type:p,error:e.error}}({error:r})),[2]):(t=(null==e?void 0:e.data)||[],a&&(t=t.map((function(e){return v(v({},e),{url:"#"})}))),i(function(e){return{type:d,recommendations:e.recommendations}}({recommendations:t})),[2])}}))}))}),m),b=(0,c.useDebounce)(y,300);return(0,t.useEffect)((function(){b()}),m),null},_=window.wp.components,j=function(){return j=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},j.apply(this,arguments)},x=function(e,r,n){return"original"===e?r:n},E=function(e){return!0===Boolean(e)?{target:"_blank",rel:"noopener"}:{target:"_self",rel:""}},N=function(r){var n=r.imageAlt,t=r.imagestyle,o=r.openlinksinnewtab,a=r.recommendation,i=a.title,s=a.url,l=a.image_url,c=a.thumb_url_medium,u=r.showimages;return(0,e.jsx)("li",{children:(0,e.jsx)("a",j({href:s,className:"parsely-recommendations-link"},E(o),{children:(0,e.jsxs)(_.Card,j({className:"parsely-recommendations-card"},{children:[u&&(0,e.jsx)(_.CardMedia,j({className:"parsely-recommendations-cardmedia"},{children:(0,e.jsx)("img",{className:"parsely-recommendations-image",src:x(t,l,c),alt:n})})),(0,e.jsx)(_.CardBody,j({className:"parsely-recommendations-cardbody"},{children:i}))]}))}))})},P=function(){return P=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},P.apply(this,arguments)},k=function(r){var n=r.imagestyle,t=r.recommendations,o=r.showimages,a=r.openlinksinnewtab;return(0,e.jsx)("ul",P({className:"parsely-recommendations-list"},{children:t.map((function(r,t){return(0,e.jsx)(N,{imageAlt:(0,i.__)("Image for link","wp-parsely"),imagestyle:n,openlinksinnewtab:a,recommendation:r,showimages:o},t)}))}))},S=function(){return S=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},S.apply(this,arguments)},A=function(r){var n=r.title;return n?(0,e.jsx)("p",S({className:"parsely-recommendations-list-title"},{children:n})):(0,e.jsx)(e.Fragment,{})},R=function(){return R=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},R.apply(this,arguments)};function C(r){var n,t,o=r.boost,a=r.imagestyle,s=r.isEditMode,l=r.limit,c=r.openlinksinnewtab,u=r.showimages,p=r.sort,d=r.title,f=h().state,m=f.error,y=f.isLoaded,b=f.recommendations;return y&&s&&(m?((t="".concat((0,i.__)("Error:","wp-parsely")," ").concat(JSON.stringify(m))).includes('"errors":{"http_request_failed"')||"object"==typeof m&&"fetch_error"===(null==m?void 0:m.code)?t=(0,i.__)("The Parse.ly Recommendations API is not accessible. You may be offline.","wp-parsely"):t.includes('Error: {"code":403,"message":"Forbidden","data":null}')?t=(0,i.__)("Access denied. Please verify that your Site ID is valid.","wp-parsely"):"object"==typeof m&&"rest_no_route"===(null==m?void 0:m.code)&&(t=(0,i.__)("The REST route is unavailable. To use it, wp_parsely_enable_related_api_proxy should be true.","wp-parsely")),n=t):Array.isArray(b)&&!(null==b?void 0:b.length)&&(n=(0,i.__)("No recommendations found.","wp-parsely"))),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O,{boost:o,limit:l,sort:p,isEditMode:s}),!y&&(0,e.jsx)("span",R({className:"parsely-recommendations-loading"},{children:(0,i.__)("Loading…","wp-parsely")})),n&&(0,e.jsx)("span",R({className:"parsely-recommendations-error"},{children:n})),y&&!!(null==b?void 0:b.length)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(A,{title:d}),(0,e.jsx)(k,{imagestyle:a,openlinksinnewtab:c,recommendations:b,showimages:u})]})]})}var L=function(){return L=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},L.apply(this,arguments)};a()((function(){document.querySelectorAll(".wp-block-wp-parsely-recommendations").forEach((function(n,o){return(0,t.render)((0,e.jsx)(b,{children:(0,r.createElement)(C,L({},n.dataset,{key:o}))}),n)}))}))}()}();