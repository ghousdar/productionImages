const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add the domains of the image sources you want to optimize
    deviceSizes: [320, 420, 768, 1024, 1200], // Specify the device sizes for which optimized images will be generated
    imageSizes: [16, 32, 48, 64, 96], // Specify the image sizes to be generated
    loader: 'default', // Choose a loader for your images (e.g., "default", "imgix", "cloudinary", "akamai")
    path: '/_next/image', // Specify the path for optimized images
    unoptimized: true, // Enable this option to disable automatic image optimization
    disableStaticImages: false, // Enable this option to disable static image imports
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(ogg|mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/video.mp4',
          },
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig;