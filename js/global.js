/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {
  "use strict";

  Drupal.behaviors.greenfile = {
    attach: function (context, settings) {},
  };
})(Drupal);

function toggleSearch() {
  const searchInput = document.querySelector(".search-input");
  searchInput.classList.toggle("active");
}
