const path = require('path');

module.exports = {
    entry: "./index.ts",
    target: "node",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
            {
                test: /\.js/,
                include: /@fluent[\\/](bundle|langneg|syntax|react|sequence)[\\/]/,
                type: "javascript/auto",
            },
            {
                test: /\.ftl$/,
                use: "fluent-loader",
            },
        ],
    },
};