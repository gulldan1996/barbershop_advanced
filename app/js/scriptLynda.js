document.querySelector(".page__list-lessons").addEventListener("click", function (e) {
  if(e.target.nextElementSibling.className === 'box') {
    e.target.nextElementSibling.style.display = "block";
    e.target.nextElementSibling.children[0].style.display = "block";
  } else if(e.target.className === 'box-inner') {
      e.target.style.display = "none";
      e.target.parentElement.style.display = "none";
    }
}, false);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(evt.target.nextElementSibling.className === 'box') {
      console.log(evt);
      evt.target.nextElementSibling.style.display = "none";
      evt.target.nextElementSibling.children[0].style.display = "none";
    }
  }
}, false);


// document.querySelectorAll(".study-link-1, .study-link-2").onclick = function() {
//         document.querySelector(".box").style.display = "block";
//         document.querySelector(".box-inner").style.display = "block";
//     }
//     document.querySelector(".box").onclick = function(e)
//     {
//         if(e.toElement == document.querySelector(".box-inner"))
//         {
//             document.querySelector(".box").style.display = "none";
//             document.querySelector(".box-inner").style.display = "none";
//         }
//     }
