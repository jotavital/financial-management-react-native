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
                        '~/components': './src/components',
                        '~/styles': './src/styles',
                        '~/models': './src/models',
                        '~/utils': './src/utils',
                        '~/screens': './src/screens',
                        '~/schemas': './src/schemas',
                        '~/services': './src/services',
                        '~/navigators': './src/navigators',
                    },
                },
            ],
        ],
    };
};
