const express=require("express");
const {connection}=require("./Connection/connection.js");
const OtpRouter=require("./Routes/OtpRoute.js")

const app=express();
require("dotenv").config()
const PORT=process.env.PORT
// const PORT=8000
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use('/api/otp', OtpRouter);







app.listen(PORT,async()=>{
    try {
        await connection;
    console.log(`app is running on port ${PORT} and DB is connected`);
        
    } catch (error) {
        console.log(error.message)
    }
})