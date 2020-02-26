// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("Welcome to the Password Generator! Following this you will need to complete a series of questions to generate a password.");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var characters = "";
  var length = prompt("How long should the password be?");
    while (length < 8 || length > 128) {
      alert("Please make the password between 8 and 128 characters!")
      var length = prompt("How long should the password be?");
    }

  var lowercase = confirm("Should the password contain lowercase letters?");
    if (lowercase===true) {
       characters = characters + "abcdefghijklmnopqrstuvwxyz";
    }

  var uppercase = confirm("Should the password contain lowercase letters?");
    if (uppercase===true) {
      characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

  var numeric = confirm("Should the password contain numbers?");
    if (numeric===true) {
      characters = characters + "123456789";
    }

  var special = confirm("Should the password contain special characters?");
    if (special===true) {
      characters = characters + "!@#$%^&*()<>:?";
    }
  var pw ="";
  for (var i = 0; i < length; i++) {
      pw = pw + characters.charAt(Math.floor(Math.random()*characters.length));
    }
  if (characters.length <= 0){
      alert("Error! Please select one character type to generate a password. Please try again.");
      var fail ="Try Again! Click the Button Below";
      return fail;
    }
  else {
      return pw;
    }


}

windows.alert





