(function(){
var input = document.getElementById("textinput");
var button = document.getElementById("translateBtn");
var select = document.getElementById("language");
var container = document.getElementById("container");
var languageVal="";

//Gets the language chosen
select.addEventListener("change", function(){
	languageVal=select.value;	
});

//Passes text to be translated
button.addEventListener("click", function(){
	handleTranslation(input.value);
});

function voiceSynth(toSpeak) {
	var synth = window.speechSynthesis;
	var utterThis = new SpeechSynthesisUtterance(toSpeak);
	var voices = [];
	voices = window.speechSynthesis.getVoices();

	utterThis.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Bad News'; })[0];
	speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? '(default)' :'');
	});
	utterThis.rate = 1;
	utterThis.lang = 'en-US';
	synth.speak(utterThis);
}

function handleTranslation(text){

	var translatedArray=[]; //Where the translated text will be stored
	var textArray=text.toLowerCase().split(" "); //sets text to lower case
	if(languageVal===""){ 
		//alerts if no language has been selected
		alert("Select a language");
	}
	if(text===""){
		//alerts if there is nothing typed in the input
		alert("Type a string");
	}
	else if(languageVal==="spanish"){
		//adds translated spanish word to translatedArray
		textArray.forEach(function(word){
		translatedArray.push(Translator.getSpanish(word));
	});
}
	else if(languageVal==="french"){
		//adds translated french word to translatedArray
		textArray.forEach(function(word){
		translatedArray.push(Translator.getFrench(word));
	});
}
	else if(languageVal==="polish"){
		//adds translated polish word to translatedArray
		textArray.forEach(function(word){
		translatedArray.push(Translator.getPolish(word));
	});
}
	var translatedText = translatedArray.join(" ");
	//turns translatedArray into a string
	writeToDOM(translatedText);

}
function writeToDOM(translated){
	//writes text to DOM and reads it aloud
	container.innerHTML = translated;
	voiceSynth(translated);

}

})();