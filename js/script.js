/*var chilometriUtente = prompt("Quanti km vuole percorrere?");
console.log(chilometriUtente);

var etaUtente = prompt("Quanti anni ha?");
console.log(etaUtente);*/
/*var etaUtente = document.getElementById("FasciaEtà");
var chilometriUtente = document.getElementById("kmPercorrere");
var underAge = document.getElementById("minorenne");
var overAge = document.getElementById("over-65");
var prezzoBiglietto = 0.21;
var sconto20 = 0.2;
var sconto40 = 0.4;*/

/*if (etaUtente < 18){
  alert(" ha a uno sconto del 20%");
  document.getElementById("prezzo").innerHTML=("il prezzo del biglietto è di : " + ((prezzoBiglietto * chilometriUtente)*0.8));

} else if (etaUtente > 65){

  alert("ha a uno sconto del 40%");
  document.getElementById("prezzo").innerHTML=("il prezzo del biglietto è di :  " + ((prezzoBiglietto * chilometriUtente)*0.6));

} else {
  document.getElementById("prezzo").innerHTML=("il prezzo del bigletto è di :" + (prezzoBiglietto * chilometriUtente));
}*/
/*var prezzoBiglietto = 0.21;
var sconto20 = 0.2;
var sconto40 = 0.4;

var generaBtn = document.getElementById("generate");

generaBtn.addEventListener("click", function()){*/


//costanti
var prezzoBiglietto = 0.21;
var sconto20 = 0.2;
var sconto40 =0.4;
var minorAge = 18;
var overAge =65


 var genBtnEl = document.getElementById("generate");
//addeventlistner
genBtnel.addEventListener("click", function()){
  //input
  var nameSurEl = document.getElementsById("NomeECognome");
  var nameSur = nameSurEl.value;
  var distanzaEl = document.getElementsById("distanza");
  var distanza = distanzaEl.value;
  var FasciaEtàEl = document.getElementsById("FasciaEtà");
  var FasciaEtà =FasciaEtàEl.value;

//prezzo prezzo biglieto
 var prezzoBiglietto = document.getElementsById("biglietto");
  if (età < minorenne) {

  }



















}
