const path = require('path')
const autoprefixer = require('autoprefixer')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    name: 'Site CSS',
    mode: 'development' || 'production',
    entry: ['./styles/main.scss', './styles/home.scss'],
    devtool: 'eval-source-map',
    output: {
      path: path.join(__dirname, '/public/css'),
      filename: 'main.css'
    },
    resolve: {
      extensions: ['.scss']
    },
    plugins: [
      new miniCssExtractPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/i, use: [
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: ['./node_modules/bootstrap'],
                },
              },
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
    entry: ['./javascript/app.js', './javascript/home.js'],
    output: {
      path: path.join(__dirname, '/public/js'),
      filename: 'app.bundle.js'
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