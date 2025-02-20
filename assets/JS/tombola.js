const footerSpan = document.getElementById("current-year");
const year = new Date().getFullYear(); // 2025
footerSpan.innerText = year;

const board = document.getElementById("board");

// Creazione del tabellone
for (let i = 1; i <= 90; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = i;
  cell.id = "cell-" + i; // Assegna un id alla cella
  board.appendChild(cell);
}

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
