// SPDX-FileCopyrightText: 2022 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

// import { Injectable } from '@angular/core';
import { Injectable } from '@nestjs/common';
/// <amd-dependency path="@opentempl/jsonix" />
import { Jsonix } from '@opentempl/jsonix';
import { Observable } from 'rxjs';
import { _SCLType } from './xmlns/SCL';
var Module = require('../src/mappings/$');

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
interface IType {
  [key: string]: _SCLType;
}

/**
 * Main Service
 */
@Injectable()
export class ScllibService {

  /* eslint-disable @typescript-eslint/no-explicit-any */
  public context: any;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  public marshaller: any;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  public unmarshaller: any;
  
  /**
   * Init Context - Compiler
   * @param factory 
   * @param namespace 
   */
  setContext(namespace?: any){
    if(namespace != undefined && namespace != null) {
      this.context = new Jsonix.Context([Module.$],namespace);
    } else {
      this.context = new Jsonix.Context([Module.$, namespaces]); 
    }
    this.marshaller = this.context.createMarshaller();
    this.unmarshaller = this.context.createUnmarshaller();
  }

  marshalDocument(data: any): Observable<XMLDocument> {
    console.info('@@@@ scl-lib @@@@ marshalDocument ...');
    return new Observable(observer => {
      const result = this.marshaller.marshalDocument(data);
      // console.debug('@@@@ scl-lib @@@@ marshalDocument result : ',result);
      observer.next(result);
    });
  }

  unmarshalString(data: string): Observable<IType> {
    console.info('@@@@ scl-lib @@@@ unmarshalString ...');
    return new Observable(observer => {
      const result = this.unmarshaller.unmarshalString(data);
      // console.debug('@@@@ scl-lib @@@@ unmarshalString result : ',result);
      observer.next(result);
      observer.complete();
    });
  }

  unmarshalURL(capabilitiesUrl: any): Observable<IType> {
    console.info('@@@@ scl-lib @@@@ unmarshalURL ...');
    return new Observable(observer => {
      this.unmarshaller.unmarshalURL(capabilitiesUrl, (result: any) => {
        // console.debug('@@@@ scl-lib @@@@ unmarshalURL result : ',result);
        observer.next(result);
        observer.complete();
      });
    });
  }
}
