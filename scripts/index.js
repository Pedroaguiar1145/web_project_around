let page = document.querySelector(".page");
let popup = page.querySelector(".popup");
let popupOver = page.querySelector(".popup__overlay");
let popupButtonOpen = page.querySelector(".profile__edit");
let popupButtonClose = page.querySelector(".popup__close");
let saveEdit = page.querySelector(".popup__submit");
let name = page.querySelector(".profile__name");
let job = page.querySelector(".profile__job");
let nameInput = page.querySelector(".popup__name");
let jobInput = page.querySelector(".popup__job");
let form = page.querySelector(".popup__form");

function formOpen() {
  popup.classList.add("popup__opened");
  popupOver.classList.add("popup__opened");
  nameInput.value = `${name.textContent}`;
  jobInput.value = `${job.textContent}`;
}

function formClose() {
  popup.classList.remove("popup__opened");
  popupOver.classList.remove("popup__opened");
}

function save(evt) {
  evt.preventDefault();
  name.textContent = `${nameInput.value}`;
  job.textContent = `${jobInput.value}`;
  formClose();
}

popupButtonOpen.addEventListener("click", formOpen);
popupButtonClose.addEventListener("click", formClose);
form.addEventListener("submit", save);
