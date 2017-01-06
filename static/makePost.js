function makePost(){
  var postBox = document.getElementById("postBox");
  var req = new XMLHttpRequest();

  req.onreadystatechange = function(){
    postResponse(req, postBox.value);
  }

  if (postBox.value.length === 0)
    return;

  req.open("POST", "/addPost", true);
  req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  var ID = localStorage.getItem("UID"); 
  req.send(JSON.stringify({"body": postBox.value, "UID": ID, "PID": genID()}));
}

function postResponse(req, post){
  if(req.readyState != XMLHttpRequest.DONE)
    return;

  if(req.status === 200){
    localStorage.setItem("UID", req.response);
    document.getElementById("postBox").value = "";
    $("#postBox").blur();
    window.location.reload(true);
    return;
  }
}

function genID() {
    var userID = "";
    for (var i = 0; i < 16; i++) {
        var number = Math.random();
        number *= 42;
        number += 74;
        number = Math.floor(number);
        userID += String.fromCharCode(number);
    }
    console.log(userID);
    return userID;
}

var submitButton = document.getElementById("submitPost");
submitButton.addEventListener("click", makePost);
