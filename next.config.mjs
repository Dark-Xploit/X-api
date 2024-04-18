/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/",
        destination: "https://api.thexapi.xyz/", // Replace with your backend URL
      },
    ];
  },
};

export default nextConfig;

