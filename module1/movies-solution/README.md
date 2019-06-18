![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# All Times Movies

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1561a196c2e3852533bad64d9b0d4e9f.gif)


## Introduction

We just learned some awesome **javascript** methods, that will help us a lot to manipulate **objects**. So in this exercise, we will focus on practice them, so it is mandatory to implement at least one of them in each iteration.

Best way to practice is to work with real data and challenges that we will deal in the future. In the **`data.js`** file you will find an array of info about **The best 250 movies of all times** according to [IMDB Ranking](http://www.imdb.com/chart/top?ref_=nv_mv_250_6) and you have to process it to display what each iteration ask! :muscle:

### Requirements

- Practice **Javascript** advance methods
- Use `map`, `reduce`, `filter` and `sort` to manipulate arrays

### Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your campus, name and last names separated by a dash "-".

### Starter code

The `src/data.js` contains an array of 250 movies, each of them with all the info you will need about the movies to finish the iterations. Here you can see an example of how the data is display:

```javascript=
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
```

### Deliverables

All the files that compose the project, including the HTML, and JavaScript.

## Instructions

Let's start working on the solutions. We recommend to finish each iteration before moving to the next. And be careful to manipulate the `array` **movies**, you will need it for every iteration.

You have to work on the `src/movies.js` file.

### Tests

Ohh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read really carefully the instructions to understand what you have to do.

### Iteration 1: Time Format

We get the info from the **IMDB** web page, but the duration info was saved in a format that difficult us a lot to compare movies.

Finding the longest movie is almost impossible using that format, so let's change it!

**:bulb: Remember we have a methods o create a new array from another one!**

- Create a `turnHoursToMinutes` method that receive an array as parameter, replace the duration info of each of the movies for it equivalent in minutes. For example:

```javascript=
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
```

Should be:

```javascript=
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"142",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
```
 
You must return a new array with all the info about the movie, not modify the original array!

### Iteration 2: All rates average

These are the best movies based on their rates, so supposedly all of them have an awesome rate. In this iteration, we want to know the average rate of all of them and display it on the console. Create a `ratesAverage` method that receive an array as a parameter and solve the challenge.

The rate must be returned rounded to 2 decimals!

**:bulb: Maybe you want to *"reduce"* the data to a single value :wink:**

### Iteration 3: Drama movies

Drama is the genre that repeats the most on our `array`, apparently, people love drama! :eyes: 

**Create a `dramaMoviesRate` that receive an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.**

Again, rounded to 2 decimals!

**Print on the console the result!**

### Iteration 4: Ordering by the duration

We need to sort the movies in ascending order by their duration. This should be easy using one of the **methods** we just learn. Create a method `orderByDuration` that receives an array as parameter and return the sorted array.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

If two movies have the same duration, order them in alphabeticall order by their title!

### Iteration 5: Steven Spielberg. The best?

One of the most famous directors in cinema is **[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)**, and he has some really awesome drama movies that show up on our list, but we want to know how many!

Go ahead and create a `howManyMovies` method that receives an array as a parameter and `filter` :eyes: the array so we can have only the **drama** movies where **Steven Spielberg** is the director. 


### Iteration 6: Alphabetic Order

Another famous way to order the movies is to sort them alphabetically using the `title` key. But in this case we only need to print the title of the first 20. Easy Peasy for an expert like you :wink:

Create a `orderAlphabetically` method, that receive an array and return an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive have less than 20 movies, return all of them order

### BONUS Iteration: Best yearly rate average 

Let's complicated a bit this thing. We always listen to classic movies, but we want to know, which year has the best average rate, so we can declare officially the **BEST YEAR FOR CINEMA**!

Go ahead and find which year have the best average rate for the movies that were released on that year!

Happy coding!

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)