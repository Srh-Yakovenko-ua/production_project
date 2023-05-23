import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import {buildOptions} from './types/config';

export function buildPlugin({paths}: buildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]

}