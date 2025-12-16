// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata 
// in cui mostrare una card per ciascun componente.

// Elenco membri
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

// INPUT
const contenitoreCard = document.querySelector(".card-container");

// uso un ciclo for per far ciclare le varie proprietà da aggiungere poi nella card
for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];

    // faccio un destructuring per ogni proprietà da inserire nella card
    const { name, role, email, img } = teamMember;

    // inserisco i valori da aggiungere nella card
    let card = `<div class="card">
        <div class="img-container">
            <img src="${teamMember.img}" alt="immagine membro del team">
        </div>
        <div class="text-container">
            <h3>${teamMember.name}</h3>
            <p>${teamMember.role}</p>
            <p class="email">${teamMember.email}</p>
        </div>
    </div>`

    // inserisco in pagina
    contenitoreCard.innerHTML += card;

}
