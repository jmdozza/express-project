import mongoose from "mongoose";
import Reserva from "../../models/reserva.mjs";
import Usuario from "../../models/usuario.mjs";
import Bicicleta from "../../models/bicicleta.mjs";

describe ('Testing Usuarios',function(){
    beforeAll(function(done){

        var mongoDB ='mongodb://localhost/bicicletas';
        mongoose.connect(
            mongoDB);
        const db= mongoose.connection;
        db.on(
            'error',
            console.error.bind(console,'connection error')
        );
        db.once('open',function(){
            console.log('We are connected to test database');
            done();
        });
    });

    afterEach(function(done){
        Reserva.deleteMany({});
        Usuario.deleteMany({});
        Bicicleta.deleteMany({});
        done();
    });

    describe('Cuando un usuario reserva una bici',()=>{
        it('Deebe existir la reserva',async()=>{
            const usuario = new Usuario({nombre:'Esteban'});
            await usuario.save();
            const bicicleta= new Bicicleta({
                    code:1,
                    color:"verde",
                    modelo:"urbana"
                });
            await bicicleta.save();

            var hoy= new Date();
            var mañana= new Date();
            mañana.setDate(hoy.getDate()+1);
            await usuario.reservar(bicicleta.id,hoy,mañana);
            const reservas = await Reserva.find({}).populate('bicicleta').populate('usuario').exec();
            expect(reservas.length).toBe(1);
            expect(reservas[0].diasReserva()).toBe(2);
            expect(reservas[0].bicicleta.code).toBe(1);
            expect(reservas[0].usuario.nombre).toBe(usuario.nombre);
            });
    });
});