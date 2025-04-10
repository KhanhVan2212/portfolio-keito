/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // 👈 thêm domain ở đây
          },
      reactStrictMode: true,
      swcMinify: true,
    }
    
    export default nextConfig