/** @type {import('next').NextConfig} */

// serve para usar o styled components
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig