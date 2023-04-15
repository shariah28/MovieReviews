document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 1;
  showSection(slideIndex);

  const buttons = document.querySelectorAll(".controls a");
  const dots = document.querySelectorAll(".dots-container .dot");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("prev")) {
        changeSection(-1);
      } else if (button.classList.contains("next")) {
        changeSection(1);
      }
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSection(index + 1);
    });
  });

  function currentSection(n) {
    showSection(slideIndex = n);
  }

  function changeSection(section) {
    const sections = document.querySelectorAll('.section');
    sections[currentSection].classList.remove('active');
    sections[section].classList.add('active');
    currentSection = section;
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
});