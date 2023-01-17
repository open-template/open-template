// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

import { TestBed } from '@angular/core/testing';
import { ScllibService } from './scllib.service';
import { concatAll, of } from 'rxjs';
import { _SCLType } from './xmlns/SCL';

describe('ScllibService', () => {
  let service: ScllibService;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const namespaces: any = {
    namespacePrefixes: {
      "http://www.iec.ch/61850/2003/SCL": "",
      "http://www.w3.org/2001/XMLSchema": "xs"
    },
    mappingStyle : "simplified"
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ScllibService ]
    });
    service = TestBed.inject(ScllibService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('ScllibService - Compiler', () => {
    beforeEach(() => {
      service.setContext(namespaces);
    });
    it('compiler should be created # Context', () => {
      expect(service.context).not.toBeNull();
    });
    it('compiler should be created # Module', () => {
      expect(service.context.modules.length).toEqual(1);
      expect(service.context.modules[0].name).toEqual('$');
      expect(service.context.modules[0].defaultElementNamespaceURI).toEqual("http://www.iec.ch/61850/2003/SCL");
      expect(service.context.modules[0].targetNamespace).toEqual("http://www.iec.ch/61850/2003/SCL");
    });

    it('compiler should be created # Element Infos', () => {
      expect(service.context.elementInfos).not.toBeNull();
    });
    it('compiler should be created # Namespaces', () => {
      expect(service.context.namespacePrefixes).toEqual(namespaces.namespacePrefixes);
    });
  });

  describe('ScllibService - Marshaller', () => {
    beforeEach(() => {
      service.setContext(namespaces);
    });
    it('marshaller should be created', () => {
      expect(service.marshaller).toBeDefined()
    });
    it('marshalDocument should be created', () => {
      const input: _SCLType = {
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          id: "4f7752f4-b1c1-4d56-8d66-614e4da7cfbf",
          version: '1',
          revision: '1',
          toolID: "openTemplate"
        }
      };
      const output  = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema" version="2007" revision="B" release="4"><Header id="4f7752f4-b1c1-4d56-8d66-614e4da7cfbf" version="1" revision="1" toolID="openTemplate"/></SCL>`;
      const result = service.marshaller.marshalDocument({SCL: input});
      expect(new XMLSerializer().serializeToString(result))
      .toEqual(output);
    });
  });

  describe('ScllibService - unmarshal', () => {
    beforeEach(() => {
      service.setContext(namespaces);
    });
    it('unmarshaller should be created', () => {
      expect(service.unmarshaller).toBeDefined();
      // const list : any[] = service.unmarshaller.context.elementInfos;
      // const elements : any[] = list.map((e)=> e.elementName)
      // const localParts : any[] = elements.map((e)=> e.localPart)
      // const keys : any[] = elements.map((e)=> e.key)
      // expect(localParts).toBeNull()
    });
    it('unmarshalString test #1 should be created', () => {
      const input  = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema" version="2007" revision="B" release="4">
      <Header id="4f7752f4-b1c1-4d56-8d66-614e4da7cfbf" version="1.0" revision="2.0" toolID="openTemplate"/></SCL>`;

      const output: any = {
        "TYPE_NAME": "$.SCL",
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          "TYPE_NAME": "$.THeader",
          id: "4f7752f4-b1c1-4d56-8d66-614e4da7cfbf",
          version: "1.0",
          revision: "2.0",
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
   
      const result = service.unmarshaller.unmarshalString(input);
      expect(result.SCL).toEqual(output);
    });

    it('unmarshalString test #2 should be created', () => {
      const input  = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema" version="2007" revision="B" release="4">
      <Header id="4f7752f4-b1c1-4d56-8d66-614e4da7cfbf" version="1.0" revision="2.0" toolID="openTemplate"/>
      <IED name="iedName1" type="type" manufacturer="manufacturer" configVersion="configVersion" originalSclVersion="2007" originalSclRevision="B" originalSclRelease="4">
      <AccessPoint name="ap"/>
      </IED>
      </SCL>`;

      const output: _SCLType = {
        "TYPE_NAME": "$.SCL",
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          "TYPE_NAME": "$.THeader",
          id: "4f7752f4-b1c1-4d56-8d66-614e4da7cfbf",
          version: "1.0",
          revision: "2.0",
          toolID: "openTemplate",
        },
        otherAttributes: {
          release: '4',
          revision: 'B',
          version: '2007',
          "xmlns": "http://www.iec.ch/61850/2003/SCL",
         "xmlns:xs": "http://www.w3.org/2001/XMLSchema"
        },
        ied: [
          {
            "TYPE_NAME": "$.TIED",
            name: "iedName1",
            accessPoint: [
              {
                "TYPE_NAME": "$.TAccessPoint",
                name: "ap",
                otherAttributes: {
                  name: "ap"
                }
              }
            ],
            configVersion: "configVersion",
            manufacturer: "manufacturer",
            originalSclRelease: 4,
            originalSclRevision: "B",
            originalSclVersion: "2007",
            type: "type",
            otherAttributes: {
              configVersion: "configVersion",
              manufacturer: "manufacturer",
              name: "iedName1",
              originalSclRelease: "4",
              originalSclRevision: "B",
              originalSclVersion: "2007",
              type: "type",
            }
          }
        ]
      };
      const result = service.unmarshaller.unmarshalString(input);
      expect(result.SCL).toEqual(output);
    });

    it('unmarshalURL should be created', () => {
      const testFile1 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test1.xml`;
      const testFile2 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test2.xml`;
      const testFile3 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test3.xml`;
      const expected: any = {
        "TYPE_NAME": "$.SCL",
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          "TYPE_NAME": "$.THeader",
          id: "ae390399-221c-497f-b03b-85e7edfd90df",
          version: "1.0",
          revision: "2.0",
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
     [testFile1, testFile2, testFile3].forEach(testFile => {
      service.unmarshaller.unmarshalURL(testFile, (result: any) => {
        expect(result).toEqual({SCL: expected});
      });
     });
    });
  });

  describe('ScllibService - Services # Namespaced', () => {
    const scllibService: ScllibService = new ScllibService();
    beforeEach(() => {
      scllibService.setContext(namespaces);
    });
    it('Context marshaller & unmarshaller should be created', () => {
      expect(scllibService.context).not.toBeNull();
      expect(scllibService.marshaller).toBeDefined()
      expect(scllibService.unmarshaller).toBeDefined()
    });
    it('marshalDocument test', ((done) => {
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
      scllibService.marshalDocument({SCL: input}).subscribe((res) =>{
        expect(new XMLSerializer().serializeToString(res)).toEqual(expected);
        done();
      })
    }));
    it('unmarshalString test #1', ((done) => {
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

      scllibService.unmarshalString(input).subscribe((res) =>{
        expect(res).toEqual({SCL: expected});
        done();
      })
    }));

    it('unmarshalString test #2', ((done) => {
      const input  = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema" version="2007" revision="B" release="4">
      <Header id="4f7752f4-b1c1-4d56-8d66-614e4da7cfbf" version="1.0" revision="2.0" toolID="openTemplate"/>
      <IED name="name1" type="type" manufacturer="manufacturer" configVersion="configVersion" originalSclVersion="2007" originalSclRevision="B" originalSclRelease="4">
      <Private type="company-private"/>
      <AccessPoint name="ap"/>
      </IED>
      </SCL>`;
      const output: _SCLType = {
        "TYPE_NAME": "$.SCL",
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          "TYPE_NAME": "$.THeader",
          id: "4f7752f4-b1c1-4d56-8d66-614e4da7cfbf",
          version: "1.0",
          revision: "2.0",
          toolID: "openTemplate",
        },
        "ied": [
          {
            "TYPE_NAME": "$.TIED",
            "private": [
              {
                "TYPE_NAME": "$.TPrivate",
                "otherAttributes": {
                  "type": "company-private",
                },
                "type": "company-private",
              }
            ],
            "accessPoint":  [
              {
                "TYPE_NAME": "$.TAccessPoint",
                "name": "ap",
                "otherAttributes": {
                  "name": "ap",
                },
              },
            ],
            "configVersion": "configVersion",
            "manufacturer": "manufacturer",
            "name": "name1",
            "originalSclRelease": 4,
            "originalSclRevision": "B",
            "originalSclVersion": "2007",
            "otherAttributes": {
              "configVersion": "configVersion",
              "manufacturer": "manufacturer",
              "name": "name1",
              "originalSclRelease": "4",
              "originalSclRevision": "B",
              "originalSclVersion": "2007",
              "type": "type",
            },
            "type": "type",
          }
        ],
        otherAttributes: {
          release: '4',
          revision: 'B',
          version: '2007',
          "xmlns": "http://www.iec.ch/61850/2003/SCL",
         "xmlns:xs": "http://www.w3.org/2001/XMLSchema"
        }
      };

      scllibService.unmarshalString(input).subscribe((res) =>{
        expect(res).toEqual({SCL: output});
        done();
      })
    }));
    it('unmarshalURL test', ((done) => {
      const testFile1 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test1.xml`;
      const testFile2 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test2.xml`;
      const testFile3 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test3.xml`;
      const expected: any = {
        "TYPE_NAME": "$.SCL",
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          "TYPE_NAME": "$.THeader",
          id: "ae390399-221c-497f-b03b-85e7edfd90df",
          version: "1.0",
          revision: "2.0",
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
     const source = of(scllibService.unmarshalURL(testFile1),
     scllibService.unmarshalURL(testFile2),
     scllibService.unmarshalURL(testFile3));
     source.pipe(concatAll()).subscribe(res => {
      expect(res).toEqual({SCL: expected});
      done();
     });
    }));
  });

  describe('ScllibService - Services # Not Namespaced', () => {
    const scllibService: ScllibService = new ScllibService();
    beforeEach(() => {
      scllibService.setContext();
    });
    it('Context marshaller & unmarshaller should be created', () => {
      expect(scllibService.context).not.toBeNull();
      expect(scllibService.marshaller).toBeDefined()
      expect(scllibService.unmarshaller).toBeDefined()
    });
    it('marshalDocument test', ((done) => {
      const inputName: any = {
        "key": "{http://www.iec.ch/61850/2003/SCL}SCL",
        "localPart": "SCL",
        "namespaceURI": "http://www.iec.ch/61850/2003/SCL",
        "prefix": "",
        "string": "{http://www.iec.ch/61850/2003/SCL}SCL",
      }
      const inputValue: _SCLType = {
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
      const expected = `<p0:SCL xmlns:p0="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4"><p0:Header id="id" version="1" revision="1"/></p0:SCL>`;
      scllibService.marshalDocument(
        {
          name: inputName,
          value: inputValue
        }).subscribe((res) =>{
        expect(new XMLSerializer().serializeToString(res)).toEqual(expected);
        done();
      })
    }));

    it('unmarshalString test', ((done) => {
      const input  = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xs="http://www.w3.org/2001/XMLSchema" version="2007" revision="B" release="4"><Header id="4f7752f4-b1c1-4d56-8d66-614e4da7cfbf" version="1.0" revision="2.0" toolID="openTemplate"/></SCL>`;

      const expectedName: any = {
        "key": "{http://www.iec.ch/61850/2003/SCL}SCL",
        "localPart": "SCL",
        "namespaceURI": "http://www.iec.ch/61850/2003/SCL",
        "prefix": "",
        "string": "{http://www.iec.ch/61850/2003/SCL}SCL",
      }
      const expectedValue: any = {
        "TYPE_NAME": "$.SCL",
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          "TYPE_NAME": "$.THeader",
          id: "4f7752f4-b1c1-4d56-8d66-614e4da7cfbf",
          version: "1.0",
          revision: "2.0",
          toolID: "openTemplate",
        },
        otherAttributes: {
          release: '4',
          revision: 'B',
          version: '2007',
          "{http://www.w3.org/2000/xmlns/}xmlns": "http://www.iec.ch/61850/2003/SCL",
          "{http://www.w3.org/2000/xmlns/}xs": "http://www.w3.org/2001/XMLSchema"
        }
      };

      scllibService.unmarshalString(input).subscribe((res) =>{
        expect(res).toEqual(
          {
            name: expectedName,
            value: expectedValue
          }
        );
        done();
      })
    }));

    it('unmarshalURL test', ((done) => {
      const testFile1 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test1.xml`;
      const testFile2 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test2.xml`;
      const testFile3 = `https://raw.githubusercontent.com/open-template/open-template/main/projects/scllib/src/tests/files/samples/test3.xml`;
      const expectedName: any = {
        "key": "{http://www.iec.ch/61850/2003/SCL}SCL",
        "localPart": "SCL",
        "namespaceURI": "http://www.iec.ch/61850/2003/SCL",
        "prefix": "",
        "string": "{http://www.iec.ch/61850/2003/SCL}SCL",
      }
      const expectedValue: any = {
        "TYPE_NAME": "$.SCL",
        release: 4,
        revision: 'B',
        version: '2007',
        header: {
          "TYPE_NAME": "$.THeader",
          id: "ae390399-221c-497f-b03b-85e7edfd90df",
          version: "1.0",
          revision: "2.0",
          toolID: "openTemplate",
        },
        otherAttributes: {
          release: '4',
          revision: 'B',
          version: '2007',
          "{http://www.w3.org/2000/xmlns/}xmlns": "http://www.iec.ch/61850/2003/SCL",
          "{http://www.w3.org/2000/xmlns/}xs": "http://www.w3.org/2001/XMLSchema"
        }
      };
     const source = of(scllibService.unmarshalURL(testFile1),
     scllibService.unmarshalURL(testFile2),
     scllibService.unmarshalURL(testFile3));
     source.pipe(concatAll()).subscribe(res => {
      expect(res).toEqual(
        {
          name: expectedName,
          value: expectedValue
        }
      );
      done();
     });
    }));
  });
});
