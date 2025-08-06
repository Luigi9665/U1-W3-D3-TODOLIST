const form = document.querySelector("form");
const textInput = document.querySelector("input");
// const button = document.querySelector("button");
const insertLi = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  // PER PRIMISSIMA COSA (SEMPRE) dovremo fermare il comportamento di default del form (il refresh) in questo modo:
  e.preventDefault();
  // dobbiamo crearci un div che conterrà la lista
  const newDiv = document.createElement("div");
  //assegnarci una classe per lo stile
  newDiv.classList.add("div-lista");
  // dobbiamo prenderci il dato dell'input
  if (textInput.value === "") {
    //messaggio di errore in caso di stringa vuota
    alert("ATTENZIONE! Non hai inserito alcun testo!");
  } else {
    //comandi per la creazione di una nuova lista da inserire in un div
    const newList = document.createElement("li");
    newList.innerText = textInput.value;
    newList.classList.add("lista");
    newDiv.appendChild(newList);
    //creazione icona del check
    const selezione = document.createElement("button");
    selezione.innerHTML = "<i class='fas fa-check'></i>";
    selezione.classList.add("check");
    newDiv.appendChild(selezione);
    // creazione icona del cestino
    const eliminare = document.createElement("button");
    eliminare.innerHTML = "<i class='fas fa-trash'></i>";
    eliminare.classList.add("trash");
    newDiv.appendChild(eliminare);
    //creazioen del ripristino
    const ripristino = document.createElement("button");
    ripristino.innerHTML = "<i class='fa fa-undo'></i>";
    ripristino.classList.add("return");
    newDiv.appendChild(ripristino);

    insertLi.appendChild(newDiv);

    // pulire l'input
    textInput.value = "";
  }

  //seconda manipolazione direttamente con i button
  //   const button = insertLi.querySelector("button");
  //   button.addEventListener("click", function (e) {
  //     console.log(e.target.classList);
  //   });
  // non puoi manipolare i button ancor prima della creazione
});

// manipolazione per il check e la rimozione
insertLi.addEventListener("click", function (e) {
  // risalgo al button
  const button = e.target.closest("button");
  // if per capire se il button selezione è check
  if (button.classList.contains("check")) {
    const divLi = button.closest(".div-lista");
    const liCheck = divLi.querySelector("li");
    liCheck.classList.add("completato");
    // else if per capire se è trash
  } else if (button.classList.contains("trash")) {
    const divLi = button.closest(".div-lista");
    divLi.remove();
  } else if (button.classList.contains("return")) {
    const divLi = button.closest(".div-lista");
    const liCheck = divLi.querySelector("li");
    liCheck.classList.toggle("completato");
  }
});

// const divReset = document.getElementById("container-list");
// divReset.addEventListener("click", function (e) {
//   const button = e.target.closest("button");
//   if (button.classList.contains("reset")) {
//     const divLi = divReset.querySelector(".div.lista");
//     const licheck = divLi.querySelector("li");
//     licheck.style.textDecoration = "none";
//   }
// });
