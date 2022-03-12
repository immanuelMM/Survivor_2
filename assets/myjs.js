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
// window.addEventListener('load', videoScroll);
// window.addEventListener('scroll', videoScroll);

// function videoScroll() {

//   if ( document.querySelectorAll('iframe[autoplay]').length > 0) {
//     var windowHeight = window.innerHeight,
//         videoEl = document.querySelectorAll('iframe[autoplay]');

//     for (var i = 0; i < videoEl.length; i++) {

//       var thisVideoEl = videoEl[i],
//           videoHeight = thisVideoEl.clientHeight,
//           videoClientRect = thisVideoEl.getBoundingClientRect().top;

//       if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
//         thisVideoEl.play();
//       } else {
//         thisVideoEl.pause();
//       }

//     }
//   }

// }

window.onload=function(){
  var LoadVideo = function(player_id){
      var Program = {

          Init: function(){
              this.NewPlayer();
              this.EventHandler();
          },

          NewPlayer: function(){
              var _this = this;
              this.Player = new YT.Player(player_id, {});
              _this.Player.$element = $('#' + player_id);
          },

          Play: function(){
              if( this.Player.getPlayerState() === 1 ) return;
              this.Player.playVideo();
          },

          Pause: function(){
              if( this.Player.getPlayerState() === 2 ) return;
              this.Player.pauseVideo();
          },

          ScrollControl: function(){
              if( Utils.IsElementInViewport(this.Player.$element[0]) ) this.Play();
              else this.Pause();
          },

          EventHandler: function(){
              var _this = this;
              $(window).on('scroll', function(){
                  _this.ScrollControl();
              });
          }
      };
      var Utils = {
          /** @author http://stackoverflow.com/a/7557433/1684970 */
          IsElementInViewport: function(el){
              if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
              var rect = el.getBoundingClientRect();
              return (
                      rect.top >= 0 &&
                      rect.left >= 0 &&
                      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
          }
      };
      return Program.Init();
  };
  LoadVideo('playerA');
  LoadVideo('playerB');
  LoadVideo('playerC');
}