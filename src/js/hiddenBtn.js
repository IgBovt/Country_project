import { getRefs } from './refs';
export function toHiddenBtn() {
  const refs = getRefs();
  refs.newsBtn.classList.add('is-hidden');
}
