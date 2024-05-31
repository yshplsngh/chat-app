import mongoose from "mongoose";



  export const connectTomongoDB = async() => {

    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_DB_URI,)
        console.log("connected to mogodb successfully")

        
    } catch (error) {
        console.log("error connecting to mongoose",error.message)
        
    }

}
