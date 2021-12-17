// Assignment Code
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var lengthInput = prompt("Length of Password?");
    if (lengthInput >= 8 && lengthInput <= 128);
    else(alert("Must be between 8 and 128 characters!"))
    
  var lowerInput = prompt("Would you like to inclue lowercase? Select OK (for yes) or Cancel (for no)");   
      
  var upperInput = prompt("Would you like to inclue uppercase?");
  
  var numberInput = prompt("Would you like to inclue numbers?");
  
  var specialInput = prompt("Would you like to inclue special characters?");

  var userInput = (lowerInput + upperInput + numberInput + specialInput);

  var lowercaseChar = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbericChar = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["!","#","$","%","&","(",")","*","+","-",".","/",":","<","=",">","?","@","[","^"];

  
  // const charArrayChoice = 
  
  // const totalCharArray = lowercaseChar.concat(uppercaseChar,numbericChar,specialChar);

//   function random_item(items)
// {
//     return items[Math.floor(Math.random()*items.length)];
// }
// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));

    function random_item(charArrayChoice) {
      return items[Math.floor(Math.random()*charArrayChoice.length)];
    }