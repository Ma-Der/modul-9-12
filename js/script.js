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

// CHART //
if( DOMContentLoaded) {
const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
      label: "Signups",
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: "FTD",
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: "Earned",
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      hidden: true,
    }]
  },
});
}
