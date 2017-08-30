# vue-sticky-js

>🏏 Vue.js directive to make sticky elements built with [sticky-js](https://github.com/rgalus/sticky-js)

**⚠️ Vue.js 2 is not supported yet. [WIP]**


## Prerequisites
[Vue.js](https://github.com/vuejs/vue)

## Installation
`$ npm i -S vue-sticky-js`

## Directive
`v-sticky` => Define a new sticky element.

## Implementation

### Global
  `main.js`
  ```javascript
  import Vue     from 'vue';
  import VueSticky from 'vue-sticky-js';

  Vue.use(VueSticky.install);

  // ...
  ```

  `Component.vue`
  ```html
  <script>
    export default {
      name: 'Component',

      data() {
        return {
          stickyOptions: {
            marginTop: 20,
            forName: 0,
            className: 'stuck'
          }
        };
      }

    };
  </script>

  <template lang='pug'>
    .container
      .box(v-sticky='stickyOptions') //- stickyOptions are not mandatory
        p Sticky Element
  </template>

  ```

### Component

  `Component.vue`
  ```html
  <script>
    import { stickyDirective } from 'vue-sticky-js';

    export default {
      name: 'Component',

      directives: {
        s: stickyDirective // You can name it as you want.
      }

    };
  </script>

  <template lang='pug'>
    .container
      .box(v-s) //- stickyOptions are not mandatory
        p Sticky Element
  </template>
  ```

## Development Setup
```bash
# install dependencies
$ npm install

# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build
```

**This project was built with [yeoman](http://yeoman.io/) and [generator-vue-component](https://github.com/ianaya89/generator-vue-component) :heart:**
