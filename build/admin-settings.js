!function(){"use strict";!function(){function e(){var e,t,n=""!==location.hash?location.hash.substring(1):"basic-section";null===(e=document.querySelectorAll(".nav-tab"))||void 0===e||e.forEach((function(e){e.classList.contains(n+"-tab")?e.classList.add("nav-tab-active"):e.classList.remove("nav-tab-active")})),null===(t=document.querySelectorAll(".tab-content"))||void 0===t||t.forEach((function(e){e.classList.contains(n)?e.setAttribute("style","display: initial"):e.setAttribute("style","display: none")}));var i=document.querySelector('form[name="parsely"]');i&&(i.removeAttribute("hidden"),i.setAttribute("action","options.php#".concat(n)))}function t(e){var t=e.target.dataset.option,n=window.wp.media({multiple:!1,library:{type:"image"}});n.on("select",(function(){var e=n.state().get("selection").first().toJSON().url,i="#media-single-image-"+t+" input.file-path",o=document.querySelector(i);o&&(o.value=e)})),n.open()}document.addEventListener("DOMContentLoaded",(function(){var n;!function(){var e=document.querySelector("input#content_helper_ai_features_enabled"),t=document.querySelectorAll("input#content_helper_smart_linking_enabled, input#content_helper_title_suggestions_enabled, input#content_helper_excerpt_suggestions_enabled");function n(){if(e){var n=document.querySelectorAll("div.content-helper-section fieldset");e.checked?n.forEach((function(e){a(e,!1),t.forEach((function(e){i(e)}))})):(n.forEach((function(t){t.querySelector("#".concat(e.id))||a(t)})),document.querySelectorAll("label.prevent-disable").forEach((function(e){o(e,!1)})))}}function i(e){var t,n,i=null===(n=null===(t=e.closest("fieldset"))||void 0===t?void 0:t.nextSibling)||void 0===n?void 0:n.nextSibling;e.checked?a([e,i],!1):(a(i),o(e.parentElement))}function o(e,t){void 0===t&&(t=!0),t?e.classList.add("prevent-disable"):e.classList.remove("prevent-disable")}function a(e,t){void 0===t&&(t=!0),Array.isArray(e)||(e=[e]),e.forEach((function(e){t?e.setAttribute("disabled","disabled"):e.removeAttribute("disabled")}))}(function(){var e;null===(e=document.querySelector('.wp-admin form[name="parsely"]'))||void 0===e||e.addEventListener("submit",(function(){var e=".wp-admin .content-helper-section fieldset";document.querySelectorAll("".concat(e,"[disabled]")).forEach((function(t){var n,i;null===(i=null===(n=t.parentElement)||void 0===n?void 0:n.parentElement)||void 0===i||i.classList.add("disabled-before-posting"),t.querySelectorAll("".concat(e,' label input[type="checkbox"]')).forEach((function(e){e.classList.add("disabled")})),t.removeAttribute("disabled")}))}))})(),n(),null==e||e.addEventListener("change",(function(){n()})),t.forEach((function(e){e.addEventListener("change",(function(){i(e)}))}))}(),e(),window.addEventListener("hashchange",e),null===(n=document.querySelector(".media-single-image button.browse"))||void 0===n||n.addEventListener("click",t)}))}()}();