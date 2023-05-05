const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_username: "vuducanhhuy",
        db_password: "Zf55Y78qKpBJz8gk",
        db_cluster: "cluster0",
        db_database: "HUY'S_BLOG_DEV",
      },
      reactStrictMode: true,
    };
  }

  return {
    env: {
      db_username: "vuducanhhuy",
      db_password: "Zf55Y78qKpBJz8gk",
      db_cluster: "cluster0",
      db_database: "HUY'S_BLOG",
    },
    reactStrictMode: true,
  };
};
