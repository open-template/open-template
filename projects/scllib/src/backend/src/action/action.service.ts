import { Injectable } from '@nestjs/common';
import { ScllibService } from './scllib.service';

import { Jsonix } from '@opentempl/jsonix';
import { _SCLType } from './xmlns/SCL';
import * as Module from "./mappings/$";
const serialize = require("w3c-xmlserializer");

const namespaces: any = {
  namespacePrefixes: {
    "http://www.iec.ch/61850/2003/SCL": "",
    "http://www.w3.org/2001/XMLSchema": "xs"
  },
  mappingStyle : "simplified"
};

@Injectable()
export class ActionService {

  public context: any;
  public marshaller: any;
  public unmarshaller: any;

  constructor() {}

    geTest0(): string {
      return 'Test...';
    }

    geMarshaller(): any {
      return this.marshaller;
    }

    geTest1(): any {
      this.context = new Jsonix.Context([Module.$], namespaces);
      this.marshaller = this.context.createMarshaller();
      this.unmarshaller = this.context.createUnmarshaller();
      let scl: _SCLType = {
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          id: 'headerId'
        }
      };
      var res: any = this.marshaller.marshalDocument({SCL: scl});
      // var cc = new global.window.XMLSerializer().serializeToString(res);
      // console.info('@@@@ ActionService @@@@ marshalDocumentTEST RES ... ', res);
      return res;
    }
}
