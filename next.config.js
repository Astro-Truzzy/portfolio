import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during build
  },
};

export default withSentryConfig(
  nextConfig,
  {
    // Sentry Webpack Plugin Options
    silent: true, // Suppresses source map uploading logs
    org: 'astrodev-os', // Your Sentry organization
    project: 'portfolio', // Your Sentry project
  },
  {
    // Sentry Next.js SDK Options
    widenClientFileUpload: true, // Upload more source maps
    transpileClientSDK: true, // Transpile SDK for IE11
    // tunnelRoute: "/monitoring", // Uncomment to route Sentry through a custom path
    hideSourceMaps: true, // Hide source maps from the client
    disableLogger: true, // Remove Sentry logs from production
    automaticVercelMonitors: true, // Enable Vercel Cron Monitoring
  }
);
