/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {  
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
     externals: [
      // nodeExternals(),
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        }
      }
    ]
    })
  );
  return config;
},
};

module.exports = nextConfig;
