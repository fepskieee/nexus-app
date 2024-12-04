/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ai-public.creatie.ai",
        pathname: "/gen_page/logo_placeholder.png",
      },
    ],
  },
}

export default nextConfig
