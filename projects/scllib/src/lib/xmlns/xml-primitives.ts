// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

interface BaseType {
	TYPE_NAME?: string; //required from jsonix compiler
	content?: any; //Array<Object>
	otherAttributes?: any;// Map<QName, string>;
}
export interface _any extends BaseType { value: any; }

export interface _boolean extends BaseType { value: boolean; }

export interface _Date extends BaseType { value: Date; }

export interface _number extends BaseType { value: number; }

export interface _string extends BaseType { value: string; }

export interface document extends BaseType {
}

export var document: document;
