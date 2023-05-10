const {
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     images: {
  //       remotePatterns: [
  //         {
  //           protocol: "https",
  //           hostname: "techvccloud.mediacdn.vn",
  //         },
  //       ],
  //     },
  //     env: {
  //       db_username: process.env.DB_USERNAME,
  //       db_password: process.env.DB_PASSWORD,
  //       db_cluster: process.env.DB_CLUSTER,
  //       db_database: process.env.DB_DATABASE,
  //       url: "http://127.0.0.1:3000",
  //     },
  //     reactStrictMode: true,
  //   };
  // }

  // return {
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "techvccloud.mediacdn.vn",
  //       },
  //     ],
  //   },
  //   env: {
  //     db_username: "vuducanhhuy",
  //     db_password: "Zf55Y78qKpBJz8gk",
  //     db_cluster: "cluster0",
  //     db_database: process.env.DB_DATABASE,
  //     url: "https://huy-blog-app.vercel.app",
  //   },
  //   reactStrictMode: true,
  // };

  return {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "techvccloud.mediacdn.vn",
        },
      ],
    },
    env: {
      db_username: process.env.DB_USERNAME,
      db_password: process.env.DB_PASSWORD,
      db_cluster: process.env.DB_CLUSTER,
      db_database: process.env.DB_DATABASE,
    },
    reactStrictMode: true,
  };
};
