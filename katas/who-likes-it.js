// ************************************************************************************
// https://www.codewars.com/kata/who-likes-it
// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. We want to create the text that 
// should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, 
// containing the names of people who like an item. It must return the display text as shown 
// in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// ************************************************************************************


//////// my solution: ////////
function likes(arrayOfFans){
  if(!arrayOfFans) return `Pass the fans please!`;
  const fansCount = arrayOfFans.length;

  if(!fansCount) return `no one likes this`
  else if(fansCount === 1) return `${arrayOfFans[0]} likes this`
  else if(fansCount === 2) return `${arrayOfFans[0]} and ${arrayOfFans[1]} like this`
  else if(fansCount === 3) return `${arrayOfFans[0]}, ${arrayOfFans[1]} and ${arrayOfFans[2]} like this`
  else if (fansCount > 3) return `${arrayOfFans[0]}, ${arrayOfFans[1]} and ${fansCount-2} other like this`
}



//////// the best solution: ////////
function likes2(arrayOfFans){

    if(!arrayOfFans) return `Pass the fans please!`;
    const [first, second, third, ...theRest] = arrayOfFans;
    // console.log(theRest.length);
  
    const fansCount = arrayOfFans.length;
  
    switch(fansCount){
      case 0: return `no one likes this`
      case 1: return `${first} likes this`
      case 2: return `${first} and ${second} like this`
      case 3: return `${first}, ${second} and ${third} like this`
      default: return `${first}, ${second} and ${theRest.length+1} like this`
    }
  }
  
  const fans = ["Alina", "Jesus", "Ant", "Carlos", "Nick", "Alex"]  
  
  
  likes(fans)
  likes2(fans)