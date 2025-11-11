/*
 ==================================================
 FUNCTIONS
  ==================================================
 */
function createSingleCard(member) {
  const { name, role, img } = member;
  // cambio le dimensioni delle card con bootstrap
  const card = `
  <div class="team-card col-12 col-sm-6 col-md-4 col-lg-3 ">
    <div class="card-img">
      <img
        src="${img}"
        alt="${name}"
        style="width:200px; height:200px; object-fit:cover;"
      />
    </div>
    <div class="card-text">
      <h3>${name}</h3>
      <p>${role}</p>
    </div>
  </div>
  `;
  return card;
}
// stampa la griglia delle card
function printCardsGrid(teamMembers, teamContainer) {
  let cardString = ""
  for (let i = 0; i < teamMembers.length; i++) {
    // aggiunge la singola carta che crea alle carte gia presenti
    cardString += createSingleCard(teamMembers[i])
  }
  teamContainer.innerHTML += cardString
}

/*
 ==================================================
 MAIN
  ==================================================
 */
// rendo oggetti le parti che mi servono
const nameInput = document.querySelector("#name")
const roleInput = document.querySelector("#role")
const imgInput = document.querySelector("#img")
const form = document.querySelector("form")
const teamContainer = document.querySelector(".team-container");

// passo alla funzione questi due elementi per dichiararli fuori(funzioni pure)
printCardsGrid(teamMembers, teamContainer);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // crea un url per l'immagine che io posso caricare in input
  const imgUrl = URL.createObjectURL(imgInput.files[0]);
  // crea il nuovo membro come oggetto composto da nome ruolo e il link generato per l'immagine
  const newMember = {
    name: nameInput.value,
    role: roleInput.value,
    img: imgUrl,
  }
  // aggiungo alla lista dei membri il nuovo membro creato
  teamMembers.push(newMember);
  // creo una nuova carta per il nuovo membro creato
  const newCard = createSingleCard(newMember);
  teamContainer.innerHTML += newCard;

  // Svuoto i campi di input dopo aver inviato, in modo che siano liberi alla prossima volta che li uso e non ci rimanga niente dentro dopo il submit
  nameInput.value = '';
  roleInput.value = '';
  imgInput.value = '';


  // Codice che fa chiudere il Modal dopo che clicco invio
  const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
  modal.hide();
})

