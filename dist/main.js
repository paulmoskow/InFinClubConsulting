(()=>{"use strict";var e=document.querySelectorAll(".email"),t=document.querySelector("#about"),n=document.querySelectorAll(".link__black"),o=document.querySelector("#popup-email"),c=document.querySelector("#popup-about"),u=document.getElementById("popup-contacts"),i=document.querySelectorAll(".popup"),a=document.getElementById("popup__form"),d=document.querySelectorAll("#popup-contacts .link");function p(e){e.classList.add("popup_opened"),document.addEventListener("keydown",m)}function r(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",m)}function l(){p(o)}function s(){p(u)}function m(e){"Escape"===e.key&&r(document.querySelector(".popup_opened"))}a.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;r(o);var n=encodeURIComponent(t.elements.name.value),c=encodeURIComponent(t.elements.message.value),u="mailto:cfookay@gmail.com?subject=".concat(n,"&body=").concat(c);window.location.href=u,setTimeout((function(){t.reset()}),500)})),e.forEach((function(e){e.addEventListener("click",l)})),t.addEventListener("click",(function(){p(c)})),n.forEach((function(e){e.addEventListener("click",s)})),d.forEach((function(e){e.addEventListener("click",(function(e){setTimeout((function(){r(u)}),100)}))})),i.forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&r(e)}))}))})();