export function createMarkup(array) {
  return array
    .map(
      article =>
        `
      <li class="list-item">
        <a class="list-item-link" href="${article.url}">
          <img class="list-item-img" src="${article.urlToImage}" alt="${article.title}" width="360" height="200" loading="lazy"">
          <div>
          <h3 class="list-item-title">${article.title}</h3>
          <p class="list-item-text">${article.description}</p>
          </div>
          <div class="author-block">
            <p class="list-item-author">Author: ${article.source.name}</p>
          </div>
        </a>
      </li>
        `
    )
    .join('');
}
