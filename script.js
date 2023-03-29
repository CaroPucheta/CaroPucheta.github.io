const carouselImages = document.querySelector(".carruselimagenes");
const prevBtn = document.querySelector(".anterior");
const nextBtn = document.querySelector(".siguiente");
let counter = 0;
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  if (counter < 3) {
    counter++;
    carouselImages.style.transform = `translateX(-${counter * 25}%)`;
  } else {
    counter = 0;
    carouselImages.style.transform = "translateX(0)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    carouselImages.style.transform = `translateX(-${counter * 25}%)`;
  } else {
    counter = 3;
    carouselImages.style.transform = "translateX(-75%)";
  }
});

const images = ["mujerultima.jpg", "hombreultima.jpg", "colegialultima.jpg"];

function changeImage() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const image = document.getElementById("mi-imagen");
  image.src = images[currentIndex];
}

setInterval(changeImage, 3000);


