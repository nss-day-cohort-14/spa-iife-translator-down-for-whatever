var input = document.getElementById("textinput");
var button = document.getElementById("translateBtn");
var select = document.getElementById("language");
var languageVal="";

select.addEventListener("change", function(){
	languageVal=select.value;
	console.log(languageVal);

});

button.addEventListener("click", function(){
	handleTranslation(input.value);
});

function handleTranslation(text){
	
	var textArray=text.toLowerCase().split(" ");
	console.log(textArray);
	if(languageVal==="spanish"){
	textArray.forEach(function(word){
		console.log(word);
	});
}



}