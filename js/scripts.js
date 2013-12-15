// var computedHexValue = "ffffff";


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

	colorChanger(hexValue);

}

function colorChanger(hexValue){

	hexValue = "#" + hexValue;

	$("body").animate({ backgroundColor: hexValue }, { queue: false, duration: 800 } );

}