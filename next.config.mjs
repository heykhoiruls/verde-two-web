/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ik.imagekit.io"],
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/events/five-star-living-at-verde-two",
        destination: "/",
        permanent: true,
      },
      {
        source: "/inquiry",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
