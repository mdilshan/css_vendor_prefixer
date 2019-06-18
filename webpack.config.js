const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
 entry: { style: "./style.css" }, // tell webpack to start converting from here
 output: {
   path: path.resolve(__dirname, "dist") // where to put the final outcome
 },
 plugins: [
   new MiniCssExtractPlugin({ //usually webpack will try to add style.css to the header of the html code. to extract the code and put it in separate file we use this plugin
     filename: "style.css"
   })
 ],
 module: { // give order to webpack about what to do with these files
   rules: [ // rules is an array contaning objects. Each objects for diferent type of files
     {
       test: /\.css$/, //regex for find only files with .css
       use: [
         MiniCssExtractPlugin.loader,
         { loader: "css-loader", options: { importLoaders: 1 } },
         "postcss-loader"
       ]
     }
   ]
 }
}