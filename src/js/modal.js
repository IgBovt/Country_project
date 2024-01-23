import { getRefs } from './refs';
const refs = getRefs();
export function pushModal() {
  refs.modal.classList.add('modal-window-overlay');
}

export function closeModal() {
  refs.modal.classList.add('is-hidden');
}
