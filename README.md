# nuxt-dropzone

A Nuxt SSR-compatible [Dropzone](http://www.dropzonejs.com/) component, internally powered by [vue-dropzone](https://github.com/rowanwins/vue-dropzone).  

## Installation

    npm i --save nuxt-dropzone 

## Usage

See [the demo project](https://github.com/Etheryte/nuxt-dropzone/tree/master/demo).

```html
<template>
  <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true"></dropzone>
</template>
```
```js
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  components: {
    Dropzone
  },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "http://httpbin.org/anything"
      }
    }
  },
  mounted() {
    // Everything is mounted and you can access the dropzone instance
    const instance = this.$refs.el.dropzone
  }
}
</script>
```

See [the vue-dropzone docs](https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props) for futher configuration information.

[Direct AWS S3 uploads](https://rowanwins.github.io/vue-dropzone/docs/dist/#/aws-s3-upload) are also supported.

## Common issues and solutions

 * [Importing styles doesn't work with PostCSS out-of-the-box](https://github.com/Etheryte/nuxt-dropzone/issues/3)

## Issues & contributing

Please file any issues under [Github issues](https://github.com/Etheryte/nuxt-dropzone/issues), be sure to include your Nuxt release version as well as [a minimal, complete, and verifiable example](https://stackoverflow.com/help/mcve).  
Contributions welcome, be sure to test the demo application with any changes before filing a pull request.
