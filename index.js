var component = {}

if (process.browser) {
	component = require('vue2-dropzone')
}
component.name = 'dropzone'
component.render = function (createElement) {
	const that = this._self
	return createElement('form', {
		props: that.props,
		attrs: {
			class: 'vue-dropzone dropzone',
			id: that.id || '',
			action: that.url || '',
			dropzoneOptions: that.dropzoneOptions,
			useCustomDropzoneOptions: that.useCustomDropzoneOptions
		}
	}, this.$slots.default)
}

module.exports = component
