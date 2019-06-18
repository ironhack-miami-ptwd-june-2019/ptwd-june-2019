/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayOfMovies){
    return arrayOfMovies.map((theMovieObject)=>{
      let formattedMovie = {...theMovieObject};
      let totalMinutes;
      if(theMovieObject.duration.indexOf('h') > -1 && theMovieObject.duration.indexOf('min') > -1){
      let timeArray = theMovieObject.duration.split('h');
      timeArray[0] = parseInt(timeArray[0]);
      timeArray[1] = parseInt(timeArray[1]);
      totalMinutes = (timeArray[0]*60 + timeArray[1])
      } else if (theMovieObject.duration.indexOf('h') > -1){
        let numberOfHours = parseInt(theMovieObject.duration);
        totalMinutes = (numberOfHours * 60)
      } else {
          totalMinutes = parseInt(theMovieObject.duration)
      }
      formattedMovie.duration = totalMinutes;
      return formattedMovie;
    });
  }

// Get the average of all rates with 2 decimals 

function ratesAverage(arrayOfMovies){
    let total = arrayOfMovies.reduce((accumulator,eachMovie)=>{
        return accumulator + Number(eachMovie.rate);
    },0)
    return Number((total / arrayOfMovies.length).toFixed(2));
}   



// Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovieObjects){
    let dramasOnly = arrayOfMovieObjects.filter((eachMovie)=>{
        return eachMovie.genre.includes("Drama");
    })
    if(dramasOnly.length ===0){return undefined};
   return ratesAverage(dramasOnly);
}

function orderByDuration(arrayOfMovies){
    let arrayToUse = [...arrayOfMovies];
    if(typeof arrayOfMovies[0].duration === "string"){
        arrayToUse = turnHoursToMinutes(arrayToUse);
    }
    arrayToUse.sort((a,b)=>{
        if(a.duration < b.duration){
            return -1;
        } else if (b.duration < a.duration){
            return 1;
        } else { // this else only happens if they have the same duration 
            if(a.title < b.title){
                return -1;
            } else if (b.title < a.title){
                return 1;
            }
        }
        return 0;
    });
    return arrayToUse;
}


// Order by time duration, in growing order

function howManyMovies(arrayOfMovieObjects){
    if(arrayOfMovieObjects.length ===0){return}//this is the same as return undefined
    let dramasBySteven = arrayOfMovieObjects.filter((eachMovie)=>{
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes('Drama');
    })
    return `Steven Spielberg directed ${dramasBySteven.length} drama movies!`; 
}




// Order by title and print the first 20 titles
function orderAlphabetically(bunchaMovies){
    let arrayToUse = [...bunchaMovies];
    arrayToUse.sort((a,b)=>{
        if(a.title < b.title){
            return -1;
        } else if (b.title < a.title){
            return 1
        }
        return 0;
    })
    let blah = arrayToUse.slice(0,20);
    let titlesOnly = blah.map((eachMovieObject)=>{
        return eachMovieObject.title;
    })
    return titlesOnly;
}




function bestYearAvg(arrayOfMovies){
    if(arrayOfMovies.length ===0){return}
    let trackerThing = {};
    arrayOfMovies.forEach((eachMovie)=>{
        if(trackerThing[eachMovie.year]){
            trackerThing[eachMovie.year].number +=1;
            trackerThing[eachMovie.year].totalRate += Number(eachMovie.rate);
        } else{
            trackerThing[eachMovie.year] = {number: 1, totalRate: Number(eachMovie.rate)};
        }

    })

    let biggest = 0;
    let year = "";

    for(let yearKey in trackerThing){
        if(trackerThing[yearKey].totalRate / trackerThing[yearKey].number > biggest){
            biggest = trackerThing[yearKey].totalRate / trackerThing[yearKey].number
            year = yearKey;
        }
    }
    console.log(trackerThing);
    return `The best year was ${year} with an average rate of ${biggest}`
}



// Best yearly rate average
