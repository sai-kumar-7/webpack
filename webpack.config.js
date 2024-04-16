const Path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    mode: 'development',
    devServer:{
        static: "./dist"
    }
}