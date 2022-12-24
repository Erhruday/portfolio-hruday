// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // swcMinify: false,
//   compiler: {
//     removeConsole: {
//       exclude: ["log"],
//     },
//   },
//   // experimental: {
//   //   forceSwcTransforms: true,
//   // },
//   env: {
//     BASE_URL: process.env.BASE_URL,
//     EMAIL: process.env.EMAIL,
//     PASSWORD: process.env.PASSWORD,
//   },
// };

// module.exports = nextConfig;

module.exports = {
  compiler: {
    removeConsole: {
      exclude: ["log"],
    },
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
  },
};
