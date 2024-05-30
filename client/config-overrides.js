const TerserPlugin = require('terser-webpack-plugin');

module.exports = function override(config, env) {
    if (env === 'production') {
        config.optimization.minimizer = [
            new TerserPlugin({
                terserOptions: {
                    compress: true,
                    mangle: true,
                    output: {
                        comments: false,
                    },
                },
            }),
        ];
    }
    return config;
};
