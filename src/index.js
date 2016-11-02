import stickyDirective  from './sticky';


module.exports = {
  install(Vue) {
    Vue.directive('sticky',  stickyDirective);
  },

  stickyDirective
};
