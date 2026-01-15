var express = require('express');
var router = express.Router();
var bicicletasController= require('../../controllers/api/biciControllerApi.mjs');

router.get('/',bicicletasController.bicicleta_list);

module.exports = router