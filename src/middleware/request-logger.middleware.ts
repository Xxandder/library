import { Request, Response, NextFunction } from "express";
import loggerService from "../services/logger.service";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  loggerService.info("Incoming request", { method: req.method, url: req.url });
  next();
};

export default requestLogger;
