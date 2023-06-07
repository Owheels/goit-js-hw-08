import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');
let emailInput = formFeedback.elements['email'];
let messageInput = formFeedback.elements['message'];
const storedFormState = localStorage.getItem('feedback-form-state');
let parsedFormState;

formFeedback.addEventListener('input', throttle(formInput, 500));
function formInput(evt) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
}

if (storedFormState) {
  parsedFormState = JSON.parse(storedFormState);
  emailInput.value = parsedFormState.email;
  messageInput.value = parsedFormState.message;
} else {
  emailInput.value = '';
  messageInput.value = '';
}

formFeedback.addEventListener('submit', formSubmit);
function formSubmit(evt) {
  console.log({ email: emailInput.value, message: messageInput.value });
  localStorage.removeItem('feedback-form-state');
  formFeedback.reset();
  evt.preventDefault();
}
