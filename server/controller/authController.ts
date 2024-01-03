import { log } from "console";
import { Response, Request } from "express";
import UserModel from "../models/usermodel";
import bycryptjs from "bcryptjs"

async function signup(req: Request, res: Response) {
  const { username, email, password } = req.body;
  const hashpassword = bycryptjs.hashSync(password,10)
  const newUser = new UserModel({
    username,
    email,
    password: hashpassword,
  });

  try {
    await newUser.save();

    res.status(201).json({newUser, message: "user created successfully"});
  } catch (error:Error|any) {
    res.status(500).json(error.message);
  } 
}

export { signup };
