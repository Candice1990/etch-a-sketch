
var style = "default";

$(document).ready(function(){
  createTable(50)
  toggleStyle(colorDefault);
  buttonClick(style);

  $("#clear").click(function(){
    $("td").removeAttr("style")
    $("td").addClass("startGradient");
  });

  $("#new-pad").click(function(){
    newSketchPad();
  });

  $("#rainbow").click(function(){
    style = "rainbow"
    buttonClick(style);
    toggleStyle(rainbowColors);
    });
  $("#gradient").click(function(){
    style = "gradient"
    buttonClick(style);
    $("td").addClass("startGradient");
    toggleStyle(gradientBlack);
  });
  $("#default").click(function(){
    style = "default"
    buttonClick(style);
    toggleStyle(colorDefault);
  })
//  $(".styles").click(function(){
//    $(this).toggleClass('clicked')
  //});
});


//function for creating sketchpad size based on user input
function createTable(userChoice) {
  $(".wrapper").append("<table></table>");
  for (var i = 0; i < userChoice; i++){
    $("table").append("<tr ID='row" + i + "' ");
    for (var j = 0; j < userChoice; j++) {
      $("#row" + i).append("<td></td>");
    }
    $("table").append("</tr>");
  }
}

//function for new sketchpad with different styles
function newSketchPad(){
  var input = prompt("Enter the size of the sketchpad (number of rows under 100)")
  if (input < 1){
    prompt("Enter a valid number please.");
  } else if (input > 100) {
    prompt("Please put a number less than 100.");
  } else if (input === null){
    return;
  }
  $("table").remove();
//To prevent people from putting a wrong number
    if(input < 1){
    createTable(50);
  } else if (input > 100){
    createTable(50);
  } else {
    createTable(input)
  }
  if (style === "default") {
    toggleStyle(colorDefault);
  } else if (style === "rainbow") {
    toggleStyle(rainbowColors);
  } else if (style ==="startGradient"){
    $("td").addClass("startGradient");
    toggleStyle(gradientBlack);

  }
};

//Clicking a style on or off

function toggleStyle(style){
  $("td").off("mouseenter");
  $("td").on("mouseenter", style);
  if (style === "colorDefault"){
    style = "default";
  } else if (style==="rainbowColors"){
    style = "rainbow";
  }

};

function colorDefault() {
  $(this).css({"background-color": "black",
              "opacity": "1.0"});
}

function rainbowColors() {
  var newColor ="#"+ Math.floor(Math.random()*16777215).toString(16);

  $(this).css({"background-color": newColor, "opacity":"1.0"})

}



// When user mouses over a box, colors it to a darker shade of black
// each time (10% increase in opacity each time the same box is hovered
function gradientBlack() {
    if (!$(this).hasClass("startGradient") &&
        $(this).css("opacity") > 0) {
            $(this).css("opacity", "+=0.1");
        }
    if ($(this).hasClass("startGradient")) {
        $(this).css({"background-color": "black",
                     "opacity": "0.1"});
        $(this).removeClass("startGradient");
        }
}
function buttonClick(style){
  if (style === "default"){
    $("#default").addClass("clicked");
    $("#rainbow").removeClass("clicked");
    $("#gradient").removeClass("clicked");
  } else if (style ==="rainbow"){
    $("#rainbow").addClass("clicked");
    $("#default").removeClass("clicked");
    $("#gradient").removeClass("clicked");
  } else {
    $("#gradient").addClass("clicked");
    $("#rainbow").removeClass("clicked");
    $("#default").removeClass("clicked");
  }
}
