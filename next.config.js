// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer({
//   images: {
//     domains: ['deshi.programmingshikhi.com', 'api-ecom.programmingshikhi.com'],
//   },
//   webpack5: true
// })

module.exports = {
  images: {
    domains: ['deshi.programmingshikhi.com', 'api-ecom.programmingshikhi.com', 'api.deshibazaarbd.com', 'api-ecom.deshibazaarbd.com', 'localhost:8000'],
  },
  future: {
    webpack5: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });

//     return config;
//   }
// };