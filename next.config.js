module.exports = () => {
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
    exportPathMap: function () {
      return {
        "/contact": {
          page: "/contact",
        },
      };
    },
  };
};
