const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "../../packer/vanilla-install/variables.json" });

module.exports = {
  mongoURI: process.env["database-production-connection"],
  nginxIP: process.env["nginx-web-server-ip"],
  webAddress: process.env["node-app-ip"],
  port: process.env.port,
  mongodbIP: process.env["database-ip"],
  jwtSecret: process.env["jwt-secret"]
};

console.log("ENV = PRODUCTION");
