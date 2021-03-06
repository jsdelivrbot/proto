module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    root: [ './src' ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
};