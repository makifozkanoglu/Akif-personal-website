module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/sitemap');
    }

    return config;
  }
};