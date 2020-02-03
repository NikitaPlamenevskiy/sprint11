function checkValidity(event) {
  const profilename = profileForm.elements.profilename;
  const about = profileForm.elements.about;
  const errorName = document.querySelector('.popup__error_name');
  const errorAbout = document.querySelector('.popup__error_about');

  if (profilename.value.length === 0) {
    errorName.textContent = 'Это обязательное поле';
  } else if (profilename.value.length < 2) {
    errorName.textContent = 'Должно быть от 2 до 30 символов';
  } else {
    errorName.textContent = null;
  }

  if (about.value.length === 0) {
    errorAbout.textContent = 'Это обязательное поле';
  } else if (about.value.length < 2) {
    errorAbout.textContent = 'Должно быть от 2 до 30 символов';
  } else {
    errorAbout.textContent = null;
  }
}
