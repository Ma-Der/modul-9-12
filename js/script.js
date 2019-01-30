'use-strict';

function loadPage(href) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}

function toggleMenu(visible) {
  document.querySelector('.mobile-menu').classList.toggle('show', visible);
}

document.querySelector('.mobile-hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

document.addEventListener('DOMContentLoaded', function(){
  mainPage.innerHTML = loadPage('./src/general.html');
});
const mainPage = document.getElementById('page');

const generalPage = document.querySelectorAll('.general');
  for(let i=0; i < generalPage.length; i++) {
    generalPage[i].addEventListener('click', function(){
      mainPage.innerHTML = loadPage('./src/general.html');
    });
  }

const detailsPage = document.querySelectorAll('.details');
  for(let i=0; i < detailsPage.length; i++) {
    detailsPage[i].addEventListener('click', function(){
      mainPage.innerHTML = loadPage('./src/details.html');
    });
  }

const linksPage = document.querySelectorAll('.links');
  for(let i=0; i < linksPage.length; i++) {
    linksPage[i].addEventListener('click', function(){
      mainPage.innerHTML = loadPage('./src/links.html');
    });
  }

const bannersPage = document.querySelectorAll('.banners');
  for( let i=0; i < bannersPage.length; i++) {
    bannersPage[i].addEventListener('click', function(){
      mainPage.innerHTML = loadPage('./src/banners.html');
    });
  }

const personaldataPage = document.querySelectorAll('.personaldata');
  for(let i=0; i < personaldataPage.length; i++) {
    personaldataPage[i].addEventListener('click', function(){
      mainPage.innerHTML = loadPage('./src/personaldata.html');
    });
  }

const payoutPage = document.querySelectorAll('.payout');
  for(let i=0; i < payoutPage.length; i++) {
    payoutPage[i].addEventListener('click', function(){
      mainPage.innerHTML = loadPage('./src/payout.html');
    });
  }

const postbackPage = document.querySelectorAll('.postback');
  for(let i=0; i < postbackPage.length; i++) {
    postbackPage[i].addEventListener('click', function(){
      mainPage.innerHTML = loadPage('./src/postback.html');
    });
  }
