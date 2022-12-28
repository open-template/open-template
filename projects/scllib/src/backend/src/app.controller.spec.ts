import { Test, TestingModule } from '@nestjs/testing';
import { ScllibService } from './action/scllib.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Response } from "express";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ScllibService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     let res: Response;
  //     expect(appController.test1(res)).toBe('');
  //   });
  // });
});
