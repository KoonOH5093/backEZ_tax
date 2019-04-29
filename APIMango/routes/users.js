var express = require('express');
var router = express.Router();
var controller = require('../controllers/UserController');
router.get('/', controller.getUserPage);//ตรงนี้จะเรียกผ่านcontroller แทน
router.get('/users/', controller.getUser);
router.post('/users/createuser/', controller.createUser);
module.exports = router;