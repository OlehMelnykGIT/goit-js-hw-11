import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  })
    .then((value) => {
      iziToast.success({ message: `✅ Fulfilled promise in ${value}ms` });
    })
    .catch((value) => {
      iziToast.error({ message: `❌ Rejected promise in ${value}ms` });
    });
});
