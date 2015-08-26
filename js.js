function clearGrid(){
	$('.container div').css('background-color', '');
};

function setNewGrid(){
	$('.container').empty();
	gridSize = prompt("Set Grid Size(16 is default).");

	for(i = 0; i < gridSize * gridSize; i++){
		$('.container').append("<div></div>")
	};
}

function randomColor(){
	setNewGrid();
	$('.container div').hover(function(){
		$(this).css("background-color", randomColorGenerator());
	});
};


function classicHover(){
	setNewGrid();
	$('.container div').hover(function(){
		$(this).css('background-color', 'green');
	});
};


function cool(){
	setNewGrid();
	$(".container div").mouseenter(function() {
	  $(this).fadeTo(100, 1);
	});

	$(".container div").mouseleave(function() {
		$(this).fadeTo(400, 0);
	});
};


function trace(){
	setNewGrid();
	$(".container div").mouseenter(function() {
	  $(this).fadeTo(100, 0);
	});

	$(".container div").mouseleave(function() {
		$(this).fadeTo(400, 1);
	});
};


function randomColorGenerator(){
	var red = Math.floor((Math.random()*255));
	var green = Math.floor((Math.random()*255));
	var blue = Math.floor((Math.random()*255));
	return "rgb(" + red + "," + green + "," + blue + ")";
};


$(document).ready(function(){
	for(i=0; i<256; i++){
		$('.container').append('<div><div>');
	};

	$('.container div').hover(function(){
		$(this).css('background-color', 'green');
	});

	$('#button2').click(function(){
		$('.container div').css('background-color', '');
	});
});