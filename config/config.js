const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "secret_message",
  databaseUri: "postgres://utgzulfz:pQzv_vmyJH24DpuGOFGUo81W-WMiduKm@ziggy.db.elephantsql.com:5432/utgzulfz",
};

export default config;
