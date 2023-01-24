const $form = document.querySelector(".card-form");
const $inputName = document.querySelector("#name");
const $inputcardNumber = document.querySelector("#card-number");
const $inputYY = document.querySelector("#YY");
const $inputMM = document.querySelector("#MM");
const $inputCVC = document.querySelector("#CVC");
const userName = $inputName.value;
const cardNumber = $inputcardNumber.value;
const YY = $inputYY.value;
const MM = $inputMM.value;
const CVC = $inputCVC.value;

function validateForm(event) {
  const $submittedStatus = document.querySelector(".submitted-status");
  // $form.classList.add("occult");
  // $submittedStatus.classList.remove("occult");

  event.preventDefault();
}

function validateName(userName) {
  if(userName.length === 0) {
    return "This field cannot be blank";
  } else if(userName.length > 50) {
    return "This field cannot contain more than 50 characters";
  } else if(!/^[ a-z]+$/i.test(userName)) {
    return "This field can only contain letters";
  } else {
    return "";
  }
}

function validateCardNumber(cardNumber) {
  if(cardNumber.length === 0) {
    return "This field cannot be blank";
  } else if(!/([0-9]{4}\s?){4}/.test(cardNumber)){
    return "Invalid credit card number";
  } else {
    return "";
  }
}

function validateYear(YY) {
  if(YY.length === 0) {
    return "This field cannot be blank";
  } else if (!/^[0-9][0-9]$/.test(YY)) {
    return "Invalid year format";
  } else {
    return "";
  }
}

function validateMonth(MM) {
  if(MM.length === 0) {
    return "This field cannot be blank";
  } else if (!/^0[0-9]|1[0-2]$/.test(MM)) {
    return "Invalid month format";
  } else {
    return "";
  }
}

function validateCVC(CVC) {
  if(CVC.length === 0) {
    return "This field cannot be blank";
  } else if (!/^[0-9][0-9][0-9]$/.test(CVC)) {
    return "Invalid CVC format";
  } else {
    return "";
  }
}

$form.onsubmit = validateForm;
