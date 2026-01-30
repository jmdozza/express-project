import Bicicleta from "../models/bicicleta.mjs";

export const bicicleta_list=  function(req,res){
    res.render('bicicletas/index',{bicis:  Bicicleta.allBicis});
}

export const bici_create_get=function(req,res){
    res.render('bicicletas/create');
}

export const bici_create_post=function(req,res){
    var bici= new Bicicleta(
        req.body.id,
        req.body.color,
        req.body.modelo
    );
    bici.ubicacion=[req.body.lat,req.body.long];
    Bicicleta.add(bici);
    res.redirect('/bicicletas')
}


export const bici_delete_post=function(req,res){
    try{
        Bicicleta.removeById(req.body.id);
    }
    catch(error){
        console.log(error.message);
    }
    
    res.redirect('/bicicletas')
}

export const bici_update_get=function(req,res){
    var id=req.query.id;
    console.log("ID QUERY:"+id);
    res.render('bicicletas/update',{bici:Bicicleta.getBiciById(id)});
}

export const bici_update_post=function(req,res){
    var color= req.body.color;
    var modelo=req.body.model;
    var lat=req.body.lat;
    var long=req.body.long;
    console.log("INFO LLEGA: "+req.body.id+color+modelo+lat+long);
    Bicicleta.updateInfo(
        req.body.id,
        color,
        modelo,
        lat,
        long
    )
    res.redirect('/bicicletas');

}