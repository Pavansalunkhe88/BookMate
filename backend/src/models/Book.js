import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    description : {
        type : String,
        maxlength : 1000
    },
    category : {
        type : String,
        required : true,
        enum : ['Engineering', 'Medical', 'Novel', 'School', 'Comic', 'Others']
    },
    price : {
        type : Number,
        required : true,
        min : 1
    },
    img : {
        type : String,
        required : true
    },
    condition : {
        type : String,
        enum : ['New', 'Like New', 'Good', 'Acceptable', 'Poor'],
        default : 'Good'
    },
    seller : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    isSold : {
        type : Boolean,
        default : false
    },
    location : {
        type: String,
    },
    buyerInterested : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ]
}, {timestamps : true});

const Book = mongoose.model('Book', bookSchema);
export default Book;