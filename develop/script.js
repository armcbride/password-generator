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
var randomizerFunc = [getLowerCase, getUpperCase, getNumberCase, getSpecialCase]
const passwordCharacters = []
var isTrue =[lowerCase, upperCase, specialCase, numberCase]

//tests console for is True -works
console.log(isTrue);

// Checks which chararacter types are true and generates password
while (passwordCharacters.length < stringLength) {
  for (i = 0; i < isTrue.length; i++) {
      if (isTrue[i] === true) {
          passwordCharacters.push(randomizerFunc[i]());
      }
  }
}

// Converts password array into a string
var deliverable = passwordCharacters.join('')
console.log(passwordCharacters);
//checks console for deliverable function
console.log(deliverable);

// Write password to the #password input
function writePassword() {
  var randomizerFunc = [getLowerCase, getUpperCase, getNumberCase, getSpecialCase]
  for (i = 0; i < isTrue.length; i++) {
    if (isTrue[i] === true) {
        passwordCharacters.push(randomizerFunc[i]());
    }
}
  var password = deliverable
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var generateBtn = document.querySelector("#generate");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// All Generator Functions 
//array for the randomizer function
var randomizerFunc = [getLowerCase(), getUpperCase(), getNumberCase(), getSpecialCase()]

//logs the randomizer function -WORKS
console.log(String(randomizerFunc))

 function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

  }
  
function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getNumberCase() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getSpecialCase() {
    const special = '!@$%^&*+-';
    return special[Math.floor(Math.random() * special.length)];
  }