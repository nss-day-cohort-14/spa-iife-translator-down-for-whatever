
var Translator = ((originalTranslator) => {


	var polishLexicon = {
		"merry": "wesolych",
		"christmas": "swiat",
		"and": "i",
		"happy": "szczesliwego",
		"new": "nowego",
		"year": "roku"
	}

	// Translation logic to be covered in DOM
	originalTranslator.getPolish = (englishWord) => {
		// Accessing key:value pair with bracket notation
		return polishLexicon[englishWord];
	}

	return originalTranslator

})(Translator || {});


