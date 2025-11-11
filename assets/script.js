const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
function createSingleCard(member) {
  const { name, role, img } = member;
  const card = `
  <div class="team-card">
    <div class="card-img">
      <img
        src="${img}"
        alt="${name}"
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