function updateBox(){
  var max = 500;
  var len = $("#postBox").val().length;
  var rem = max - len;
  $("#charNum").text(rem);
  $("#postBox").trigger("input");
}

$("#postBox").keydown(function() {
  updateBox();
});

$('#postBox').keyup(function(){
  updateBox();
});

$("#postBox").live("input", function(){
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + "px";
});

$("#postBox").blur(function(){
  if($(this).val().length === 0){
    this.style.height = "1.5em";
  }
});

$("#postBox").focus(function(){
  if($(this).val().length === 0){
    this.style.height = "150%";
  }
})
