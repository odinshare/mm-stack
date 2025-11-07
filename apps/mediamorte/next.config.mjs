import createMDX from '@next/mdx';

const withMDX = createMDX({ extension: /\.mdx?$/ });

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts','tsx','md','mdx'],
  experimental: { cacheComponents: true } // <-- replaces experimental.ppr
};

export default withMDX(nextConfig);
