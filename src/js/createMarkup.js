export function createMarkup(array) {
  return array
    .map(
      article =>
        `
      <li class="list-item">
        <a href="${article.url}">
          <img src="${article.urlToImage}" alt="${article.title}">
          <h3>${article.title}</h3>
          <p>${article.content}</p>
          <div>
            <p>${article.author}</p>
            <p>${article.publishedAt}</p>
          </div>
        </a>
      </li>
        `
    )
    .join('');
}
