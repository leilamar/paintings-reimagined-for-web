const frame = document.querySelector("#container");
const images = document.querySelectorAll('img');
const body = document.querySelector('body');
console.log("body", body);


function changeOpacityInd(event) {
    for (let i = 0; i < images.length; i++) {
        images[i].className = 'semitransparent';
    }
    event.currentTarget.className = "opaque";
    event.currentTarget.addEventListener('mouseleave', resetOpacity);
    event.stopPropagation();
}

function changeOpacityIndColor(event) {
    console.log('inside change opacity and color fn')
    for (let i = 0; i < images.length; i++) {
        images[i].className = 'semitransparent';
    }
    event.currentTarget.className = "opaque";

    const bgColor = event.currentTarget.getAttribute('data-bgcolor');
    body.style.backgroundColor = bgColor;
    console.log(body.style.backgroundColor);
    event.currentTarget.addEventListener('mouseleave', resetOpacityAndColor);
    event.stopPropagation();
}
  

function resetOpacity() {
  for (let i = 0; i < images.length; i++) {
    images[i].className = 'opaque';
  }
}

function resetOpacityAndColor() {
    for (let i = 0; i < images.length; i++) {
      images[i].className = 'opaque';
    }
    body.style.backgroundColor = 'white';
}

images[0].setAttribute('data-bgcolor', '#82899d');
images[1].setAttribute('data-bgcolor', '#e59b16');
images[2].setAttribute('data-bgcolor', '#8caf9d');

images.forEach(image => image.addEventListener('mouseenter', changeOpacityIndColor));