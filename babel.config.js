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
                    },
                },
            ],
            [
                'module:react-native-dotenv',
                {
                    envName: 'APP_ENV',
                    moduleName: '@env',
                    path: '.env',
                    blocklist: null,
                    allowlist: null,
                    safe: false,
                    allowUndefined: true,
                    verbose: false,
                },
            ],
        ],
    };
};
