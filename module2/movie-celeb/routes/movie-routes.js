const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');
const Movie     = require('../models/Movie')




router.get('/', (req, res, next) => {
    Movie.find()
    .then((result)=>{
   
      res.render('movie-views/index', {listOfMovies: result});
    })
    .catch((err)=>{
      next(err);
    })
  });
  
  
  router.get('/details/:idVariable', (req, res, next)=>{
  const theID = req.params.idVariable;
  
  Movie.findById(theID).populate('cast')
  .then((result)=>{
    res.render('movie-views/details', {theSingleMovie: result})
  })
  .catch((err)=>{
    next(err)
  })
  })
  
  
  router.get('/create', (req, res, next)=>{

    Celebrity.find()
    .then((result)=>{

      res.render('movie-views/new', {allCelebs: result})
    })
    .catch((err)=>{
      next(err);
    })



    //res render take a relative path as the argument
  })
  
  
  router.post('/creation', (req, res, next)=>{
    console.log('=-=-=-=-=-=-=-=-=-')
    console.log(req.body)

    let title = req.body.title;
    let director = req.body.director;
    let image = req.body.image;
    let cast = req.body.cast
  
  
      Movie.create({
      title, director, image, cast
      })
      .then((result)=>{
  
        req.flash('success','New Movie successfully addded to Database')
  
        res.redirect('/movies')
        //res redirect take a url as the argument
  
      })
      .catch((err)=>{
        next(err)
      })
  })
  
  
  router.post('/:id/destroy', (req, res, next)=>{
    const id=req.params.id;
  
    Movie.findByIdAndRemove(id)
    .then(()=>{
      res.redirect('/movies')
    })
    .catch((err)=>{
      next(err);
    })
  })
  
  
  router.get('/edit/:id', (req, res, next)=>{
    
    
    Movie.findById(req.params.id)
    .then((movie)=>{

      Celebrity.find()
      .then((celebs)=>{


        celebs.forEach((eachCeleb)=>{

          movie.cast.forEach(eachCelebID => {
            if(eachCelebID.equals(eachCeleb._id)){
              eachCeleb.included = true;
            }
          });

        })


        res.render('movie-views/edit', {theMovie: movie, celebs: celebs});

      })
      .catch((err)=>{
        next(err)
      })
    })
    .catch((err)=>{
      next(err)
    })
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  router.post('/update/:id', (req, res, next)=>{
  
    Movie.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{
      res.redirect('/movies/details/'+req.params.id)
    })
   .catch((err)=>{
     next(err)
   })
  })
  





module.exports = router;