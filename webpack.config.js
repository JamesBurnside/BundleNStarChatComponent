var path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'react': { // import react from an external module so you don't have multiple instances
      'commonjs': 'react', 
      'commonjs2': 'react', 
      'amd': 'react'
    },
    'react-dom': { // some versions of react had links to react-dom so its good to include this
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom'
    }
  }
};