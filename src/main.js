import { getData } from './js/API-request';
import { getRefs } from './js/refs';
import { createMarkup } from './js/createMarkup';
import { spinnerPlay, spinnerStop } from './js/spinners';
import { warningAlert, errorAlert, infoAlert } from './js/izitoasts';

const refs = getRefs();
let q = null;
let page = 1;
const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};
const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      loadMoreData();
    }
  });
};

const observer = new IntersectionObserver(callback, options);

refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  q = e.currentTarget.elements.delay.value.trim();
  spinnerPlay();
  if (!q) {
    spinnerStop();
    refs.wrapper.innerHTML = '';
    return warningAlert();
  }
  try {
    const response = await getData(q);
    refs.wrapper.innerHTML = createMarkup(response.data.articles);
    infoAlert(response.data.totalResults);
    observer.observe(refs.wrapper.lastElementChild);
  } catch (error) {
    errorAlert();
  } finally {
    spinnerStop();
  }
  e.target.reset();
}
async function loadMoreData() {
  page += 1;
  spinnerPlay();
  try {
    const response = await getData(q, page);
    refs.wrapper.insertAdjacentHTML(
      'beforeend',
      createMarkup(response.data.articles)
    );
    const item = document.querySelector('.list-item:last-child');
    observer.observe(item);
  } catch (error) {
  } finally {
    spinnerStop();
  }
}
