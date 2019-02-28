const mongo = require("mongodb");
const mongoose = require("mongoose");

//CONNECT TO MOGODB
mongoose
  .connect(
    "mongodb://production-user:production-password@192.168.50.13:27017/production-db",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MONGODB Connected");
    // Models
    var Schema = mongoose.Schema;

    var schema = new Schema({ word: String });
    var Sample = mongoose.model("Words", schema);

    let entry = new Sample({ word: "DONE" });
    entry.save().then(console.log("done"));
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
  .listen(8080, "192.168.50.12");
console.log("Server running at http://192.168.50.12:8080/");
