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
    entry.save().then(console.log("Entry saved..."));
  })
  .catch(error => {
    console.log(error);
  });

var http = require("http");
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bye World\n");
  })
  .listen(8080, keys.devLocalHost || "192.168.50.12");
console.log(
  process.env.NODE_ENV === "development"
    ? `Server running at: ${keys.devLocalHost}:80`
    : "Server running at http://192.168.50.12:8080/"
);
