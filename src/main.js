import { getData } from './js/API-request';
import { getRefs } from './js/refs';
import { createMarkup } from './js/createMarkup';

const refs = getRefs();
refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  const q = e.currentTarget.elements.delay.value.trim();
  if (!q) {
    return alert('&&&&&');
  }
  try {
    const response = await getData(q);
    console.log(response.data.articles);
    refs.wrapper.innerHTML = createMarkup(response.data.articles);
  } catch (error) {}
}
