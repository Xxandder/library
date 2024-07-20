import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import connectDB from './config/db';
import { requestLogger } from "./middleware/request-logger.middleware";
import cors from 'cors';

const app = express();

const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use(requestLogger)

app.use('/', ()=>{})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
