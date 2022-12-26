'use strict';

const page = document.querySelector('.page');
//Gallery container
const galleryContainer = page.querySelector('.gallery__list');
//Buttons
const editBtn = page.querySelector('.profile__edit-btn');
const addBtn = page.querySelector('.profile__add-btn');
// Close buttons
const editCloseBtn = page.querySelector('.popup__close-btn_profile');
const addCloseBtn = page.querySelector('.popup__close-btn_add-card');

//Popups
const editPopup = page.querySelector('.popup_type_edit-profile');
const addPopup = page.querySelector('.popup_type_add-card');
//Form element
const formElement = page.querySelector(
  '.popup__form_type_edit-profile'
);
// Name Job input values
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_job');
// Name Job current values
const nameCurrent = page.querySelector('.profile__name');
const jobCurrent = page.querySelector('.profile__job');

//Name job values assignement
nameInput.value = nameCurrent.textContent;
jobInput.value = jobCurrent.textContent;

//Create card
function createCard(card) {
  const cardTemplate =
    document.querySelector('#cards-template').content;
  const cardElement = cardTemplate
    .querySelector('.element')
    .cloneNode(true);
  cardElement.querySelector(
    '.element__image'
  ).style.backgroundImage = `URL(${card.link})`;
  cardElement.querySelector('.element__image').alt = card.name;
  cardElement.querySelector('.element__text').textContent = card.name;
  return cardElement;
}
// Render card
function renderCard(card, container) {
  container.append(card);
}

// Reder cards on the page
initialCards.forEach((image) =>
  renderCard(createCard(image), galleryContainer)
);

// Open/Close popup
const togglePopup = function (popup) {
  popup.classList.toggle('popup_opened');
};

//Update name job
function formSubmitHandler(e) {
  e.preventDefault();

  nameCurrent.textContent = nameInput.value;
  jobCurrent.textContent = jobInput.value;

  closePopup(editPopup);
}
//Evt listeners
editBtn.addEventListener('click', function () {
  togglePopup(editPopup);
});
editCloseBtn.addEventListener('click', function () {
  togglePopup(editPopup);
});

addBtn.addEventListener('click', function () {
  togglePopup(addPopup);
});
addCloseBtn.addEventListener('click', function () {
  togglePopup(addPopup);
});

formElement.addEventListener('submit', formSubmitHandler);
