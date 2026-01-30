/*import mongoose from "mongoose";
import Bicicleta from "../../models/bicicleta.mjs";

describe('Testing Bicicletas',function(){
    beforeAll(function(done){
        var mongoDB='mongodb://localhost/testdb';
        mongoose.connect(mongoDB);
        const db= mongoose.connection;
        db.on('error',console.error.bind(console,'connection error'));
        db.once('open',function(){
            console.log("We are connected to de test database");
            done();
        });
    });

    afterEach(function(done) {
    Bicicleta.deleteMany({}).then(() => done()).catch(done.fail);
    });


    describe('Bicicleta.createInstance',()=>{
        it('crear una instanica de Bicicleta',()=>{
            var bici = Bicicleta.createInstance(
                1,
                "Rojo",
                "Ruta",
                [-35,65]
            );
            expect(bici.code).toBe(1);
            expect(bici.color).toBe("Rojo");
            expect(bici.modelo).toBe("Ruta");
            expect(bici.ubicacion[0]).toBe(-35);
            expect(bici.ubicacion[1]).toBe(65);
        });
    });

    describe('Bicicleta.allBicis',()=>{
        it('comienza vacia',async()=>{
            const bicis= await Bicicleta.allBicis();
            console.log(bicis);
            expect(bicis.length).toBe(0);

        });
    });

    describe ('Bicicleta.add',()=>{
        it('agrego bici',async ()=>{
            var aBici= new Bicicleta({
                code:1,
                color:"Verde",
                modelo:"Ruta"
            })
            await Bicicleta.addBici(aBici);
            var bicis= await Bicicleta.allBicis();
            expect(bicis.length).toEqual(1);
        });
    });

    describe('Bicicleta.findById',()=>{
        it('Busco bici por id',async()=>{
            //Primero se debe añadir una bicicleta
            var aBici= new Bicicleta({
                code:1,
                color:"Verde",
                modelo:"Ruta"
            });

            
            await Bicicleta.addBici(aBici);
            var resul= await Bicicleta.findById(aBici.code);
            console.log(resul);
            expect(aBici.code).toEqual(resul.code);
        
            
        });

    });

});
/*

/*import { Bicicleta } from "../../models/bicicleta.mjs";

// Lo que esta en el beforeEach se hace antes cada test
beforeEach(()=>{Bicicleta.allBicis=[];});
describe("Bicileta.allBicis",()=>{
    it('comienza vacua',()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
    })
});

describe("Bicicleta.add",()=>{
    it("agregamos una",()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var a= new Bicicleta(
            1,
            "Verde",
            "Urbana",
            [4.670626063357456, -74.0962978981166]
        );
        Bicicleta.add(a);
        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe("Bicicleta.findById",()=>{
    it('debe devolver la bici con id 1',()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici1= new Bicicleta(
            1,
            "Verde",
            "Urbana"
        );
        var aBici2= new Bicicleta(
            2,
            "Rojo",
            "Ruta"
        );
        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);
        var targetBici= Bicicleta.findByIdv2(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici1.color);
        expect(targetBici.modelo).toBe(aBici1.modelo);
    });
});*/