const mongo = require("mongodb");
const mongoose = require("mongoose");
const express = require("express"),
  http = require("http"),
  app = express(),
  server = http.createServer(app);

//LOAD KEYS
const keys = require("./config/keys");

let webAddress = "";
let port = keys.port;

process.env.NODE_ENV === "development"
  ? (webAddress = keys.devLocalHost)
  : (webAddress = keys.nodeIP);

//CONNECT TO MOGODB
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
  res.json("{msg:Bye World}");
});

server.listen(port, webAddress, () => {
  console.log("Server running at: " + webAddress + ":" + port);
});
