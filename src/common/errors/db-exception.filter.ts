import { Catch, ArgumentsHost, ExceptionFilter, HttpStatus, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';


@Catch(NotFoundException)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const message = exception.message;
    const status = exception.getStatus()
    ? exception.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR 

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: message,
      });
  }
}
