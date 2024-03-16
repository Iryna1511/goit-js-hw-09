const formEl = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
const emailInp = formEl.elements.email;
const messageInp = formEl.elements.message;
const user = {};
const data = {};

formEl.addEventListener('input', handleInput);
function handleInput(event) {
  data.email = emailInp.value.trim();
  data.message = messageInp.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function loadFormState(key) {
    const parsedInfo = JSON.parse(localStorage.getItem(key));
    console.log(parsedInfo);
//   emailInp.value = JSON.parse(localStorage.getItem(LS_KEY.email)) ?? '';
//   messageInp.value = JSON.parse(localStorage.getItem(LS_KEY.message)) ?? '';
}
loadFormState(LS_KEY);

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  if (user.email === '' || user.message === '') {
    alert('All form fields must be filled in');
    return;
  } else {
    event.preventDefault();
    user.email = emailInp.value.trim();
    user.message = messageInp.value.trim();
    localStorage.removeItem(LS_KEY);
      formEl.reset();
      return user;
  }
}
