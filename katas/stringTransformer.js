// ************************************************************************************
// https://www.codewars.com/kata/string-transformer/javascript
// Share this kata:
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.
// ************************************************************************************


//////// solution 1: ////////
function stringTransformer(str) {
  return str
    .split("")
    .map(eachLetter => {
      if(eachLetter.toLowerCase() === eachLetter ){
       return eachLetter.toUpperCase()
      } else {
       return eachLetter.toLowerCase()
      }
    })
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}


//////// solution 2: ////////
function stringTransformer2(someString){
    const arrayFromString = [...someString];
    // console.log(arrayFromString);
    return arrayFromString
      .map( eachLetter => eachLetter === eachLetter.toUpperCase() ? eachLetter.toLowerCase() : eachLetter.toUpperCase())
      .join("")
      .split(" ")
      .reverse()
      .join(" ")
  }
  
  stringTransformer("inPuT ExaMPLe"); //eXAmplE INpUt

  stringTransformer2("inPuT ExaMPLe"); //eXAmplE INpUt