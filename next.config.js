const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_username: process.env.DB_USERNAME,
        db_password: process.env.DB_PASSWORD,
        db_cluster: process.env.DB_CLUSTER,
        db_database: "HUY'S_BLOG_DEV",
      },
      reactStrictMode: true,
    };
  }

  return {
    env: {
      db_username: process.env.DB_USERNAME,
      db_password: process.env.DB_PASSWORD,
      db_cluster: process.env.DB_CLUSTER,
      db_database: "HUY'S_BLOG",
    },
    reactStrictMode: true,
  };
};
