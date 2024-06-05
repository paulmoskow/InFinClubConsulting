import './pages/index.css';

const emailButtons = document.querySelectorAll('.email');
const aboutButton = document.querySelector('#about');
const contactsButtons = document.querySelectorAll('.link__black');
const popupEmail = document.querySelector('#popup-email');
const popupAbout = document.querySelector('#popup-about');
const popupContacts = document.getElementById('popup-contacts');
const popups = document.querySelectorAll('.popup');
const popupForm = document.getElementById('popup__form');
const contactsLinks = document.querySelectorAll('#popup-contacts .link');

function openPopUp(el) {
  el.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};

function closePopUp(el) {
  el.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};

function closePopupAndSubmitForm(event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  closePopUp(popupEmail); // Close popup

  // Construct mailto link
  const name = encodeURIComponent(form.elements.name.value);
  const message = encodeURIComponent(form.elements.message.value);
  const mailtoLink = `mailto:cfookay@gmail.com?subject=${name}&body=${message}`;

  // Open mailto link
  window.location.href = mailtoLink;

  // Reset form after a short delay
  setTimeout(function() {
    form.reset();
  }, 500);
}

popupForm.addEventListener('submit', closePopupAndSubmitForm);

function openPopupEmail() {
  openPopUp(popupEmail);
};

function openPopupAbout() {
  openPopUp(popupAbout);
};

emailButtons.forEach((button) => {
  button.addEventListener('click', openPopupEmail);
});

aboutButton.addEventListener('click', openPopupAbout);

contactsButtons.forEach((button) => {
  button.addEventListener('click', openPopupContacts);
});

contactsLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Close popup with contacts with delay
    setTimeout(() => {
      closePopUp(popupContacts);
    }, 100);;
   
  });
});

function openPopupContacts() {
  openPopUp(popupContacts);
};

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



