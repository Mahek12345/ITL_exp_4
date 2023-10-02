const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/Crud_operation"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("COnnection started")).catch((error)=> console.log(error.message));

