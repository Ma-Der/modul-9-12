'use-strict';
function loadPage(href) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}

document.addEventListener('DOMContentLoaded', function(){
  mainPage.innerHTML = loadPage('./src/general.html');
});
const mainPage = document.getElementById('page');

const generalPage = document.getElementById('general');
generalPage.addEventListener('click', function(){
  mainPage.innerHTML = loadPage('./src/general.html');
});

const detailsPage = document.getElementById('details');
detailsPage.addEventListener('click', function(){
  mainPage.innerHTML = loadPage('./src/details.html');
});

const linksPage = document.getElementById('links');
linksPage.addEventListener('click', function(){
  mainPage.innerHTML = loadPage('./src/links.html');
});

const bannersPage = document.getElementById('banners');
bannersPage.addEventListener('click', function(){
  mainPage.innerHTML = loadPage('./src/banners.html');
});

const personaldataPage = document.getElementById('personaldata');
personaldataPage.addEventListener('click', function(){
  mainPage.innerHTML = loadPage('./src/personaldata.html');
});

const payoutPage = document.getElementById('payout');
payoutPage.addEventListener('click', function(){
  mainPage.innerHTML = loadPage('./src/payout.html');
});

const postbackPage = document.getElementById('postback');
postbackPage.addEventListener('click', function(){
  mainPage.innerHTML = loadPage('./src/postback.html');
});
