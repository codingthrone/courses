const express = require("express");
require("dotenv").config({path:__dirname});
const app = express();
const port = process.env.PORT || 3000;
const callback = (port) => console.log(`Running on port: ${port}`);

// This runs our server on port: port and takes in the callback callback
app.listen(port, callback(port));
