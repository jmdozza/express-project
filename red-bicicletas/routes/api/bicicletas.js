var express = require('express');
var router = express.Router();
var bicicletasController= require('../../controllers/api/biciControllerApi.mjs');

router.get('/',bicicletasController.bicicleta_list);
router.post('/create',bicicletasController.bici_create_post);
router.delete('/delete',bicicletasController.bici_action_delete);
router.get('/findById',bicicletasController.bici_action_findById);

module.exports = router