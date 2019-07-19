var component = {}

if (process.browser) {
    component = require('vue2-dropzone/dist/vue2Dropzone.js')
}
component.name = 'dropzone'
component.render = function (createElement) {
    var that = this._self
    return createElement('div', {
        props: that.props,
        attrs: {
            class: 'vue-dropzone dropzone',
            id: that.id || ''
        },
        ref: 'dropzoneElement'
    }, [this.useCustomSlot ? createElement("div", {staticClass: "dz-message"}, [this.$slots.default]) : this.$slots.default])
}

module.exports = component
