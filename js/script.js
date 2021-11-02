const age = parseInt(prompt('scrivi la tua età'));

const kilometres = parseInt(prompt('scrivi quanti km vuoi percorrere'));

const kmCost = kilometres * 0.21;

let ticketPrice;

let ticketValid = true;
let errorMsg = '';

if(kilometres <= 0){
  ticketValid = false;
  errorMsg = 'inserire un numero chilometri maggiore di 0';
}
if(isNaN(kilometres)){
  ticketValid = false;
  errorMsg = 'Inserire un numero corretto'
}

if(age <= 0){
  ticketValid = false;
  errorMsg = 'inserire un numero di età maggiore di 0';
}
if(isNaN(kilometres)){
  ticketValid = false;
  errorMsg = 'Inserire un numero corretto'
}

console.log('ticketValid',ticketValid)
console.log('errorMsg',errorMsg)

if(age <= 18){
  ticketPrice = kmCost * 60 / 100;
}else if(age >=65){
  ticketPrice = kmCost * 80 / 100;;
}else{
  ticketPrice = kmCost;
}

console.log(ticketPrice);

let ticketInfoStr = `
Chilometri da percorrere: ${kilometres}Km <br>
Età inserita: ${age} anni <br>
Prezzo biglietto: <strong> ${ticketPrice.toFixed(2)} Euro </strong>
`;

if(!ticketValid){
  ticketInfoStr = "Errore!!! "+errorMsg
}

document.getElementById("ticketInfo").innerHTML = ticketInfoStr




