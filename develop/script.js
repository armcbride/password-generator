// Assignment Code
var generateBtn = document.querySelector("#generate");

//Beginning of password building, prompts
var stringLength = prompt("Enter a number between 7 and 120 for your password length.")

//tests for stringLength variable - works
console.log(stringLength);

//prompts for the password criteria
if (stringLength > 6 && stringLength < 121) {
  alert("Your password will be " + stringLength + " characters long. For the following prompts, select which elements you would like your password to include.")

  var lowerCase = confirm("Lower case letters?");
  var upperCase = confirm("Upper case letters?");
  var specialCase = confirm("Special Characters?");
  var numberCase = confirm("Numbers?");
}
else { 
  stringLength = prompt("Enter a number between 7 and 120 for your password length.")
}
//tests input for password prompts - works
console.log(lowerCase, upperCase, specialCase, numberCase);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password input types for randomizer


console.log(isTrue);
