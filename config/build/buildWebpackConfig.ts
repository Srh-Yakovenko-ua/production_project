import {buildOptions} from './types/config';
import webpack from 'webpack';
import {buildPlugin} from './buildPlugin';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';

export function buildWebpackConfig(options: buildOptions): webpack.Configuration {

    const {mode, paths} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugin(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }

}