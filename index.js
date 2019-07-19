let component = {};
component.props = ["useCustomSlot"];
if (process.browser) {
  component = require('vue2-dropzone/dist/vue2Dropzone.js')
}
component.render = function (createElement) {
  const that = this._self;
  return createElement('div', {
    props: that.props,
    attrs: {
      class: 'vue-dropzone dropzone',
      id: that.id || ''
    },
    ref: 'dropzoneElement'
  }, [this.useCustomSlot === "" || this.useCustomSlot === true ? createElement("div", {staticClass: "dz-message"}, [this._t("default", [this._v("Drop files here to upload")])], 2) : this._e()])
};
component.name = 'dropzone';

export default component;
