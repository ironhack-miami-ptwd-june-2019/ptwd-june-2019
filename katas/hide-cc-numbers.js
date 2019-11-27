// Given the credit card number replace all numbers except the last for with stars

// example:
// CC: 12345678901987 => **********1987

// *****************************************************************************
// option 1 - using arrays and assuming we get the string:
const toStars = num => {
  let ccArr = [...num];
  let newArr = ccArr.slice(-4);
  let stars = "";
  
  for(let i=0; i< ccArr.length - 4; i++){
    stars += "*"
  }

  return [...stars, ...newArr].join(" ")
}

toStars("12345678901987") // **********1987

// *****************************************************************************
// option 2 - using strings and assuming we get the number:
const toStars1 = num => {
  const numToStr = num.toString();
  const last4digits = numToStr.slice(-4);
  let stars = "";

  for(let i=0; i< numToStr.length - 4; i++){
    stars += "*"
  }

  return stars + last4digits;
}

toStars1(12345678901987) // **********1987


// *****************************************************************************
// option 3 - using string's method .padStart() and assuming we get the number:
const toStars2 = num => {
  const numToStr = num.toString();
  const last4Digits = numToStr.slice(-4);
  return last4Digits.padStart(numToStr.length, "*")
}

toStars1(12345678901987) // **********1987