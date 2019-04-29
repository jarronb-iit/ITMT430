const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "../../packer/vanilla-install/variables.json" });

module.exports = {
  cloudinaryCloudName: process.env['cloudinary-cloud-name'],
  cloudinaryApiKey: process.env['cloudinary-api-key'],
  cloudinaryApiSecret: process.env['cloudinary-api-secret']
};

console.log("NODE_ENV = Production");
