import path, {dirname} from 'path'
import autoprefixer from 'autoprefixer'
import miniCssExtractPlugin from 'mini-css-extract-plugin'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default [
  {
    name: 'Site CSS',
    mode: 'development' || 'production',
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.scss']
    },
    plugins: [
      new miniCssExtractPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          include: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'styles'),
          ],
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer]
              }
            }
          }, {
            loader: 'sass-loader'
          }]
        }
      ]
    }
  },
  {
    name: 'Main Scripts',
    mode: 'development' || 'production',
    entry: './javascript/app.js',
    output: {
      path: path.join(__dirname, 'public/js'),
      filename: 'main.bundle.js'
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // was 'es2015'
              cacheDirectory: false
            }
          }
        }
      ]
    }
  },
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