/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output : 'export',
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id'
  },
  images: {
    domains : ['img.icons8.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};
