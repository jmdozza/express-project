import mongoose from "mongoose";

var biciSchema = new mongoose.Schema({
    code:Number,
    color:String,
    modelo:String,
    ubicacion:{
        //Decimos que va a ser una lista de números
        type:[Number],
        index:{
            type: '2dsphere',
            sparse:true
        }
    }
});

biciSchema.methods.toString=function(){
    return 'code: '+this.code+' | color: '+this.color;
};

biciSchema.statics.allBicis=function(){
    return this.find({});
};

biciSchema.statics.createInstance=function(code,color,modelo,ubicacion){
    return new this({
        code: code,
        color:color,
        modelo:modelo,
        ubicacion:ubicacion
    });
};

biciSchema.statics.addBici=function(biciInstance){
    return this.create(biciInstance);
};

biciSchema.statics.findById=function(codeBici){
    return this.findOne({code:codeBici});
}

biciSchema.statics.deleteBici=function(codeB){
    return this.deleteOne({code:codeB});
}

const Bicicleta = mongoose.model('Bicicleta',biciSchema);
export default Bicicleta;


/*Bicicleta.add=function(bici){
    Bicicleta.allBicis.push(bici);
}

Bicicleta.findById= function(id){
    var index= Bicicleta.allBicis.findIndex(bici=> bici.id===id);
    if(index===-1){
        return null;

    }
    return index;
}

Bicicleta.findByIdv2= function(id){
    var index= Bicicleta.allBicis.findIndex(bici=> bici.id===id);
    if(index===-1){
        throw new Error("La bicicleta no esta en la lista");

    }
    return Bicicleta.allBicis[index];
}
Bicicleta.getBiciById=function(id){
    console.log("VALOR QUE LLEGA: "+id)
    var index= Bicicleta.findById(Number(id));
    console.log(index)
    return Bicicleta.allBicis[index];
}

Bicicleta.removeById=function(id){
    var index= Bicicleta.findById(id);
    Bicicleta.allBicis.splice(index,1)
}

Bicicleta.updateInfo=function(id,color,modelo,lat,long){
    var index = Bicicleta.findById(Number(id));
    Bicicleta.allBicis[index].color=color;
    Bicicleta.allBicis[index].modelo=modelo;
    Bicicleta.allBicis[index].ubicacion=[lat,long];
}

var a= new Bicicleta(1,'Rojo','Todo terreno',[4.670626063357456, -74.0962978981166]);
var b = new Bicicleta(2,'Azul','Ruta',[4.671027464239538, -74.09698716074315]);

//Bicicleta.add(a);
//Bicicleta.add(b);
*/

