const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express"),
  http = require("http"),
  app = express(),
  server = http.createServer(app);
const redis = require("redis");

// Load routes files
const buyer = require("./routes/api/buyer");
const property = require("./routes/api/property");
const seller = require("./routes/api/seller");
const user = require("./routes/api/user");
const auth = require("./routes/api/auth");

// Load Keys
const keys = require("./config/keys");

let webServerPort = keys.webServerPort || 5000;
let webAddress = keys.webAddress;

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("MONGODB Connected");
    // Models
    // var Schema = mongoose.Schema;

    // var schema = new Schema({ word: String });
    // var Sample = mongoose.model("Words", schema);

    // let entry = new Sample({ word: "DONE" });
    // entry.save().then(console.log("Entry created..."));
  })
  .catch(error => {
    console.log(error);
  });

// Redis caching server connection
const redisClient = redis.createClient({
  host: "192.168.50.15",
  port: keys.port
});
redisClient.auth(keys.redisPassword, function(err, reply) {
  reply === "OK"
    ? console.log("[REDIS]: Redis connection authenticated")
    : console.log("[REDIS]: Redis connection not authenticated");
});

redisClient.on("ready", function() {
  console.log("[REDIS]: Redis is ready");
});

redisClient.on("error", function() {
  console.log("[REDIS]: Error in Redis");
});

if (process.env.NODE_ENV === "development") {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}

// Use Routes
app.use("/api/buyer", buyer);
app.use("/api/property", property);
app.use("/api/seller", seller);
app.use("/api/user", user);
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.json({ msg: "Bye world" });
});

// Server Static Assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

server.listen(webServerPort, webAddress, () => {
  console.log("Server running at: " + webAddress + ":" + webServerPort);
});
