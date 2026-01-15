var express = require('express');
var router = express.Router();
var bicicletasController= require('../controllers/bicicontroller.mjs');


router.get('/',bicicletasController.bicicleta_list);
router.get('/create',bicicletasController.bici_create_get);
router.post('/create',bicicletasController.bici_create_post);
router.get('/update',bicicletasController.bici_update_get);
router.post('/update',bicicletasController.bici_update_post);
router.post('/:id/delete',bicicletasController.bici_delete_post);
module.exports=router;