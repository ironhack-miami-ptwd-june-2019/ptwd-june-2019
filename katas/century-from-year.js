
// ************************************************************************************
// https://www.codewars.com/kata/century-from-year/javascript
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// ************************************************************************************

// our notes: if the number is stringified, to use it as number, we have to turn it back to number type
// const price = "120";

// turn stringified number to number - 3 ways: parseInt(), Number(), +
// console.log(parseInt(price));
// console.log(Number(price));
// console.log(+price);

// ES5:
// function centuryFromYear(){
    // the some code as below goes here
// }

// ES6:
const centuryFromYear = (year) => {
    if(!year){
      return 'Please input a year!';
    }
    if(typeof year !== 'number'){
      return 'Please input a valid number for a year.';
    }
    
    let century;
    const stringifiedYear = year.toString();
    const lastTwoNumbers = stringifiedYear.substr(-2);
    let allOtherButLastTwoNumbers = stringifiedYear.slice(0,-2);
  
    if(stringifiedYear.length > 2){
      if(lastTwoNumbers > 0){
        return century = +allOtherButLastTwoNumbers + 1;
      } else {
        return century = +allOtherButLastTwoNumbers;
      }
    } else {
      return 1;
    }
  };



  // the best solution:
  const  cleanCenturyFromYear = (year) => {
    // using ceiling method to round up to nearest century (100)
    return Math.ceil(year/100); 
};