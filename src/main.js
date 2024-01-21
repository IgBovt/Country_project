import { getData } from './js/API-request';
import { getRefs } from './js/refs';
import { createMarkup } from './js/createMarkup';
import { spinnerPlay, spinnerStop } from './js/spinners';
import { warningAlert, errorAlert, infoAlert } from './js/izitoasts';

const refs = getRefs();
refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  const q = e.currentTarget.elements.delay.value.trim();
  spinnerPlay();
  if (!q) {
    return warningAlert();
  }
  try {
    const response = await getData(q);
    refs.wrapper.innerHTML = createMarkup(response.data.articles);
    infoAlert(response.data.totalResults);
  } catch (error) {
    errorAlert();
  } finally {
    spinnerStop();
  }
}
