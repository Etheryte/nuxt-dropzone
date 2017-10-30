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

Alternatively, you can use `:use-custom-dropzone-options="true" :dropzone-options="dropzoneOptions"` and pass the options as an object, see [vue-dropzone docs](https://github.com/rowanwins/vue-dropzone#props).

## Issues & contributing

Please file any issues under [Github issues](https://github.com/Etheryte/nuxt-dropzone/issues), be sure to include your Nuxt release version as well as [a minimal, complete, and verifiable example](https://stackoverflow.com/help/mcve).  
Contributions welcome, be sure to test the demo application with any changes before filing a pull request.