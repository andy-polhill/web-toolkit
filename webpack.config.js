module.exports = {
  context: __dirname,
  output: {
    path: __dirname + '/.tmp',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  debug : true
}
