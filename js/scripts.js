/*
Turns out most of the Hex/RGB conversion is covered by built-in functions within
jQuery, but I didn't discover that until I had already written my own versions,
so I just kept mine.
*/

$(function() {

	// Creates sliders for the RGB values
    $( ".slider" ).slider({
    	max:255,
    	value: 255,
    	slide: function( event, ui ) {}
    });

    // Connects each slider to the value it represents
    $("#red-slider").on("slide", function(event, ui){
    	$("#red").val(ui.value);
    	rgbToHex();
    });
    $("#green-slider").on("slide", function(event, ui){
    	$("#green").val(ui.value);
    	rgbToHex();
    });
    $("#blue-slider").on("slide", function(event, ui){
    	$("#blue").val(ui.value);
    	rgbToHex();
    });
  });

function rgbToHex() {

	// Converts to base-16
	computedRedHex = parseInt($("#red").val()).toString(16); // Parse red
	computedGreenHex = parseInt($("#green").val()).toString(16); // Parse green
	computedBlueHex = parseInt($("#blue").val()).toString(16); // Parse blue

	// Makes sure all values are two digit numbers
	if (computedRedHex.length < 2) { computedRedHex = "0" + computedRedHex; }
	else if (computedRedHex == "NaN") { computedRedHex = "00"; }

	if (computedGreenHex.length < 2) { computedGreenHex = "0" + computedGreenHex; }
	else if (computedGreenHex == "NaN") { computedGreenHex = "00"; }

	if (computedBlueHex.length < 2) { computedBlueHex = "0" + computedBlueHex; }
	else if (computedBlueHex == "NaN") { computedBlueHex = "00"; }

	// Combines individual colors into complete hex code
	computedHexValue = computedRedHex + computedGreenHex + computedBlueHex;

	// Sets the shown value
	$("#hex").val(computedHexValue);

	colorChanger(computedHexValue);

	// Sets the sliders' positions to the inputs' values
	$("#red-slider").slider("option", "value", $("#red").val());
	$("#green-slider").slider("option", "value", $("#green").val());
	$("#blue-slider").slider("option", "value", $("#blue").val());

}

function hexToRgb() {

	hexValue = $("#hex").val();

	// Remove leading '#' if present
	if (hexValue.charAt(0) == "#") {
		hexValue = hexValue.slice(1);
	}

	// Deal with three-character shorthand for repeated values:
	if (hexValue.length == 3) {
		hexValue = hexValue.charAt(0)+hexValue.charAt(0)+
			hexValue.charAt(1)+hexValue.charAt(1)+
			hexValue.charAt(2)+hexValue.charAt(2);
	}

	// Set the shown fields to the base-10 values
	$("#red").val(parseInt(hexValue.substring(0, 2), 16));
	$("#green").val(parseInt(hexValue.substring(2, 4), 16));
	$("#blue").val(parseInt(hexValue.substring(4, 6), 16));

	// Sets the sliders' positions to the inputs' values
	$("#red-slider").slider("option", "value", $("#red").val());
	$("#green-slider").slider("option", "value", $("#green").val());
	$("#blue-slider").slider("option", "value", $("#blue").val());

	colorChanger(hexValue);

}

function colorChanger(hexValue){

	hexValue = "#" + hexValue;

	$("body").animate({ backgroundColor: hexValue }, { queue: false, duration: 800 } );

}