var express = require('express');
var router = express.Router();
var controller = require('../controllers/UserController');
router.get('/', controller.getUserPage);//ตรงนี้จะเรียกผ่านcontroller แทน
router.get('/users/', controller.getUser);
router.post('/users/createuser/', controller.createUser);
router.post('/users/login', controller.getUserByEmailandPass);
router.post('/users/edit', controller.editUser)
module.exports = router;