// ************************************************************************************
// https://www.codewars.com/kata/credit-card-issuer-checking
// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
// Complete the function getIssuer() that will use the values shown below to determine the card 
// issuer for a given card number. If the number cannot be matched then the function should 
// return the string Unknown.
// ************************************************************************************


//////// my solution: ////////
function getIssuer(number){
    // number += "";
    number = number.toString();
    // console.log(typeof number);
  
    if((number.startsWith("34") || number.startsWith("37")) && number.length === 15) return "AMEX"
    else if (number.startsWith(6011) && number.length === 16) return "Discover"
    else if(number.match(/^5[1-5]/) && number.length === 16) return "Mastercard"
    else if (number.startsWith("4") && (number.length === 13 || number.length === 16)) return "VISA"
    else return "Unknown"
  }
  
  getIssuer(4011000000000)