// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//returns a string value with all the criterias met
function generatePassword() {
  var length;
  do {
    var userChoice = window.prompt("How long do you want the password to be from 8-128");
    if (!(userChoice >= 8) || !(userChoice <= 128)) {
      window.alert('input does not follow criteria')
    } else {
      length = userChoice;
    }
  } while (!(userChoice >= 8) || !(userChoice <= 128))
  var lowercase = window.confirm(`do you want to include lowercase.`)
  var uppercase = window.confirm(`do you want to include uppercase.`)
  var numbers = window.confirm(`do you want to include numbers.`)
  var specialCharacters = window.confirm(`do you want to include special characters.`)
  var text = '';
  var possible = ``;

  if (lowercase) {
    possible += "abcdefghijklmnopqrsuvwxyz"
    console.log(possible);
  }

  if (uppercase) {
    possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log(possible);
  }

  if (numbers) {
    possible += "0123456789"
    console.log(possible);
  }

  if (specialCharacters) {
    possible += "~`!@#$%^&*()-_=+{[}]|\'/."
    console.log(possible);
  }

  for (i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
