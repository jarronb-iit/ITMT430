const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "../../packer/vanilla-install/variables.json" });

module.exports = {
  mongoURI: process.env["database-production-connection"],
  nginxIP: process.env["nginx-web-server-ip"],
  webAddress: process.env["node-app-ip"],
  webServerPort: process.env["nginx-server-port"],
  mongodbIP: process.env["database-ip"],
  jwtSecret: process.env["jwt-secret"],
  redisPassword: process.env["redis-server-password"],
  redisIp: process.env["redis-server-ip"],
  redisPort: process.env["redis-server-port"]
};

console.log("ENV = PRODUCTION");
