import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { BuildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // для файлов , картинок и т.п
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
    // для js
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  // для svg как компоненты
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  // Если не используем ts - нужен babel-loader для Js
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  // для стилей имена и сжатие
  const scssLoader = BuildCssLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader,
  ];
}
