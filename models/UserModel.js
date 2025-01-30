import mongoose from "mongoose";
import{gensalt,hash} from "bcrypt";

const userSchema = new nongoose.Schema({
    email:{
        type:String,
        required: [true, "Email is Required."],
        unique: true,
    },
    password:{
        type:String,
        required: [true, "Password is Required."],
    },
    firstName:{
        type: String,
        required: false,
    },
    lastName:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    },
    color:{
        type: Number,
        required: false,
    },
    profilesetup:{
        type: Boolean,
        default: false,
    },
}); 




userSchema.pre("save",async function(next){
    const salt = await gensalt();
    this.password = await hash(this.password, salt);
    next();
});

const User =mpngoose.model("users",userSchema);
expport default User;