<template>
    <div>
        <!-- Regular Dropzone -->
        <dropzone id="foo" ref="foo" :options="options" :destroyDropzone="true"></dropzone>

        <!-- Using a custom slot -->
        <dropzone id="bar" ref="bar" :options="options" :destroyDropzone="true" :useCustomSlot="true">
            <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title">Custom slot</h3>
                <p class="subtitle">Subtitle</p>
            </div>
        </dropzone>

        <!-- No default styling -->
        <dropzone id="tea" ref="tea" :options="options" :destroyDropzone="true" :useCustomSlot="true" :include-styling="false">
            <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title">No default styling</h3>
                <p class="subtitle">Subtitle</p>
            </div>
        </dropzone>
    </div>
</template>
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
        const instance = this.$refs.foo.dropzone
    }
}
</script>
