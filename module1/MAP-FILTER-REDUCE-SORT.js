

// --------------------------------------------------------------
// MAP
// let test1 = [1,2,3,4,5,6,7,8,9];

// let test2 = [10,11,12,13,14,15,16,17,18,19];

// this is without a map function
// function addOneToEverythingInTheArray(theArrayToAddTo){

//   let newArray = [];

//   theArrayToAddTo.forEach((eachThing)=>{
//     newArray.push(eachThing+1);
//   })

//     return newArray;

// }

// addOneToEverythingInTheArray(test2);

// function addOneToEverything(arrayToAddTo){

// let newArray = arrayToAddTo.map((eachSingleElement)=>{
//     return eachSingleElement+1;
//   });

//   return newArray;
// }

// addOneToEverything(test1)

// let cities = ['miami', 'barcelona', 'amsterdam', 'memphis', 'toronto'];



// function capitalizeTheFirstLetterOfEachThingInTheArray(arrayToCapitalize){
//   let newArray = arrayToCapitalize.map((oneCity)=>{
//     return oneCity.charAt(0).toUpperCase() + oneCity.slice(1)
//   })
//   return newArray
// }

// capitalizeTheFirstLetterOfEachThingInTheArray(cities);
// m -> ft 3.28
// kg -> lbs 2.2

// let pokemon = [
//               {name: 'squirtle', height: 0.6, weight: 10, type: 'blah', mainAttack: 'cool Attack'},
//               {name: 'charmander', height: 0.75, weight: 8.3, type: 'blah', mainAttack: 'cool Attack'},
//               {name: 'primeape', height: 0.9, weight: 9, type: 'blah', mainAttack: 'cool Attack'},
//               {name: 'bulbasaur', height: 0.3, weight: 10, type: 'blah', mainAttack: 'cool Attack'},
//               ]


// function convertPokemonToImperialUnits(arrayOfPokemonObjects){

//   let newArray = arrayOfPokemonObjects.map((eachPokemon)=>{
//     let newPokemonObject = {...eachPokemon};
//     newPokemonObject.height = newPokemonObject.height * 3.28;
//     newPokemonObject.weight = newPokemonObject.weight * 2.2;
//     return newPokemonObject;
//   })
//   return newArray;
// }


// convertPokemonToImperialUnits(pokemon);


// --------------------------------------------------------------
// REDUCE

// let bunchaNumbers = [1,19,22,38,17,3,24,6];

// function addEmAllUp(arrayToAddTogether){

//   let total = arrayToAddTogether.reduce((accumulator, eachNumber)=>{

//     return accumulator + eachNumber;

//   })
//   return total;

// }

// addEmAllUp(bunchaNumbers)

let students = [
  {name: 'Bob', score: 84},
  {name: 'Sandra', score: 94},
  {name: 'Jess', score: 87},
  {name: 'Ryan', score: 79},
  {name: 'Tina', score: 80},
]

// function getAverageTestScoreOfStudents(arrayOfStudentObjects){

//   let total = arrayOfStudentObjects.reduce((accum, eachStudent)=>{
//       return accum + eachStudent.score
//   },0)
//   return total/arrayOfStudentObjects.length;
// }

// getAverageTestScoreOfStudents(students);
// -------------------------------------------------------------------------
// FILTER 


// let aBunchOfNumbers = [1,2,6,5,3,2,6,8,0,1,45,12];


// function keepOnlyThingsThatAreAtLeast6(someArrayOfNumbers){

//   let newArray = someArrayOfNumbers.filter((eachNumber)=>{
//     return eachNumber >= 6;
//   })

//   return newArray;
// }


// console.log(aBunchOfNumbers);

// keepOnlyThingsThatAreAtLeast6(aBunchOfNumbers)


// function keepOnlyAbove84(arrayOfStudents){
//   let honorRoll = arrayOfStudents.filter((eachStudent)=>{
//     return eachStudent.score > 84
//   })
//   return honorRoll;
// }

// keepOnlyAbove84([{name:'bob', score: 88}]);


// ----------------------------------------------------
// SORT 

// let words = ["sunflower", "happy", "rainbow", "unicorn", "frolic"]

// let someNumbers = [25,4,3,2,6,5,7,9,1,6,7,4,3,11,13,14,17,16,18];

// let nums = [1,5,4,6,7,8,9,2,3,4,5,6,3,9,8,7,1,2,3]


// students.sort((a,b)=>{

//   if(a.score < b.score){
//     return -1
//   } else if (b.score < a.score){
//     return 1
//   } else {
//     return 0
//   }

// })

