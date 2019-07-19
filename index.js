var component = {};
component.props = ["useCustomSlot"];
if (process.browser) {
  component = require('vue2-dropzone/dist/vue2Dropzone.js')
}
component.render = function (createElement) {
  var that = this._self;
  return createElement('div', {
    props: that.props,
    attrs: {
      class: 'vue-dropzone dropzone',
      id: that.id || ''
    },
    ref: 'dropzoneElement'
  }, this.useCustomSlot === "" || this.useCustomSlot === true ? [createElement("div", {staticClass: "dz-message"}, this.$slots.default)] : this.$slots.default)
};
component.name = 'dropzone';

module.exports = component;
