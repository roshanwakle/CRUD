import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required : true,
            trim: true,
            minlength:3
        },
        username: {
            type:String,
            require:true,
            validate(v){
                if(!(validator.isAlphanumeric(v)))
                throw new console.error('Error in username');
            }
        },
        email:{
            type: String,
            required : true,
            validate(v) {
                    if(!validator.isEmail(v))
                    throw new Error ('Type Correct E-Mail Id');
            }
        },
        phone:{
            type : String,
            required : true,
            validate(v) {
                if(!validator.isMobilePhone(v,'en-IN'))
                    throw new Error('Error in Phone Number');
            }
            // minlength:10,
            // maxlength:13
            // isMobilePhone
        } 
    }
);


const user = mongoose.model("user",userSchema);

export default user;