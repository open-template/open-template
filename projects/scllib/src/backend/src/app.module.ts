import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionService } from './action/action.service';
import { ScllibService } from './action/scllib.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ScllibService, ActionService],
})
export class AppModule {}
