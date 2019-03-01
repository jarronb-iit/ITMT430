const mongo = require("mongodb");
const mongoose = require("mongoose");

//LOAD KEYS
const keys = require("./config/keys");

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

var http = require("http");
let webAddress = "";
let port = keys.port;

process.env.NODE_ENV === "development"
  ? (webAddress = keys.devLocalHost)
  : (webAddress = keys.nodeIP);
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bye World\n");
  })
  .listen(port, webAddress);
console.log("Server running at: " + webAddress + ":" + port);
