import Sticky from 'sticky-js';

export default {
  bind(el) {
    el.setAttribute('data-sticky-container', '');
    el.firstChild.className += ' sticky';
  },

  inserted(el, binding) {
    if (binding.value) {
      if (binding.value.marginTop) { el.firstChild.setAttribute('data-margin-top', binding.value.marginTop); }
      if (binding.value.forName) { el.firstChild.setAttribute('data-sticky-for', binding.value.forName); }
      if (binding.value.className) { el.firstChild.setAttribute('data-sticky-class', binding.value.className); }
      if (binding.value.wrap) { el.firstChild.setAttribute('data-sticky-wrap', binding.value.wrap); }
    }

    new Sticky('.sticky');
  }
};
