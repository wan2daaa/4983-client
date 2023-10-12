const runtimeCaching = require("next-pwa/cache.js");

const isProduction = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  // dest: "public",
  disable: false,
  runtimeCaching,
  maximumFileSizeToCacheInBytes: 1000000000,
});

module.exports = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // SVG 세팅
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/login",
        destination: "https://dev.4983.link/api/v1/login",
      },
      /* 판매글 등록 */
      {
        source: "/api/v1/used-book",
        destination: "https://dev.4983.link/api/v1/used-book",
      },
      /* 판매글 수정 */
      {
        source: "/api/v1/used-book/:id",
        destination: "https://dev.4983.link/api/v1/used-book/:id",
      },
      /* Chatbot */
      {
        source: "/api/v1/chat-room",
        destination: "https://dev.4983.link/api/v1/chat-room",
      },
      {
        source: "/api/v1/chat/:chatRoomId",
        destination: "https://dev.4983.link/api/v1/chat/:chatRoomId",
      },
      /* Main */
      {
        source: "/api/v1/used-book-list",
        destination: "https://dev.4983.link/api/v1/used-book-list",
      },
      {
        source: "/api/v1/used-book-list/college-and-department",
        destination:
          "https://dev.4983.link/api/v1/used-book-list/college-and-department",
      },
      {
        source: "/api/v1/register/duplicate/studentId",
        destination:
          "https://dev.4983.link/api/v1/register/duplicate/studentId",
      },
      {
        source: "/api/v1/register/duplicate/nickname",
        destination: "https://dev.4983.link/api/v1/register/duplicate/nickname",
      },
      {
        source: "/api/v1/my-pages/certification-number",
        destination:
          "https://dev.4983.link/api/v1/my-pages/certification-number",
      },
      /* View */
      {
        source: "/api/v1/used-book/:usedBookId",
        destination: "https://dev.4983.link/api/v1/used-book/:usedBookId",
      },
      /* 게시물 개별이미지 삭제 */
      {
        source: "/api/v1/used-book/:usedBookId/image/:imageName",
        destination:
          "https://dev.4983.link/api/v1/used-book/:usedBookId/image/:imageName",
      },
      /* Chat */
      {
        source: "/api/v1/chat/list",
        destination: "https://dev.4983.link/api/v1/chat/list",
      },
      {
        source: "/api/v1/register",
        destination: "https://dev.4983.link/api/v1/register",
      },
    ];
  },
});
