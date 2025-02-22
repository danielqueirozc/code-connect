/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/viniciosneves/code-connect-assets/main/**',
          },
        ],
      },
};

export default nextConfig;
