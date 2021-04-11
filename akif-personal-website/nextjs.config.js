module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./lib/sitemap');
      }
  
      return config;
    }
  };