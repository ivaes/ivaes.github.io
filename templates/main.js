const photos = {photos}.sort(function (a, b) {return 0.5 - Math.random()});
let index = 0;
const cache = document.createElement('img');

function setPhoto() {
  document.querySelector('.main_pic img').src = photos[index].src;
  cache.src = photos[getNextIndex()].src;
}

function getNextIndex() {
  return index >= photos.length ? 0 : index + 1;
}

function updatePhoto() {
  index = getNextIndex();
  fadeOut();
  setTimeout(updatePhoto, 12000);
}

function fadeOut() {
  document.querySelector('.main_pic').style.opacity = 0;
  setTimeout(setPhoto, 1000);
  setTimeout(fadeIn, 2000);
}

function fadeIn() {
  document.querySelector('.main_pic').style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function(event) {
  setPhoto();
  setTimeout(updatePhoto, 10000);
  const div = document.createElement('div');
  div.style.display = 'none';
  div.appendChild(cache);
  document.body.appendChild(div);
}); 
