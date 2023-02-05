module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-paper/babel'],
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
            '@locale': './src/locale',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@services': './src/services',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@mockdata': './src/mockdata',
            '@context': './src/context',
            '@constants': './src/constants'
          }
        }
      ]
    ]
    // 'extends': 'expo/tsconfig.base'
  };
};
