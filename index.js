'use strict'

const aStandard = require('a-standard')

module.exports = function (text) {
	const done = this.async()
	this.cacheable()

	aStandard.lintText(text, this.options.aStandard, (err, data) => {
		if (err) return done(err, text)

		for (const msg of data.results[0].messages) {
			this.emitWarning(this.resourcePath + ': ' + JSON.stringify(msg))
		}

		done(null, text)
	})
}
