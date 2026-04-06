const { withSentryConfig } = require('@sentry/nextjs');
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  output: 'standalone',
};
module.exports = withSentryConfig(nextConfig, {
  silent: true, org: 'openclaude', project: 'techhub',
});