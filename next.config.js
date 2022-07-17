/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
};

module.exports = nextConfig;
