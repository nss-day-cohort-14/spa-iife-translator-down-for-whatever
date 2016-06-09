(function(){
var input = document.getElementById("textinput");
var button = document.getElementById("translateBtn");
var select = document.getElementById("language");
var container = document.getElementById("container");
var languageVal="";

select.addEventListener("change", function(){
	languageVal=select.value;
	

});

button.addEventListener("click", function(){
	handleTranslation(input.value);
});

function voiceSynth(toSpeak) {
	var synth = window.speechSynthesis;
	var utterThis = new SpeechSynthesisUtterance(toSpeak);
	var voices = [];
	voices = window.speechSynthesis.getVoices();
	utterThis.lang = 'ar';
	synth.speak(utterThis);
}

function handleTranslation(text){

	var translatedArray=[];
	var textArray=text.toLowerCase().split(" ");
	if(languageVal==="spanish"){
	textArray.forEach(function(word){
		translatedArray.push(Translator.getSpanish(word));
		//voiceSynth(translatedArray);
	});
}
if(languageVal==="french"){
	textArray.forEach(function(word){
		translatedArray.push(Translator.getFrench(word));
		//voiceSynth(translatedArray);
	});
}
if(languageVal==="polish"){
	textArray.forEach(function(word){
		translatedArray.push(Translator.getPolish(word));
	});
}
	var translatedText = translatedArray.join(" ");
	writeToDOM(translatedText);

}
function writeToDOM(translated){
	container.innerHTML = translated;
	voiceSynth(translated);

}
})();
