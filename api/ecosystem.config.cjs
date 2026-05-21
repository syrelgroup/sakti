module.exports = {
  apps: [
    {
      name: "sakti",
      script: "./dist/src/index.js",
      env: {
        PORT: 5001,
        NODE_ENV: "production",
      },
    },
  ],
};
