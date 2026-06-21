'use strict';

(function () {
  // On touch-only devices (no hover, coarse pointer) CSS :hover and :focus-within
  // don't provide a reliable flip. Add a click-toggle via JS instead.
  var touchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  if (!touchOnly) return;

  var cards = Array.prototype.slice.call(document.querySelectorAll('.product-card'));

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var wasFlipped = card.classList.contains('is-flipped');
      // Collapse any other open card first
      cards.forEach(function (c) { c.classList.remove('is-flipped'); });
      if (!wasFlipped) card.classList.add('is-flipped');
    });
  });
}());
