module.exports = {
	configureWebpack: {
		output: {
			hashFunction: 'xxhash64'
		}
	}
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "Rüütli Kelder"
				return args;
			})
	}
}

