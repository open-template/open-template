import { Test, TestingModule } from '@nestjs/testing';
import { ScllibService } from './scllib.service';
import { _SCLType } from './xmlns/SCL';

const namespaces: any = {
  namespacePrefixes: {
    "http://www.iec.ch/61850/2003/SCL": "",
    "http://www.w3.org/2001/XMLSchema": "xs"
  },
  mappingStyle : "simplified"
};
const serialize = require("w3c-xmlserializer");
const {parse, stringify} = require('flatted/cjs');


xdescribe('ScllibService', () => {
  let service: ScllibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScllibService],
    }).compile();

    service = module.get<ScllibService>(ScllibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('service.context should be defined', () => {
    service.setContext(namespaces);
    // expect(service.context).toEqual('');
    expect(service.context.modules.length).toEqual(1);
    expect(service.context.modules[0].name).toEqual('$');
    expect(service.context.modules[0].defaultElementNamespaceURI).toEqual("http://www.iec.ch/61850/2003/SCL");
    expect(service.context.modules[0].targetNamespace).toEqual("http://www.iec.ch/61850/2003/SCL");
    
  });

  it('marshalDocumentTEST test', (() => {
    service.setContext(namespaces);
    const input: _SCLType = {
      release: 4,
      revision: 'B',
      version: '2007',
      header: {
        id: "id",
        version: '1',
        revision: '1'
      },
      ied: []
    };
    const expected = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema" version="2007" revision="B" release="4"><Header id="id" version="1" revision="1"/></SCL>`;
    // service.marshalDocument({SCL: input}).subscribe((res) =>{
    //   // expect(new XMLSerializer().serializeToString(res)).toEqual(expected);
    //   expect(serialize(res)).toEqual('expected');
    //   // expect(JSON.stringify(res)).toEqual(expected);
    //   done();
    // });
    var TEST = service.marshalDocumentTEST({SCL: input});
    expect(serialize(TEST)).toEqual('expected');
    // expect(new XMLSerializer().serializeToString(TEST)).toEqual('expected');
  }));

  it('unmarshalString test #1', ((done) => {
    service.setContext(namespaces);
    const input  = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema" version="2007" revision="B" release="4"><Header id="4f7752f4-b1c1-4d56-8d66-614e4da7cfbf" version="version0001" revision="revision001" toolID="openTemplate"/></SCL>`;
    const expected: any = {
      "TYPE_NAME": "$.SCL",
      release: 4,
      revision: 'B',
      version: '2007',
      header: {
        "TYPE_NAME": "$.THeader",
        id: "4f7752f4-b1c1-4d56-8d66-614e4da7cfbf",
        version: "version0001",
        revision: "revision001",
        toolID: "openTemplate",
      },
      otherAttributes: {
        release: '4',
        revision: 'B',
        version: '2007',
        "xmlns": "http://www.iec.ch/61850/2003/SCL",
       "xmlns:xs": "http://www.w3.org/2001/XMLSchema"
      }
    };

    service.unmarshalString(input).subscribe((res) =>{
      expect(res).toEqual({SCL: expected});
      done();
    })
  }));
});
