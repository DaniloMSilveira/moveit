import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import createConnection from "./database";
import routes from "./routes";
import AppError from "./errors/AppError";

createConnection();
const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error ${err.message}`,
  });
});

export { app };
