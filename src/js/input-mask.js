const selector = document.querySelectorAll('.form-input[type="tel"]');

const im = new Inputmask('+380999999999');
im.mask(selector);
