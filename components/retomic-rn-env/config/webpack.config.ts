import type {
  WebpackConfigMutator,
  WebpackConfigTransformContext,
} from '@teambit/webpack';
import { reactNativeBaseWebpackTransformer } from '@teambit/react.react-native-env';
import webpack from 'webpack';
import { shouldExclude } from 'tamagui-loader';

export const webpackTransformer = (
  configMutator: WebpackConfigMutator,
  _context: WebpackConfigTransformContext
): WebpackConfigMutator => {
  configMutator.raw.plugins.push(
    new webpack.DefinePlugin({
      'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
      'process.env.DEV':
        process.env.NODE_ENV === 'development' ? 'true' : 'false',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  );

  // configMutator.addModuleRules([
  //   {
  //     test: /\.tsx?$/,
  //     exclude: (path) => shouldExclude(path, __dirname),
  //     use: [
  //       'thread-loader',
  //       {
  //         loader: 'esbuild-loader',
  //       },
  //       {
  //         loader: 'tamagui-loader',
  //       },
  //     ],
  //   },
  // ]);

  configMutator.addAliases({ ['react-native$']: 'react-native-web' });

  reactNativeBaseWebpackTransformer(configMutator, _context);
  return configMutator;
};
