//function for creating the rows and columns of a grid.
function createGrid(number){
  for(var i = 0, i < number, i++){
    for(var i = 0, i < number, i++){
      $("#container").append("<div class = "grid"></div>");
    };
  };
  $(".grid").width(960/number);
  $(".grid").height(960/number);

//functon that clears grid for reset
function clearGrid(){
  $(".grid").remove();
};

//functions that prompts the user to input the size of grid.
function refreshGrid(){
  var ask = ("How many squares do you want on each side?");
  clearGrid();
  createGrid(ask);
};

/*creates a 16 by 16 grid where as the user's mouse hovers over a given
square, the square darkens*/
$(document).ready(){
  createGrid(16);
}
$(".grid").mouseover(function(){
  $(this).css("background-color","black");
});
$(".newGrid").click(function() {
       refreshGrid();

       $(".grid").mouseover(function() {
       $(this).css("background-color", "black");
       });
   });
});
