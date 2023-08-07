/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '',
  },
  loaders: ['style-loader', 'css-loader', 'less-loader'],
}


module.exports = nextConfig
