
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
function printCardsGrid() {
    const teamContainer = document.querySelector(".team-container");
    let cardString = ""
    for (let i = 0; i < teamMembers.length; i++) {
        const curMember = teamMembers[i];
        const { name, role, img } = curMember;
        const card = createSingleCard(curMember)
        cardString += card
    }
    teamContainer.innerHTML += cardString
}
printCardsGrid()
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newMember = {
        name: nameInput.value,
        role: roleInput.value,
        img: imgInput.value,
    }
    teamMembers.push(newMember);
    const teamContainer = document.querySelector(".team-container");
    const newCard = createSingleCard(newMember);
    teamContainer.innerHTML += newCard;
    nameInput.value = '';
    roleInput.value = '';
    imgInput.value = '';


    // Codice che fa chiudere il Modal dopo che clicco invio
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
})

