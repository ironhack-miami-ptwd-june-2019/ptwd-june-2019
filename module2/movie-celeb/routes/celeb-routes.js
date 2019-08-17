const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  if(!req.user){
    req.flash('error', 'please login to view actors profiles')
    res.redirect('/login')
  }
  console.log('------------------------')
  console.log(req.user)

  
  Celebrity.find()
  .then((result)=>{
    // console.log(result)

    let newList = result.map((eachCeleb)=>{
      if(eachCeleb.creator.equals(req.user._id)){
        eachCeleb.owned = true;
        return eachCeleb
      } else{
        return eachCeleb;
      }

    })



    res.render('celeb-views/list-of-celebs', {listOfCelebs: newList});
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/details/:idVariable', (req, res, next)=>{
const theID = req.params.idVariable;

Celebrity.findById(theID)
.then((result)=>{
  res.render('celeb-views/celeb-details', {theSingleCelebrity: result})
})
.catch((err)=>{
  next(err)
})
})


router.get('/create', (req, res, next)=>{
  res.render('celeb-views/celeb-creation')
  //res render take a relative path as the argument
})


router.post('/creation', (req, res, next)=>{
  let newName = req.body.theName;
  let newJob = req.body.theOccupation;
  let newPhrase = req.body.theCatchphrase;


    Celebrity.create({
      name: newName,
      occupation: newJob,
      catchphrase: newPhrase,
      creator: req.user._id
    })
    .then((result)=>{

      req.flash('success','New Celebrity successfully addded to Database')

      res.redirect('/celebrities')
      //res redirect take a url as the argument

    })
    .catch((err)=>{
      next(err)
    })
})


router.post('/:id/destroy', (req, res, next)=>{
  const id=req.params.id;

  Celebrity.findByIdAndRemove(id)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err);
  })
})


router.get('/edit/:id', (req, res, next)=>{
  
  
  Celebrity.findById(req.params.id)
  .then((result)=>{
    if(req.user._id.equals(result.creator)){
      res.render('celeb-views/edit', {theCelebrity: result})
    } else{
      req.flash('error', 'sorry you can only edit your own celebrities');
      res.redirect('/celebrities');
    }

  })
  .catch((err)=>{
    next(err)
  })

})
























router.post('/update/:id', (req, res, next)=>{

  Celebrity.findByIdAndUpdate(req.params.id,req.body)
  .then(()=>{
    res.redirect('/celebrities/details/'+req.params.id)
  })
 .catch((err)=>{
   next(err)
 })
 
 
//  Celebrity.findByIdAndUpdate(id, 
  //{
//   name: req.body.name,
//   occupation: req.body.occupation,
//   catchphrase: req.body.catchphrase
// } this is the update we want to do so we just send req.body directly instead to be fancy but this is what is actually happening
//  )



})






module.exports = router;
