const page = document.querySelector(".page");
const popup = page.querySelector(".popup");
const popupOver = page.querySelectorAll(".popup__overlay");
const popupButtonOpen = page.querySelector(".profile__edit");
const popupButtonClose = page.querySelectorAll(".popup__close");
const name = page.querySelector(".profile__name");
const job = page.querySelector(".profile__job");
const nameInput = page.querySelector(".popup__name");
const jobInput = page.querySelector(".popup__job");
const form = page.querySelector(".popup__form");
const popupNewCard = page.querySelector(".popup__new_card");
const popupAddPlace = page.querySelector(".profile__button")



function openFormEdit() {
  popup.classList.add("popup__opened");
  popupOver[0].classList.add("popup__opened");
  nameInput.value = `${name.textContent}`;
  jobInput.value = `${job.textContent}`;
  enableValidation()
}

function openFormNewCard() {
  popupNewCard.classList.add("popup__opened");
  popupOver[1].classList.add("popup__opened");
  
}



function closeFormEdit() {
  popup.classList.remove("popup__opened");
  popupOver[0].classList.remove("popup__opened");
}

function closeFormNewCard() {
  popupNewCard.classList.remove("popup__opened");
  popupOver[1].classList.remove("popup__opened");
}

function saveProfileForm(evt) {
  evt.preventDefault();
  name.textContent = `${nameInput.value}`;
  job.textContent = `${jobInput.value}`;
  closeFormEdit();
}

popupButtonOpen.addEventListener("click", openFormEdit);
popupButtonClose[0].addEventListener("click", closeFormEdit);

popupAddPlace.addEventListener("click", openFormNewCard);
popupButtonClose[1].addEventListener("click", closeFormNewCard);



form.addEventListener("submit", saveProfileForm);



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
const botaoAdicionarCard = page.querySelectorAll(".popup__submit_element");
const campoNome = page.querySelector(".popup__name_place");
const campoLink = page.querySelector(".popup__link");

// Adiciona o evento de clique no botão
botaoAdicionarCard[1].addEventListener("click", (evento) => {
  evento.preventDefault();
  
  // Seleciona o template do card
  const templateCard = document.querySelector("#card-template").content;
  
  // Clona o template para criar um novo card
  const newCard = templateCard.cloneNode(true);
  novotrash = document.querySelector("element__trash")
  
  // Preenche os dados do card
  newCard.querySelector(".element__title").textContent = campoNome.value;
  newCard.querySelector(".element__img").src = campoLink.value;
  newCard.querySelector(".element__img").alt = `Imagem de ${campoNome.value}`;
  
  
  // Adiciona o botão de lixeira DENTRO do novo card
  newCard.querySelector(".element__trash").addEventListener("click", (event) => {
    // Encontra o cartão pai 
    const card = event.target.closest('.element');
    
    // Remove o cartão se existir
    if (card) {
      card.remove();
    }
  });

  // adiciona o botao funcional de curtir 

  newCard.querySelector(".element__button").addEventListener("click", (event) => {
    // Alterna a classe active no botão clicado
    event.currentTarget.classList.toggle("element__button_active");
  }) 


  // Adicion funçao de abertura de foto 

  newCard.querySelector(".element__img").addEventListener("click", function() {
    // Pega 
    const card = this.closest('.element'); // o
    const title = card ? card.querySelector('.element__title').textContent : '';
    
    // Atualiza o popup
    popupImg.src = this.src;
    popupImg.alt = this.alt || "Imagem ampliada";
    popupImgTitle.textContent = title; 
    
    imgOpen();
  });



  
  // Adiciona o novo card à lista de elementos
  document.querySelector(".elements").prepend(newCard);
  
  // Limpa os campos  e fechar
  campoNome.value = "";
  campoLink.value = "";
  closeFormNewCard();
  
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



// funcion popup abrir e fechar 

const popupImgFull = document.querySelector(".popup__full_img");

function imgOpen () {

  popupImgFull.classList.add("popup__opened");
  popupOver[2].classList.add("popup__opened");

}

function imgClose () {
   popupImgFull.classList.remove("popup__opened");
  popupOver[2].classList.remove("popup__opened");
}
 
// fechar img 
popupButtonClose[2].addEventListener("click", imgClose);


const imagens = document.querySelectorAll(".element__img");
const imagemInf = document.getElementById("elementoSrc");
const popupImg = document.querySelector(".popup__img");
const popupImgTitle = document.querySelector(".popup__title_img");



// evento de clique para cada imagem



imagens.forEach(img => {
  img.addEventListener("click", function() {
    // Pega 
    const card = this.closest('.element'); // o
    const title = card ? card.querySelector('.element__title').textContent : '';
    
    // Atualiza o popup
    popupImg.src = this.src;
    popupImg.alt = this.alt || "Imagem ampliada";
    popupImgTitle.textContent = title; 
    
    imgOpen();
  });
});

// fechar popup clicando fora
const overlay = document.querySelectorAll(".popup__overlay");
overlay[0].addEventListener("click", closeFormEdit);
overlay[1].addEventListener("click", closeFormNewCard);
overlay[2].addEventListener("click", imgClose);

//fechar popup clicando esc
document.addEventListener("keydown", (event) => {
  if (event.key === 'Escape') {
    closeFormEdit()
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'Escape') {
    closeFormNewCard()
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'Escape') {
    imgClose()
  }
});

enableValidation()


  