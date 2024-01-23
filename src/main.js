import { getData } from './js/API-request';
import { getRefs } from './js/refs';
import { createMarkup } from './js/createMarkup';
import { spinnerPlay, spinnerStop } from './js/spinners';
import { warningAlert, errorAlert, infoAlert, infoPage } from './js/izitoasts';
import { toHiddenBtn } from './js/hiddenBtn';
import { getTopData } from './js/API-request-top-news';
import { pushModal, closeModal } from './js/modal';

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
refs.newsBtn.addEventListener('click', onSearchTopNews);
window.addEventListener('load', pushModal);
refs.closeBtn.addEventListener('click', closeModal);

async function onSearch(e) {
  e.preventDefault();
  toHiddenBtn();
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
    if (page < response.data.totalResults / 15) {
      observer.observe(refs.wrapper.lastElementChild);
    }
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
    if (page < response.data.totalResults / 15) {
      observer.observe(refs.wrapper.lastElementChild);
    } else {
      infoPage();
    }
  } catch (error) {
  } finally {
    spinnerStop();
  }
}

async function onSearchTopNews() {
  toHiddenBtn();
  spinnerPlay();
  closeModal();
  try {
    const response = await getTopData();
    refs.wrapper.innerHTML = createMarkup(response.data.articles);
    infoAlert(response.data.totalResults);
    if (page < response.data.totalResults / 15) {
      observer.observe(refs.wrapper.lastElementChild);
    }
  } catch (error) {
    errorAlert();
  } finally {
    spinnerStop();
  }
}
