$(document).ready(function(){

    /*! Fades in page on load */
    // $('.button').css('display', 'none');
    $('body').hide().delay(300).fadeIn(500);
    // $('#textline1').hide();
    $('.textline1').delay(8000).fadeOut(2000);
    // $('.textline1').hide().delay(3000).fadeIn(1000);
    // $('.button').hide().delay(300).fadeIn(500);
    
    });

var ppbutton = document.getElementById("playVideo");
ppbutton.addEventListener("click", playVideo);
function playVideo() { 
    $('.vid').trigger('play');
} 

var ppbutton = document.getElementById("pauseVideo");
ppbutton.addEventListener("click", pauseVideo);
function pauseVideo() { 
    $('.vid').trigger('pause');
} 

// var ppbutton2 = document.getElementById("vid2button");
// ppbutton2.addEventListener("click", playPause2);
// vid2 = document.getElementById("vid2");
// function playPause2() { 
//     if (vid2.paused) {
//         vid2.play();
//         vid2.loop = true;
//         ppbutton2.innerHTML = "{  pause  }";
//         }
//     else  {
//         vid2.pause(); 
//         ppbutton2.innerHTML = "{  play  }";
//         }
// } 
