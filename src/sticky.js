import Sticky from 'sticky-js';

export default {
  bind(val) {
    this.el.className = 'sticky';
  },

  update(val) {
    new Sticky('.sticky');
  }
};
