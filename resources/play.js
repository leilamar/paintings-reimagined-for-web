const audio = document.querySelector('audio'); 

function playAudio() { 
    audio.play(); 
  } 

document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    if(e.keyCode === 32) {
        playAudio();
    }
};