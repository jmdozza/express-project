export const Bicicleta = function(id,color,modelo,ubicacion){
    this.id=id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
}

Bicicleta.prototype.toString=function(){
    return 'id: '+this.id+"| color: "+this.color;
}

// Atributo y método estático
Bicicleta.allBicis=[];
Bicicleta.add=function(bici){
    Bicicleta.allBicis.push(bici);
}

Bicicleta.findById= function(id){
    var index= Bicicleta.allBicis.findIndex(bici=> bici.id===id);
    if(index===-1){
        return null;

    }
    return index;
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

Bicicleta.add(a);
Bicicleta.add(b);


