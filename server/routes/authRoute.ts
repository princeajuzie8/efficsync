import express from "express";
import { signup } from "../controller/authController";


const authRouter = express.Router()


authRouter.route('/').post(signup)


export default authRouter;