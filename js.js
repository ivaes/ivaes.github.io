// Get the modal
var modal = document.getElementById("BigPhoto");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var pic = document.getElementById("myImg");

var modalImg = document.getElementById("modal_pic");
var captionText = document.getElementById("caption");

//pic.onclick = function() {
//  modal.style.display = "block";
//  modalImg.src = this.src;
//}

function goBig2(el) {
  const x = el.getAttribute("data-src");
  el.setAttribute("src", x);
  el.classList.add('vert');
  el.classList.add('gobig');
}

function goBig(el) {
  //var mini_pic = HTMLElementObject.src;
  modal.style.display = "flex";
  const x = el.querySelector('img').getAttribute("data-src");
  modalImg.setAttribute("src", x);
  const y = el.querySelector('img').getAttribute("alt");
  captionText.innerHTML = y;
  document.body.style.overflow = "hidden";
}


// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span && (span.onclick = function() { 
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalImg || event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function sort(z) {
  var x = document.getElementsByClassName(z);
  console.log(x[0]);
  var i;

  for (i = 0; i < x.length; i++) { 
    x[i].style.opacity = "0";
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.querySelector('.blog') && window.addEventListener('scroll', function(event) {
    if (window.pageYOffset > 0) {
      // scrolled
    } else {
      // not scrolled
    }
  });
});



function menuM(el) { 
  if (el.innerHTML == 'X') {
    document.querySelector('.menu').classList.remove('open');
    document.body.style.overflow = "auto";
    el.innerHTML = "|||";

  } else {
    document.querySelector('.menu').classList.add('open');
    document.body.style.overflow = "hidden";
    el.innerHTML = "X";
  }
}











