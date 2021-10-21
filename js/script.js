const age = parseInt(prompt('scrivi la tua età'));

const kilometres = parseInt(prompt('scrivi quanti km vuoi percorrere'));

const kmCost = kilometres * 0.21;

let ticketPrice;

if(age <= 18){
  ticketPrice = kmCost * 60 / 100;
}else if(age >=65){
  ticketPrice = kmCost * 80 / 100;;
}else{
  ticketPrice = kmCost;
}

document.getElementById("ticketInfo").innerHTML =
`
Chilometri da percorrere: ${kilometres}Km <br>
Età inserita: ${age} anni <br>
Prezzo biglietto: ${ticketPrice} Euro
`;

console.log(ticketPrice);