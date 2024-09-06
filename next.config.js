module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './config/loaders/image-loader.ts',
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
