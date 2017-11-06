var component = {}

if (process.browser) {
    component = require('vue2-dropzone')
}
component.name = 'dropzone'
component.render = function (createElement) {
    const that = this._self
    return createElement('div', {
        props: that.props,
        attrs: {
            class: 'vue-dropzone dropzone',
            id: that.id || ''
        },
        ref: 'dropzoneElement'
    }, this.$slots.default)
}

module.exports = component
