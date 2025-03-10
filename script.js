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



//render html
//create html element

const parentElement = document.querySelector('box');

//aggancia il risultato ad un elemento parent
renderHTML(parentElement, teamMembers);

//funzione
function renderHTML(parent, elements) {
  console.log(elements);

  //per ogni elemento creo html di riferimento
  //dopo aver creato l'html lo 'appendo' al parent element

  for (let i=0; i < elements.lenght; i++) {
    const currentElement = elements[i];
    console.log(currentElement);

    items += createHTMLElement(currentElement);
  }

  //inserimento del prodotto del ciclo nell'innerHTML del parent
  parent.innerHTML = items;
}

function createHTMLElement(object) {
  return `<div class="box">
  <div class="immagine">
    <img class="img" src="img/male1.png" alt="Marco Bianchi">
  </div>
  <div class="testo">
    <h3>Marco Bianchi</h3>
    <article>Designer</article>
    <a class="email" href="#">marcobianchi@team.com</a>
    </div>
</div>`
}