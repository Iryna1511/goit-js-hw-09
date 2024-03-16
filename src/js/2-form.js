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
emailInp.value = JSON.parse(localStorage.getItem(LS_KEY.email)) ?? '';
messageInp.value = JSON.parse(localStorage.getItem(LS_KEY.message)) ?? '';

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(LS_KEY);
  user.email = emailInp.value.trim();
  user.message = messageInp.value.trim();
  if (user.email === '' || user.message === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(user);
    formEl.reset();
  }
}
