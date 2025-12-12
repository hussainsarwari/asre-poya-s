/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig = {
  /* config options here */
  reactCompiler: true,
    // output: 'export',
     images: {
    unoptimized: true, 
  },
};
const withNextintl=createNextIntlPlugin();

export default withNextintl(nextConfig);
