
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".tecmed-carousel");

  if (!carousel) return;

  const slides = Array.from(
    carousel.querySelectorAll(".tecmed-slide")
  );

  const previous = carousel.querySelector(".tecmed-prev");
  const next = carousel.querySelector(".tecmed-next");

  if (slides.length < 2) return;

  let current = 0;
  let timer;

  // Desativa a animação CSS para evitar conflitos.
  slides.forEach((slide) => {
    slide.style.animation = "none";
    slide.style.transition = "opacity 0.4s ease";
  });

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.style.opacity = i === current ? "1" : "0";
      slide.style.visibility = i === current ? "visible" : "hidden";
      slide.style.pointerEvents = i === current ? "auto" : "none";
    });
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      showSlide(current + 1);
    }, 5000);
  }

  previous?.addEventListener("click", (event) => {
    event.preventDefault();
    showSlide(current - 1);
    startTimer();
  });

  next?.addEventListener("click", (event) => {
    event.preventDefault();
    showSlide(current + 1);
    startTimer();
  });

  showSlide(0);
  startTimer();
});
