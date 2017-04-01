//function for creating the rows and columns of a grid.

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };

    };
    $(".grid").width(500/x);
    $(".grid").height(500/x);
};


//functon that clears grid for reset
function clearGrid(){
  $(".grid").remove();
};

//functions that prompts the user to input the size of grid.
function refreshGrid(){
    var ask = prompt("How many boxes per side? (limit 50)");
    if (ask < 51){
      clearGrid();
      createGrid(ask);
    } else {
      var newAsk = prompt("Choose between 0 and 50.")
        if (newAsk < 51) {
          clearGrid();
          createGrid(newAsk);
      } else {
        alert("Goddamn it, what did I say?");
      };

    };

};

/*creates a 16 by 16 grid where as the user's mouse hovers over a given
square, the square darkens*/
$(document).ready(function() {
    createGrid(25);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        $(this).css("transition", "0.1s");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        $(this).css("transition", "0.1s");
        });
    });
});
