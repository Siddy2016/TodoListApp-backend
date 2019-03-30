const express = require("express");
const app = express();
const config = require("./config/appConfig");
const routes = require("./routes/routing");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socketLib = require('./libraries/socketlib')
var http = require("http")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var server = http.createServer(app)
server.listen(config.port);
socketLib.setServer(server)

mongoose.set('useCreateIndex', true);
mongoose.connect(config.db.uri,{ useNewUrlParser: true });

mongoose.connection.on("open", function (err) {
    if (err) {
        console.log("Error Occured!Connection Not Established");
    }
    else {
        console.log(config.env,config.port)
        console.log("Database Connection Established!");
    }
});

routes.setRouters(app);
