// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

export abstract class XmlElement<P extends XmlElement<any, any>, T> {
    
    protected parent: P;
    protected element: T;
    
    constructor(parent: P, element?: T) {
        this.parent = parent;
        if(element == null){
            throw ("The SCL element must be defined");
        } else {
            this.setElement(element);
        }
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
