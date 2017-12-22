//var HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/script/page/main.js',
	devtool: 'inline-source-map',
    output: {
      filename: 'bundle.js', 
      path: path.resolve(__dirname, './dist') 
    },
	devServer: {
		contentBase: "./dist",
		historyApiFallback: true,
		hot: true
	  }, 
   module: {
     rules: [
        {
            test: /\.scss$/,
			use: ExtractTextPlugin.extract({
			  fallback: "style-loader",
			  use: ["css-loader","sass-loader"]
			})
        }
     ]
   },
   plugins: [ 
		//new HtmlWebpackPlugin(),
		new ExtractTextPlugin("styles.css"),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery'
		}),
		new webpack.ProvidePlugin({
		  Vue: ['vue/dist/vue.esm.js', 'default']
		})
   ]
  };