
var Translator = ((originalTranslator) => {


	var toPolish = {
		"merry": "wesolych",
		"christmas": "swiat",
		"and": "i",
		"happy": "szczesliwego",
		"new": "nowego",
		"year": "roku"
	}

	// Translation logic to be covered in DOM
	originalTranslator.getPolish = (english) => {
		return toPolish[english];
	}

	return originalTranslator

})(Translator);


