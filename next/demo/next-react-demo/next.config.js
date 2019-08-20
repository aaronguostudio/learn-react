const withLess = require('@zeit/next-less')
module.exports = withLess({
  webpack: (config, options) => {
    // custom webpack config
    return config
  }
})
