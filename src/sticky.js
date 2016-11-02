import Sticky from 'sticky-js';

export default {
  bind(val) {
    this.el.className = 'sticky';
    console.log(this.el);
  },

  update(val) {
    const s = new Sticky('.sticky');
    console.log(s);
  }
};
