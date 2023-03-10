import { ValidationPipe, HttpException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/errors/http-exception.filter';
import { DatabaseExceptionFilter } from './common/errors/db-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, })
  );

  app.useGlobalFilters(new HttpExceptionFilter(), new DatabaseExceptionFilter());

  await app.listen(3000);
}
bootstrap();
