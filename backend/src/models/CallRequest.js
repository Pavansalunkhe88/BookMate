import mongoose from "mongoose";

const callRequestSchema = new mongoose.Schema({
    caller : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    receiver : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    book : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book'
    },
    status : {
        type : String,
        enum : ['pending', 'accepted', 'rejected', 'missed', 'ended'],
        default : pending
    },
    callStartedAt : {
        type : Date
    },
    callEndedAt : {
        type : Date
    }
}, { timestamps : true });

const CallRequest = mongoose.model("CallRequest", callRequestSchema);
export default CallRequest;