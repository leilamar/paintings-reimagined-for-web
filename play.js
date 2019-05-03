const audio = document.querySelector('audio'); 

function playAudio() { 
    x.play(); 
  } 

document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    console.log("key press! ", e)
    if(e.keyCode === 32) {
        playAudio();
    }
};