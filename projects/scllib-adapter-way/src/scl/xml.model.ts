// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

export abstract class XmlElement<P extends XmlElement<any, any>, T> {
    
    protected parent: P;
    protected element: T;
    
    constructor(parent: P, element?: T) {
        if(element == null){
            throw ("The SCL element must be defined");
        }
        this.parent = parent;
    }

    public getElement(): T {
        return this.element ;
    }

    public setElement(element: T) {
        this.element = element ;
    }

    public getParent(): P {
        return this.parent ;
    }
}
