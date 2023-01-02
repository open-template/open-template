// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license
import { _SCLType, _tHeader } from "@opentemplate/scl-lib";
import { IEDElement } from "./ied.model";
import { XmlElement } from "./xml.model";

export class SCLElement extends XmlElement<null, _SCLType> {

    public static RELEASE : number = 4;
    public static REVISION : string = 'B';
    public static VERSION : string = '2007';

    constructor(scl?: _SCLType) {
        if(scl) {
            super(null, scl);
        } else {
            let obj: _SCLType = {
                release: SCLElement.RELEASE,
                revision: SCLElement.REVISION,
                version: SCLElement.VERSION,
                header: undefined
            }
            super(null, obj);
        }
    }

    /**
     * #### description
     * @param id : string
     * @param version : string
     * @param revision : string
     */
    addHeaderElement(id?: string, version?: string, revision?: string) {
        if(this.element.header != null){
            throw ("SCL already contain header");
        }
        const header: _tHeader = {
            id: id,
            revision: revision,
            version: version,
            toolID: 'openTemplate'
        }
        this.element.header = header;
    }

    public getIEDByName(iedName: string): IEDElement {
        return new IEDElement(this,null,iedName);
    }

    /**
     * #### description
     * @param scl : _SCLType
     * @param iedName: string
     * @returns : _SCLType
     */
    public addIED(scl: _SCLType, iedName?: string): _SCLType {
        if(scl.ied.length == 0){
            throw ("No IED to import from XML");
        }
        let sclElement: SCLElement = new SCLElement(scl);
        let iedElement: IEDElement = new IEDElement(sclElement, scl.ied[0]);
        if(iedName != null) {
            iedElement.getElement().name = iedName;
        }
        this.element.ied.push(iedElement.getElement());
        if(this.element.dataTypeTemplates == null){
            this.element.dataTypeTemplates = scl.dataTypeTemplates;
        }
        return this.element;
    }
}
