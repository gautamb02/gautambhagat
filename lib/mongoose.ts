import mongoose from "mongoose";

const createConnectionToDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_URI || "")
    } catch (error) {
        console.log(error)
    }
}

export default  createConnectionToDB;