/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kmong.com' },
      { protocol: 'https', hostname: 'd2v80xjmx68n4w.cloudfront.net' },
    ],
  },
};

module.exports = nextConfig;
