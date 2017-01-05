$(".navLinks:eq(0)").css("color", "rgb(229,221,221)");

$(".navLinks").click(function(){
  $(".navLinks").css("color", "rgb(255,255,255)");
  $(this).css("color", "rgb(229,221,221)");
});
