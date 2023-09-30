// const path = require('path')
// const autoprefixer = require('autoprefixer')
// const miniCssExtractPlugin = require('mini-css-extract-plugin')
//
// module.exports = [
//   {
//     name: 'Site CSS',
//     mode: 'development' || 'production',
//     entry: './styles/main.scss',
//     output: {
//       path: path.join(__dirname, '/public/css'),
//       filename: 'main.css'
//     },
//     resolve: {
//       extensions: ['.scss']
//     },
//     plugins: [
//       new miniCssExtractPlugin()
//     ],
//     module: {
//       rules: [
//         {
//           test: /\.(scss)$/, use: [{
//             loader: 'css-loader', // translates CSS into CommonJS modules
//           }, {
//             loader: 'postcss-loader', // Run post css actions
//             options: {
//               postcssOptions: {
//                 plugins: [autoprefixer]
//               }
//             }
//           }, {
//             loader: 'sass-loader' // compiles Sass to CSS
//           }]
//         }
//       ]
//     }
//   },
//   {
//     name: 'Main Scripts',
//     mode: 'development' || 'production',
//     devtool: 'eval-source-map',
//     entry: './javascript/main.js',
//     output: {
//       path: path.join(__dirname, 'public/js'),
//       filename: 'main.bundle.js'
//     },
//     resolve: {
//       extensions: ['.js']
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js?$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'], // was 'es2015'
//               cacheDirectory: false
//             }
//           }
//         }
//       ]
//     }
//   },
  // {
  //   name: 'Default Component Scripts',
  //   mode: 'development' || 'production',
  //   entry: './javascript/default-components.js',
  //   output: {
  //     path: path.join(__dirname, '_site/js'),
  //     filename: 'default-components.bundle.js'
  //   },
  //   resolve: {
  //     extensions: ['.js']
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js?$/,
  //         exclude: /node_modules/,
  //         use: {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: ['@babel/preset-env'], // was 'es2015'
  //             cacheDirectory: false
  //           }
  //         }
  //       }
  //     ]
  //   }
  // },
  // {
  //   name: 'Project Scripts',
  //   mode: 'development' || 'production',
  //   entry: './javascript/github.js',
  //   output: {
  //     path: path.join(__dirname, '_site/js'),
  //     filename: 'project.bundle.js'
  //   },
  //   resolve: {
  //     extensions: ['.js']
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js?$/,
  //         exclude: /node_modules/,
  //         use: {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: ['@babel/preset-env'], // was 'es2015'
  //             cacheDirectory: false
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
]