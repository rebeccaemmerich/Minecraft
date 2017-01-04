var minecraft = {};



minecraft.initBoard = function(){ 

var gameboard = $("#gameboard");
var toolbox = $("#toolbox");


//create matrix
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        gameboard = $('#gameboard');
        gameboard.append($("<div></div>").addClass("pixel").data("i",i).data("j",j));
    }
}

//assign classes to each pixel
$(".pixel").each(function(){
	if($(this).data("i")>6){
		$(this).addClass("earth");
		}
	if($(this).data("i")===6){
		$(this).addClass("surface");
	} else {
		$(this).addClass("sky");
	}
	});
}

minecraft.initBoard();