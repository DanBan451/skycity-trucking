module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 8192,
                fallback: require.resolve('file-loader'),
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        });
        return webpackConfig;
      },
    },
  };