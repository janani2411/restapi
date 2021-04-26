import express from 'express';
var router = express.Router();
import User from "../models/userSchema";
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then(result => {
    res.status(200).json({
      userdetails : result
    });
  })
  .catch(error => {
    res.status(500).json({
      error : error
    });
  })
});

//Create new user
router.post('/',function(req, res, next) {
        let user = new User({
            id : req.body.id,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : req.body.password
        });
        try
        {
        const savedUser = user.save();
        res.send("successfully");
    }
    
    catch(error)
    {
        res.send(error);
    }
});

//Get single user by id
router.get('/:id', (req, res, next) => {
  User.findOne( {id : req.params.id} ).then(result => {
    res.status(200).json({
      userdetail : result
    });
  })
  .catch(error => {
    res.status(500).json({
      error : error
    });
  })
});

//Update User details using PATCH method
router.patch('/:id',function(req, res, next) {
  User.findOneAndUpdate({id : req.params.id} , {$set : {firstname : req.body.firstname , lastname : req.body.lastname}})
  .then(result => {
    res.status(200).json({
      userdetail : result
    });
  })
  .catch(error => {
    res.status(500).json({
      error : error
    });
  })
});

//Delete user by using DELETE method
router.delete('/:id', (req, res, next) => {
  User.findOneAndDelete( {id : req.params.id} ).then(result => {
    res.status(200).json({
     message : "deleted"
    });
  })
  .catch(error => {
    res.status(500).json({
      error : error
    });
  })
});
module.exports = router;
