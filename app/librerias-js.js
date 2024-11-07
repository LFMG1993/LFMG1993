// loadJS.js
function loadJS(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}

// Lista de librerías JS
const jsLibraries = [
  '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
  '../assets/vendor/php-email-form/validate.js',
  '../assets/vendor/aos/aos.js',
  '../assets/vendor/typed.js/typed.umd.js',
  '../assets/vendor/purecounter/purecounter_vanilla.js',
  '../assets/vendor/waypoints/noframework.waypoints.js',
  '../assets/vendor/swiper/swiper-bundle.min.js',
  '../assets/vendor/glightbox/js/glightbox.min.js',
  '../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
  '../assets/vendor/isotope-layout/isotope.pkgd.min.js',
  '../assets/js/main.js',
];

// Cargar todas las librerías JS
jsLibraries.forEach(src => loadJS(src));