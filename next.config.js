const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "techvccloud.mediacdn.vn",
          },
        ],
      },
      reactStrictMode: true,
      env: {
        NEXT_PUBLIC_URL: "http://127.0.0.1:3000",
      },
    };
  }

  return {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "techvccloud.mediacdn.vn",
        },
      ],
    },
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_URL: "https://huy-blog-app.vercel.app",
    },
  };
};
