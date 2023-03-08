const selector = document.querySelectorAll('.form-input[type="tel"]');

const im = new Inputmask('99-9999999');
im.mask(selector);
