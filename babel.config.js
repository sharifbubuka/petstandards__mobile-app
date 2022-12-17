module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          safe: false,
          allowedUndefined: true
        }
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          'alias': {
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@I18n': './src/I18n',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@services': './src/services',
            '@styles': './src/styles',
            '@utils': './src/utils'
          }
        }
      ]
    ]
    // 'extends': 'expo/tsconfig.base'
  };
};
