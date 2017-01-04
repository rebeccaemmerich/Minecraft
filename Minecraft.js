var gameboard = $("#gameboard");


for (var v = 0; v < 10; v++) {

    for (var w = 0; w < 10; w++) {
        $('#gameboard').append($("<div></div>").addClass("pixel"));
    }
}
