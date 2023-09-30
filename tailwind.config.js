module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
}