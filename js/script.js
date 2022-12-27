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
const previewCloseBtn = page.querySelector(
  '.popup__close-btn_preview'
);

//Popups
const editPopup = page.querySelector('.popup_type_edit-profile');
const addPopup = page.querySelector('.popup_type_add-card');
const previewPopup = page.querySelector('.popup_type_preview');
//Form element
const formEditProfile = page.querySelector(
  '.popup__form_type_edit-profile'
);
const formAddCard = page.querySelector('.popup__form_type_add-card');
// Name Job input
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_job');
// Name Link input
const titleInput = page.querySelector('.popup__input_type_title');
const linkInput = page.querySelector('.popup__input_type_image-link');

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
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.style.backgroundImage = `URL(${card.link})`;
  // cardImage.alt = card.name;
  cardElement.querySelector('.element__text').textContent = card.name;

  cardImage.addEventListener('click', () =>
    togglePopup(previewPopup)
  );
  cardElement
    .querySelector('.element__like-btn')
    .addEventListener('click', handleLikeClick);
  cardElement
    .querySelector('.element__delete-btn')
    .addEventListener('click', () => cardElement.remove());
  return cardElement;
}
// Render card
function renderCard(card, container) {
  container.prepend(card);
}

// Render cards on the page
initialCards.forEach((image) =>
  renderCard(createCard(image), galleryContainer)
);

// Toggle like button
function handleLikeClick(e) {
  console.log('lcl');
  e.target.classList.toggle('element__like-btn_active');
}

// Handle delete button click
function handleDeleteClick(e) {
  e.target.closest('.element').remove();
}

// Open/Close popup
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

//Update name job
function formSubmitHandler(e) {
  e.preventDefault();

  nameCurrent.textContent = nameInput.value;
  jobCurrent.textContent = jobInput.value;

  closePopup(editPopup);
}

// Add new card
function formAddCardHandler(e) {
  e.preventDefault();

  const cardInfo = {
    name: titleInput.value,
    link: linkInput.value,
  };
  console.log(cardInfo);
  renderCard(createCard(cardInfo), galleryContainer);
  formAddCard.reset();
  togglePopup(addPopup);
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

formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', formAddCardHandler);
