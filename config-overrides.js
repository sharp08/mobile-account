const { override, addLessLoader, addWebpackPlugin, addWebpackAlias, overrideDevServer } = require('customize-cra');
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path')

const addProxy = () => configFunction => {
  configFunction.proxy = {
    '/cms-web-api/': {
      target: 'https://emdctest.healthlink.cn',
      changeOrigin: true,
    },
    '/emdc-app/': {
      target: 'https://emdctest.healthlink.cn',
      changeOrigin: true,
    },
  };

  return configFunction;
}

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src"),
      ["@styled"]: path.resolve(__dirname, "src/styled/index.js"),
    }),
    // addWebpackPlugin(new AntdDayjsWebpackPlugin())
  ),
  devServer: overrideDevServer(
    addProxy(),
  )
}