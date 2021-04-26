import User from "../../models/userSchema";

// GET ALL THE USER
let getAllUser = function(req, res, next) {
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
      };
  
// CREATE SPECIFIC USER
const createUser = function(req, res, next) {
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
};
  
// GET SPECIFIC USER
const getUser = (req, res, next) => {
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
};
 
// UPDATE SPECIFIC USER
const updateUser = function(req, res, next) {
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
};

// DELETE SPECIFIC USER
const deleteUser =  (req, res, next) => {
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
};
  
  
export default { getAllUser , createUser , getUser, updateUser , deleteUser };