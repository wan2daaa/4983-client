const runtimeCaching = require("next-pwa/cache.js");

const isProduction = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: !isProduction,
  runtimeCaching,
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
        destination: "http://15.165.173.111/api/v1/login",
      },
      /* 판매글 등록 */
      {
        source: "/api/v1/used-book",
        destination: "http://15.165.173.111/api/v1/used-book",
      },
      {
        source: "/api/v1/chat-room",
        destination: "http://15.165.173.111/api/v1/chat-room",
      },
      {
        source: "/api/v1/chat-room/:chatRoomId",
        destination: "http://15.165.173.111/api/v1/chat-room/:chatRoomId",
      },
      {
        source: "/api/v1/chat-room/interact",
        destination: "http://15.165.173.111/api/v1/chat-room/interact",
      },
      {
        source: "/api/v1/chat-room/not-read/:chatRoomId",
        destination:
          "http://15.165.173.111/api/v1/chat-room/not-read/:chatRoomId",
      },
      {
        source: "/api/v1/locker/chat-room-available-date",
        destination:
          "http://15.165.173.111/api/v1/locker/chat-room-available-date",
      },
      {
        source: "/api/v1/locker",
        destination: "http://15.165.173.111/api/v1/locker",
      },
      /* Main */
      {
        source: "/api/v1/used-book-list",
        destination: "http://15.165.173.111/api/v1/used-book-list",
      },
      {
        source: "/api/v1/used-book-list/college-and-department",
        destination:
          "http://15.165.173.111/api/v1/used-book-list/college-and-department",
      },
      {
        source: "/api/v1/used-book-list/search",
        destination: "http://15.165.173.111:8080/api/v1/used-book-list/search",
      },
      {
        source: "/api/v1/register/duplicate/studentId",
        destination:
          "http://15.165.173.111/api/v1/register/duplicate/studentId",
      },
      {
        source: "/api/v1/register/duplicate/nickname",
        destination: "http://15.165.173.111/api/v1/register/duplicate/nickname",
      },
      {
        source: "/api/v1/my-pages/certification-number",
        destination:
          "http://15.165.173.111/api/v1/my-pages/certification-number",
      },
      /* View */
      {
        source: "/api/v1/used-book/:usedBookId",
        destination: "http://15.165.173.111/api/v1/used-book/:usedBookId",
      },
      /* 게시물 개별이미지 삭제 */
      {
        source: "/api/v1/used-book/:usedBookId/image/:imageName",
        destination:
          "http://15.165.173.111/api/v1/used-book/:usedBookId/image/:imageName",
      },
      /* Chat */
      {
        source: "/api/v1/chat/list",
        destination: "http://15.165.173.111/api/v1/chat/list",
      },
      {
        source: "/api/v1/register",
        destination: "http://15.165.173.111/api/v1/register",
      },
      /* 마이페이지 판매내역 List */
      {
        source: "/api/v1/my-pages/book-sales-detail-list",
        destination:
          "http://15.165.173.111/api/v1/my-pages/book-sales-detail-list",
      },
      /* 마이페이지 구매내역 List */
      {
        source: "/api/v1/my-pages/book-purchase-detail-list",
        destination:
          "http://15.165.173.111/api/v1/my-pages/book-purchase-detail-list",
      },
      /* 로그아웃 */
      {
        source: "/api/v1/withdraw",
        destination: "http://15.165.173.111/api/v1/withdraw",
      },
      /* 회원탈퇴 */
      {
        source: "/api/v1/logout",
        destination: "http://15.165.173.111/api/v1/logout",
      },
    ];
  },
});
