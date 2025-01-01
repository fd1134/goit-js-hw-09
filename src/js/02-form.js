const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = "feedback-form-state";
let objLocal = localStorage.getItem(localStorageKey);

if (objLocal != null) {
  const data = JSON.parse(objLocal);
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener("input", (evt) => {
  let objSave = {};
  objSave.email = evt.currentTarget.elements.email.value;
  objSave.message = evt.currentTarget.elements.message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(objSave));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let writeLog = {
    email: evt.currentTarget.elements.email.value,
    message: evt.currentTarget.elements.message.value,
  };
  console.log(writeLog);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
