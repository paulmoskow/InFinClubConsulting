const emailButtons = document.querySelectorAll('.email');
//const aboutButton = document.querySelector('#about');
const popupEmail = document.querySelector('#popup-email');
const popups = document.querySelectorAll('.popup');

function openPopUp(el) {
  el.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};

function closePopUp(el) {
  el.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};

function openPopupEmail() {
  openPopUp(popupEmail);
  //  cardFormValidator.toggleButtonSate();
};

emailButtons.forEach((button) => {
  button.addEventListener('click', openPopupEmail);
});


//close popups with esc and remove listeners after
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopUp = document.querySelector('.popup_opened');
    closePopUp(openedPopUp);
  }
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')
    || evt.target.classList.contains('popup__close-button')) {
      closePopUp(popup);
    }
  });
});