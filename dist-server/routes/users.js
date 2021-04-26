"use strict";

var _express = _interopRequireDefault(require("express"));

var _userSchema = _interopRequireDefault(require("../models/userSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  _userSchema["default"].find().then(function (result) {
    res.status(200).json({
      userdetails: result
    });
  })["catch"](function (error) {
    res.status(500).json({
      error: error
    });
  });
}); //Create new user

router.post('/', function (req, res, next) {
  var user = new _userSchema["default"]({
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });

  try {
    var savedUser = user.save();
    res.send("successfully");
  } catch (error) {
    res.send(error);
  }
}); //Get single user by id

router.get('/:id', function (req, res, next) {
  _userSchema["default"].findOne({
    id: req.params.id
  }).then(function (result) {
    res.status(200).json({
      userdetail: result
    });
  })["catch"](function (error) {
    res.status(500).json({
      error: error
    });
  });
}); //Update User details using PATCH method

router.patch('/:id', function (req, res, next) {
  _userSchema["default"].findOneAndUpdate({
    id: req.params.id
  }, {
    $set: {
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }
  }).then(function (result) {
    res.status(200).json({
      userdetail: result
    });
  })["catch"](function (error) {
    res.status(500).json({
      error: error
    });
  });
}); //Delete user by using DELETE method

router["delete"]('/:id', function (req, res, next) {
  _userSchema["default"].findOneAndDelete({
    id: req.params.id
  }).then(function (result) {
    res.status(200).json({
      message: "deleted"
    });
  })["catch"](function (error) {
    res.status(500).json({
      error: error
    });
  });
});
module.exports = router;