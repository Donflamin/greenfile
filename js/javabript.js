function toggleSearch() {
  const searchInput = document.querySelector(".search-input");
  searchInput.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.scroll-down-arrow').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


