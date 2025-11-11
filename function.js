/*
 ==================================================
 FUNCTIONS
  ==================================================
 */
function createSingleCard(member) {
  const { name, role, img } = member;
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
function printCardsGrid(teamMembers, teamContainer) {
  let cardString = ""
  for (let i = 0; i < teamMembers.length; i++) {
    cardString += createSingleCard(teamMembers[i])
  }
  teamContainer.innerHTML += cardString
}

/*
 ==================================================
 MAIN
  ==================================================
 */

const nameInput = document.querySelector("#name")
const roleInput = document.querySelector("#role")
const imgInput = document.querySelector("#img")
const form = document.querySelector("form")
const teamContainer = document.querySelector(".team-container");


printCardsGrid(teamMembers, teamContainer);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const imgUrl = URL.createObjectURL(imgInput.files[0]);

  const newMember = {
    name: nameInput.value,
    role: roleInput.value,
    img: imgUrl,
  }
  teamMembers.push(newMember);
  const newCard = createSingleCard(newMember);
  teamContainer.innerHTML += newCard;


  nameInput.value = '';
  roleInput.value = '';
  imgInput.value = '';


  // Codice che fa chiudere il Modal dopo che clicco invio
  const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
  modal.hide();
})

