/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appdir: true,
        swcPlugins: [
            ["next-superjson-plugin", {}]
        ]
    },
    images: {
        domains: [
            "rest.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
}

module.exports = nextConfig
