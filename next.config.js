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
  };
};
