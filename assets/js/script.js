const form = document.querySelector("form");
const textInput = document.querySelector("input");
// const button = document.querySelector("button");
const insertLi = document.querySelector("ul");

// form.addEventListener("submit", function (e) {
//   // PER PRIMISSIMA COSA (SEMPRE) dovremo fermare il comportamento di default del form (il refresh) in questo modo:
//   e.preventDefault();
//   // dobbiamo crearci un div che conterrà la lista
//   const newDiv = document.createElement("div");
//   //assegnarci una classe per lo stile
//   newDiv.classList.add("div-lista");
//   // dobbiamo prenderci il dato dell'input
//   //   textInput.value = textInput.value.trim();
//   if (textInput.value.trim() === "") {
//     //messaggio di errore in caso di stringa vuota
//     alert("ATTENZIONE! Non hai inserito alcun testo!");
//   } else {
//     //comandi per la creazione di una nuova lista da inserire in un div
//     const newList = document.createElement("li");
//     newList.classList.add("lista");
//     const spanText = document.createElement("span");
//     spanText.classList.add("text");
//     spanText.innerText = textInput.value.trim();
//     newList.appendChild(spanText);
//     //creazione icona del check
//     const selezione = document.createElement("button");
//     selezione.innerHTML = "<i class='fas fa-check'></i>";
//     selezione.classList.add("check");
//     // creazione icona del cestino
//     const eliminare = document.createElement("button");
//     eliminare.innerHTML = "<i class='fas fa-trash'></i>";
//     eliminare.classList.add("trash");
//     // append.child dei button con icone
//     const spanButtons = document.createElement("span");
//     spanButtons.classList.add("span-buttons");
//     spanButtons.appendChild(selezione);
//     spanButtons.appendChild(eliminare);
//     newList.appendChild(spanButtons);
//     newDiv.appendChild(newList);

//     insertLi.appendChild(newDiv);

//     // pulire l'input
//     textInput.value = "";
//   }
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (textInput.value.trim() === "") {
    alert("ATTENZIONE! Non hai inserito alcun testo!");
  } else {
    const newList = document.createElement("li");
    newList.classList.add("lista");

    const spanText = document.createElement("span");
    spanText.classList.add("text");
    spanText.innerText = textInput.value.trim();
    newList.appendChild(spanText);

    const selezione = document.createElement("button");
    selezione.innerHTML = "<i class='fas fa-check'></i>";
    selezione.classList.add("check");

    const eliminare = document.createElement("button");
    eliminare.innerHTML = "<i class='fas fa-trash'></i>";
    eliminare.classList.add("trash");

    const spanButtons = document.createElement("span");
    spanButtons.classList.add("span-buttons");
    spanButtons.appendChild(selezione);
    spanButtons.appendChild(eliminare);

    newList.appendChild(spanButtons);

    insertLi.appendChild(newList);

    textInput.value = "";
  }
});

// manipolazione per il check e la rimozione
insertLi.addEventListener("click", function (e) {
  // risalgo al button
  const button = e.target.closest("button");
  // esci dalla funzione se non hai cliccato su un bottone
  if (!button) return;
  // if per capire se il button selezione è check
  const liCheck = button.closest("li");
  if (button.classList.contains("check")) {
    // const divLi = button.closest(".div-lista");
    liCheck.classList.toggle("completato");
    // else if per capire se è trash
  } else if (button.classList.contains("trash")) {
    // const divLi = button.closest(".div-lista");
    liCheck.remove();
  }
});

// reset-bottom
const containerList = document.getElementById("container-list");

containerList.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  if (button.classList.contains("reset-check")) {
    const allLi = containerList.querySelectorAll("li");
    allLi.forEach((element) => element.classList.remove("completato"));
  } else if (button.classList.contains("remove-all")) {
    const allLi = containerList.querySelectorAll("li");
    allLi.forEach((element) => element.remove());
  }
});

new Sortable(document.getElementById("todo-list"), {
  animation: 150,
});
