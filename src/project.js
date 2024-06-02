document.addEventListener('DOMContentLoaded', function() {
  const detailItems = document.querySelectorAll('.detail-item');
  const mainImage = document.getElementById('mainImage');

  detailItems.forEach(item => {
      item.addEventListener('click', function() {
          const imageSrc = this.getAttribute('data-image');
          mainImage.setAttribute('src', imageSrc);

          // Remove highlight from all items
          detailItems.forEach(i => i.classList.remove('highlight'));

          // Add highlight to the clicked item
          this.classList.add('highlight');
      });
  });
});
