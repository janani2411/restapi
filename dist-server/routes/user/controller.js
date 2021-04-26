"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userSchema = _interopRequireDefault(require("../../models/userSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// GET ALL THE USER
var getAllUser = function getAllUser(req, res, next) {
  _userSchema["default"].find().then(function (result) {
    res.status(200).json({
      userdetails: result
    });
  })["catch"](function (error) {
    res.status(500).json({
      error: error
    });
  });
}; // CREATE SPECIFIC USER


var createUser = function createUser(req, res, next) {
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
}; // GET SPECIFIC USER


var getUser = function getUser(req, res, next) {
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
}; // UPDATE SPECIFIC USER


var updateUser = function updateUser(req, res, next) {
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
}; // DELETE SPECIFIC USER


var deleteUser = function deleteUser(req, res, next) {
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
};

var _default = {
  getAllUser: getAllUser,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};
exports["default"] = _default;