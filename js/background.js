const body = document.querySelector("body");
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

body.classList.add("bgImage");
body.style.backgroundImage = `url(../img/${chosenImage})`;