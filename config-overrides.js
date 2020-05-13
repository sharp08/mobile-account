const { override, addLessLoader, addWebpackPlugin, addWebpackAlias, overrideDevServer } = require('customize-cra');
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path')

const addProxy = () => configFunction => {
  configFunction.proxy = {
    '/phemr-web-api-v3/': {
      target: 'https://emdctest.healthlink.cn',
      changeOrigin: true,
    },
  };

  return configFunction;
}

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        // modifyVars: { '@base-color': '#f44336' }
      }
    }),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src"),
      ["@axios"]: path.resolve(__dirname, "src/axios"),
      ["@utils"]: path.resolve(__dirname, "src/utils"),
      ["@apis"]: path.resolve(__dirname, "src/axios/apis"),
      ["@styled"]: path.resolve(__dirname, "src/styled"),
    }),
    // addWebpackPlugin(new AntdDayjsWebpackPlugin())
  ),
  devServer: overrideDevServer(
    addProxy(),
  )
}