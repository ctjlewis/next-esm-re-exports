module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  // babel: (config) => {
  //   console.log(config);
  // },
  webpack: (config) => {
    // config.experiments = { topLevelAwait: true };
    // config.resolve.fallback = {
    //   assert: false,
    //   process: false,
    //   events: false,
    //   fs: false,
    //   util: false,
    //   path: false,
    //   stream: false,
    //   constants: false,
    //   os: false,
    // };
    return config;
  },
}

// export default nextConfig;