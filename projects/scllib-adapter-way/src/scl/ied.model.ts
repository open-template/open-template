// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

import { _tIED } from "@opentemplate/scl-lib";
import { SCLElement } from "./scl.model";
import { XmlElement } from "./xml.model";

export class IEDElement extends XmlElement<SCLElement, _tIED> {

    constructor(parent: SCLElement, element?: _tIED, iedName?: string) {
        if(element) {
            super(parent, element);
            if(iedName) {
                let ied: _tIED = parent.getElement().ied
                .find(tied => tied.name === iedName);
                if(ied){
                    this.setElement(ied);
                } else {
                    throw ("iedName not exist");
                }
               
            } 
        }
    }

}
