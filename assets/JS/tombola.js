const footerSpan = document.getElementById("current-year");
const year = new Date().getFullYear(); // 2025
footerSpan.innerText = year;

const board = document.getElementById("board");
// const card1 = document.getElementById("card1");

// Creazione del tabellone
for (let i = 1; i <= 90; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = i;
  cell.id = "cell-" + i; // Assegna un id alla cella
  board.appendChild(cell);
}

// Creazione delle cartelle
// const createCards = function () {
//   const card1 = document.getElementById("container2"); // Assicurati di avere un contenitore con questo ID
//   card1.innerHTML = ""; // Svuota il contenitore prima di generare nuove celle

//   let numbers = [];

//   // Generiamo fino a 18 numeri casuali (per lasciare spazio a celle vuote)
//   for (let i = 0; i < 18; i++) {
//     numbers.push(Math.floor(Math.random() * 100) + 1); // Numeri casuali da 1 a 100
//   }

//   // Aggiungiamo 6 celle vuote per un totale di 24 elementi
//   for (let i = 0; i < 6; i++) {
//     numbers.push(""); // Celle vuote
//   }

//   // Mischiamo l'array per distribuire casualmente i numeri e le celle vuote
//   numbers = numbers.sort(() => Math.random() - 0.5);

//   // Creiamo le celle
//   for (let i = 0; i < 24; i++) {
//     let cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.innerText = numbers[i]; // Inseriamo il numero o lasciamo la cella vuota
//     cell.id = "card-cell-" + (i + 1);

//     card1.appendChild(cell);
//   }
// };

let memory = []; // Array per tenere traccia dei numeri estratti

// Funzione per generare un numero casuale non ripetuto
function generateUniqueNumber() {
  let randomNumber;

  // Genera un numero e controlla che non sia già stato estratto
  while (true) {
    randomNumber = Math.floor(Math.random() * 90) + 1;

    // Se il numero non è già stato estratto, esce dal ciclo
    if (!memory.includes(randomNumber)) {
      break;
    }
  }

  memory.push(randomNumber); // Salva il numero estratto
  return randomNumber;
}

// Funzione principale per estrarre un numero
function drawNumber() {
  if (memory.length === 90) {
    alert("Tutti i numeri sono stati estratti!");
    return;
  }

  let extractedNumber = generateUniqueNumber();
  console.log("Numero estratto:", extractedNumber);

  // Evidenzia la cella corrispondente
  document.getElementById(`cell-${extractedNumber}`).classList.add("selected");
}
