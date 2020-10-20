var chilometriUtente = prompt("Quanti km vuole percorrere?");
console.log(chilometriUtente);

var etaUtente = prompt("Quanti anni ha?");
console.log(etaUtente);

var prezzoBiglietto = 0.21;

if (etaUtente < 18){
  alert(" ha a uno sconto del 20%");
  document.getElementById("prezzo").innerHTML=("il prezzo del biglietto è di : " + ((prezzoBiglietto * chilometriUtente)*0.8));

} else if (etaUtente > 65){

  alert("ha a uno scont del 40%");
  document.getElementById("prezzo").innerHTML=("il prezzo del biglietto è di :  " + ((prezzoBiglietto * chilometriUtente)*0.6));

}
