var express = require('express');
var path    = require("path");
var app     = express();
var port    = process.env.PORT || 3000;
var cors    = require("cors");

// Automatically send static content //
app.use(function(req, res, next){
  res.set({"X-Content-Type-Options": "nosniff"});
  return next();
});

app.use(express.static(path.join(__dirname, "/static")));
app.use("/app", express.static(path.join(__dirname, "/app")));
app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));

app.listen(port, function(){
  console.log("App is listening on port " + port);
});
