import { SCLElement } from "./scl.model";
import { _SCLType } from "@opentemplate/scl-lib";

describe('SCLElement', () => {
    let sclElement: SCLElement;
    describe('root', () => {
      it('should return', () => {
        const scl: _SCLType = {
            release: 4,
            revision: "B",
            version: "2007",
            header: null
        };
        sclElement = new SCLElement(scl);
        expect(sclElement.getElement())
        .toEqual({"header": null, "release": 4, "revision": "B", "version": "2007"});
      });
    });
  });
  