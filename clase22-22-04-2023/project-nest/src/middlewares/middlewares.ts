import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
export default class Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`CODERLOGGER: ${req.method} en ${req.originalUrl} received`);
    next();
  }
}
