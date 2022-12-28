import { Test, TestingModule } from '@nestjs/testing';
import { ActionService } from './action.service';
const serialize = require("w3c-xmlserializer");
describe('ActionService', () => {
  let service: ActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionService],
    }).compile();

    service = module.get<ActionService>(ActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('geTest1 should be defined', () => {
    const res = service.geTest1();
    // expect(serialize(res)).toEqual('');
    expect(new XMLSerializer().serializeToString(res)).toEqual('');

    // console.log('context.modules ', context.modules)
    // expect(context.modules.length).toEqual(1);
    // expect(context.modules[0].name).toEqual('$');
    // expect(context.modules[0].defaultElementNamespaceURI).toEqual("http://www.iec.ch/61850/2003/SCL");
    // expect(context.modules[0].targetNamespace).toEqual("http://www.iec.ch/61850/2003/SCL");
  });

  xit('geUnmarshaller should be defined', () => {
    const marshaller = service.geMarshaller();
    expect(marshaller).toEqual(null);
  });
});
