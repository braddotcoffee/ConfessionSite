$(function(){
  console.log("Document Loaded")
  $grid = $("#packery").packery({
    itemSelector: '.grid-item',
    rowHeight: '.grid-item',
    gutter: 10
  })
  console.log($grid);

  $grid.find('.grid-item').each(function(i, item){
    var draggie = new Draggabilly(item);
    console.log("Maybe this shit is remotely working?")

    $grid.packery("bindDraggabillyEvents", draggie);
  })
  $grid.packery();
})
