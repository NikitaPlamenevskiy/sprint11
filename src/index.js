import "./pages/index.css";
import {Card, CardList, placesList} from "./modules/Card.js";
import Popup from "./modules/Popup.js";
import checkInputPopup from "./modules/checkInputPopup.js";
import checkValidity from "./modules/checkValidity.js";
import Api from "./modules/api.js";
import popUpImage from "./modules/popUpImage.js"


const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort6',
  headers: {
    authorization: 'd62d602b-5f71-4311-9b90-7e71c5c1406e',
    'Content-Type': 'application/json'
  }
});

const popUpButton = document.querySelector('.button');
const editButton = document.querySelector('.edit-button');
const popUp = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile');


//закрытие попапов 
const popUpClose = document.querySelector('.popup__close');
const popUpCloseProfile = document.querySelector('.popup-profile__close');
const popUpCloseImg = document.querySelector('.popup-image__close');

//картинка с класса Card
const cardImg = document.querySelectorAll('.place-card__image');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');


//попап картинки
const popupImage = document.querySelector('.popup-image');
//блок одной карточки
const popupImageContent = document.querySelector('.popup-image__content');



const cardForm = document.forms.newCard;
const profileForm = document.forms.newProfile;
const cardLink = cardForm.elements.link;
const cardName = cardForm.elements.name;
const profileName = profileForm.elements.profilename;
const about = profileForm.elements.about;

const photoname = cardForm.elements.photoname;
const photolink = cardForm.elements.photolink;

profileForm.addEventListener('input', checkInputPopup);
const popup = new Popup(popUp);
const popupProf = new Popup(popupProfile);
const cardList = new CardList(placesList);
//попап картинки
const popupImg = new popUpImage(popupImage);


cardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  cardList.addCard(cardForm.elements.link.value, cardForm.elements.name.value);

  cardForm.reset();
  popup.close();
});

//Listeners 
profileForm.addEventListener('submit', addUserInfo);
profileForm.addEventListener('input', checkValidity);


editButton.addEventListener('click', function () {
  popupProf.open();
});

popUpCloseProfile.addEventListener('click', function () {
  popupProf.close();
});

popUpButton.addEventListener('click', function () {
  popup.open();
});

popUpClose.addEventListener('click', function () {
  popup.close();
});

//Закрытие картинки по клику
popUpCloseImg.addEventListener('click', function () {
popupImg.close();
});
//Открытие картинки по клику
placesList.addEventListener('click', (event) => {
    if (event.target.matches('.place-card__image')) {
    popupImg.open();
    popupImageContent.src = event.target.style.backgroundImage.slice(5, -2);
    }
});

//Функции с API

//Получение имени пользователя 
function takeUserInfo(){
  api.getUserInfo().then((res) =>{
      userName.textContent = res.name; 
      userJob.textContent = res.about;     
    })
};

function initialCards(){
    api.getInitialCards()
        .then((cards) => {
        const cardList = new CardList(placesList, cards)
        cardList.render(cards)
    })
};
//Добавление информации пользователя 
function addUserInfo(event) {
  event.preventDefault();
  api.sendUserInfo(profileName, about)
    .then( (res) => {
      userName.textContent = profileName.value;
      userJob.textContent = about.value;
      popupProf.close();
    })
    .catch( (err) => {
      console.log(err);
    })
}

initialCards();
takeUserInfo();