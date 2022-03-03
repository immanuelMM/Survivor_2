let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  // var dataText = [""];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  // function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    // if (i < (text.length)) {
      // add next character to h1
    //  document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
    //   setTimeout(function() {
    //     typeWriter(text, i + 1, fnCallback)
    //   }, 100);
    // }
    // text finished, call callback if there is a callback function
    // else if (typeof fnCallback == 'function') {
      // call callback after timeout
  //     setTimeout(fnCallback, 700);
  //   }
  // }
  // start a typewriter animation for a text in the dataText array
  //  function StartTextAnimation(i) {
  //    if (typeof dataText[i] == 'undefined'){
  //       setTimeout(function() {
  //         StartTextAnimation(0);
  //       }, 1000);
  //    }
     // check if dataText[i] exists
    // if (i < dataText[i].length) {
      // text exists! start typewriter animation
    //  typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
  //      StartTextAnimation(i + 1);
  //    });
  //   }
  // }
  // start the text animation
//   StartTextAnimation(0);
// });