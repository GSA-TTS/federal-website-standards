const purgeCSSOptions = require('./config/purgecss-options');

module.exports = {
  plugins: [
    require('autoprefixer')({
      map: process.env.ELEVENTY_ENV !== 'production'
    }),
    ...(process.env.ELEVENTY_ENV === 'production' ? [require("@fullhuman/postcss-purgecss")(purgeCSSOptions)] : [])
  ],
};
