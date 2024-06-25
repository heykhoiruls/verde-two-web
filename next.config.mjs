/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ik.imagekit.io"],
    unoptimized: true,
  },
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
