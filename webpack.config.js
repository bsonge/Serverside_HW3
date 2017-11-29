module.exports = {
    entry: {
        main: './src/scripts/index.js'
    },
    output: {
        filename: './dist/scripts/[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                    plugins: [
                      'transform-decorators',
                      'transform-decorators-legacy',
                      'transform-class-properties'
                    ]
                }
            }
        ]
    }
}
