'use strict';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const page = document.querySelector('.page');
//Gallery container
const galleryContainer = page.querySelector('.gallery__list');
//Buttons
const editBtn = page.querySelector('.profile__edit-btn');
const editCloseBtn = page.querySelector('.popup__close-btn_profile');
const addBtn = page.querySelector('.profile__add-btn');

//Popups
const editPopup = page.querySelector('.popup_type_edit-profile');
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
  console.dir(cardElement.querySelector('.element__image'));
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

//Open popup
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
};
//Close popup
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
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
  openPopup(editPopup);
});
editCloseBtn.addEventListener('click', function () {
  closePopup(editPopup);
});

formElement.addEventListener('submit', formSubmitHandler);
