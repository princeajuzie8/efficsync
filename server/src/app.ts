const express = require("express");
const DbConnect = require("../db/dbConnect");
const app = express();

DbConnect(app);


export {}