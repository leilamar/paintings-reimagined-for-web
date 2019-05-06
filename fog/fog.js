function main() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        console.log("window.innerWidth/2", window.innerWidth/2);
        console.log("img.width/2", img.width/2);
        console.log("(window.innerWidth/2 - img.width/2)", window.innerWidth/2 - img.width/2);
        img.style.left = (window.innerWidth/2 - img.width/2) + "px";
    });
}

setTimeout(main, 20);