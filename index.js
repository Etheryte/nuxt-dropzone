var component = {};

if (process.browser) {
    component = require('vue2-dropzone/dist/vue2Dropzone.js');
}

component.name = 'dropzone';
component.props = component.props || ['useCustomSlot', 'includeStyling'];
component.render = function (createElement) {
    var that = this._self;
    // Fyi vue-dropzone doesn't currently support automatic detection, see https://github.com/rowanwins/vue-dropzone/issues/488
    var hasChildren = this.$slots.default && this.$slots.default.length;
    var useSlot = this.useCustomSlot === '' || this.useCustomSlot === true || hasChildren;
    var vnodes = useSlot
        ? [createElement('div', { staticClass: 'dz-message' }, this.$slots.default)]
        : this.$slots.default;

    // Default: true
    var includeStyling = this.$props.includeStyling !== false;

    return createElement('div', {
        props: that.props,
        attrs: {
            // NB! Empty class string required to avoid internal fallback defaulting
            class: includeStyling ? 'vue-dropzone dropzone' : '',
            id: that.id || '',
        },
        ref: 'dropzoneElement',
    }, vnodes);
};

module.exports = component;
