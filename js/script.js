const page = document.querySelector('.page');

//Buttons
const editBtn = page.querySelector('.profile__edit-btn');
const editCloseBtn = page.querySelector('.popup__close-btn_profile');

//Popups
const editPopup = page.querySelector('.popup_type_edit-profile');
//Form element
let formElement = page.querySelector(
  '.popup__form_type_edit-profile'
);
// Name Job input values
let nameInput = page.querySelector('.popup__input_type_name');
let jobInput = page.querySelector('.popup__input_type_job');
// Name Job current values
let nameCurrent = page.querySelector('.profile__name');
let jobCurrent = page.querySelector('.profile__job');

//Name job values assignement
nameInput.value = nameCurrent.textContent;
jobInput.value = jobCurrent.textContent;

//Open close edit popup
function toggleEdit() {
  editPopup.classList.toggle('popup_opened');
}

//Update name job
function formSubmitHandler(e) {
  e.preventDefault();

  nameCurrent.textContent = nameInput.value;
  jobCurrent.textContent = jobInput.value;

  toggleEdit();
}
//Evt listeners
editBtn.addEventListener('click', toggleEdit);
editCloseBtn.addEventListener('click', toggleEdit);
formElement.addEventListener('submit', formSubmitHandler);
