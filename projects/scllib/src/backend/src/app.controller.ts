import { Controller, Get, HttpCode, HttpStatus, Res, Inject } from '@nestjs/common';
import { map } from 'rxjs';
import { Response } from "express";
import { AppService } from './app.service';
// import {ApiConsumes,} from "@nestjs/swagger";

import { _SCLType } from './action/xmlns/SCL';
import { ScllibServiceRest } from './action/scllib.service';

// import { _SCLType } from '@opentemplate/scl-lib';
// import { ScllibServiceRest } from '@opentemplate/scl-lib';
// import { ScllibServiceRest } from '@opentemplate/scl-lib';
// const { ScllibServiceRest } = require('@opentemplate/scl-lib');

const namespaces: any = {
  namespacePrefixes: {
    "http://www.iec.ch/61850/2003/SCL": "",
    "http://www.w3.org/2001/XMLSchema": "xs"
  },
  mappingStyle : "simplified"
};

@Controller()
export class AppController {

  constructor(private readonly appService: AppService,
    // private readonly scllibService: ScllibService,
    private readonly scllibServiceRest: ScllibServiceRest
    ) {
      this.scllibServiceRest.setContext(namespaces);
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
      return this.scllibServiceRest.marshalDocument({ SCL: scl })
        .pipe(
          map((data) => {
            res.set('Content-Type', 'text/xml');
            return res.status(200).send(data.toString());
          }))
        .subscribe()
      // return res.status(200).send('ok bb');
    } catch (err) {
      console.log('############ err ',err);
      throw err;
    } 
  }
}
