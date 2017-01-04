var minecraft = {};


minecraft.toolActive = "";
minecraft.initBoard = function(){ 
	var gameboard = $("#gameboard");
	var toolbox = $("#toolbox");
	//create matrix
	for (var i = 0; i < 10; i++) {
	    for (var j = 0; j < 10; j++) {
	        gameboard = $('#gameboard');
	        gameboard.append($("<div></div>").addClass("pixel").data("i",i).data("j",j).on("click",minecraft.modifyBoard));
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

	$(".tool").on("click",minecraft.assignTool);
}

minecraft.assignTool = function() {
	console.log($(this).attr("id"));
}
minecraft.modifyBoard = function() {
	console.log($(this).attr("class").split(' ')[1]);
}

minecraft.initBoard();