import mongoose from "mongoose";
import moment from "moment";

var reservaEsquema= new mongoose.Schema({
    desde:Date,
    hasta:Date,
    bicicleta:{
        type:mongoose.Schema.Types.ObjectId,ref:'Bicicleta'
    },
    usuario:{
        type:mongoose.Schema.Types.ObjectId,ref:'Usuario'
    }
});

reservaEsquema.methods.diasReserva=function(){
    return moment(this.hasta).diff(moment(this.desde),'days')+1;
}

var modelReserva= mongoose.model("Reserva",reservaEsquema);
export default modelReserva;