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
	translate.getSpanish = function(englishWords){
		var spanishWords=[];
		for(key in spanishLexicon){
			englishWords.forEach(function(word){
				if(word===key){
					spanishWords.push(spanishLexicon[key]);
					
				}
			});
		}
		return spanishWords;

	}
	return translate;

})(Translator);
