// **Descrizione**
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// **Bonus**
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
// - Far sì che le email vengono stampati solo quando arrivano tutti i 10 email

// Risoluzione:
// Raccolta dati:
// Prendere tutti gli elementi html che ci servono: in questo caso ul in modo da poter generare una lista di e-mail.

// Bonus:
// Prendere il pulsante che rigenera le 10 mail.
// Prendere lo spinner che metteremmo durante i tempi di attesa

// Risoluzione logica:
// Scrivere un ciclo for per riciclare la chiamata Ajax per 10 volte e ad ogni giro aggingere in pagina l'elemento

// Bonus:
// Creare un pulsante su cui aggingere un event.listener che esegue la funzione "rigenera"
// Scrivere funzione "rigenera": che farà lo stesso ciclo for di prima ma andrà a ripulire la mia lista e sostituire con le nuove mail.
// Aggingere spinner nella funzione in modo che solo a funzione eseguita mi elimina lo spinner e mi sostituisce la lista.

// Aggingere CSS o Bootstrap


// Risoluzione codice
// Raccolta dati:
const listElem = document.getElementById("lista")
console.log(listElem)
const rigeneraBtn = document.getElementById("rigenera")

// Bonus
const spinnerElem = document.getElementById("spinner")
console.log(spinnerElem)

// Risoluzione logica
//Creo un primo ciclo for che mi stampa le prime 10 mail in pagina
for (let i = 0; i <= 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        curMail = resp.data.response
        listElem.innerHTML += `<li>${curMail}</li>`
    })
}

// Aggiungo eventListener al pulsante
rigeneraBtn.addEventListener("click", rigenerazione)

// Creo la funzione che mi ripulisce la lista e poi rigira il ciclo for per generare altre 10 mail e poi stamparle.

async function rigenerazione(){
    listElem.classList.add("d-none")
    spinnerElem.classList.remove("d-none")
    listElem.innerHTML = ""
    for(let i = 0; i <= 10 ; i++){
        await axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
            curMail = resp.data.response
            listElem.innerHTML += `<li>${curMail}</li>`
        })
    }
    spinnerElem.classList.add("d-none")
    listElem.classList.remove("d-none")
}




