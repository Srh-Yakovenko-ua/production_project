import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function BuildCssLoader(isDev : boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
    // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
          // для какого файла применять модули
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // отображение шаблонов стилей классов их название
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
