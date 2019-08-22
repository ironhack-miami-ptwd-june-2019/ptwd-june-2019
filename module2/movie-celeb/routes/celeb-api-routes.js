const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');



router.get('/api/celebs/details/:id', (req, res, next)=>{
    let id = req.params.id;
    Celebrity.findById(id)
    .then((theCelebrity)=>{
        res.json(theCelebrity)
    })
    .catch((err)=>{
        next(err);
    })
})

router.post('/api/celebs/edit/:id', (req, res, next)=>{
    let id = req.params.id;
    Celebrity.findByIdAndUpdate(id, {
        name: req.body.theName,
        occupation: req.body.theOccupation,
        catchphrase: req.body.theCatchphrase
    })
    .then((response)=>{
        res.json({msg: 'yay, good job'});
    })  
    .catch((err)=>{
        console.log(err);
    })

})





module.exports = router;