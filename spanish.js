var Translator = (function(translate){
		var spanishLexicon={
		"merry": "feliz",
		"christmas": "navidad",
		"and":"y",
		"a":"un",
		"happy":"feliz",
		"new":"nuevo",
		"year":"año"
	}
	translate.getSpanish = function(englishWord){
		return spanishLexicon[englishWord]

	}
	return translate;

})(Translator);

