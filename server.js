const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express'),
  http = require('http'),
  app = express(),
  server = http.createServer(app);
const redis = require('redis');
const bcrypt = require('bcryptjs');

// Load routes files
const buyer = require('./routes/api/buyer');
const listings = require('./routes/api/listings');
const seller = require('./routes/api/seller');
const user = require('./routes/api/user');
const auth = require('./routes/api/auth');
const admin = require('./routes/api/admin');

// Load Keys
const keys = require('./config/keys');

let webServerPort = keys.webServerPort || process.env.PORT || 5000;
let webAddress = keys.webAddress;

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('[MONGODB]: MongoDB Connected');
  })
  .catch(error => {
    console.log('[MONGODB]:', error);
  });

// Use Routes
app.use('/api/buyer', buyer);
app.use('/api/listings', listings);
app.use('/api/seller', seller);
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/admin', admin);

// Server Static Assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

server.listen(webServerPort, webAddress, () => {
  console.log(
    '[EXPRESS]: Server running at: ' + webAddress + ':' + webServerPort
  );
});
