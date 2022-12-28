import { Controller, Get, HttpCode, HttpStatus, Inject, Res } from '@nestjs/common';
import { map } from 'rxjs';
import { Response } from "express";
// import {ApiConsumes,} from "@nestjs/swagger";
import { ScllibService } from './action/scllib.service';
import { _SCLType } from './action/xmlns/SCL';
import { AppService } from './app.service';
import { ActionService } from './action/action.service';


const namespaces: any = {
  namespacePrefixes: {
    "http://www.iec.ch/61850/2003/SCL": "",
    "http://www.w3.org/2001/XMLSchema": "xs"
  },
  mappingStyle : "simplified"
};
const serialize = require("w3c-xmlserializer");

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly scllibService: ScllibService) {
      this.scllibService.setContext(namespaces);
    }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(HttpStatus.CONFLICT)
  @Get('test4')
  async test1(@Res() res: Response) {
    const scl: _SCLType = {
      release: 4,
      revision: "B",
      version: "2007",
      header: {
        id: "4f7752f4-b1c1-4d56-8d66-614e4da7cfbf",
        version: '1',
        revision: '1',
        toolID: "openTemplate"
      }
    };
    try {
      return this.scllibService.marshalDocument({ SCL: scl })
        .pipe(
          map((data) => {
            res.set('Content-Type', 'text/xml');
            return res.status(200).send(data.toString());
          }))
        .subscribe()
    } catch (err) {
      console.log('############ err ',err);
      throw err;
    } 
  }
}
