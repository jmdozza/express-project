import {Bicicleta} from '../../models/bicicleta.mjs'

export const bicicleta_list=function(req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}