// Sia renderer webpack configuration
module.exports = {
	context: __dirname + '/src/renderer/',
	entry: './client.js',
	output: {
		filename: './lib/renderer/bundle.js'
	},
	resolveLoader: {
		modulesDirectories: [__dirname+'/node_modules', __dirname+'/src/renderer']
	},
	target: 'electron',
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}