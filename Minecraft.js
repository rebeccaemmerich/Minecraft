var minecraft = {};

minecraft.rules = {
	shovel:["earth","surface"],
	pickaxe:["rocks"],
	axe:["tree","bark"]
};

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
        if(($(this).data("i")==5)&&($(this).data("j")>5)){
            $(this).addClass("rocks");
        }
        if(($(this).data("i")<=5)&&($(this).data("i")>2)&&($(this).data("j")==1)){
            $(this).addClass("bark");
        }
        if(($(this).data("i")<3)&&($(this).data("j")<3)){
            $(this).addClass("tree");
        }
		});

	$(".tool").on("click",minecraft.assignTool);

}


minecraft.extractType = function(object,type) {
	object.removeClass(type);
	$("#selected").removeClass($("#selected").attr("class").split(' ')[1]);
	$("#selected").addClass(type);
}

minecraft.assignTool = function() {
	minecraft.toolActive=$(this).attr("id");
}

minecraft.modifyBoard = function() {
	var pixel = $(this);
	var type = pixel.attr("class").split(' ')[1];
	if(minecraft.toolActive === "selected") {
		var activeClass = $("#selected").attr("class").split(' ')[1];
		$(this).addClass(activeClass);
		$("#selected").removeClass(activeClass);
	}
	if((minecraft.rules[minecraft.toolActive]).includes(type)) {
		minecraft.extractType(pixel,type);
	} 
	else {
		return;
	}
}


minecraft.initBoard();
