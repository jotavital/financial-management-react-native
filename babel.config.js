module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '~/components': './components',
                        '~/styles': './styles',
                        '~/models': './models',
                        '~/utils': './utils',
                    },
                },
            ],
        ],
    };
};
