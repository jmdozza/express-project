var express = require('express');
var router = express.Router();
var usersControllers= require('../../controllers/api/userControllerApi.mjs');

router.get('/',usersControllers.usersList);
router.post('/create',usersControllers.createUser);
router.post('/reservar',usersControllers.hacerReserva);

module.exports = router