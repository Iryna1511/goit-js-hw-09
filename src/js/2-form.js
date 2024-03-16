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
  if (parsedInfo !== null) {
    emailInp.value = parsedInfo.email;
    messageInp.value = parsedInfo.message;
  }
}
loadFormState(LS_KEY);

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  user.email = emailInp.value.trim();
  user.message = messageInp.value.trim();
  if (user.email === '' || user.message === '') {
    alert('All form fields must be filled in');
    return;
  } else {
    localStorage.removeItem(LS_KEY);
    formEl.reset();
    console.log(user);
  }
}
