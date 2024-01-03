import express from "express";
import userRouter from "../routes/userRoute";
import ConnectDB from "../db/dbConnect";
const app = express();

app.use('/api/v1/client/user',userRouter)

 
ConnectDB(app);

export default app;
