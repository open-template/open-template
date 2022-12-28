import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionService } from './action/action.service';
// import { ScllibServiceRest } from './action/scllib.service';
import { ScllibServiceRest } from '@opentemplate/scl-lib/esm2020/lib/scllib.serviceRest';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ScllibServiceRest, ActionService],
})
export class AppModule {}
