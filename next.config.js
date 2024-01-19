module.exports = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 6000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
