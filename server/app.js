import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import Routes from "./routes"
import dotenv from "dotenv";
dotenv.config();
var app = express();
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true , useUnifiedTopology: true }, () => {
    console.log("Database Connected ...");
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
Routes(app);
export default app;
