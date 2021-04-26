import express from 'express';
var router = express.Router();
import controller from "./controller";
/* GET users listing. */
router.get('/', controller.getAllUser);

//Create new user
router.post('/', controller.createUser);

//Get single user by id
router.get('/:id', controller.getUser);

//Update User details using PATCH method
router.patch('/:id', controller.updateUser);

//Delete user by using DELETE method
router.delete('/:id', controller.deleteUser);

module.exports = router;
