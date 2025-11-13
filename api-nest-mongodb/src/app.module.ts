import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

import { AppController } from './app.controller'; //added here for /health endpoint
import { AppService } from './app.service'; //added here for /health endpoint

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    UsersModule,
  ],

  controllers: [AppController], //AppController added here for /health endpoint
  providers: [AppService], //added here for /health endpoint

})
export class AppModule { }
