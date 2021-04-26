import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id :{
        type : Number ,
        required : true 
    },
    firstname : {
        type : String , 
        required : true ,
        min : 5 , 
        max : 150 
    },
    lastname : {
        type : String , 
        required : true ,
        min : 5 , 
        max : 150 
    },
    email : {
        type : String , 
        required : true , 
    },
    password : {
        type :String , 
        required : true , 
    }

});

module.exports = mongoose.model("User" , userSchema); 