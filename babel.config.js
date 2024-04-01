module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
