var express      = require('express');
var path         = require("path");
var bodyParser   = require("body-parser");
var cors         = require("cors");
var AsyncPolling = require("async-polling");
var db           = require("./query.js");
var app          = express();
var port         = process.env.PORT || 3000;

db.connectDB();

AsyncPolling(function(end){
  console.log("EXPIRING");
  db.expireDB(end);
}, 60000).run();


// Automatically send static content //
app.use(function(req, res, next){
  res.set({"X-Content-Type-Options": "nosniff"});
  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "/static")));
app.use("/app", express.static(path.join(__dirname, "/app")));
app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));

app.post("/addPost", function(req, res, next){
  var reqBody = req.body;
  if(reqBody.UID === null)
    db.genID(reqBody.PID, reqBody.body, res);
  else{
    db.insertDB(reqBody.UID, reqBody.PID, reqBody.body);
    res.set({
      "Content-Type": "text/plain",
      "X-Content-Type-Options": "nosniff"
    });
    res.end(reqBody.UID, 'utf-8');
  }
});

app.get("/newPosts", function(req, res, next){
  db.newPostsDB(res);
})

app.get("/browsePosts", function(req, res, next){
  db.browsePostsDB(res);
})

app.get("/topPosts", function(req, res, next){
  db.topPostsDB(res);
})

app.post("/myPosts", function(req, res, next){
  var uid = req.body.uid;
  db.myPostsDB(uid, res);
});

app.post("/likePost", function(req, res, next){
  console.log("HERE")
  var pid = req.body.pid;
  console.log(pid);
  db.likePostDB(pid, res);
})

app.post("/unlikePost", function(req, res, next){
  console.log("THERE")
  var pid = req.body.pid;
  console.log(pid);
  db.unlikePostDB(pid, res);
})

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, '/static', '/index.html'));
});

app.listen(port, function(){
  console.log("App is listening on port " + port);
});
