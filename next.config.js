const runtimeCaching = require("next-pwa/cache.js");

const isProduction = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: !isProduction,
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
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
      /* Chatbot */
      {
        source: "/api/v1/chat-room",
        destination: "http://15.165.173.111/api/v1/chat-room",
      },
      {
        source: "/api/v1/chat/:chatRoomId",
        destination: "http://15.165.173.111/api/v1/chat/:chatRoomId",
      },
      /* Main */
      {
        source: "/api/v1/used-book-list",
        destination: "http://15.165.173.111/api/v1/used-book-list",
      },
      /* Chat */
      {
        source: "/api/v1/chat/list",
        destination: "http://15.165.173.111/api/v1/chat/list",
      },
    ];
  },
});
