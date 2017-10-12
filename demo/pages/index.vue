<template>
	<dropzone id="foo" :url="'http://httpbin.org/anything'">
	</dropzone>
</template>
<script>
import Dropzone from 'nuxt-dropzone'

export default {
	components: {
		Dropzone
	}
}
</script>