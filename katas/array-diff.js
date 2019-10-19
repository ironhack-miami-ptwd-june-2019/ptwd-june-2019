// ************************************************************************************
// https://www.codewars.com/kata/array-dot-diff/javascript
// Your goal in this kata is to implement a difference function, which subtracts one 
// list from another and returns the result.

// It should remove all values from list a, which are present in list b. 
// array_diff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]
// ************************************************************************************


function array_diff(a, b) {
    return a.filter(e => !b.includes(e));  
}

// solution using Set:
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(el => !b.has(el))
}