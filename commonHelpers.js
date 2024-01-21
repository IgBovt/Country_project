import{a as f,S as p,i as a}from"./assets/vendor-778245f4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function m(n,e){return f.get("https://newsapi.org/v2/everything",{params:{apiKey:"31d73c075bf1480facfc72f704139b7b",q:n,searchIn:"content",sortBy:"relevancy",pageSize:12,page:e}})}function c(){return{form:document.querySelector(".js-search-form"),wrapper:document.querySelector(".js-wrapper"),loader:document.querySelector(".js-loader")}}function h(n){return n.map(e=>`
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
        `).join("")}const i=c(),g={lines:18,length:13,width:22,radius:0,scale:1,corners:.5,speed:1,rotate:90,animation:"spinner-line-shrink",direction:1,color:"#59cf86",fadeColor:"transparent",top:"48%",left:"48%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},u=new p(g);function y(){u.spin(i.loader),i.loader.classList.remove("is-hidden")}function v(){u.stop(),i.loader.classList.add("is-hidden")}function w(){a.warning({title:"Warning",message:"Write request",position:"center"})}function S(){a.error({title:"Error",message:"Server error"})}function b(n){a.info({title:"Hello",message:`We found ${n} results`})}const d=c();d.form.addEventListener("submit",L);async function L(n){n.preventDefault();const e=n.currentTarget.elements.delay.value.trim();if(y(),!e)return w();try{const s=await m(e);d.wrapper.innerHTML=h(s.data.articles),b(s.data.totalResults)}catch{S()}finally{v()}}
//# sourceMappingURL=commonHelpers.js.map
