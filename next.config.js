/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   compress: true,
   poweredByHeader: false,
   devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
   },
   logging: {
      fetches: {
         fullUrl: true,
      },
   },
};

module.exports = nextConfig;
