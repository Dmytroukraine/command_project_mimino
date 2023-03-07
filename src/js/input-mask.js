const selector = document.querySelectorAll('.form-input[type="tel"]');

const im = new Inputmask('+38(099)9999999');
im.mask(selector);
    