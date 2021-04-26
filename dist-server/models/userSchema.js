"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose["default"].Schema({
  id: {
    type: Number,
    required: true
  },
  firstname: {
    type: String,
    required: true,
    min: 5,
    max: 150
  },
  lastname: {
    type: String,
    required: true,
    min: 5,
    max: 150
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
module.exports = _mongoose["default"].model("User", userSchema);