//customer review
const cards = document.querySelectorAll(".review-card");
const dots = document.querySelectorAll(".nav-dot");
let currentIndex = 0;

function showReview(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    dots[i].classList.remove("active");
  });
  cards[index].classList.add("active");
  dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showReview(currentIndex);
  });
});

// Auto-slide every 6s
setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length;
  showReview(currentIndex);
}, 6000);
    


