# vue-sticky

> Vue.js directive to make sticky elements built on [sticky-js](https://github.com/rgalus/sticky-js)

:warning: [UNDER DEVELOPMENT]

<p style="text-align: center">
  <img src="img/vue.png" alt="vue" title="vue"/>
</p>

### Prerequisites
1. [vue](https://github.com/vuejs/vue)

### Installation
`$ npm i -S vue-sticky`

### Directive
1. `v-sticky` => Define a new sticky element.

### Global Implementation
`main.js`
```javascript
import Vue     from 'vue';
import VueSticky from 'vue-sticky';

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

### Component Implementation

`Component.vue`
```html
<script>
  import { stickyDirective } from 'vue-sticky';

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

### Development Setup

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
