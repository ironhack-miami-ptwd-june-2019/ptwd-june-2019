// ************************************************************************************
// https://www.codewars.com/kata/number-of-anagrams-in-an-array-of-words
// An anagram is a word, phrase, or sentence formed from another by rearranging its letters. 
// An example of this is "angel", which is an anagram of "glean".

// Given an array of words write a method that will return the total number of different anagrams 
// inside that array. You can only count once the anagram between 2 words. For instance, in the 
// previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite 
// between "glean" and "angel".

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
// ************************************************************************************

// thinking process:
// step I - define a function that will receive two parameters and compare them to see if they are the same
    // parameters will be words to compare
    // the eliminating condition for them to be the same is to be the same length => if yes,proceed, if no, definitely not the same words so return false
    // if the same length:
        // the easiest way is to sort them so the order of letters is the same
        // but .sort() is an array method so first turn the string into array so you can sort it "hello" ==> ['h', 'e', 'l', 'l', 'o']
        // after that use .join() to put it back to string so we can compare 
        // do the same for the second word
        // compare => if the same return true

function isItAnAnagram(wordA, wordB){
    // console.log(wordA)
    if(wordA.length === wordB.length){
      // const sortedA = wordA.split("");
      const sortedA = [...wordA].sort().join("");
      // const sortedA = Array.from(wordA);
      // console.log("sortedA : ", sortedA)
      const sortedB = wordB.split("").sort().join("");
      return sortedA === sortedB;
    } else {
      return false;
    }
  }
  

// isItAnAnagram("hello", "ellhh");

// Step II - problem: okay, comparing two words works but we will get the ARRAY of words so how do we compare every word with every other word in that array?
  // let's see how we can compare the 1st word with the rest of words (the same process will be repeated for other words):
    // we can use for loop and grab the first word with someArr[i] meaning i=0. at this point we are comparing the first word with the array of words - all the other words. 
    // that's why we can loop through that subarray and have access to all the other words (second for loop with "k")
    // at this point, we have 2 words that are comparing to each other all the time - does this mean anything? well, YES, we previously wrote the function (isItAnagram()) that does all
    // that we need when we have to compare two words
    // THE REST IS HISTORY 🚀

// SOLUTION WITH 2 FOR LOOPS:
  function anagramCounter(someArr){
    counter = 0;
    for(let i=0; i< someArr.length; i++){
      for(let k=i+1; k< someArr.length; k++){
        if(isItAnAnagram(someArr[i], someArr[k])){
          counter++;
        }
      }
    }
    return counter;
  }
//   anagramCounter(arr);


  const arr = ["hello", "elloh", "sandra", "ansadr", "blah", "hbla"];


  // 🎯 THE SAME SOLUTION AS ABOVE BUT USING REDUCE AND FILTER
  function anagramCounter(someArr){
    const counter = someArr.reduce((sum, theWord,index) => {
      const theRestOfWords = someArr.slice(index+1);
      // console.log(theWord, "====", theRestOfWords);
      const result = theRestOfWords.filter((someWord) => {
        return isItAnAnagram(theWord, someWord)
      })
      return sum + result.length
    }, 0);
    
    return counter;
  }
  anagramCounter(arr);