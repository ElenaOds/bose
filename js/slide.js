document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.video-item');
    const buttons = document.querySelectorAll('.video-button');
    let currentSlide = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });

      buttons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
      });
    };
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const slideIndex = parseInt(button.getAttribute('data-slide')) - 1;
        currentSlide = slideIndex;
        showSlide(currentSlide);
      });
    });
  
    showSlide(currentSlide);
  });