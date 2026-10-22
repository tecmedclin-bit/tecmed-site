
(function () {
  function init() {
    const root = document.getElementById('tecmed-carousel');
    const slides = [
      document.getElementById('tecmed-slide-a'),
      document.getElementById('tecmed-slide-b')
    ];
    const prev = document.getElementById('tm-arrow-left');
    const next = document.getElementById('tm-arrow-right');

    if (!root || slides.some(slide => !slide)) return;

    let active = 0;
    let timer;

    slides.forEach(slide => {
      slide.style.setProperty('animation', 'none', 'important');
      slide.style.setProperty('transition', 'opacity 350ms ease', 'important');
      slide.style.setProperty('position', 'absolute', 'important');
      slide.style.setProperty('inset', '0', 'important');
    });

    function show(index) {
      active = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.style.setProperty('opacity', i === active ? '1' : '0', 'important');
        slide.style.setProperty('visibility', i === active ? 'visible' : 'hidden', 'important');
        slide.style.setProperty('pointer-events', i === active ? 'auto' : 'none', 'important');
        slide.style.setProperty('z-index', i === active ? '2' : '1', 'important');
      });
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(() => show(active + 1), 5000);
    }

    if (prev) {
      prev.addEventListener('click', function (e) {
        e.preventDefault();
        show(active - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener('click', function (e) {
        e.preventDefault();
        show(active + 1);
        restart();
      });
    }

    show(0);
    restart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
