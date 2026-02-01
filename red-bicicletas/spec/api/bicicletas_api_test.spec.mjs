/*import Bicicleta from "../../models/bicicleta.mjs";
import mongoose from "mongoose";
import request from "request";

describe("Bicicleta API ",function() {
    beforeAll(function(done){
            var mongoDB='mongodb://localhost/bicicletas';
            mongoose.connect(mongoDB);
            const db= mongoose.connection;
            db.on('error',console.error.bind(console,'connection error'));
            db.once('open',function(){
                console.log("We are connected to de test database");
                done();
            });
        });
    
    beforeEach(function(done) {
    Bicicleta.deleteMany({}).then(() => done()).catch(done.fail);
    });
    afterEach(function(done) {
    Bicicleta.deleteMany({}).then(() => done()).catch(done.fail);
    });

    describe("GET BICICLETAS /",()=>{
        it('Status 200',(done)=>{
            request.get("http://localhost:3000/api/bicicletas",function(error,response,body){
                console.log("Callback ejecutado",{error,status:response && response.statusCode});
                try{
                    var result=JSON.parse(body);
                    console.log(result);
                    expect(error).toBeNull();
                    expect(response.statusCode).toBe(200);
                    expect(result.bicicletas.length).toBe(0);
                    done();
                }
                catch(err){
                    done.fail(err);
                }
            })
            
        });
    });

    describe("POST BICICLETA / CREATE",()=>{
        it("Status 200", (done)=>{
            var headerss={'content-type':'application/json'};
            var aBici ='{"code":5,"color":"violeta","modelo":"bmx","lat":-34,"long":-54}';
            var biciInstance= Bicicleta.createInstance(5,"violeta","bmx",[-34,-54]);
            request.post({
                headers:headerss,
                url:"http://localhost:3000/api/bicicletas/create",
                body:aBici
            },function(error,response,body){
                expect(response.statusCode).toBe(200);
                var biciResul=JSON.parse(body).bicicleta;
                console.log(biciResul);
                expect(biciInstance.code).toEqual(biciResul.code);
                done();
            });
        })
    })

    describe("DELETE BICICLETA",()=>{
        it("status 200", (done) => {
            var headerss = { 'content-type': 'application/json' };
            var abici = Bicicleta.createInstance(
                1,
                "Rojo",
                "Ruta",
                [-35, 65]
            );
            Bicicleta.addBici(abici).then(() => {
                var reqBody = '{"code":1}';
                request.delete({
                    headers: headerss,
                    url: "http://localhost:3000/api/bicicletas/delete",
                    body: reqBody
                }, function (error, response, body) {
                    console.log(JSON.parse(body));
                    expect(response.statusCode).toBe(200);
                    done();
                });
            }).catch(done);
        })
    });

});*/
