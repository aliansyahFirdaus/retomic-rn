process.env.TAMAGUI_TARGET = 'native';

module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      'transform-inline-environment-variables',
      'react-native-reanimated/plugin',
    ],
  };
};
