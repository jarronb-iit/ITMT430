module.exports = {
  mongoURI: process.env.MONGO_URI,
  webAddress: process.env.WEB_ADDRESS,
  jwtSecret: process.env.JWS_SECRET,
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
};

console.log('NODE_ENV = Production');
