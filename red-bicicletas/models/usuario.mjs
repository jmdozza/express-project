import mongoose from "mongoose";
import Reserva from "./reserva.mjs";


//El esquema define la estructura y las reglas 
//de los documentos que se guardan en una coleccion
//de mongodb
var userSchema= new mongoose.Schema({
    nombre:String
});

userSchema.methods.reservar=async function(biciId,desde,hasta){
    var reserva = new Reserva({
        usuario:this._id,
        bicicleta:biciId,
        desde:desde,
        hasta:hasta
    });
    console.log("ESTA ES LA RESERVA");
    console.log(reserva);
    return await reserva.save();
}

//El modelo permite crear, consultarr, modificar etc (hacer operaciones)
//en la coleccion de mongo correpsondiente
var usrModel= mongoose.model("Usuario",userSchema);
export default usrModel;