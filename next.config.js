/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // headers: async () => {
  //   return [
  //     {
  //       source: "/fonts/(.*)",
  //       headers: [
  //         {
  //           key: "cache-control",
  //           value: "public, max-age=691200",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "X-XSS-Protection",
  //           value: "1; mode=block",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=31536000;",
  //         },
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //                 upgrade-insecure-requests;
  //                 frame-ancestors 'self';
  //               `
  //             .replace(/\s{2,}/g, " ")
  //             .trim(),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
