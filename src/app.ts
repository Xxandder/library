import "dotenv/config";
import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import requestLogger from "./middleware/request-logger.middleware";
import loggerService from "./services/logger.service";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use(requestLogger)

app.use('/', ()=>{})

app.listen(PORT, ()=>{
    loggerService.info(`Listening on port ${PORT}`)
})
