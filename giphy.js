var animal;

var api = "https://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=P7YxDY91VBWFQg7QdzMASqT0Fr3gZUot";
var giphs = "&limit=10";

function setup() {
  var button = select("#submit");
  button.mousepressed(animalAsk);
  // this was my tutors idea above
  input = selec("#animal");
}

function animalAsk() {
  var url = api + input.value + apiKey + giphs;
  loadJSON(url, gotData);
}

function gotData(data) {
  animal = data;
}
