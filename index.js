let pass1 = document.getElementById("password");
let pass2 = document.getElementById("confirm-password");
let passMsg = document.getElementById("confirm-pass-p");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let length = document.getElementById("length");
let symbol = document.getElementById("symbol");

pass2.disabled = true;
passMsg.classList.add("invalid");
passMsg.innerText = "Passwords do not match";

// VERIFY PASSWORD
const checkPasswordMatch = () => {
  if (pass1.value == pass2.value) {
    passMsg.classList.remove("invalid");
    passMsg.classList.add("valid");
    passMsg.innerText = "Passwords match";
  } else {
    passMsg.classList.remove("valid");
    passMsg.classList.add("invalid");
    passMsg.innerText = "Passwords do not match";
  }
};

// pass1.addEventListener("keyup", checkPasswordMatch());

pass2.addEventListener("keyup", checkPasswordMatch());

// ENABLE CONFIRM PASSWORD
pass1.onkeyup = () => {
  checkPasswordMatch();

  let count = 0;
  // validate lowercase letters
  let lowercaseLetters = /[a-z]/g;
  if (pass1.value.match(lowercaseLetters)) {
    lowercase.classList.remove("invalid");
    lowercase.classList.add("valid");
    count++;
  } else {
    lowercase.classList.remove("valid");
    lowercase.classList.add("invalid");
    count--;
  }
  // validate uppercase letters
  let uppercaseLetters = /[A-Z]/g;
  if (pass1.value.match(uppercaseLetters)) {
    uppercase.classList.remove("invalid");
    uppercase.classList.add("valid");
    count++;
  } else {
    uppercase.classList.remove("valid");
    uppercase.classList.add("invalid");
    count--;
  }
  // validate numbers
  let numbers = /[0-9]/g;
  if (pass1.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    count++;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    count--;
  }
  // validate length
  if (pass1.value.length >= 8 && pass1.value.length <= 32) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    count++;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    count--;
  }
  // validate symbols
  let symbols = /[!@#$%^&*_=+-]/g;
  if (pass1.value.match(symbols)) {
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
    count++;
  } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
    count--;
  }
  // give access to confirm password
  if (count === 5) {
    pass2.disabled = false;
  } else {
    pass2.disabled = true;
    passMsg.classList.remove("valid");
    passMsg.classList.add("invalid");
  }
};
