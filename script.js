document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', function() {
        this.style.backgroundColor = '#00b894';
        this.textContent = 'Added';
        setTimeout(() => {
            this.style.backgroundColor = '#333';
            this.textContent = 'Add to Cart';
        }, 2000);
    });
});

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function() {
        this.style.backgroundColor = '#d63031';
        this.textContent = 'Purchasing...';
        setTimeout(() => {
            this.style.backgroundColor = '#333';
            this.textContent = 'Buy Now';
        }, 2000);
    });
});





let currentIndex = 0;

function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const scrollAmount = currentIndex * items[0].clientWidth;
  carousel.scrollLeft = scrollAmount;
}




