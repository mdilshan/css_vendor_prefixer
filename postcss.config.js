module.exports = { //config postcss plugin. This file no need to import to anywhere. postcss will automatically recongnize this.
	plugins: [
		require('autoprefixer')({
			'browsers': ['> 1%', 'last 2 versions'] // tell autoprefixer to use vendor prefix to all the browsers in the world that are used by at least 1% of users
		})
	]
}