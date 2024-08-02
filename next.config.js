const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const path = require('path')

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: '',
        mongodb_password: '',
        mongodb_cluster_url: 'mongodb://localhost:27017'
      }
    }
  }
  return {
    env: {
      mongodb_username: '',
      mongodb_password: '',
      mongodb_cluster_url: 'mongodb://localhost:27017'
    },
    reactStrictMode: false,
    logging: {
      fetches: {
        fullUrl: true
      }
    },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.resolve.fallback.fs = false
      }

      // Aliases
      config.resolve.alias['~'] = path.resolve(__dirname, './src')

      return config
    }
  }
}
