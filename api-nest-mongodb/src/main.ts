import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(''); // no prefix
  await app.listen(process.env.PORT ? Number(process.env.PORT) : 3000);
  console.log(`🚀 Server running at http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
