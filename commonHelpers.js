import{a}from"./assets/vendor-a2e8d7fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function c(o,e){return a.get("https://newsapi.org/v2/everything",{params:{apiKey:"31d73c075bf1480facfc72f704139b7b",q:o,searchIn:"content",sortBy:"relevancy",pageSize:12,page:e}})}function u(){return{form:document.querySelector(".js-search-form"),wrapper:document.querySelector(".js-wrapper")}}function f(o){return o.map(e=>`
      <li class="list-item">
        <a class="list-item-link" href="${e.url}">
          <img class="list-item-img" src="${e.urlToImage}" alt="${e.title}" width="360" height="200" loading="lazy"">
          <div>
          <h3 class="list-item-title">${e.title}</h3>
          <p class="list-item-text">${e.description}</p>
          </div>
          <div class="author-block">
            <p class="list-item-author">Author: ${e.source.name}</p>
          </div>
        </a>
      </li>
        `).join("")}const l=u();l.form.addEventListener("submit",d);async function d(o){o.preventDefault();const e=o.currentTarget.elements.delay.value.trim();if(!e)return alert("Write request");try{const s=await c(e);console.log(s),l.wrapper.innerHTML=f(s.data.articles)}catch{}}
//# sourceMappingURL=commonHelpers.js.map
