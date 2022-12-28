// SPDX-FileCopyrightText: 2022 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license
import { Injectable } from '@nestjs/common';
// import { Injectable } from '@angular/core';
import { Jsonix } from '@opentempl/jsonix';
import { Observable } from 'rxjs';
import { _SCLType } from './xmlns/SCL';
// import { Module } from './mappings/$.js';
// import * as module from "./mappings/$";
// const Module = require("./mappings/$");
// import * as Module from "./mappings/$";
// import Module from './mappings/$';
const Module = require('./mappings/$');
// import schemas from './mappings/$';

const namespaces: any = {
  namespacePrefixes: {
    "http://www.iec.ch/61850/2003/SCL": "",
    "http://www.w3.org/2001/XMLSchema": "xs"
  },
  mappingStyle : "simplified"
};

/**
 * Generic Interface
 */
export interface IType {
  [key: string]: _SCLType;
}

/**
 * Main Service
 */
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ScllibService {    
  
  /* eslint-disable @typescript-eslint/no-explicit-any */
  public context: any;// = new Jsonix.Context([Module.$],namespace);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  public marshaller: any;// = this.context.createMarshaller();
  /* eslint-disable @typescript-eslint/no-explicit-any */
  public unmarshaller: any;// = this.context.createUnmarshaller();
  
  /**
   * Init Context - Compiler
   * @param factory 
   * @param namespace 
   */
  setContext(namespace?: any){
    if(namespace != undefined && namespace != null) {
      this.context = new Jsonix.Context([Module.$],namespace);
    } else {
      this.context = new Jsonix.Context([Module.$]); 
    }
    this.marshaller = this.context.createMarshaller();
    this.unmarshaller = this.context.createUnmarshaller();
    // console.info('@@@@ scl-lib @@@@ context : ',this.context);
    // console.info('@@@@ scl-lib @@@@ marshaller : ',this.marshaller);
    // console.info('@@@@ scl-lib @@@@ unmarshaller : ',this.unmarshaller);
  }

  marshalDocument(data: any): Observable<Object> {
    // console.info('@@@@ scl-lib @@@@ marshalDocument ...');
    return new Observable(observer => {
      const result = this.marshaller.marshalDocument(data);
      // console.info('@@@@ scl-lib @@@@ context : ',this.context);
      // console.info('@@@@ scl-lib @@@@ marshaller : ',this.marshaller);
      console.debug('@@@@ scl-lib @@@@ marshalDocument result : ', typeof result);
      // observer.next(this.serializer.serializeToString(result));
      observer.next(result);
      observer.complete();
    });
  }

  marshalDocumentTEST(data: any): Element {
    var res: Element = this.marshaller.marshalDocument(data);
    console.info('@@@@ scl-lib @@@@ marshalDocumentTEST ... ', res);
    return res;
  }

  unmarshalString(data: string): Observable<IType> {
    console.info('@@@@ scl-lib @@@@ unmarshalString ...');
    return new Observable(observer => {
      const result = this.unmarshaller.unmarshalString(data);
      console.debug('@@@@ scl-lib @@@@ unmarshalString result : ',result);
      observer.next(result);
      observer.complete();
    });
  }

  unmarshalURL(capabilitiesUrl: any): Observable<IType> {
    console.info('@@@@ scl-lib @@@@ unmarshalURL ...');
    return new Observable(observer => {
      this.unmarshaller.unmarshalURL(capabilitiesUrl, (result: any) => {
        console.debug('@@@@ scl-lib @@@@ unmarshalURL result : ',result);
        observer.next(result);
        observer.complete();
      });
    });
  }
}
