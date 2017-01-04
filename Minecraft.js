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
			} 
		});

	$(".tool").on("click",minecraft.assignTool);

}

minecraft.bordersSky = function() {
	return true;
	// i = $(this).data("i");
	// j = $(this).data("j");
	// console.log($("div[data='"+i+"']"));
}

minecraft.assignTool = function() {
	minecraft.toolActive=$(this).attr("id");
}

minecraft.modifyBoard = function() {
	if(minecraft.bordersSky) {
		if (minecraft.toolActive === "selected") {
			var activeClass = $("#selected").attr("class").split(' ')[1]
			$(this).addClass(activeClass);
			$("#selected").removeClass(activeClass);
		}
		if (minecraft.toolActive === "shovel" && $(this).attr("class").split(' ')[1] === "earth") {
			$(this).attr("class","pixel");
			$("#selected").addClass("earth");
		}
		if (minecraft.toolActive === "pickaxe" && $(this).attr("class").split(' ')[1] === "earth") {
			$(this).attr("class","pixel");
			$("#selected").addClass("earth");
		}
		if (minecraft.toolActive === "axe" && $(this).attr("class").split(' ')[1] === "earth") {
			$(this).attr("class","pixel");
			$("#selected").addClass("earth");
		}
		else {
			return;
		}
	} else {
		return;
	}
}

minecraft.initBoard();