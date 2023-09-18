import mongoose, { connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL)
        const connect = mongoose.connection;

        connection.on('connected', () => {

            console.log("Its connected ")
        })

        connection.on("error", (err) => {
            console.log("Connection error " + err )
            process.exit();
        })
        
    } catch (error) {
        console.log('Something went wrong')
        console.log(error)
    }
};