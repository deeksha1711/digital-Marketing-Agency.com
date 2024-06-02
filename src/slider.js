let currentSlide = 1;
    const totalSlides = document.querySelectorAll('.slides-div').length;

    function showSlide(n) {
      currentSlide = (n + totalSlides - 1) % totalSlides + 1; // Adjust current slide for looping
      
      const imageSlider = document.querySelector('.image-slider');
      const slideWidth = document.querySelector('.slides-div').clientWidth;
      imageSlider.style.transform = `translateX(${-slideWidth * (currentSlide - 1)}px)`;

      // Update dots
      document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === currentSlide);
      });

      // Check if the third dot is clicked
      if (currentSlide === 2) {
        document.getElementById('third-dot').addEventListener('click', function() {
          window.location.href = "https://www.fylehq.com"; // Navigate to the specified link
        });
      }
    }

    // Show the first slide by default
    showSlide(currentSlide);

    // Add event listeners to dots
    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', function() {
        showSlide(parseInt(this.getAttribute('data-slide')));
      });
    });