var pg = require("pg");

var client = new pg.Client(process.env.DATABASE_URL);

var exports = module.exports = {};

exports.connectDB = function(callback){
  // Connect to postgres //
  client.connect(function(){
    console.log("Connected!");
  })
};

exports.insertDB = function(uid, pid, body) {
  console.log("Making query");
  client.query({
    text: "INSERT INTO posts VALUES ($1, $2, $3, NOW()::timestamp, 0)",
    values: [
      uid,
      pid,
      body
    ]
  }, function(err, result){
    if(err)
      console.log(err);
    else
      console.log("Success");
  });
}

exports.rankDB = function(pid, body){
  client.query("UPDATE posts SET rank=rank+1 WHERE pid=$1", [pid], function(err, result){
    if(err)
      console.log(err);
    console.log("Rank updated");
  })
};

exports.disconnectDB = function(){
  client.end(function(){
    console.log("Disconnected!");
  })
};

exports.newPostsDB = function(res){
  client.query("SELECT NOW()::timestamp AS currentDate, * from posts ORDER BY time DESC", function(err, result){
    console.log(result.rows);
    res.set({
      "Content-Type": "application/json",
      "X-Content-Type-Options": "nosniff"
    });
    res.end(JSON.stringify(result.rows));
  })
}

exports.topPostsDB = function(res){
  client.query("SELECT NOW()::timestamp AS currentDate, * from posts ORDER BY rank DESC", function(err, result){
    console.log(result.rows);
    res.set({
      "Content-Type": "application/json",
      "X-Content-Type-Options": "nosniff"
    });
    res.end(JSON.stringify(result.rows));
  })
}

exports.myPostsDB = function(uid, res){
  client.query("SELECT NOW()::timestamp AS currentDate, * from posts WHERE uid=$1 ORDER BY time DESC", [uid], function(err, result){
    console.log(result.rows);
    res.set({
      "Content-Type": "application/json",
      "X-Content-Type-Options": "nosniff"
    });
    res.end(JSON.stringify(result.rows));
  })
}

exports.expireDB = function(end){
  client.query("DELETE FROM posts WHERE DATE_PART('day', NOW()::timestamp-time) >= 1", function(err, result){
    console.log("ENDING");
    end();
  })
}

exports.genID = function(PID, body, res) {
  var userID = "";
  for (var i = 0; i < 16; i++) {
    var number = Math.random();
    number *= 42;
    number += 74;
    number = Math.floor(number);
    userID += String.fromCharCode(number);
  }

  client.query("SELECT * FROM posts WHERE uid=$1", [userID], function(err, result){
    if(result.rows.length !== 0)
      exports.genID(); else{
      exports.insertDB(userID, PID, body)
      res.set({
        "Content-Type": "text/plain",
        "X-Content-Type-Options": "nosniff"
      });
      res.end(userID, 'utf-8');
    }
  })
}
