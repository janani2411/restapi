"use strict";

var _express = _interopRequireDefault(require("express"));

var _userSchema = _interopRequireDefault(require("../../models/userSchema"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

/* GET users listing. */
router.get('/', _controller["default"].getAllUser); //Create new user

router.post('/', _controller["default"].createUser); //Get single user by id

router.get('/:id', _controller["default"].getUser); //Update User details using PATCH method

router.patch('/:id', _controller["default"].updateUser); //Delete user by using DELETE method

router["delete"]('/:id', _controller["default"].deleteUser);
module.exports = router;