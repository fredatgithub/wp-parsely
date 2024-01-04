!function(){"use strict";var e={251:function(e,t,r){var n=r(196),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},893:function(e,t,r){e.exports=r(251)},196:function(e){e.exports=window.React}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e,t,n,a=r(893),s=window.wp.element,o=function(e){void 0===e&&(e=null);var t="";(null==e?void 0:e.children)&&(t=e.children);var r="content-helper-error-message";return(null==e?void 0:e.className)&&(r+=" "+e.className),(0,a.jsx)("div",{className:r,"data-testid":null==e?void 0:e.testId,dangerouslySetInnerHTML:{__html:t}})},i=function(e){return void 0===e&&(e=null),(0,a.jsx)(o,{className:null==e?void 0:e.className,testId:"empty-credentials-message",children:window.wpParselyEmptyCredentialsMessage})},l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},c=function(e,t){var r=e.children;return void 0===t&&(t=null),window.wpParselyEmptyCredentialsMessage?(0,a.jsx)(i,l({},t)):(0,a.jsx)(a.Fragment,{children:r})},u=window.wp.apiFetch,p=r.n(u),d=window.wp.components,h=window.wp.i18n,f=function(){function e(){this._tkq=[],this.isLoaded=!1,this.isEnabled=!1,"undefined"!=typeof wpParselyTracksTelemetry&&(this.isEnabled=!0,this.loadTrackingLibrary())}return e.getInstance=function(){return window.wpParselyTelemetryInstance||Object.defineProperty(window,"wpParselyTelemetryInstance",{value:new e,writable:!1,configurable:!1,enumerable:!1}),window.wpParselyTelemetryInstance},e.prototype.loadTrackingLibrary=function(){var e=this,t=document.createElement("script");t.async=!0,t.src="//stats.wp.com/w.js",t.onload=function(){e.isLoaded=!0,e._tkq=window._tkq||[]},document.head.appendChild(t)},e.trackEvent=function(t,r){return void 0===r&&(r={}),n=this,a=void 0,o=function(){var n;return function(e,t){var r,n,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(a){switch(a.label){case 0:return(n=e.getInstance()).isTelemetryEnabled()?[4,e.waitUntilLoaded()]:[2];case 1:return a.sent(),n.trackEvent(t,r),[2]}}))},new((s=void 0)||(s=Promise))((function(e,t){function r(e){try{l(o.next(e))}catch(e){t(e)}}function i(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,i)}l((o=o.apply(n,a||[])).next())}));var n,a,s,o},e.waitUntilLoaded=function(){return new Promise((function(t,r){var n=e.getInstance();if(n.isTelemetryEnabled())if(n.isLoaded)t();else var a=0,s=setInterval((function(){n.isLoaded&&(clearInterval(s),t()),(a+=100)>=1e4&&(clearInterval(s),r("Telemetry library not loaded"))}),100);else r("Telemetry not enabled")}))},e.prototype.trackEvent=function(t,r){var n;this.isLoaded?(0!==t.indexOf(e.TRACKS_PREFIX)&&(t=e.TRACKS_PREFIX+t),this.isEventNameValid(t)?(r=this.prepareProperties(r),null===(n=this._tkq)||void 0===n||n.push(["recordEvent",t,r])):console.error("Error tracking event: Invalid event name")):console.error("Error tracking event: Telemetry not loaded")},e.prototype.isTelemetryEnabled=function(){return this.isEnabled},e.prototype.isProprietyValid=function(t){return e.PROPERTY_REGEX.test(t)},e.prototype.isEventNameValid=function(t){return e.EVENT_NAME_REGEX.test(t)},e.prototype.prepareProperties=function(e){return(e=this.sanitizeProperties(e)).parsely_version=wpParselyTracksTelemetry.version,wpParselyTracksTelemetry.user&&(e._ut=wpParselyTracksTelemetry.user.type,e._ui=wpParselyTracksTelemetry.user.id),wpParselyTracksTelemetry.vipgo_env&&(e.vipgo_env=wpParselyTracksTelemetry.vipgo_env),this.sanitizeProperties(e)},e.prototype.sanitizeProperties=function(e){var t=this,r={};return Object.keys(e).forEach((function(n){t.isProprietyValid(n)&&(r[n]=e[n])})),r},e.TRACKS_PREFIX="wpparsely_",e.EVENT_NAME_REGEX=/^(([a-z0-9]+)_){2}([a-z0-9_]+)$/,e.PROPERTY_REGEX=/^[a-z_][a-z0-9_]*$/,e}(),y=(f.trackEvent,function(e){var t=e.defaultValue,r=e.items,n=e.onChange;return(0,a.jsx)("select",{onChange:n,value:t,children:r.map((function(e){return(0,a.jsx)("option",{value:e[0],children:e[1]},e[0])}))})});!function(e){e.Minutes10="10m",e.Hour="1h",e.Hours2="2h",e.Hours4="4h",e.Hours24="24h",e.Days7="7d",e.Days30="30d"}(e||(e={})),function(e){e.Views="views",e.AvgEngaged="avg_engaged"}(t||(t={})),function(e){e.Author="author",e.Section="section",e.Tag="tag",e.Unavailable="unavailable"}(n||(n={}));var v=function(e,t){return Object.values(t).includes(e)};function w(e,t){void 0===t&&(t=!1);var r=parseInt(e,10),n=e.charAt(e.length-1),a=(0,h.__)("Unknown Period","wp-parsely");switch(n){case"m":a=(0,h.sprintf)(/* translators: 1: Number of minutes */(0,h._n)("Last Minute","Last %1$d Minutes",r,"wp-parsely"),r);break;case"h":a=(0,h.sprintf)(/* translators: 1: Number of hours */(0,h._n)("Last Hour","Last %1$d Hours",r,"wp-parsely"),r);break;case"d":a=(0,h.sprintf)(/* translators: 1: Number of days */(0,h._n)("Last Day","Last %1$d Days",r,"wp-parsely"),r)}return t?a.toLocaleLowerCase():a}function m(e){switch(e){case t.Views:return(0,h.__)("Page Views","wp-parsely");case t.AvgEngaged:return(0,h.__)("Avg. Time","wp-parsely");default:return(0,h.__)("Unknown Metric","wp-parsely")}}var _,g,b=window.wp.url,P=(_=function(e,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},_(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)});!function(e){e.CannotFormulateApiQuery="ch_cannot_formulate_api_query",e.FetchError="fetch_error",e.HttpRequestFailed="http_request_failed",e[e.ParselyApiForbidden=403]="ParselyApiForbidden",e.ParselyApiResponseContainsError="ch_response_contains_error",e.ParselyApiReturnedNoData="ch_parsely_api_returned_no_data",e.ParselyApiReturnedTooManyResults="ch_parsely_api_returned_too_many_results",e[e.ParselyApiUnauthorized=401]="ParselyApiUnauthorized",e.PluginCredentialsNotSetMessageDetected="parsely_credentials_not_set_message_detected",e.PluginSettingsApiSecretNotSet="parsely_api_secret_not_set",e.PluginSettingsSiteIdNotSet="parsely_site_id_not_set",e.PostIsNotPublished="ch_post_not_published"}(g||(g={}));var x=function(e){function t(r,n,a){void 0===a&&(a=(0,h.__)("Error: ","wp-parsely"));var s=e.call(this,a+r)||this;s.hint=null,s.name=s.constructor.name,s.code=n;var o=[g.ParselyApiForbidden,g.ParselyApiResponseContainsError,g.ParselyApiReturnedNoData,g.ParselyApiReturnedTooManyResults,g.ParselyApiUnauthorized,g.PluginCredentialsNotSetMessageDetected,g.PluginSettingsApiSecretNotSet,g.PluginSettingsSiteIdNotSet,g.PostIsNotPublished];return s.retryFetch=!o.includes(s.code),Object.setPrototypeOf(s,t.prototype),s}return P(t,e),t.prototype.Message=function(e){return void 0===e&&(e=null),[g.PluginCredentialsNotSetMessageDetected,g.PluginSettingsSiteIdNotSet,g.PluginSettingsApiSecretNotSet].includes(this.code)?i(e):(this.code===g.FetchError&&(this.hint=this.Hint((0,h.__)("This error can sometimes be caused by ad-blockers or browser tracking protections. Please add this site to any applicable allow lists and try again.","wp-parsely"))),this.code===g.ParselyApiForbidden&&(this.hint=this.Hint((0,h.__)("Please ensure that the Site ID and API Secret given in the plugin's settings are correct.","wp-parsely"))),this.code===g.HttpRequestFailed&&(this.hint=this.Hint((0,h.__)("The Parse.ly API cannot be reached. Please verify that you are online.","wp-parsely"))),this.code===g.ParselyApiUnauthorized&&(this.message=(0,h.__)("This feature is accessible to select customers participating in its beta testing.","wp-parsely")),(0,a.jsx)(o,{className:null==e?void 0:e.className,testId:"error",children:"<p>".concat(this.message,"</p>").concat(this.hint?this.hint:"")}))},t.prototype.Hint=function(e){return'<p className="content-helper-error-message-hint" data-testid="content-helper-error-message-hint"><strong>'.concat((0,h.__)("Hint:","wp-parsely"),"</strong> ").concat(e,"</p>")},t}(Error),j={month:"short",day:"numeric",year:"numeric"},E={month:"short",day:"numeric"},N=(0,h.__)("Date N/A","wp-parsely");function T(e){if(!1===function(e){return!isNaN(+e)&&0!==e.getTime()}(e))return N;var t=j;return e.getUTCFullYear()===(new Date).getUTCFullYear()&&(t=E),Intl.DateTimeFormat(document.documentElement.lang||"en",t).format(e)}function S(e){return{period_start:e,period_end:""}}var k=function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},k.apply(this,arguments)},C=function(e,t,r,n){return new(r||(r=Promise))((function(a,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function i(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}l((n=n.apply(e,t||[])).next())}))},A=function(e,t){var r,n,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},O=function(){function e(){}return e.prototype.getTopPosts=function(e,t,r){return void 0===r&&(r=1),C(this,void 0,void 0,(function(){var n,a;return A(this,(function(s){switch(s.label){case 0:n=[],s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.fetchTopPostsFromWpEndpoint(e,t,r)];case 2:return n=s.sent(),[3,4];case 3:return a=s.sent(),[2,Promise.reject(a)];case 4:return 0===n.length?[2,Promise.reject(new x((0,h.__)("No Top Posts data is available.","wp-parsely"),g.ParselyApiReturnedNoData,""))]:[2,n]}}))}))},e.prototype.fetchTopPostsFromWpEndpoint=function(e,t,r){var n;return C(this,void 0,void 0,(function(){var a,s;return A(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,p()({path:(0,b.addQueryArgs)("/wp-parsely/v1/stats/posts/",k(k({limit:5},S(e)),{sort:t,page:r,itm_source:"wp-parsely-content-helper"}))})];case 1:return a=o.sent(),[3,3];case 2:return s=o.sent(),[2,Promise.reject(new x(s.message,s.code))];case 3:return(null==a?void 0:a.error)?[2,Promise.reject(new x(a.error.message,g.ParselyApiResponseContainsError))]:[2,null!==(n=null==a?void 0:a.data)&&void 0!==n?n:[]]}}))}))},e}(),I=function(){return(0,a.jsx)(d.SVG,{"aria-hidden":"true",version:"1.1",viewBox:"0 0 15 15",width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(d.Path,{d:"M0 14.0025V11.0025L7.5 3.5025L10.5 6.5025L3 14.0025H0ZM12 5.0025L13.56 3.4425C14.15 2.8525 14.15 1.9025 13.56 1.3225L12.68 0.4425C12.09 -0.1475 11.14 -0.1475 10.56 0.4425L9 2.0025L12 5.0025Z"})})},R=function(){return(0,a.jsxs)(d.SVG,{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)(d.Path,{d:"M0 3.29592C0 2.73237 0.456853 2.27551 1.02041 2.27551H4.08165C4.50432 2.27551 4.84696 2.61815 4.84696 3.04082C4.84696 3.46349 4.50432 3.80613 4.08165 3.80613H1.53062V11.9694H9.69391V9.6735C9.69391 9.25083 10.0366 8.90819 10.4592 8.90819C10.8819 8.90819 11.2245 9.25083 11.2245 9.6735V12.4796C11.2245 13.0432 10.7677 13.5 10.2041 13.5H1.02041C0.456854 13.5 0 13.0432 0 12.4796V3.29592Z"}),(0,a.jsx)(d.Path,{d:"M12.531 1.22415C12.8299 1.52303 12.8299 2.00759 12.531 2.30646L6.15342 8.68404C5.85455 8.98291 5.36998 8.98291 5.07111 8.68404C4.77224 8.38517 4.77224 7.9006 5.07111 7.60173L11.4487 1.22415C11.7476 0.925282 12.2321 0.925282 12.531 1.22415Z"}),(0,a.jsx)(d.Path,{d:"M6.63268 1.51012C6.63268 1.08745 6.97532 0.744812 7.39799 0.744812H12.2449C12.6676 0.744812 13.0103 1.08745 13.0103 1.51012V6.35708C13.0103 6.77975 12.6676 7.12239 12.2449 7.12239C11.8223 7.12239 11.4796 6.77975 11.4796 6.35708V2.27543H7.39799C6.97532 2.27543 6.63268 1.93279 6.63268 1.51012Z"})]})};function L(e,t,r){void 0===t&&(t=1),void 0===r&&(r="");var n=parseInt(e.replace(/\D/g,""),10);if(n<1e3)return e;n<1e4&&(t=1);var a=n,s=n.toString(),o="",i=0;return Object.entries({1e3:"k","1,000,000":"M","1,000,000,000":"B","1,000,000,000,000":"T","1,000,000,000,000,000":"Q"}).forEach((function(e){var r=e[0],l=e[1],c=parseInt(r.replace(/\D/g,""),10);if(n>=c){var u=t;(a=n/c)%1>1/i&&(u=a>10?1:2),u=parseFloat(a.toFixed(2))===parseFloat(a.toFixed(0))?0:u,s=a.toFixed(u),o=l}i=c})),s+r+o}function F(e){var t=e.metric,r=e.post,n=e.avgEngagedIcon,s=e.viewsIcon;return"views"===t?(0,a.jsxs)("span",{className:"parsely-top-post-metric-data",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("Number of Views","wp-parsely")}),s,L(r.views.toString())]}):"avg_engaged"===t?(0,a.jsxs)("span",{className:"parsely-top-post-metric-data",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("Average Time","wp-parsely")}),n,r.avgEngaged]}):(0,a.jsx)("span",{className:"parsely-top-post-metric-data",children:(0,h.__)("-","wp-parsely")})}function V(e){var t,r=e.metric,n=e.post;return(0,a.jsx)("li",{className:"parsely-top-post",children:(0,a.jsxs)("div",{className:"parsely-top-post-content",children:[(0,a.jsx)(M,{post:n}),(0,a.jsxs)("div",{className:"parsely-top-post-data",children:[(0,a.jsx)(F,{metric:r,post:n}),(0,a.jsx)(H,{post:n}),(0,a.jsxs)("a",{className:"parsely-top-post-icon-link",href:n.url,target:"_blank",rel:"noreferrer",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("View Post (opens in new tab)","wp-parsely")}),(0,a.jsx)(R,{})]}),0!==n.postId&&(0,a.jsxs)("a",{className:"parsely-top-post-icon-link",href:(t=n.postId,"/wp-admin/post.php?post=".concat(t,"&action=edit")),target:"_blank",rel:"noreferrer",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("Edit Post (opens in new tab)","wp-parsely")}),(0,a.jsx)(I,{})]}),(0,a.jsxs)("div",{className:"parsely-top-post-metadata",children:[(0,a.jsxs)("span",{className:"parsely-top-post-date",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("Date","wp-parsely")}),T(new Date(n.date))]}),(0,a.jsxs)("span",{className:"parsely-top-post-author",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("Author","wp-parsely")}),n.author]})]})]})]})},n.id)}function M(e){var t=e.post;return t.thumbnailUrl?(0,a.jsxs)("div",{className:"parsely-top-post-thumbnail",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("Thumbnail","wp-parsely")}),(0,a.jsx)("img",{src:t.thumbnailUrl,alt:(0,h.__)("Post thumbnail","wp-parsely")})]}):(0,a.jsx)("div",{className:"parsely-top-post-thumbnail",children:(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("Post thumbnail not available","wp-parsely")})})}function H(e){var t=e.post;return(0,a.jsxs)("a",{className:"parsely-top-post-title",href:t.dashUrl,target:"_blank",rel:"noreferrer",children:[(0,a.jsx)("span",{className:"screen-reader-text",children:(0,h.__)("View in Parse.ly (opens in new tab)","wp-parsely")}),t.title]})}var D=function(){return D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},D.apply(this,arguments)},U=function(e,t,r,n){return new(r||(r=Promise))((function(a,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function i(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}l((n=n.apply(e,t||[])).next())}))},z=function(e,t){var r,n,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function q(r){var n=this,o=r.settingsJson,i=(0,s.useRef)(!0),l=function(r){var n=JSON.parse(r);return v(n.period,e)||(n.period=e.Days7),v(n.metric,t)||(n.metric=t.Views),n}(o),c=(0,s.useState)(!0),u=c[0],_=c[1],g=(0,s.useState)(),b=g[0],P=g[1],x=(0,s.useState)([]),j=x[0],E=x[1],N=(0,s.useState)(l.period),T=N[0],S=N[1],k=(0,s.useState)(l.metric),C=k[0],A=k[1],I=(0,s.useState)(1),R=I[0],L=I[1];(0,s.useEffect)((function(){i.current?i.current=!1:p()({path:"/wp-parsely/v1/user-meta/content-helper/dashboard-widget",method:"PUT",data:{period:T,metric:C}})}),[T,C]),(0,s.useEffect)((function(){var e=new O,t=function(r){return U(n,void 0,void 0,(function(){var n=this;return z(this,(function(a){return e.getTopPosts(T,C,R).then((function(e){E(e),_(!1)})).catch((function(e){return U(n,void 0,void 0,(function(){return z(this,(function(n){switch(n.label){case 0:return r>0&&e.retryFetch?[4,new Promise((function(e){return setTimeout(e,500)}))]:[3,3];case 1:return n.sent(),[4,t(r-1)];case 2:return n.sent(),[3,4];case 3:_(!1),P(e),n.label=4;case 4:return[2]}}))}))})),[2]}))}))};return _(!0),t(1),function(){_(!1),E([]),P(void 0)}}),[T,C,R]);var F=function(e,t){f.trackEvent("dash_widget_filter_changed",D({filter:e},t))},M=(0,a.jsxs)("div",{className:"parsely-top-posts-filters",children:[(0,a.jsx)(y,{defaultValue:T,items:Object.values(e).map((function(e){return[e,w(e)]})),onChange:function(t){v(t.target.value,e)&&(S(t.target.value),F("period",{period:t.target.value}),L(1))}}),(0,a.jsx)(y,{defaultValue:C,items:Object.values(t).map((function(e){return[e,m(e)]})),onChange:function(e){v(e.target.value,t)&&(A(e.target.value),F("metric",{metric:e.target.value}),L(1))}})]}),H=(0,a.jsxs)("div",{className:"parsely-top-posts-navigation",children:[(0,a.jsx)("button",{className:"parsely-top-posts-navigation-prev",disabled:R<=1,onClick:function(){L(R-1),f.trackEvent("dash_widget_navigation",{navigation:"previous",to_page:R-1})},children:(0,h.__)("<< Previous","wp-parsely")}),(0,h.sprintf)(/* translators: 1: Current page */(0,h.__)("Page %1$d","wp-parsely"),R),(0,a.jsx)("button",{className:"parsely-top-posts-navigation-next",disabled:!u&&j.length<5,onClick:function(){L(R+1),f.trackEvent("dash_widget_navigation",{navigation:"next",to_page:R+1})},children:(0,h.__)("Next >>","wp-parsely")})]});if(b)return(0,a.jsxs)(a.Fragment,{children:[M,b.Message(),R>1&&H]});var q=(0,a.jsx)("div",{className:"parsely-spinner-wrapper",children:(0,a.jsx)(d.Spinner,{})});return(0,a.jsxs)(a.Fragment,{children:[M,u?q:(0,a.jsx)("ol",{className:"parsely-top-posts",style:{counterReset:"item "+5*(R-1)},children:j.map((function(e){return(0,a.jsx)(V,{metric:C,post:e},e.id)}))}),(j.length>=5||R>1)&&H]})}window.addEventListener("load",(function(){var e=document.querySelector("#wp-parsely-dashboard-widget > .inside");null!==e&&(0,s.createRoot)(e).render((0,a.jsx)(c,{children:(0,a.jsx)(q,{settingsJson:window.wpParselyContentHelperSettings})}))}),!1)}()}();