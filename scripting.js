'use strict';

let showModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelectorAll(`.close-modal`);
let overlay = document.querySelector('.overlay');

// let closeModalFn = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// console.log(closeModal);

// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener('click', function () {
//     document.querySelector(`.modal--${i}`).classList.remove('hidden');

//     overlay.classList.remove('hidden');
//   });

//   closeModal[i].addEventListener('click', function () {
//     document.querySelector(`.modal--${i}`).classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//   overlay.addEventListener('click', function () {
//     document.querySelector(`.modal--${i}`).classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//   document.addEventListener('keydown', function (event) {
//     if (
//       event.key == 'Escape' &&
//       !document.querySelector(`.modal--${i}`).classList.contains('hidden')
//     ) {
//       document.querySelector(`.modal--${i}`).classList.add('hidden');
//       overlay.classList.add('hidden');
//       console.log(event.key);
//     }
//   });
// }
let b = function (x) {
  console.log(typeof x);
};
