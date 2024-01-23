import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function warningAlert() {
  iziToast.warning({
    title: 'Warning',
    message: 'Write request',
    position: 'center',
  });
}

export function errorAlert() {
  iziToast.error({
    title: 'Error',
    message: 'Server error',
    position: 'center',
  });
}

export function infoAlert(number) {
  iziToast.info({
    title: 'Hello',
    message: `We have found ${number} results`,
    position: 'topRight',
  });
}
