
var lowercaseChar = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbericChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","#","$","%","&","(",")","*","+","-",".","/",":","<","=",">","?","@","[","^"];



// Assignment Code
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn);
// Write password to the #password input

function writePassword() {
  var password = generatePassword(); //make a generatePassword function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}


function generatePassword() {
  var lengthInput = prompt("Length of Password?");
    if (lengthInput >= 8 && lengthInput <= 128) {
      // var pLength = document.createElement(lengthInput);
      } else {
        alert("Please enter a number between 8 and 128");
        generatePassword()
      }
    lowerInput = confirm("Would you like to inclued lowercase? Select OK (for yes) or Cancel (for no)");   
    upperInput = confirm("Would you like to inclued uppercase?");
    numberInput = confirm("Would you like to inclued numbers?");
    specialInput = confirm("Would you like to inclued special characters?");
}
  //return the generated password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function randomInt(limit) {
    return Math.floor(Math.random() * Math.floor(limit))
}

function random(selection) {
  var index = randomInt(selection.length);
  return selection[index];
}


  // var userInput = (lowerInput + upperInput + numberInput + specialInput);

  var charArrayChoice = "";
  
  var totalCharArray = lowercaseChar.concat(uppercaseChar,numbericChar,specialChar);

  for (var i = 0; i < 128; i++) {
      charArrayChoice += random(totalCharArray);
  }
console.log(charArrayChoice);
//   function random_item(items)
// {
//     return items[Math.floor(Math.random()*items.length)];
// }
// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));

    // function random_item(charArrayChoice) {
    //   return items[Math.floor(Math.random()*charArrayChoice.length)];
    // }