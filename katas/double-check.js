// ************************************************************************************
// https://www.codewars.com/kata/are-there-doubles
// Your job is to build a function which determines whether or not there are double characters 
// in a string (including whitespace characters). For example aa, !! or .

// You want the function to return true if the string contains double characters and 
// false if not. The test should not be case sensitive; for example both aa & aA return true.

// Examples:
// doubleCheck("abca") => returns false
// doubleCheck("aabc") => returns true
// doubleCheck("a 11 c d") => returns true
// ************************************************************************************

// option 1:
function doubleCheck(str){
    for(let i=0; i < str.length - 1; i++) {
      if(str[i].toLowerCase() === str[i+1].toLowerCase() ) return true
    }
    return false;
}

doubleCheck("abc") // false
doubleCheck("a  bc") // true
doubleCheck("aabc") // true

// option 2:
const doubleCheck1 = str => [...str.toLowerCase()].some((el, i,arr) => el === arr[i+1])

doubleCheck1("abc") // false
doubleCheck1("a  bc") // true
doubleCheck1("aabc") // true


