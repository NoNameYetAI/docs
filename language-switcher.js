// Move the language selector next to the iStudix logo (top left of the navbar)
(function () {
  function moveLanguageSelector() {
    var trigger = document.getElementById('localization-select-trigger');
    var logo = document.querySelector('#navbar img.nav-logo');
    if (!trigger || !logo) return false;

    var logoLink = logo.closest('a') || logo;
    var selector = trigger.parentElement && trigger.parentElement.children.length === 1
      ? trigger.parentElement
      : trigger;

    if (logoLink.nextElementSibling === selector) return true;

    selector.classList.add('istudix-lang-select');
    logoLink.insertAdjacentElement('afterend', selector);
    return true;
  }

  function run() {
    var attempts = 0;
    var timer = setInterval(function () {
      attempts++;
      if (moveLanguageSelector() || attempts > 20) clearInterval(timer);
    }, 150);
  }

  run();
  window.addEventListener('mintlify:navigate', run);
})();
