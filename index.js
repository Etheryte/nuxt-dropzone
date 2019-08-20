var component = {};

if (process.browser) {
    component = require('vue2-dropzone/dist/vue2Dropzone.js');
}

component.name = 'dropzone';
component.render = function (createElement) {
    var that = this._self;
    var hasChildren = this.$slots.default && this.$slots.default.length;
    var useSlot = this.useCustomSlot === '' || this.useCustomSlot === true || hasChildren;
    var vnodes = useSlot
        ? [createElement('div', { staticClass: 'dz-message' }, this.$slots.default)]
        : this.$slots.default;

    return createElement('div', {
        props: that.props,
        attrs: {
            class: 'vue-dropzone dropzone',
            id: that.id || '',
        },
        ref: 'dropzoneElement',
    }, vnodes);
};
component.props = component.props || ['useCustomSlot'];

module.exports = component;
