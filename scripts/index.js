const page = document.querySelector(".page");
const popup = page.querySelector(".popup");
const popupOver = page.querySelector(".popup__overlay");
const popupButtonOpen = page.querySelector(".profile__edit");
const popupButtonClose = page.querySelectorAll(".popup__close");
const saveEdit = page.querySelector(".popup__submit");
const name = page.querySelector(".profile__name");
const job = page.querySelector(".profile__job");
const nameInput = page.querySelector(".popup__name");
const jobInput = page.querySelector(".popup__job");
const form = page.querySelector(".popup__form");
const popup2 = page.querySelector(".popup__2");
const popupAddPlace = page.querySelector(".profile__button")



function formOpen() {
  popup.classList.add("popup__opened");
  popupOver.classList.add("popup__opened");
  nameInput.value = `${name.textContent}`;
  jobInput.value = `${job.textContent}`;
}

function formOpen2() {
  popup2.classList.add("popup__opened");
  popupOver.classList.add("popup__opened");
  
}



function formClose() {
  popup.classList.remove("popup__opened");
  popupOver.classList.remove("popup__opened");
}

function formClose2() {
  popup2.classList.remove("popup__opened");
  popupOver.classList.remove("popup__opened");
}

function save(evt) {
  evt.preventDefault();
  name.textContent = `${nameInput.value}`;
  job.textContent = `${jobInput.value}`;
  formClose();
}

popupButtonOpen.addEventListener("click", formOpen);
popupButtonClose[0].addEventListener("click", formClose);

popupAddPlace.addEventListener("click", formOpen2);
popupButtonClose[1].addEventListener("click", formClose2);



form.addEventListener("submit", save);



 // iniciando 


const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];


initialCards.forEach((card) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.cloneNode(true);
  
  // Preenche os dados do card
  cardElement.querySelector(".element__title").textContent = card.name;
  cardElement.querySelector(".element__img").src = card.link;
  cardElement.querySelector(".element__img").alt = card.name; 
  
  
  document.querySelector(".elements").appendChild(cardElement);
});
 

// Seleciona TODOS os botões de lixeira
const trashButtons = document.querySelectorAll('.element__trash');

// Para cada botão, adiciona um evento de clique
trashButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Encontra o cartão pai (elemento com classe "element")
    const card = event.target.closest('.element');
    
    // Remove o cartão se existir
    if (card) {
      card.remove();
    }
  });
});


// Seleciona os elementos do formulário
const botaoAdicionarCard = page.querySelector(".popup__submit_element");
const campoNome = page.querySelector(".popup__name_place");
const campoLink = page.querySelector(".popup__link");

// Adiciona o evento de clique no botão
botaoAdicionarCard.addEventListener("click", (evento) => {
  evento.preventDefault();
  
  // Seleciona o template do card
  const templateCard = document.querySelector("#card-template").content;
  
  // Clona o template para criar um novo card
  const novoCard = templateCard.cloneNode(true);
  novotrash = document.querySelector("element__trash")
  
  // Preenche os dados do card
  novoCard.querySelector(".element__title").textContent = campoNome.value;
  novoCard.querySelector(".element__img").src = campoLink.value;
  novoCard.querySelector(".element__img").alt = `Imagem de ${campoNome.value}`;
  
  
  // Adiciona o botão de lixeira DENTRO do novo card
  novoCard.querySelector(".element__trash").addEventListener("click", (event) => {
    // Encontra o cartão pai 
    const card = event.target.closest('.element');
    
    // Remove o cartão se existir
    if (card) {
      card.remove();
    }
  });

  // adiciona o botao funcional de curtir 

  novoCard.querySelector(".element__button").addEventListener("click", (event) => {
    // Alterna a classe active no botão clicado
    event.currentTarget.classList.toggle("element__button_active");
  }) 


  
  
  // Adiciona o novo card à lista de elementos
  document.querySelector(".elements").prepend(novoCard);
  
  // Limpa os campos  e fechar
  campoNome.value = "";
  campoLink.value = "";
  formClose2();
  
})


;

// // Adiciona o evento de curti foto 

// Adiciona o evento de curtir foto
const buttonlike = document.querySelectorAll(".element__button");

buttonlike.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Alterna a classe active no botão clicado
    event.currentTarget.classList.toggle("element__button_active");
  });
});

