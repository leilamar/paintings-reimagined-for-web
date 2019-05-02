console.log("in js")
const frame = document.querySelector("#container");
const images = document.querySelectorAll('img');

function changeOpacity(event) {
  if (event.target.tagName == 'IMG') { // only work with img elements
    for (let i = 0; i < images.length; i++) {
      images[i].className = 'semitransparent'; // change all frame image classes
    }
    event.target.className = "opaque"; // keep selected image opaque
    event.target.addEventListener('mouseout', resetOpacity, false);
  }
  event.stopPropagation();
}

function changeOpacityInd(event) {
    for (let i = 0; i < images.length; i++) {
        images[i].className = 'semitransparent'; // change all frame image classes
    }
    event.currentTarget.className = "opaque"; // keep selected image opaque
    event.currentTarget.addEventListener('mouseleave', resetOpacity);
    event.stopPropagation();
  }
  

function resetOpacity() {
  for (let i = 0; i < images.length; i++) {
    images[i].className = 'opaque'; // change all frame image classes
  }
}

// frame.addEventListener('mouseover', changeOpacity, false);
images.forEach(image => image.addEventListener('mouseenter', changeOpacityInd));