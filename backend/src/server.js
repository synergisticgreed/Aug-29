import express from "express"
import { ENV } from "./config/env.js";
import authRoutes from "./routes/authRoutes.js";
const app=express();
import cors from "cors"



const PORT=ENV().PORT;
const FRONTEND_URL=ENV().FRONTEND_URL;
app.use(cors({
    origin: FRONTEND_URL
}))
app.use(express.json());


app.use("/api/auth",authRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})