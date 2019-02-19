'use strict';

function loadPage(href) {
  return new Promise((resolve, reject) => {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", href);
  xmlhttp.addEventListener('load', () => resolve(xmlhttp.responseText));
  xmlhttp.addEventListener('error', () => reject(new Error(xmlhttp.statusText)));
  xmlhttp.send();
});
}

function toggleMenu(visible) {
  document.querySelector('.mobile-menu').classList.toggle('show', visible);
}

document.querySelector('.mobile-hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

document.addEventListener('DOMContentLoaded', function(){
  loadPage('./src/general.html')
    .then(
      page => mainPage.innerHTML = page
    );
});
const mainPage = document.getElementById('page');

const generalPage = document.querySelectorAll('.general');
  for(let i=0; i < generalPage.length; i++) {
    generalPage[i].addEventListener('click', function(){
      loadPage('./src/general.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
  }

const detailsPage = document.querySelectorAll('.details');
  for(let i=0; i < detailsPage.length; i++) {
    detailsPage[i].addEventListener('click', function(){
      loadPage('./src/details.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
  }

const linksPage = document.querySelectorAll('.links');
  for(let i=0; i < linksPage.length; i++) {
    linksPage[i].addEventListener('click', function(){
      loadPage('./src/links.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
  }

const bannersPage = document.querySelectorAll('.banners');
  for( let i=0; i < bannersPage.length; i++) {
    bannersPage[i].addEventListener('click', function(){
      loadPage('./src/banners.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
  }

const personaldataPage = document.querySelectorAll('.personaldata');
  for(let i=0; i < personaldataPage.length; i++) {
    personaldataPage[i].addEventListener('click', function(){
      loadPage('./src/personaldata.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
  }

const payoutPage = document.querySelectorAll('.payout');
  for(let i=0; i < payoutPage.length; i++) {
    payoutPage[i].addEventListener('click', function(){
      loadPage('./src/payout.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
  }

const postbackPage = document.querySelectorAll('.postback');
  for(let i=0; i < postbackPage.length; i++) {
    postbackPage[i].addEventListener('click', function(){
      loadPage('./src/postback.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
  }

// MODALS //

function closeModal() {
  document.getElementById('overlay').classList.remove('show-modal');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});


function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show-modal');
  });
  document.querySelector('#overlay').classList.add('show-modal');
  document.querySelector(modal).classList.add('show-modal');
}

document.querySelectorAll('.chat').forEach(function(cht) {
  cht.addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#myModal');
  });
});
