"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var expandButton=function(){var e=document.createElement("button");return e.textContent="…",e.classList.add("js-ellip","device-breadcrumb__expand-button"),e.dataset.title="Expandir menú",e.setAttribute("aria-hidden",!0),e.setAttribute("aria-label","Expande el menú de miga de pan"),e},closeButton=function(){var e=document.createElement("button");return e.textContent="Cerrar",e.classList.add("js-close","device-breadcrumb__compress-button"),e.dataset.title="Contraer menú",e.setAttribute("aria-hidden",!0),e.setAttribute("aria-label","Cierra el menú de miga de pan"),e},removeDeviceHidden=function(e){return e.forEach(function(e){return e.classList.add("device-breadcrumb--expanded")})},addGlobalClass=function(){return document.querySelectorAll(".breadcrumb").forEach(function(e){return e.classList.add("device-breadcrumb")})},removeExpanded=function(e){return e.forEach(function(e){return e.classList.remove("device-breadcrumb--expanded")})},isHomeLink=function(e){var t;return"object"===_typeof(e.firstChild)&&null!==e.firstChild&&"getAttribute"in e.firstChild&&(e=e.firstChild.getAttribute("href"),t=new RegExp("(^/$|argentina.gob.ar$|argentina.gob.ar/$)").exec(e)),t||!1},isFirstElementHome=function(e){var n=!1;return e.forEach(function(e,t){0==t&&(n=isHomeLink(e))}),n},isTextItem=function(e){return"A"!=e.firstChild.tagName&&""!=e.firstChild.textContent},isLastElementText=function(e){var t;return e.forEach(function(e){return t=isTextItem(e)}),t},removeButtons=function(){return document.querySelectorAll(".js-ellip, .js-close").forEach(function(e){return e.remove()})};function deviceBreadcrumb(e){removeButtons();var t=document.querySelectorAll(".breadcrumb li"),n=document.querySelectorAll(".breadcrumb"),r=t.length,i=isLastElementText(t),o=isFirstElementHome(t),c=i?r-2:r-1,d=(t.forEach(function(e,t){isHomeLink(e)&&1<r?e.classList.add("device-breadcrumb__hidden-item"):i&&t==r-2?e.classList.add("device-breadcrumb__last-visible-item"):t<c?e.classList.add("device-breadcrumb__toggle-item"):isTextItem(e)&&t==r-1&&e.classList.add("device-breadcrumb__last-item")}),i?r-1:r);e<=991&&1<(o?d-1:d)&&((e=t[0]).parentNode.insertBefore(expandButton(),e),n.forEach(function(e){e.appendChild(closeButton())})),document.querySelectorAll(".js-ellip").forEach(function(e){return e.addEventListener("click",function(){return removeDeviceHidden(n)})}),document.querySelectorAll(".js-close").forEach(function(e){return e.addEventListener("click",function(){return removeExpanded(n)})})}window.addEventListener("resize",function(e){deviceBreadcrumb(window.innerWidth)},!0),document.addEventListener("DOMContentLoaded",function(e){addGlobalClass(),deviceBreadcrumb(window.innerWidth)});