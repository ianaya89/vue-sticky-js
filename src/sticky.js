import Sticky from 'sticky-js';

export default {
  bind(val) {
    this.el.parentElement.setAttribute('data-sticky-container', '');
    this.el.className += ' sticky';
  },

  update(val) {
    if (val) {
      if (val.marginTop) { this.el.setAttribute('data-margin-top', val.marginTop); }
      if (val.forName) { this.el.setAttribute('data-sticky-for', val.forName); }
      if (val.className) { this.el.setAttribute('data-sticky-class', val.className); }
    }

    new Sticky('.sticky');
  }
};
