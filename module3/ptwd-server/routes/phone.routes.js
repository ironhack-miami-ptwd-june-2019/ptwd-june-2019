const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone");


// create a new phone
router.post("/api/phones", (req, res, next) => {
// console.log("body: ", req.body)
    // console.log("do i have user in phone route? ", req.user)

    const { brand, model, price } = req.body;

    Phone.create({ model, brand, price, owner: req.user._id })
    .then(phoneDoc => res.status(200).json(phoneDoc))
    .catch(err => next(err));
    // Phone.create({ 
    //     model: model, 
    //     brand: brand, 
    //     price: price, 
    //     owner: req.user._id })
})


// retrieve the list of all phones

router.get("/api/phones", (req, res, next) => {
    Phone.find()
    .then(phonesFromDB => res.status(200).json(phonesFromDB))
    .catch(err => next(err))
})



module.exports = router;