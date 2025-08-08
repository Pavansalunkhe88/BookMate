import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    phone : {
        type: Number,
        required : true,
        validate : {
            validator : (v) => /^[0-9]{10}$/.test(v),
            message : props => `${props.value} is not a valid 10-digit number!`
        }
    },
    password : {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    location : {
        type : String,
    },
    wishlist : [
         {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book'
        }
    ],
    booksListed : [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book'
        }
    ]

}, {timestamps : true});

const User = mongoose.model(User, userSchema);
export default User;