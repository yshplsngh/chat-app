import mongoose from "mongoose"

const Conversationschema= mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Meassage",
        default:[]
    }]
    //createAt updateAt => Member since <created>
},{timestamps:true})


const Conversation =mongoose.model("Conversation",Conversationschema)

export default Conversation;