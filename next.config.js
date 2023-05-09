const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_username: process.env.DB_USERNAME,
        db_password: process.env.DB_PASSWORD,
        db_cluster: process.env.DB_CLUSTER,
        db_database: "HUY'S_BLOG_DEV",
        url: "http://localhost:3000",
      },
      reactStrictMode: true,
    };
  }

  return {
    env: {
      db_username: "vuducanhhuy",
      db_password: "Zf55Y78qKpBJz8gk",
      db_cluster: "cluster0",
      db_database: "HUY'S_BLOG_PROD",
      url: "https://huy-blog-app.vercel.app",
    },
    reactStrictMode: true,
  };
};
