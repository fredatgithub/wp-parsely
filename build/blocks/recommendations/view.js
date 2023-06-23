!function(){"use strict";var e={418:function(e){var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(r){s=r(i);for(var d=0;d<s.length;d++)t.call(i,s[d])&&(l[s[d]]=i[s[d]])}}return l}},251:function(e,r,n){n(418);var t=n(196),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,a={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:i.current}}r.jsx=c,r.jsxs=c},893:function(e,r,n){e.exports=n(251)},196:function(e){e.exports=window.React}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e,r,t=n(893),o=n(196),a=window.wp.domReady,i=n.n(a),s=window.wp.element,l=window.wp.i18n;(r=e||(e={}))[r.Error=0]="Error",r[r.Loaded=1]="Loaded",r[r.Recommendations=2]="Recommendations";var c=function(){return c=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},c.apply(this,arguments)},u=(0,s.createContext)({}),d=function(r,n){switch(n.type){case e.Error:return c(c({},r),{isLoaded:!0,error:n.error,recommendations:[]});case e.Loaded:return c(c({},r),{isLoaded:!0});case e.Recommendations:var t=n.recommendations;if(!Array.isArray(t))return c(c({},r),{recommendations:[]});var o=t.map((function(e){return{title:e.title,url:e.url,image_url:e.image_url,thumb_url_medium:e.thumb_url_medium}}));return c(c({},r),{isLoaded:!0,error:null,recommendations:o});default:return c({},r)}},p=function(){return(0,s.useContext)(u)},m=function(e){var r,n,o,a,i={isLoaded:!1,recommendations:[],uuid:null!==(o=null===(n=null===(r=window.PARSELY)||void 0===r?void 0:r.config)||void 0===n?void 0:n.uuid)&&void 0!==o?o:null,clientId:null!==(a=null==e?void 0:e.clientId)&&void 0!==a?a:null,error:null},l=(0,s.useReducer)(d,i),p=l[0],m=l[1];return(0,s.useMemo)((function(){return(0,t.jsx)(u.Provider,c({value:{state:p,dispatch:m}},e))}),[e,p])},f=window.wp.apiFetch,y=n.n(f),h=window.wp.compose,w=window.wp.url,v=function(){return v=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},v.apply(this,arguments)},b=function(r){var n=r.boost,t=r.limit,o=r.sort,a=r.isEditMode,i=p().dispatch,l=(0,s.useMemo)((function(){return{boost:n,limit:t,sort:o,url:window.location.href,itm_source:"wp-parsely-recommendations-block"}}),[n,t,o]),c=(0,s.useCallback)((function(){return r=void 0,n=void 0,o=function(){var r,n,t,o,s;return function(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,t&&(o=2&s[0]?t.return:s[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,s[1])).done)return o;switch(t=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,t=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=r.call(e,i)}catch(e){s=[6,e],t=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,y()({path:(0,w.addQueryArgs)("/wp-parsely/v1/related",{query:l})})];case 1:return r=c.sent(),[3,3];case 2:return t=c.sent(),n=t,[3,3];case 3:return(null==r?void 0:r.error)&&(n=r.error),n?(i(function(r){var n=r.error;return{type:e.Error,error:n}}({error:n})),[2]):(o=null!==(s=null==r?void 0:r.data)&&void 0!==s?s:[],a&&(o=o.map((function(e){return v(v({},e),{url:"#"})}))),i(function(r){var n=r.recommendations;return{type:e.Recommendations,recommendations:n}}({recommendations:o})),[2])}}))},new((t=void 0)||(t=Promise))((function(e,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(r){var n;r.done?e(r.value):(n=r.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((o=o.apply(r,n||[])).next())}));var r,n,t,o}),[l,i,a]),u=(0,h.useDebounce)(c,300);return(0,s.useEffect)((function(){u()}),[l,u]),null},g=window.wp.components,_=function(){return _=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},_.apply(this,arguments)},j=function(e,r,n){return"original"===e?r:n},O=function(e){return!0===Boolean(e)?{target:"_blank",rel:"noopener"}:{target:"_self",rel:""}},x=function(e){var r=e.imageAlt,n=e.imagestyle,o=e.openlinksinnewtab,a=e.recommendation,i=a.title,s=a.url,l=a.image_url,c=a.thumb_url_medium,u=e.showimages;return(0,t.jsx)("li",{children:(0,t.jsx)("a",_({href:s,className:"parsely-recommendations-link"},O(o),{children:(0,t.jsxs)(g.Card,{className:"parsely-recommendations-card",children:[u&&(0,t.jsx)(g.CardMedia,{className:"parsely-recommendations-cardmedia",children:(0,t.jsx)("img",{className:"parsely-recommendations-image",src:j(n,l,c),alt:r})}),(0,t.jsx)(g.CardBody,{className:"parsely-recommendations-cardbody",children:i})]})}))})},E=function(e){var r=e.imagestyle,n=e.recommendations,o=e.showimages,a=e.openlinksinnewtab;return(0,t.jsx)("ul",{className:"parsely-recommendations-list",children:n.map((function(e){return(0,t.jsx)(x,{imageAlt:(0,l.__)("Image for link","wp-parsely"),imagestyle:r,openlinksinnewtab:a,recommendation:e,showimages:o},e.url+" "+e.title)}))})},k=function(e){var r=e.title;return r?(0,t.jsx)("p",{className:"parsely-recommendations-list-title",children:r}):(0,t.jsx)(t.Fragment,{})};function P(e){var r,n,o=e.boost,a=e.imagestyle,i=e.isEditMode,s=e.limit,c=e.openlinksinnewtab,u=e.showimages,d=e.sort,m=e.title,f=p().state,y=f.error,h=f.isLoaded,w=f.recommendations;return h&&i&&(y?((n="".concat((0,l.__)("Error:","wp-parsely")," ").concat(JSON.stringify(y))).includes('"errors":{"http_request_failed"')||"object"==typeof y&&"fetch_error"===(null==y?void 0:y.code)?n=(0,l.__)("The Parse.ly Recommendations API is not accessible. You may be offline.","wp-parsely"):n.includes('Error: {"code":403,"message":"Forbidden","data":null}')?n=(0,l.__)("Access denied. Please verify that your Site ID is valid.","wp-parsely"):"object"==typeof y&&"rest_no_route"===(null==y?void 0:y.code)&&(n=(0,l.__)("The REST route is unavailable. To use it, wp_parsely_enable_related_api_proxy should be true.","wp-parsely")),r=n):Array.isArray(w)&&!(null==w?void 0:w.length)&&(r=(0,l.__)("No recommendations found.","wp-parsely"))),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{boost:o,limit:s,sort:d,isEditMode:i}),!h&&(0,t.jsx)("span",{className:"parsely-recommendations-loading",children:(0,l.__)("Loading…","wp-parsely")}),r&&(0,t.jsx)("span",{className:"parsely-recommendations-error",children:r}),h&&!!(null==w?void 0:w.length)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{title:m}),(0,t.jsx)(E,{imagestyle:a,openlinksinnewtab:c,recommendations:w,showimages:u})]})]})}var N=function(){return N=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},N.apply(this,arguments)};i()((function(){document.querySelectorAll(".wp-block-wp-parsely-recommendations").forEach((function(e){return(0,s.render)((0,t.jsx)(m,{children:(0,o.createElement)(P,N({},e.dataset,{key:e.id}))}),e)}))}))}()}();