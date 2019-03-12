const mongoose = require("mongoose");
const path = require("path");
const express = require("express"),
  http = require("http"),
  app = express(),
  server = http.createServer(app);

// Load Keys
const keys = require("./config/keys");

let port = keys.port || 5000;
let webAddress = keys.webAddress;

// MongoDB connection
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("MONGODB Connected");
    // Models
    var Schema = mongoose.Schema;

    var schema = new Schema({ word: String });
    var Sample = mongoose.model("Words", schema);

    let entry = new Sample({ word: "DONE" });
    entry.save().then(console.log("Entry created..."));
  })
  .catch(error => {
    console.log(error);
  });

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

server.listen(port, webAddress, () => {
  console.log("Server running at: " + webAddress + ":" + port);
});
