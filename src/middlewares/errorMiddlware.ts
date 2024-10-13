import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

// Custom error interface (optional)
interface CustomError extends Error {
  statusCode?: number;
}

// Error handling middleware
const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log the error details
  logger.error(`Error: ${message} - ${req.method} ${req.url} - ${req.ip}`);

  // Send a proper response to the client
  res.status(statusCode).json({
    status: 'error',
    message,
  });
};

export default errorHandler;
