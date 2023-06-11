import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugin({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // для индекс файла (страта апп)
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    // для процесса сколько прошло
    new webpack.ProgressPlugin(),
    // для стилей имена
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // для глобальных перменных
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    // hot режим
    new webpack.HotModuleReplacementPlugin(),
  ];
}
