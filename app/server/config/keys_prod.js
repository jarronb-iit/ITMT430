const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "../../packer/vanilla-install/variables.json" });

module.exports = {
  mongoURI: process.env["database-production-connection"],
  nginxIP: process.env["nginx-web-server-ip"],
  nodeIP: process.env["node-app-ip"],
  port: process.env.port,
  webAddress: process.env["database-ip"]
};

console.log("ENV = PRODUCTION");
