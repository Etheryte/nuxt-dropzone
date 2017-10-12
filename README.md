# nuxt-dropzone

A Nuxt SSR-compatible [Dropzone](http://www.dropzonejs.com/) component, internally powered by [vue-dropzone](https://github.com/rowanwins/vue-dropzone).  

## Installation

    npm i --save nuxt-dropzone 

## Usage

See the demo project.

```html
<template>
  <dropzone id="foo" :url="'http://httpbin.org/anything'"></dropzone>
</template>
```
```js
<script>
  import Dropzone from 'nuxt-dropzone'

  export default {
    components: {
      Dropzone
    }
  }
</script>
```

Alternatively, you can use `:use-custom-dropzone-options="true" :dropzone-options="dropzoneOptions"` and pass the options as an object, see [vue-dropzone docs](https://github.com/rowanwins/vue-dropzone#props).