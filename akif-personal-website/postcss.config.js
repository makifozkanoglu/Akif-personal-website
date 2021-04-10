module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/sitemap');
    }

    return config;
  }
};