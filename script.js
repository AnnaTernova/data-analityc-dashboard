'use strict';

const menuBtn = document.querySelector('.btn-menu');
const backBtn = document.querySelector('.btn-back');
const menu = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
});

backBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(-100%)';
});
