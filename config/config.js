const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "secret_message",
  databaseUri: "postgres://postgres:root0@localhost:5432/airline",
};

export default config;
