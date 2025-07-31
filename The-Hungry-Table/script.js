// JavaScript Carousel Code

const inner = document.querySelector(".carousel-inner");
const indicators = document.querySelectorAll(".carousel-indicators button");
let index = 0;
const totalSlides = indicators.length;

function showSlide(i) {
  inner.style.transform = `translateX(-${i * 100}%)`;
  indicators.forEach(btn => btn.classList.remove("active"));
  indicators[i].classList.add("active");
  index = i;
}

// Previous button
document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
});

// Next button
document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
});

// Indicators
indicators.forEach(btn => {
  btn.addEventListener("click", () => {
    const slideTo = parseInt(btn.getAttribute("data-slide"));
    showSlide(slideTo);
  });
});

// Auto slide (every 4 seconds)
setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 4000);
