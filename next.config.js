module.exports = {
    config.optimization.minimize = false;
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            port: '',
          },
        ],
      },
}