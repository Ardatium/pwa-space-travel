import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.legsmbw.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log("Successfully connected to the database"))
.catch((error) => console.log(`Error during the connection : ${error}`))