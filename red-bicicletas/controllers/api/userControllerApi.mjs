import Usuario from "../../models/usuario.mjs";

//Acá usamos promesas para entender el concepto y aplicarlo
export const usersList=function(req,res){
    Usuario.find({}).then(
        (users)=>{
            res.status(200).json({
                message:"Usuarios recuperados con exito",
                usuarios:users
            })
        }
    ).catch(
        (error)=>{
            res.status(404).json({
                message:error
            });
        }
    )
}

export const createUser= async function(req,res){
    var userName= req.body.name;
    try{
        var user = new Usuario({nombre:userName});
        await user.save();
        res.status(200).json({
            message:"Usuario creado con exito"
        })
    }
    catch(errorr){
        console.error(errorr.message);
        res.status(400).json({
            message:"No se pudo crear el usuario"
        });
    }
}

export const hacerReserva= async function(req,res){
    var user=await Usuario.findById(req.body.id);
    console.log(user);
    await user.reservar(
        req.body.biciId,
        req.body.desde,
        req.body.hasta
    );
    res.status(200).json({
        message: "Reserva creada con exito"
    });
}