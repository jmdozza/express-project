var dotenv= require("dotenv");
var mongoose=require("mongoose");

dotenv.config();
const mongoURI=process.env.MONGODB_URI||'mongdodb://localhost/bicicletas';
mongoose.connect(mongoURI);
const db= mongoose.connection;
db.on('error',
    console.error.bind(console,"Mongo connection error: ")
);

module.exports = db;