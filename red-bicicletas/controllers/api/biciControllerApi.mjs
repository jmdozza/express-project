import Bicicleta from '../../models/bicicleta.mjs'

export const bicicleta_list= async function(req,res){
    res.status(200).json({
        bicicletas: await Bicicleta.allBicis()
    });
}

export const bici_create_post= async function(req,res){
    var ubicacion=[req.body.lat,req.body.long];
    var bici = await Bicicleta.createInstance(
        req.body.code,
        req.body.color,
        req.body.modelo,
        ubicacion
    );
    await Bicicleta.addBici(bici);
    res.status(200).json({
        message: "Bicicleta creada exitosamente",
        bicicleta: bici
    });
}

export const bici_action_delete=async function(req,res){
    try{
        await Bicicleta.deleteBici(req.body.code);
        res.status(200).json({
            message: "Bicicleta eliminada exitosamente",
            id: req.body.code
        });
    }catch(error){
        console.log(error.message)
        res.status(404).json({
            message:"La bicicleta con id "+req.body.code+" no se encontro"
        })
    }
    
}

export const bici_action_findById=function(req,res){
    console.log("ENTRO"+req.query.id);
    try{
        var bici= Bicicleta.findByIdv2(Number(req.query.id));
        res.status(200).json({
            bicicleta: bici,
            message: "Bicicleta encontrada"
        });
    }catch(error){
        res.status(404).json({
            message: "Bicicleta no encontrada"
        });
    }
}