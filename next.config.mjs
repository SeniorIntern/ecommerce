/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com'
      },
      { protocol: 'https', hostname: 'cloudflare-ipfs.com' }
    ]
  }
};

export default nextConfig;
