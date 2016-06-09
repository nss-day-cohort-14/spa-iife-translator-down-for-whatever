//Ititialize IIFE Translator




var Translator = (function(OldTranslator) {


    var frenchLexicon = {
      "merry":"Joyeux",
      "christmas":"Noël",
      "and":"et",
      "happy":"Content",
      "new":"Nouveau",
      "year":"an!"
    }

    OldTranslator.getFrench = function(userInput) {
      return frenchLexicon[userInput];
    }

    return OldTranslator;

})(Translator || {});

