const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config({path:__dirname});
const app = express();
const port = process.env.PORT || 3000;
const callback = (port) => console.log(`Running on port: ${port}`);

/* Allows accessing and setting of the client's cookies. */
app.use(cookieParser());
/* Always useful. */
app.use(cors());
/* Allows you to access data that's being sent along in the body. */
app.use(bodyParser());

module.exports = () => {
    /* This runs our server on port */
    app.listen(port, callback(port))
    return [app, express];
};
