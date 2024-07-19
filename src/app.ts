import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import connectDB from './config/db';

const app = express();

const PORT = 3000;

connectDB()
;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
