import mongoose from 'mongoose'
import * as dotenv from "dotenv";

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONN)
        console.log(`Connected to DB! at ${conn.connection.host}`)
    } catch(err){
        throw new Error("Error in connecting to mongoDB")
    }
}

export default connect;