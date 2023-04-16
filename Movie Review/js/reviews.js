document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 1;
  let intervalId = null;
  showSection(slideIndex);

  const buttons = document.querySelectorAll(".controls a");
  const dots = document.querySelectorAll(".dots-container .dot");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      pauseAutoScroll();
      if (button.classList.contains("prev")) {
        changeSection(-1);
      } else if (button.classList.contains("next")) {
        changeSection(1);
      }
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      pauseAutoScroll();
      currentSection(index + 1);
    });
  });

  function currentSection(n) {
    pauseAutoScroll();
    showSection(slideIndex = n);
  }

  function changeSection(section) {
    const sections = document.querySelectorAll('.section');
    sections[slideIndex - 1].classList.remove('active');
    slideIndex += section;
    if (slideIndex > sections.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = sections.length;
    }
    sections[slideIndex - 1].classList.add('active');
    showSection(slideIndex);
  }

  function showSection(n) {
    let i;
    const sections = document.getElementsByClassName("section");
    const dots = document.getElementsByClassName("dot");

    if (n > sections.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = sections.length;
    }

    for (i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    sections[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  function startAutoScroll() {
    intervalId = setInterval(() => {
      changeSection(1);
    }, 5000);
  }

  function pauseAutoScroll() {
    clearInterval(intervalId);
    intervalId = null;
  }

  // Start automatic scrolling
  startAutoScroll();
});
