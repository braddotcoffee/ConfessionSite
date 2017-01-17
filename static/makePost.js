if(localStorage.getItem("visited") === null){
  localStorage.setItem("visited", "true");
  bootbox.dialog({
    message: "<h2>Welcome to TempFession!</h2> <p>TempFession is a website designed to help you \
    clear your conscience. Make a confession in the box below, and it will be deleted from \
    our servers 24 hours after you hit 'Submit'! This allows you an outlet for your confessions\
    that is impermanent - a quality that is hard to find online these days!</p> <p>We have three ways\
    to browse posts here at TempFession - Browse, which will choose posts in a random order, Top, \
    which will display the most liked posts first, and New, which will display the newest posts \
    first. Feel free to start reading! If at any point you deem a post inappropriate, simply hit \
    the black X to report it.</p> <p>Hope you enjoy!</p>",
    closeButton: true,
    buttons: {
      ok: {
        label: "Enter Site!",
        className: "btn-primary"
      }
    }
  })
}

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
  var result = "";
  var length = 16;
  var possibleChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = length; i > 0; --i)
    result += possibleChars[Math.floor(Math.random() * possibleChars.length)]
  return result
}

function handleLike(button){
  button.text("Liked"); 
  var req = new XMLHttpRequest();

}

var submitButton = document.getElementById("submitPost");
submitButton.addEventListener("click", makePost);
