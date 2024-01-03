import express from "express";
import userRouter from "../routes/userRoute";
import ConnectDB from "../db/dbConnect";
import authRouter from "../routes/authRoute";
const app = express();

app.use("/api/v1/client/user", userRouter);

app.use(express.json());
app.use("/api/v1/client/auth", authRouter);

ConnectDB(app);
 
export default app;
