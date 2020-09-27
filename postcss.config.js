module.exports = {
    map: false,
    plugins: [
      //require('autoprefixer'),
      require('cssnano')({
        preset: ['default', {
          svgo: false,
          discardComments: {removeAll: true},
        }]
      })
    ],
};
