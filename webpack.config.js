var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        images: '/home/bogdan/framework_css/styl/style.css',

    },
    output:{
        path: '/home/bogdan/framework_css/styl',
    },
    module: {
        rules: [
            {
                test: /\.styl$/, loader: ExtractTextPlugin.extract("style","!css!stylus")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};