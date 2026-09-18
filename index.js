import{a as y,S as d,i as o}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const m="57647240-b4ea581d27336c509e2a6cd6a",h="https://pixabay.com/api/";function L(s){return y.get(h,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const p=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const r=s.map(({webformatURL:t,largeImageURL:l,tags:e,likes:a,views:n,comments:f,downloads:g})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img class="gallery-image" src="${t}" alt="${e}" />
            <div class="gallery-info">
              <p class="gallery-info-item">
                <span class="gallery-info-label">Likes</span>
                <span class="gallery-info-value">${a}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-label">Views</span>
                <span class="gallery-info-value">${n}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-label">Comments</span>
                <span class="gallery-info-value">${f}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-label">Downloads</span>
                <span class="gallery-info-value">${g}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",r),b.refresh()}function c(){p.innerHTML=""}function S(){u.classList.remove("is-hidden")}function q(){u.classList.add("is-hidden")}const i=document.querySelector(".form"),w=i.elements["search-text"];i.addEventListener("submit",s=>{s.preventDefault();const r=w.value.trim();if(!r){c(),o.warning({message:"Please enter a search query.",position:"topRight"});return}c(),S(),L(r).then(({hits:t})=>{if(t.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(t)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),i.reset()})});
//# sourceMappingURL=index.js.map
