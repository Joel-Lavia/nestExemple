import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { catsControllers } from './controllers/cats.controllers';

@Module({
  controllers: [AppController,catsControllers],
  providers: [AppService],
})
export class  AppModule {}
