// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

import * as Primitive from './xml-primitives';

export interface BaseType {
	TYPE_NAME?: string; //required from jsonix compiler
	content?: any; //Array<Object>
	otherAttributes?: any;//Map<QName, string>;
}
export interface _LN0Type extends _tLN0 {}
export interface LN0Type extends _LN0Type { constructor: { new(): LN0Type }; }

export interface _SCLType extends _tBaseElement {
	release?: number;
	revision?: string;
	version?: string;
	communication?: _tCommunication;
	dataTypeTemplates?: _tDataTypeTemplates;
	header: _tHeader;
	ied?: _tIED[];
	line?: _tLine[];
	process?: _tProcess[];
	substation?: _tSubstation[];
}
export interface SCLType extends _SCLType { constructor: { new(): SCLType }; }

export interface _tAbstractConductingEquipment extends _tEquipment {
	subEquipment?: _tSubEquipment[];
	terminal?: _tTerminal[];
}
export interface tAbstractConductingEquipment extends _tAbstractConductingEquipment { constructor: { new(): tAbstractConductingEquipment }; }
export var tAbstractConductingEquipment: { new(): tAbstractConductingEquipment };

export interface _tAbstractDataAttribute extends _tUnNaming {
	bType: string;
	count?: string;
	name: string;
	sAddr?: string;
	type?: string;
	valImport?: boolean;
	valKind?: _tValKindEnum;
	val?: _tVal[];
}
export interface tAbstractDataAttribute extends _tAbstractDataAttribute { constructor: { new(): tAbstractDataAttribute }; }
export var tAbstractDataAttribute: { new(): tAbstractDataAttribute };

export interface _tAbstractEqFuncSubFunc extends _tPowerSystemResource {
	type?: string;
	eqSubFunction?: _tEqSubFunction[];
	generalEquipment?: _tGeneralEquipment[];
}
export interface tAbstractEqFuncSubFunc extends _tAbstractEqFuncSubFunc { constructor: { new(): tAbstractEqFuncSubFunc }; }
export var tAbstractEqFuncSubFunc: { new(): tAbstractEqFuncSubFunc };

export interface _tAccessControl extends _tAnyContentFromOtherNamespace {}
export interface tAccessControl extends _tAccessControl { constructor: { new(): tAccessControl }; }
export var tAccessControl: { new(): tAccessControl };

export interface _tAccessPoint extends _tUnNaming {
	clock?: boolean;
	kdc?: boolean;
	name: string;
	router?: boolean;
	gOOSESecurity?: _tCertificate[];
	ln?: _tLN[];
	server?: _tServer;
	serverAt?: _tServerAt;
	services?: _tServices;
	sMVSecurity?: _tCertificate[];
}
export interface tAccessPoint extends _tAccessPoint { constructor: { new(): tAccessPoint }; }
export var tAccessPoint: { new(): tAccessPoint };

export type tAccessPointName = string;
type _tAccessPointName = Primitive._string;

export type tAcsiName = string;
type _tAcsiName = Primitive._string;

export interface _tAddress extends BaseType {
	p: _tP[];
}
export interface tAddress extends _tAddress { constructor: { new(): tAddress }; }
export var tAddress: { new(): tAddress };

export interface _tAnyContentFromOtherNamespace extends BaseType {}
export interface tAnyContentFromOtherNamespace extends _tAnyContentFromOtherNamespace { constructor: { new(): tAnyContentFromOtherNamespace }; }
export var tAnyContentFromOtherNamespace: { new(): tAnyContentFromOtherNamespace };

export interface _tAnyLN extends _tUnNaming {
	lnType: string;
	dataSet?: _tDataSet[];
	doi?: _tDOI[];
	inputs?: _tInputs;
	log?: _tLog[];
	logControl?: _tLogControl[];
	reportControl?: _tReportControl[];
}
export interface tAnyLN extends _tAnyLN { constructor: { new(): tAnyLN }; }
export var tAnyLN: { new(): tAnyLN };

export type tAnyName = string;
type _tAnyName = Primitive._string;

export interface _tAssociation extends BaseType {
	associationID?: string;
	desc?: string;
	iedName: string;
	kind: _tAssociationKindEnum;
	ldInst: string;
	lnClass: string;
	lnInst: string;
	prefix?: string;
}
export interface tAssociation extends _tAssociation { constructor: { new(): tAssociation }; }
export var tAssociation: { new(): tAssociation };

export type tAssociationID = string;
type _tAssociationID = Primitive._string;

export type tAssociationKindEnum = ("pre-established" | "predefined");
export interface _tAssociationKindEnum extends Primitive._string { content: tAssociationKindEnum; }

export type tAttributeNameEnum = string;
type _tAttributeNameEnum = Primitive._string;

export type tAuthenticationEnum = ("none" | "password" | "weak" | "strong" | "certificate");
export interface _tAuthenticationEnum extends Primitive._string { content: tAuthenticationEnum; }

export interface _tBaseElement extends BaseType {
	private?: _tPrivate[];
	text?: _tText;
}
export interface tBaseElement extends _tBaseElement { constructor: { new(): tBaseElement }; }
export var tBaseElement: { new(): tBaseElement };

export type tBasicTypeEnum = string;
type _tBasicTypeEnum = _tPredefinedBasicTypeEnum;

export interface _tBay extends _tEquipmentContainer {
	conductingEquipment?: _tConductingEquipment[];
	connectivityNode?: _tConnectivityNode[];
	function?: _tFunction[];
}
export interface tBay extends _tBay { constructor: { new(): tBay }; }
export var tBay: { new(): tBay };

export interface _tBDA extends _tAbstractDataAttribute {}
export interface tBDA extends _tBDA { constructor: { new(): tBDA }; }
export var tBDA: { new(): tBDA };

export interface _tBitRateInMbPerSec extends Primitive._number {
	multiplier?: _tUnitMultiplierEnum;
	unit?: string;
}
export interface tBitRateInMbPerSec extends _tBitRateInMbPerSec { constructor: { new(): tBitRateInMbPerSec }; }
export var tBitRateInMbPerSec: { new(): tBitRateInMbPerSec };

export type tCBName = string;
type _tCBName = _tAcsiName;

export type tCDCEnum = string;
type _tCDCEnum = _tPredefinedCDCEnum;

export interface _tCert extends BaseType {
	commonName: string;
	idHierarchy: string;
}
export interface tCert extends _tCert { constructor: { new(): tCert }; }
export var tCert: { new(): tCert };

type tCertCommonNameType = string;
type _tCertCommonNameType = Primitive._string;

type tCertIdHierarchyType = string;
type _tCertIdHierarchyType = Primitive._string;

export interface _tCertificate extends _tNaming {
	serialNumber: string;
	xferNumber?: number;
	issuerName: _tCert;
	subject: _tCert;
}
export interface tCertificate extends _tCertificate { constructor: { new(): tCertificate }; }
export var tCertificate: { new(): tCertificate };

type tCertificateSerialNumberType = string;
type _tCertificateSerialNumberType = Primitive._string;

export interface _tClientLN extends BaseType {
	apRef?: string;
	desc?: string;
	iedName: string;
	ldInst: string;
	lnClass: string;
	lnInst: string;
	prefix?: string;
}
export interface tClientLN extends _tClientLN { constructor: { new(): tClientLN }; }
export var tClientLN: { new(): tClientLN };

export interface _tClientServices extends BaseType {
	bufReport?: boolean;
	goose?: boolean;
	gsse?: boolean;
	maxAttributes?: number;
	maxGOOSE?: number;
	maxReports?: number;
	maxSMV?: number;
	noIctBinding?: boolean;
	readLog?: boolean;
	rGOOSE?: boolean;
	rSV?: boolean;
	supportsLdName?: boolean;
	sv?: boolean;
	unbufReport?: boolean;
	mcSecurity?: _tMcSecurity;
	timeSyncProt?: _tTimeSyncProt;
}
export interface tClientServices extends _tClientServices { constructor: { new(): tClientServices }; }
export var tClientServices: { new(): tClientServices };

type tClientServicesMaxAttributesType = number;
type _tClientServicesMaxAttributesType = Primitive._number;

type tClientServicesMaxGOOSEType = number;
type _tClientServicesMaxGOOSEType = Primitive._number;

type tClientServicesMaxReportsType = number;
type _tClientServicesMaxReportsType = Primitive._number;

type tClientServicesMaxSMVType = number;
type _tClientServicesMaxSMVType = Primitive._number;

export type tCommonConductingEquipmentEnum = string;
type _tCommonConductingEquipmentEnum = Primitive._string;

export interface _tCommProt extends _tServiceYesNo {
	ipv6?: boolean;
}
export interface tCommProt extends _tCommProt { constructor: { new(): tCommProt }; }
export var tCommProt: { new(): tCommProt };

export interface _tCommunication extends _tUnNaming {
	subNetwork: _tSubNetwork[];
}
export interface tCommunication extends _tCommunication { constructor: { new(): tCommunication }; }
export var tCommunication: { new(): tCommunication };

export interface _tConductingEquipment extends _tAbstractConductingEquipment {
	type: string;
	eqFunction?: _tEqFunction[];
}
export interface tConductingEquipment extends _tConductingEquipment { constructor: { new(): tConductingEquipment }; }
export var tConductingEquipment: { new(): tConductingEquipment };

export interface _tConfLNs extends BaseType {
	fixLnInst?: boolean;
	fixPrefix?: boolean;
}
export interface tConfLNs extends _tConfLNs { constructor: { new(): tConfLNs }; }
export var tConfLNs: { new(): tConfLNs };

export interface _tConnectedAP extends _tUnNaming {
	apName: string;
	iedName: string;
	redProt?: _tRedProtEnum;
	address?: _tAddress;
	gse?: _tGSE[];
	physConn?: _tPhysConn[];
	smv?: _tSMV[];
}
export interface tConnectedAP extends _tConnectedAP { constructor: { new(): tConnectedAP }; }
export var tConnectedAP: { new(): tConnectedAP };

export interface _tConnectivityNode extends _tLNodeContainer {
	pathName: string;
}
export interface tConnectivityNode extends _tConnectivityNode { constructor: { new(): tConnectivityNode }; }
export var tConnectivityNode: { new(): tConnectivityNode };

export type tConnectivityNodeReference = string;
type _tConnectivityNodeReference = Primitive._string;

export interface _tControl extends _tUnNaming {
	datSet?: string;
	name: string;
}
export interface tControl extends _tControl { constructor: { new(): tControl }; }
export var tControl: { new(): tControl };

export interface _tControlBlock extends _tUnNaming {
	cbName: string;
	ldInst: string;
	address?: _tAddress;
}
export interface tControlBlock extends _tControlBlock { constructor: { new(): tControlBlock }; }
export var tControlBlock: { new(): tControlBlock };

export interface _tControlWithIEDName extends _tControl {
	confRev?: number;
	iEDName?: _tControlWithIEDNameIEDNameType[];
}
export interface tControlWithIEDName extends _tControlWithIEDName { constructor: { new(): tControlWithIEDName }; }
export var tControlWithIEDName: { new(): tControlWithIEDName };

export interface _tControlWithIEDNameIEDNameType extends _tIEDName {
	apRef?: string;
	ldInst?: string;
	lnClass?: string;
	lnInst?: string;
	prefix?: string;
}
export interface tControlWithIEDNameIEDNameType extends _tControlWithIEDNameIEDNameType { constructor: { new(): tControlWithIEDNameIEDNameType }; }

export interface _tControlWithTriggerOpt extends _tControl {
	intgPd?: number;
	trgOps?: _tTrgOps;
}
export interface tControlWithTriggerOpt extends _tControlWithTriggerOpt { constructor: { new(): tControlWithTriggerOpt }; }
export var tControlWithTriggerOpt: { new(): tControlWithTriggerOpt };

export interface _tDA extends _tAbstractDataAttribute {
	dchg?: boolean;
	dupd?: boolean;
	fc: _tFCEnum;
	qchg?: boolean;
	protNs?: _tProtNs[];
}
export interface tDA extends _tDA { constructor: { new(): tDA }; }
export var tDA: { new(): tDA };

export type tDACount = string;
type _tDACount = Primitive._string;

export interface _tDAI extends _tUnNaming {
	ix?: number;
	name: string;
	sAddr?: string;
	valImport?: boolean;
	valKind?: _tValKindEnum;
	val?: _tVal[];
}
export interface tDAI extends _tDAI { constructor: { new(): tDAI }; }
export var tDAI: { new(): tDAI };

export type tDataName = string;
type _tDataName = _tRestrName1stU;

export interface _tDataSet extends _tUnNaming {
	name: string;
	fcda: _tFCDA[];
}
export interface tDataSet extends _tDataSet { constructor: { new(): tDataSet }; }
export var tDataSet: { new(): tDataSet };

export type tDataSetName = string;
type _tDataSetName = _tAcsiName;

export interface _tDataTypeTemplates extends BaseType {
	dAType?: _tDAType[];
	dOType: _tDOType[];
	enumType?: _tEnumType[];
	lNodeType: _tLNodeType[];
}
export interface tDataTypeTemplates extends _tDataTypeTemplates { constructor: { new(): tDataTypeTemplates }; }
export var tDataTypeTemplates: { new(): tDataTypeTemplates };

export interface _tDAType extends _tIDNaming {
	iedType?: string;
	bda: _tBDA[];
	protNs?: _tProtNs[];
}
export interface tDAType extends _tDAType { constructor: { new(): tDAType }; }
export var tDAType: { new(): tDAType };

export interface _tDO extends _tUnNaming {
	accessControl?: string;
	name: string;
	transient?: boolean;
	type: string;
}
export interface tDO extends _tDO { constructor: { new(): tDO }; }
export var tDO: { new(): tDO };

export interface _tDOI extends _tUnNaming {
	accessControl?: string;
	ix?: number;
	name: string;
	dai?: _tDAI[];
	sdi?: _tSDI[];
}
export interface tDOI extends _tDOI { constructor: { new(): tDOI }; }
export var tDOI: { new(): tDOI };

export type tDomainLNEnum = string;
type _tDomainLNEnum = Primitive._string;

export type tDomainLNGroupAEnum = ("ANCR" | "ARCO" | "ARIS" | "ATCC" | "AVCO");
export interface _tDomainLNGroupAEnum extends Primitive._string { content: tDomainLNGroupAEnum; }

export type tDomainLNGroupCEnum = ("CALH" | "CCGR" | "CILO" | "CPOW" | "CSWI" | "CSYN");
export interface _tDomainLNGroupCEnum extends Primitive._string { content: tDomainLNGroupCEnum; }

export type tDomainLNGroupFEnum = ("FCNT" | "FCSD" | "FFIL" | "FLIM" | "FPID" | "FRMP" | "FSPT" | "FXOT" | "FXUT");
export interface _tDomainLNGroupFEnum extends Primitive._string { content: tDomainLNGroupFEnum; }

export type tDomainLNGroupGEnum = ("GAPC" | "GGIO" | "GLOG" | "GSAL");
export interface _tDomainLNGroupGEnum extends Primitive._string { content: tDomainLNGroupGEnum; }

export type tDomainLNGroupIEnum = ("IARC" | "IHMI" | "ISAF" | "ITCI" | "ITMI" | "ITPC");
export interface _tDomainLNGroupIEnum extends Primitive._string { content: tDomainLNGroupIEnum; }

export type tDomainLNGroupKEnum = ("KFAN" | "KFIL" | "KPMP" | "KTNK" | "KVLV");
export interface _tDomainLNGroupKEnum extends Primitive._string { content: tDomainLNGroupKEnum; }

export type tDomainLNGroupMEnum = ("MDIF" | "MENV" | "MFLK" | "MHAI" | "MHAN" | "MHYD" | "MMDC" | "MMET" | "MMTN" | "MMTR" | "MMXN" | "MMXU" | "MSQI" | "MSTA");
export interface _tDomainLNGroupMEnum extends Primitive._string { content: tDomainLNGroupMEnum; }

export type tDomainLNGroupPEnum = ("PDIF" | "PDIR" | "PDIS" | "PDOP" | "PDUP" | "PFRC" | "PHAR" | "PHIZ" | "PIOC" | "PMRI" | "PMSS" | "POPF" | "PPAM" | "PRTR" | "PSCH" | "PSDE" | "PTEF" | "PTHF" | "PTOC" | "PTOF" | "PTOV" | "PTRC" | "PTTR" | "PTUC" | "PTUF" | "PTUV" | "PUPF" | "PVOC" | "PVPH" | "PZSU");
export interface _tDomainLNGroupPEnum extends Primitive._string { content: tDomainLNGroupPEnum; }

export type tDomainLNGroupQEnum = ("QFVR" | "QITR" | "QIUB" | "QVTR" | "QVUB" | "QVVR");
export interface _tDomainLNGroupQEnum extends Primitive._string { content: tDomainLNGroupQEnum; }

export type tDomainLNGroupREnum = ("RADR" | "RBDR" | "RBRF" | "RDIR" | "RDRE" | "RDRS" | "RFLO" | "RMXU" | "RPSB" | "RREC" | "RSYN");
export interface _tDomainLNGroupREnum extends Primitive._string { content: tDomainLNGroupREnum; }

export type tDomainLNGroupSEnum = ("SARC" | "SCBR" | "SIMG" | "SIML" | "SLTC" | "SOPM" | "SPDC" | "SPTR" | "SSWI" | "STMP" | "SVBR");
export interface _tDomainLNGroupSEnum extends Primitive._string { content: tDomainLNGroupSEnum; }

export type tDomainLNGroupTEnum = ("TANG" | "TAXD" | "TCTR" | "TDST" | "TFLW" | "TFRQ" | "TGSN" | "THUM" | "TLVL" | "TMGF" | "TMVM" | "TPOS" | "TPRS" | "TRTN" | "TSND" | "TTMP" | "TTNS" | "TVBR" | "TVTR" | "TWPH");
export interface _tDomainLNGroupTEnum extends Primitive._string { content: tDomainLNGroupTEnum; }

export type tDomainLNGroupXEnum = ("XCBR" | "XSWI");
export interface _tDomainLNGroupXEnum extends Primitive._string { content: tDomainLNGroupXEnum; }

export type tDomainLNGroupYEnum = ("YEFN" | "YLTC" | "YPSH" | "YPTR");
export interface _tDomainLNGroupYEnum extends Primitive._string { content: tDomainLNGroupYEnum; }

export type tDomainLNGroupZEnum = ("ZAXN" | "ZBAT" | "ZBSH" | "ZCAB" | "ZCAP" | "ZCON" | "ZGEN" | "ZGIL" | "ZLIN" | "ZMOT" | "ZREA" | "ZRES" | "ZRRC" | "ZSAR" | "ZSCR" | "ZSMC" | "ZTCF" | "ZTCR");
export interface _tDomainLNGroupZEnum extends Primitive._string { content: tDomainLNGroupZEnum; }

export interface _tDOType extends _tIDNaming {
	cdc: string;
	iedType?: string;
	da?: _tDA[];
	sdo?: _tSDO[];
}
export interface tDOType extends _tDOType { constructor: { new(): tDOType }; }
export var tDOType: { new(): tDOType };

export interface _tDurationInMilliSec extends Primitive._number {
	multiplier?: _tUnitMultiplierEnum;
	unit?: string;
}
export interface tDurationInMilliSec extends _tDurationInMilliSec { constructor: { new(): tDurationInMilliSec }; }
export var tDurationInMilliSec: { new(): tDurationInMilliSec };

export interface _tDurationInSec extends _tValueWithUnit {
	multiplier?: _tUnitMultiplierEnum;
	unit: string;
}
export interface tDurationInSec extends _tDurationInSec { constructor: { new(): tDurationInSec }; }
export var tDurationInSec: { new(): tDurationInSec };

export type tEmpty = string;
type _tEmpty = Primitive._string;

export type tEnumStringValue = string;
type _tEnumStringValue = Primitive._string;

export interface _tEnumType extends _tIDNaming {
	enumVal: _tEnumVal[];
}
export interface tEnumType extends _tEnumType { constructor: { new(): tEnumType }; }
export var tEnumType: { new(): tEnumType };

export interface _tEnumVal extends _tEnumStringValue {
	desc?: string;
	ord: number;
}
export interface tEnumVal extends _tEnumVal { constructor: { new(): tEnumVal }; }
export var tEnumVal: { new(): tEnumVal };

export interface _tEqFunction extends _tAbstractEqFuncSubFunc {}
export interface tEqFunction extends _tEqFunction { constructor: { new(): tEqFunction }; }
export var tEqFunction: { new(): tEqFunction };

export interface _tEqSubFunction extends _tAbstractEqFuncSubFunc {}
export interface tEqSubFunction extends _tEqSubFunction { constructor: { new(): tEqSubFunction }; }
export var tEqSubFunction: { new(): tEqSubFunction };

export interface _tEquipment extends _tPowerSystemResource {
	virtual?: boolean;
}
export interface tEquipment extends _tEquipment { constructor: { new(): tEquipment }; }
export var tEquipment: { new(): tEquipment };

export interface _tEquipmentContainer extends _tPowerSystemResource {
	generalEquipment?: _tGeneralEquipment[];
	powerTransformer?: _tPowerTransformer[];
}
export interface tEquipmentContainer extends _tEquipmentContainer { constructor: { new(): tEquipmentContainer }; }
export var tEquipmentContainer: { new(): tEquipmentContainer };

export type tExtensionAttributeNameEnum = string;
type _tExtensionAttributeNameEnum = _tRestrName1stL;

export type tExtensionCDCEnum = string;
type _tExtensionCDCEnum = Primitive._string;

export type tExtensionEquipmentEnum = string;
type _tExtensionEquipmentEnum = Primitive._string;

export type tExtensionGeneralEquipmentEnum = string;
type _tExtensionGeneralEquipmentEnum = Primitive._string;

export type tExtensionLNClassEnum = string;
type _tExtensionLNClassEnum = Primitive._string;

export type tExtensionPhysConnTypeEnum = string;
type _tExtensionPhysConnTypeEnum = Primitive._string;

export type tExtensionPTypeEnum = string;
type _tExtensionPTypeEnum = Primitive._string;

export interface _tExtRef extends BaseType {
	daName?: string;
	desc?: string;
	doName?: string;
	iedName?: string;
	intAddr?: string;
	ldInst?: string;
	lnClass?: string;
	lnInst?: string;
	pDA?: string;
	pDO?: string;
	pLN?: string;
	prefix?: string;
	pServT?: _tServiceType;
	serviceType?: _tServiceType;
	srcCBName?: string;
	srcLDInst?: string;
	srcLNClass?: string;
	srcLNInst?: string;
	srcPrefix?: string;
}
export interface tExtRef extends _tExtRef { constructor: { new(): tExtRef }; }
export var tExtRef: { new(): tExtRef };

export interface _tFCDA extends BaseType {
	daName?: string;
	doName?: string;
	fc: _tFCEnum;
	ix?: number;
	ldInst?: string;
	lnClass?: string;
	lnInst?: string;
	prefix?: string;
}
export interface tFCDA extends _tFCDA { constructor: { new(): tFCDA }; }
export var tFCDA: { new(): tFCDA };

export type tFCEnum = ("ST" | "MX" | "CO" | "SP" | "SG" | "SE" | "SV" | "CF" | "DC" | "EX" | "SR" | "BL" | "OR");
export interface _tFCEnum extends Primitive._string { content: tFCEnum; }

export interface _tFileHandling extends _tServiceYesNo {
	ftp?: boolean;
	ftps?: boolean;
	mms?: boolean;
}
export interface tFileHandling extends _tFileHandling { constructor: { new(): tFileHandling }; }
export var tFileHandling: { new(): tFileHandling };

export type tFullAttributeName = string;
type _tFullAttributeName = Primitive._string;

export type tFullDOName = string;
type _tFullDOName = Primitive._string;

export interface _tFunction extends _tPowerSystemResource {
	type?: string;
	conductingEquipment?: _tConductingEquipment[];
	generalEquipment?: _tGeneralEquipment[];
	subFunction?: _tSubFunction[];
}
export interface tFunction extends _tFunction { constructor: { new(): tFunction }; }
export var tFunction: { new(): tFunction };

export interface _tGeneralEquipment extends _tEquipment {
	type: string;
	eqFunction?: _tEqFunction[];
}
export interface tGeneralEquipment extends _tGeneralEquipment { constructor: { new(): tGeneralEquipment }; }
export var tGeneralEquipment: { new(): tGeneralEquipment };

export interface _tGeneralEquipmentContainer extends _tPowerSystemResource {
	function?: _tFunction[];
	generalEquipment?: _tGeneralEquipment[];
}
export interface tGeneralEquipmentContainer extends _tGeneralEquipmentContainer { constructor: { new(): tGeneralEquipmentContainer }; }
export var tGeneralEquipmentContainer: { new(): tGeneralEquipmentContainer };

export type tGeneralEquipmentEnum = string;
type _tGeneralEquipmentEnum = Primitive._string;

export interface _tGOOSEcapabilities extends _tServiceWithMax {
	fixedOffs?: boolean;
	goose?: boolean;
	rGOOSE?: boolean;
}
export interface tGOOSEcapabilities extends _tGOOSEcapabilities { constructor: { new(): tGOOSEcapabilities }; }
export var tGOOSEcapabilities: { new(): tGOOSEcapabilities };

export interface _tGSE extends _tControlBlock {
	maxTime?: _tDurationInMilliSec;
	minTime?: _tDurationInMilliSec;
}
export interface tGSE extends _tGSE { constructor: { new(): tGSE }; }
export var tGSE: { new(): tGSE };

export interface _tGSEControl extends _tControlWithIEDName {
	appID: string;
	fixedOffs?: boolean;
	securityEnable?: _tPredefinedTypeOfSecurityEnum;
	type?: _tGSEControlTypeEnum;
	protocol?: _tProtocol;
}
export interface tGSEControl extends _tGSEControl { constructor: { new(): tGSEControl }; }
export var tGSEControl: { new(): tGSEControl };

export type tGSEControlTypeEnum = ("GSSE" | "GOOSE");
export interface _tGSEControlTypeEnum extends Primitive._string { content: tGSEControlTypeEnum; }

export interface _tGSESettings extends _tServiceSettings {
	appID?: _tServiceSettingsEnum;
	dataLabel?: _tServiceSettingsEnum;
	kdaParticipant?: boolean;
	mcSecurity?: _tMcSecurity;
}
export interface tGSESettings extends _tGSESettings { constructor: { new(): tGSESettings }; }
export var tGSESettings: { new(): tGSESettings };

export interface _tHeader extends BaseType {
	id: string;
	nameStructure?: _tHeaderNameStructureType;
	revision?: string;
	toolID?: string;
	version?: string;
	history?: _tHeaderHistoryType;
	text?: _tText;
}
export interface tHeader extends _tHeader { constructor: { new(): tHeader }; }
export var tHeader: { new(): tHeader };

export interface _tHeaderHistoryType extends BaseType {
	hitem: _tHitem[];
}
export interface tHeaderHistoryType extends _tHeaderHistoryType { constructor: { new(): tHeaderHistoryType }; }

type tHeaderNameStructureType = "IEDName";
export interface _tHeaderNameStructureType extends Primitive._string { content: tHeaderNameStructureType; }

export interface _tHitem extends _tAnyContentFromOtherNamespace {
	revision: string;
	version: string;
	what: string;
	when: string;
	who: string;
	why: string;
}
export interface tHitem extends _tHitem { constructor: { new(): tHitem }; }
export var tHitem: { new(): tHitem };

export type tID = string;
type _tID = Primitive._string;

export interface _tIDNaming extends _tBaseElement {
	desc?: string;
	id: string;
}
export interface tIDNaming extends _tIDNaming { constructor: { new(): tIDNaming }; }
export var tIDNaming: { new(): tIDNaming };

export interface _tIED extends _tUnNaming {
	configVersion?: string;
	engRight?: _tRightEnum;
	manufacturer?: string;
	name: string;
	originalSclRelease?: number;
	originalSclRevision?: string;
	originalSclVersion?: string;
	owner?: string;
	type?: string;
	accessPoint: _tAccessPoint[];
	kdc?: _tKDC[];
	services?: _tServices;
}
export interface tIED extends _tIED { constructor: { new(): tIED }; }
export var tIED: { new(): tIED };

export type tIEDName = string;
type _tIEDName = _tAcsiName;

export type tIEDNameIsNone = string;
type _tIEDNameIsNone = _tAcsiName;

export type tIEDNameOrNone = string;
type _tIEDNameOrNone = Primitive._string;

export type tIEDNameOrRelative = string;
type _tIEDNameOrRelative = Primitive._string;

export interface _tInputs extends _tUnNaming {
	extRef: _tExtRef[];
}
export interface tInputs extends _tInputs { constructor: { new(): tInputs }; }
export var tInputs: { new(): tInputs };

export interface _tKDC extends BaseType {
	apName: string;
	iedName: string;
}
export interface tKDC extends _tKDC { constructor: { new(): tKDC }; }
export var tKDC: { new(): tKDC };

export interface _tLDevice extends _tUnNaming {
	inst: string;
	ldName?: string;
	accessControl?: _tAccessControl;
	ln?: _tLN[];
	ln0: _LN0Type;
}
export interface tLDevice extends _tLDevice { constructor: { new(): tLDevice }; }
export var tLDevice: { new(): tLDevice };

export type tLDInst = string;
type _tLDInst = Primitive._string;

export type tLDInstOrEmpty = string;
type _tLDInstOrEmpty = Primitive._string;

export type tLDName = string;
type _tLDName = Primitive._string;

export interface _tLine extends _tGeneralEquipmentContainer {
	nomFreq?: number;
	numPhases?: number;
	type?: string;
	conductingEquipment: _tConductingEquipment[];
	connectivityNode?: _tConnectivityNode[];
	voltage?: _tVoltage;
}
export interface tLine extends _tLine { constructor: { new(): tLine }; }
export var tLine: { new(): tLine };

type tLineNomFreqType = number;
type _tLineNomFreqType = Primitive._number;

type tLineNumPhasesType = number;
type _tLineNumPhasesType = Primitive._number;

export type tLineType = string;
type _tLineType = Primitive._string;

export type tLLN0Enum = "LLN0";
export interface _tLLN0Enum extends Primitive._string { content: tLLN0Enum; }

export interface _tLN extends _tAnyLN {
	inst: string;
	lnClass: string;
	prefix?: string;
}
export interface tLN extends _tLN { constructor: { new(): tLN }; }
export var tLN: { new(): tLN };

export interface _tLN0 extends _tAnyLN {
	inst: string;
	lnClass: string;
	gSEControl?: _tGSEControl[];
	sampledValueControl?: _tSampledValueControl[];
	settingControl?: _tSettingControl;
}
export interface tLN0 extends _tLN0 { constructor: { new(): tLN0 }; }
export var tLN0: { new(): tLN0 };

export type tLNClassEnum = string;
type _tLNClassEnum = Primitive._string;

export type tLNInst = string;
type _tLNInst = Primitive._string;

export type tLNInstOrEmpty = string;
type _tLNInstOrEmpty = Primitive._string;

export interface _tLNode extends _tUnNaming {
	iedName?: string;
	ldInst?: string;
	lnClass: string;
	lnInst?: string;
	lnType?: string;
	prefix?: string;
}
export interface tLNode extends _tLNode { constructor: { new(): tLNode }; }
export var tLNode: { new(): tLNode };

export interface _tLNodeContainer extends _tNaming {
	lNode?: _tLNode[];
}
export interface tLNodeContainer extends _tLNodeContainer { constructor: { new(): tLNodeContainer }; }
export var tLNodeContainer: { new(): tLNodeContainer };

export interface _tLNodeType extends _tIDNaming {
	iedType?: string;
	lnClass: string;
	do: _tDO[];
}
export interface tLNodeType extends _tLNodeType { constructor: { new(): tLNodeType }; }
export var tLNodeType: { new(): tLNodeType };

export interface _tLog extends _tUnNaming {
	name?: string;
}
export interface tLog extends _tLog { constructor: { new(): tLog }; }
export var tLog: { new(): tLog };

export interface _tLogControl extends _tControlWithTriggerOpt {
	bufTime?: number;
	ldInst?: string;
	lnClass?: string;
	lnInst?: string;
	logEna?: boolean;
	logName: string;
	prefix?: string;
	reasonCode?: boolean;
}
export interface tLogControl extends _tLogControl { constructor: { new(): tLogControl }; }
export var tLogControl: { new(): tLogControl };

export type tLogName = string;
type _tLogName = _tAcsiName;

export interface _tLogSettings extends _tServiceSettings {
	intgPd?: _tServiceSettingsEnum;
	logEna?: _tServiceSettingsEnum;
	trgOps?: _tServiceSettingsEnum;
}
export interface tLogSettings extends _tLogSettings { constructor: { new(): tLogSettings }; }
export var tLogSettings: { new(): tLogSettings };

export type tLPHDEnum = "LPHD";
export interface _tLPHDEnum extends Primitive._string { content: tLPHDEnum; }

export interface _tMcSecurity extends BaseType {
	encryption?: boolean;
	signature?: boolean;
}
export interface tMcSecurity extends _tMcSecurity { constructor: { new(): tMcSecurity }; }
export var tMcSecurity: { new(): tMcSecurity };

export type tMessageID = string;
type _tMessageID = _tVisibleBasicLatin;

export type tName = string;
type _tName = _tAnyName;

export type tNamespaceName = string;
type _tNamespaceName = Primitive._string;

export interface _tNaming extends _tBaseElement {
	desc?: string;
	name: string;
}
export interface tNaming extends _tNaming { constructor: { new(): tNaming }; }
export var tNaming: { new(): tNaming };

export type tOnlyRelativeIEDName = string;
type _tOnlyRelativeIEDName = Primitive._string;

export interface _tP extends _tPAddr {
	type: string;
}
export interface tP extends _tP { constructor: { new(): tP }; }
export var tP: { new(): tP };

export interface _tP_APPID extends _tP {
	type: string;
}
export interface tP_APPID extends _tP_APPID { constructor: { new(): tP_APPID }; }
export var tP_APPID: { new(): tP_APPID };

export interface _tP_C37118IPPort extends _tP {
	type: string;
}
export interface tP_C37118IPPort extends _tP_C37118IPPort { constructor: { new(): tP_C37118IPPort }; }
export var tP_C37118IPPort: { new(): tP_C37118IPPort };

export interface _tP_DNSName extends _tP {
	type: string;
}
export interface tP_DNSName extends _tP_DNSName { constructor: { new(): tP_DNSName }; }
export var tP_DNSName: { new(): tP_DNSName };

export interface _tP_IP extends _tP_IPbase {
	type: string;
}
export interface tP_IP extends _tP_IP { constructor: { new(): tP_IP }; }
export var tP_IP: { new(): tP_IP };

export interface _tP_IPbase extends _tP {}
export interface tP_IPbase extends _tP_IPbase { constructor: { new(): tP_IPbase }; }
export var tP_IPbase: { new(): tP_IPbase };

export interface _tP_IPClassOfTraffic extends _tP {
	type: string;
}
export interface tP_IPClassOfTraffic extends _tP_IPClassOfTraffic { constructor: { new(): tP_IPClassOfTraffic }; }
export var tP_IPClassOfTraffic: { new(): tP_IPClassOfTraffic };

export interface _tP_IPGATEWAY extends _tP_IPbase {
	type: string;
}
export interface tP_IPGATEWAY extends _tP_IPGATEWAY { constructor: { new(): tP_IPGATEWAY }; }
export var tP_IPGATEWAY: { new(): tP_IPGATEWAY };

export interface _tP_IPIGMPv3Src extends _tP_IPbase {
	type: string;
}
export interface tP_IPIGMPv3Src extends _tP_IPIGMPv3Src { constructor: { new(): tP_IPIGMPv3Src }; }
export var tP_IPIGMPv3Src: { new(): tP_IPIGMPv3Src };

export interface _tP_IPSUBNET extends _tP_IPbase {
	type: string;
}
export interface tP_IPSUBNET extends _tP_IPSUBNET { constructor: { new(): tP_IPSUBNET }; }
export var tP_IPSUBNET: { new(): tP_IPSUBNET };

export interface _tP_IPv6 extends _tP_IPv6base {
	type: string;
}
export interface tP_IPv6 extends _tP_IPv6 { constructor: { new(): tP_IPv6 }; }
export var tP_IPv6: { new(): tP_IPv6 };

export interface _tP_IPv6base extends _tP {}
export interface tP_IPv6base extends _tP_IPv6base { constructor: { new(): tP_IPv6base }; }
export var tP_IPv6base: { new(): tP_IPv6base };

export interface _tP_IPv6ClassOfTraffic extends _tP {
	type: string;
}
export interface tP_IPv6ClassOfTraffic extends _tP_IPv6ClassOfTraffic { constructor: { new(): tP_IPv6ClassOfTraffic }; }
export var tP_IPv6ClassOfTraffic: { new(): tP_IPv6ClassOfTraffic };

export interface _tP_IPv6FlowLabel extends _tP {
	type: string;
}
export interface tP_IPv6FlowLabel extends _tP_IPv6FlowLabel { constructor: { new(): tP_IPv6FlowLabel }; }
export var tP_IPv6FlowLabel: { new(): tP_IPv6FlowLabel };

export interface _tP_IPv6GATEWAY extends _tP_IPv6base {
	type: string;
}
export interface tP_IPv6GATEWAY extends _tP_IPv6GATEWAY { constructor: { new(): tP_IPv6GATEWAY }; }
export var tP_IPv6GATEWAY: { new(): tP_IPv6GATEWAY };

export interface _tP_IPv6IGMPv3Src extends _tP_IPv6base {
	type: string;
}
export interface tP_IPv6IGMPv3Src extends _tP_IPv6IGMPv3Src { constructor: { new(): tP_IPv6IGMPv3Src }; }
export var tP_IPv6IGMPv3Src: { new(): tP_IPv6IGMPv3Src };

export interface _tP_IPv6SUBNET extends _tP {
	type: string;
}
export interface tP_IPv6SUBNET extends _tP_IPv6SUBNET { constructor: { new(): tP_IPv6SUBNET }; }
export var tP_IPv6SUBNET: { new(): tP_IPv6SUBNET };

export interface _tP_MACAddress extends _tP {
	type: string;
}
export interface tP_MACAddress extends _tP_MACAddress { constructor: { new(): tP_MACAddress }; }
export var tP_MACAddress: { new(): tP_MACAddress };

export interface _tP_MMSPort extends _tP_Port {
	type: string;
}
export interface tP_MMSPort extends _tP_MMSPort { constructor: { new(): tP_MMSPort }; }
export var tP_MMSPort: { new(): tP_MMSPort };

export interface _tP_OSIAEInvoke extends _tP {
	type: string;
}
export interface tP_OSIAEInvoke extends _tP_OSIAEInvoke { constructor: { new(): tP_OSIAEInvoke }; }
export var tP_OSIAEInvoke: { new(): tP_OSIAEInvoke };

export interface _tP_OSIAEQualifier extends _tP {
	type: string;
}
export interface tP_OSIAEQualifier extends _tP_OSIAEQualifier { constructor: { new(): tP_OSIAEQualifier }; }
export var tP_OSIAEQualifier: { new(): tP_OSIAEQualifier };

export interface _tP_OSIAPInvoke extends _tP {
	type: string;
}
export interface tP_OSIAPInvoke extends _tP_OSIAPInvoke { constructor: { new(): tP_OSIAPInvoke }; }
export var tP_OSIAPInvoke: { new(): tP_OSIAPInvoke };

export interface _tP_OSIAPTitle extends _tP {
	type: string;
}
export interface tP_OSIAPTitle extends _tP_OSIAPTitle { constructor: { new(): tP_OSIAPTitle }; }
export var tP_OSIAPTitle: { new(): tP_OSIAPTitle };

export interface _tP_OSINSAP extends _tP {
	type: string;
}
export interface tP_OSINSAP extends _tP_OSINSAP { constructor: { new(): tP_OSINSAP }; }
export var tP_OSINSAP: { new(): tP_OSINSAP };

export interface _tP_OSIPSEL extends _tP {
	type: string;
}
export interface tP_OSIPSEL extends _tP_OSIPSEL { constructor: { new(): tP_OSIPSEL }; }
export var tP_OSIPSEL: { new(): tP_OSIPSEL };

export interface _tP_OSISSEL extends _tP {
	type: string;
}
export interface tP_OSISSEL extends _tP_OSISSEL { constructor: { new(): tP_OSISSEL }; }
export var tP_OSISSEL: { new(): tP_OSISSEL };

export interface _tP_OSITSEL extends _tP {
	type: string;
}
export interface tP_OSITSEL extends _tP_OSITSEL { constructor: { new(): tP_OSITSEL }; }
export var tP_OSITSEL: { new(): tP_OSITSEL };

export interface _tP_PhysConn extends _tPAddr {
	type: string;
}
export interface tP_PhysConn extends _tP_PhysConn { constructor: { new(): tP_PhysConn }; }
export var tP_PhysConn: { new(): tP_PhysConn };

export interface _tP_Port extends _tP {}
export interface tP_Port extends _tP_Port { constructor: { new(): tP_Port }; }
export var tP_Port: { new(): tP_Port };

export interface _tP_SNTPPort extends _tP_Port {
	type: string;
}
export interface tP_SNTPPort extends _tP_SNTPPort { constructor: { new(): tP_SNTPPort }; }
export var tP_SNTPPort: { new(): tP_SNTPPort };

export interface _tP_TCPPort extends _tP_Port {
	type: string;
}
export interface tP_TCPPort extends _tP_TCPPort { constructor: { new(): tP_TCPPort }; }
export var tP_TCPPort: { new(): tP_TCPPort };

export interface _tP_UDPPort extends _tP_Port {
	type: string;
}
export interface tP_UDPPort extends _tP_UDPPort { constructor: { new(): tP_UDPPort }; }
export var tP_UDPPort: { new(): tP_UDPPort };

export interface _tP_VLANID extends _tP {
	type: string;
}
export interface tP_VLANID extends _tP_VLANID { constructor: { new(): tP_VLANID }; }
export var tP_VLANID: { new(): tP_VLANID };

export interface _tP_VLANPRIORITY extends _tP {
	type: string;
}
export interface tP_VLANPRIORITY extends _tP_VLANPRIORITY { constructor: { new(): tP_VLANPRIORITY }; }
export var tP_VLANPRIORITY: { new(): tP_VLANPRIORITY };

export type tPAddr = string;
type _tPAddr = Primitive._string;

export type tPhaseEnum = ("A" | "B" | "C" | "N" | "all" | "none" | "AB" | "BC" | "CA");
export interface _tPhaseEnum extends Primitive._string { content: tPhaseEnum; }

export interface _tPhysConn extends _tUnNaming {
	type: string;
	p?: _tP_PhysConn[];
}
export interface tPhysConn extends _tPhysConn { constructor: { new(): tPhysConn }; }
export var tPhysConn: { new(): tPhysConn };

export type tPhysConnTypeEnum = string;
type _tPhysConnTypeEnum = Primitive._string;

export interface _tPowerSystemResource extends _tLNodeContainer {}
export interface tPowerSystemResource extends _tPowerSystemResource { constructor: { new(): tPowerSystemResource }; }
export var tPowerSystemResource: { new(): tPowerSystemResource };

export interface _tPowerTransformer extends _tEquipment {
	type: _tPowerTransformerEnum;
	eqFunction?: _tEqFunction[];
	subEquipment?: _tSubEquipment[];
	transformerWinding: _tTransformerWinding[];
}
export interface tPowerTransformer extends _tPowerTransformer { constructor: { new(): tPowerTransformer }; }
export var tPowerTransformer: { new(): tPowerTransformer };

export type tPowerTransformerEnum = "PTR";
export interface _tPowerTransformerEnum extends Primitive._string { content: tPowerTransformerEnum; }

export type tPredefinedAttributeNameEnum = ("T" | "Test" | "Check" | "SIUnit" | "Oper" | "SBO" | "SBOw" | "Cancel" | "Addr" | "PRIORITY" | "VID" | "APPID" | "TransportInUse" | "IPClassOfTraffic" | "IPv6FlowLabel" | "IPAddressLength" | "IPAddress");
export interface _tPredefinedAttributeNameEnum extends Primitive._string { content: tPredefinedAttributeNameEnum; }

export type tPredefinedBasicTypeEnum = ("BOOLEAN" | "INT8" | "INT16" | "INT24" | "INT32" | "INT64" | "INT128" | "INT8U" | "INT16U" | "INT24U" | "INT32U" | "FLOAT32" | "FLOAT64" | "Enum" | "Dbpos" | "Tcmd" | "Quality" | "Timestamp" | "VisString32" | "VisString64" | "VisString65" | "VisString129" | "VisString255" | "Octet64" | "Unicode255" | "Struct" | "EntryTime" | "Check" | "ObjRef" | "Currency" | "PhyComAddr" | "TrgOps" | "OptFlds" | "SvOptFlds" | "LogOptFlds" | "EntryID" | "Octet6" | "Octet16");
export interface _tPredefinedBasicTypeEnum extends Primitive._string { content: tPredefinedBasicTypeEnum; }

export type tPredefinedCDCEnum = ("SPS" | "DPS" | "INS" | "ENS" | "ACT" | "ACD" | "SEC" | "BCR" | "HST" | "VSS" | "MV" | "CMV" | "SAV" | "WYE" | "DEL" | "SEQ" | "HMV" | "HWYE" | "HDEL" | "SPC" | "DPC" | "INC" | "ENC" | "BSC" | "ISC" | "APC" | "BAC" | "SPG" | "ING" | "ENG" | "ORG" | "TSG" | "CUG" | "VSG" | "ASG" | "CURVE" | "CSG" | "DPL" | "LPL" | "CSD" | "CST" | "BTS" | "UTS" | "LTS" | "GTS" | "MTS" | "NTS" | "STS" | "CTS" | "OTS" | "VSD" | "ORS" | "TCS");
export interface _tPredefinedCDCEnum extends Primitive._string { content: tPredefinedCDCEnum; }

export type tPredefinedCommonConductingEquipmentEnum = ("CBR" | "DIS" | "VTR" | "CTR" | "GEN" | "CAP" | "REA" | "CON" | "MOT" | "EFN" | "PSH" | "BAT" | "BSH" | "CAB" | "GIL" | "LIN" | "RES" | "RRC" | "SAR" | "TCF" | "TCR" | "IFL" | "FAN" | "SCR" | "SMC" | "PMP");
export interface _tPredefinedCommonConductingEquipmentEnum extends Primitive._string { content: tPredefinedCommonConductingEquipmentEnum; }

export type tPredefinedGeneralEquipmentEnum = ("AXN" | "BAT" | "MOT" | "FAN" | "FIL" | "PMP" | "TNK" | "VLV");
export interface _tPredefinedGeneralEquipmentEnum extends Primitive._string { content: tPredefinedGeneralEquipmentEnum; }

export type tPredefinedLNClassEnum = string;
type _tPredefinedLNClassEnum = Primitive._string;

export type tPredefinedPhysConnTypeEnum = ("Connection" | "RedConn");
export interface _tPredefinedPhysConnTypeEnum extends Primitive._string { content: tPredefinedPhysConnTypeEnum; }

export type tPredefinedPTypeEnum = ("IP" | "IP-SUBNET" | "IP-GATEWAY" | "OSI-NSAP" | "OSI-TSEL" | "OSI-SSEL" | "OSI-PSEL" | "OSI-AP-Title" | "OSI-AP-Invoke" | "OSI-AE-Qualifier" | "OSI-AE-Invoke" | "MAC-Address" | "APPID" | "VLAN-PRIORITY" | "VLAN-ID" | "SNTP-Port" | "MMS-Port" | "DNSName" | "IPv6FlowLabel" | "IPv6ClassOfTraffic" | "C37-118-IP-Port" | "IP-UDP-PORT" | "IP-TCP-PORT" | "IPv6" | "IPv6-SUBNET" | "IPv6-GATEWAY" | "IPv6-IGMPv3Src" | "IP-IGMPv3Src" | "IP-ClassOfTraffic");
export interface _tPredefinedPTypeEnum extends Primitive._string { content: tPredefinedPTypeEnum; }

export type tPredefinedPTypePhysConnEnum = ("Type" | "Plug" | "Cable" | "Port");
export interface _tPredefinedPTypePhysConnEnum extends Primitive._string { content: tPredefinedPTypePhysConnEnum; }

export type tPredefinedTypeOfSecurityEnum = ("None" | "Signature" | "SignatureAndEncryption");
export interface _tPredefinedTypeOfSecurityEnum extends Primitive._string { content: tPredefinedTypeOfSecurityEnum; }

export type tPrefix = string;
type _tPrefix = Primitive._string;

export interface _tPrivate extends _tAnyContentFromOtherNamespace {
	source?: string;
	type: string;
}
export interface tPrivate extends _tPrivate { constructor: { new(): tPrivate }; }
export var tPrivate: { new(): tPrivate };

type tPrivateTypeType = string;
type _tPrivateTypeType = Primitive._string;

export interface _tProcess extends _tGeneralEquipmentContainer {
	type?: string;
	conductingEquipment?: _tConductingEquipment[];
	line?: _tLine[];
	process?: _tProcess[];
	substation?: _tSubstation[];
}
export interface tProcess extends _tProcess { constructor: { new(): tProcess }; }
export var tProcess: { new(): tProcess };

export type tProcessName = string;
type _tProcessName = Primitive._string;

export type tProcessType = string;
type _tProcessType = Primitive._string;

export interface _tProtNs extends _tNamespaceName {
	type?: string;
}
export interface tProtNs extends _tProtNs { constructor: { new(): tProtNs }; }
export var tProtNs: { new(): tProtNs };

type tProtNsTypeType = string;
type _tProtNsTypeType = Primitive._string;

export interface _tProtocol extends Primitive._string {
	mustUnderstand: boolean;
}
export interface tProtocol extends _tProtocol { constructor: { new(): tProtocol }; }
export var tProtocol: { new(): tProtocol };

export type tPTypeEnum = string;
type _tPTypeEnum = Primitive._string;

export type tPTypePhysConnEnum = string;
type _tPTypePhysConnEnum = Primitive._string;

export interface _tRedProt extends BaseType {
	hsr?: boolean;
	prp?: boolean;
	rstp?: boolean;
}
export interface tRedProt extends _tRedProt { constructor: { new(): tRedProt }; }
export var tRedProt: { new(): tRedProt };

export type tRedProtEnum = ("none" | "hsr" | "prp" | "rstp");
export interface _tRedProtEnum extends Primitive._string { content: tRedProtEnum; }

export interface _tReportControl extends _tControlWithTriggerOpt {
	buffered?: boolean;
	bufTime?: number;
	confRev: number;
	indexed?: boolean;
	rptID?: string;
	optFields: _tReportControlOptFieldsType;
	rptEnabled?: _tRptEnabled;
}
export interface tReportControl extends _tReportControl { constructor: { new(): tReportControl }; }
export var tReportControl: { new(): tReportControl };

export interface _tReportControlOptFieldsType extends BaseType {
	bufOvfl?: boolean;
	configRef?: boolean;
	dataRef?: boolean;
	dataSet?: boolean;
	entryID?: boolean;
	reasonCode?: boolean;
	seqNum?: boolean;
	timeStamp?: boolean;
}
export interface tReportControlOptFieldsType extends _tReportControlOptFieldsType { constructor: { new(): tReportControlOptFieldsType }; }

export interface _tReportSettings extends _tServiceSettings {
	bufTime?: _tServiceSettingsEnum;
	intgPd?: _tServiceSettingsEnum;
	optFields?: _tServiceSettingsEnum;
	owner?: boolean;
	resvTms?: boolean;
	rptID?: _tServiceSettingsEnum;
	trgOps?: _tServiceSettingsEnum;
}
export interface tReportSettings extends _tReportSettings { constructor: { new(): tReportSettings }; }
export var tReportSettings: { new(): tReportSettings };

export type tRestrName1stL = string;
type _tRestrName1stL = Primitive._string;

export type tRestrName1stU = string;
type _tRestrName1stU = Primitive._string;

export type tRightEnum = ("full" | "fix" | "dataflow");
export interface _tRightEnum extends Primitive._string { content: tRightEnum; }

export interface _tRptEnabled extends _tUnNaming {
	max?: number;
	clientLN?: _tClientLN[];
}
export interface tRptEnabled extends _tRptEnabled { constructor: { new(): tRptEnabled }; }
export var tRptEnabled: { new(): tRptEnabled };

type tRptEnabledMaxType = number;
type _tRptEnabledMaxType = Primitive._number;

export interface _tSampledValueControl extends _tControlWithIEDName {
	multicast: boolean;
	nofASDU: number;
	securityEnable?: _tPredefinedTypeOfSecurityEnum;
	smpMod?: _tSmpMod;
	smpRate: number;
	smvID: string;
	protocol?: _tProtocol;
	smvOpts: _tSampledValueControlSmvOptsType;
}
export interface tSampledValueControl extends _tSampledValueControl { constructor: { new(): tSampledValueControl }; }
export var tSampledValueControl: { new(): tSampledValueControl };

export interface _tSampledValueControlSmvOptsType extends BaseType {
	dataSet?: boolean;
	refreshTime?: boolean;
	sampleRate?: boolean;
	sampleSynchronized?: boolean;
	security?: boolean;
	synchSourceId?: boolean;
	timestamp?: boolean;
}
export interface tSampledValueControlSmvOptsType extends _tSampledValueControlSmvOptsType { constructor: { new(): tSampledValueControlSmvOptsType }; }

export type tSclRelease = number;
type _tSclRelease = Primitive._number;

export type tSclRevision = string;
type _tSclRevision = Primitive._string;

export type tSclVersion = string;
type _tSclVersion = _tName;

export interface _tSDI extends _tUnNaming {
	ix?: number;
	name: string;
	sAddr?: string;
	dai?: _tDAI[];
	sdi?: _tSDI[];
}
export interface tSDI extends _tSDI { constructor: { new(): tSDI }; }
export var tSDI: { new(): tSDI };

export interface _tSDO extends _tUnNaming {
	count?: string;
	name: string;
	type: string;
}
export interface tSDO extends _tSDO { constructor: { new(): tSDO }; }
export var tSDO: { new(): tSDO };

export type tSDOCount = string;
type _tSDOCount = Primitive._string;

export interface _tServer extends _tUnNaming {
	timeout?: number;
	association?: _tAssociation[];
	authentication: _tServerAuthenticationType;
	lDevice: _tLDevice[];
}
export interface tServer extends _tServer { constructor: { new(): tServer }; }
export var tServer: { new(): tServer };

export interface _tServerAt extends _tUnNaming {
	apName: string;
}
export interface tServerAt extends _tServerAt { constructor: { new(): tServerAt }; }
export var tServerAt: { new(): tServerAt };

export interface _tServerAuthenticationType extends BaseType {
	certificate?: boolean;
	none?: boolean;
	password?: boolean;
	strong?: boolean;
	weak?: boolean;
}
export interface tServerAuthenticationType extends _tServerAuthenticationType { constructor: { new(): tServerAuthenticationType }; }

export interface _tServiceConfReportControl extends _tServiceWithMax {
	bufConf?: boolean;
	bufMode?: _tServiceConfReportControlBufModeType;
	maxBuf?: number;
}
export interface tServiceConfReportControl extends _tServiceConfReportControl { constructor: { new(): tServiceConfReportControl }; }
export var tServiceConfReportControl: { new(): tServiceConfReportControl };

type tServiceConfReportControlBufModeType = ("unbuffered" | "buffered" | "both");
export interface _tServiceConfReportControlBufModeType extends Primitive._string { content: tServiceConfReportControlBufModeType; }

export interface _tServiceForConfDataSet extends _tServiceWithMaxAndMaxAttributes {
	modify?: boolean;
}
export interface tServiceForConfDataSet extends _tServiceForConfDataSet { constructor: { new(): tServiceForConfDataSet }; }
export var tServiceForConfDataSet: { new(): tServiceForConfDataSet };

export interface _tServices extends BaseType {
	nameLength?: string;
}
export interface tServices extends _tServices { constructor: { new(): tServices }; }
export var tServices: { new(): tServices };

export interface _tServiceSettings extends BaseType {
	cbName?: _tServiceSettingsNoDynEnum;
	datSet?: _tServiceSettingsEnum;
}
export interface tServiceSettings extends _tServiceSettings { constructor: { new(): tServiceSettings }; }
export var tServiceSettings: { new(): tServiceSettings };

export type tServiceSettingsEnum = ("Dyn" | "Conf" | "Fix");
export interface _tServiceSettingsEnum extends Primitive._string { content: tServiceSettingsEnum; }

export type tServiceSettingsNoDynEnum = ("Conf" | "Fix");
export interface _tServiceSettingsNoDynEnum extends Primitive._string { content: tServiceSettingsNoDynEnum; }

type tServicesNameLengthType = string;
type _tServicesNameLengthType = Primitive._string;

export type tServiceType = ("Poll" | "Report" | "GOOSE" | "SMV");
export interface _tServiceType extends Primitive._string { content: tServiceType; }

export interface _tServiceWithMax extends BaseType {
	max: number;
}
export interface tServiceWithMax extends _tServiceWithMax { constructor: { new(): tServiceWithMax }; }
export var tServiceWithMax: { new(): tServiceWithMax };

export interface _tServiceWithMaxAndMaxAttributes extends _tServiceWithMax {
	maxAttributes?: number;
}
export interface tServiceWithMaxAndMaxAttributes extends _tServiceWithMaxAndMaxAttributes { constructor: { new(): tServiceWithMaxAndMaxAttributes }; }
export var tServiceWithMaxAndMaxAttributes: { new(): tServiceWithMaxAndMaxAttributes };

type tServiceWithMaxAndMaxAttributesMaxAttributesType = number;
type _tServiceWithMaxAndMaxAttributesMaxAttributesType = Primitive._number;

export interface _tServiceWithMaxAndModify extends _tServiceWithMax {
	modify?: boolean;
}
export interface tServiceWithMaxAndModify extends _tServiceWithMaxAndModify { constructor: { new(): tServiceWithMaxAndModify }; }
export var tServiceWithMaxAndModify: { new(): tServiceWithMaxAndModify };

export interface _tServiceWithMaxNonZero extends BaseType {
	max: number;
}
export interface tServiceWithMaxNonZero extends _tServiceWithMaxNonZero { constructor: { new(): tServiceWithMaxNonZero }; }
export var tServiceWithMaxNonZero: { new(): tServiceWithMaxNonZero };

type tServiceWithMaxNonZeroMaxType = number;
type _tServiceWithMaxNonZeroMaxType = Primitive._number;

export interface _tServiceWithOptionalMax extends BaseType {
	max?: number;
}
export interface tServiceWithOptionalMax extends _tServiceWithOptionalMax { constructor: { new(): tServiceWithOptionalMax }; }
export var tServiceWithOptionalMax: { new(): tServiceWithOptionalMax };

export interface _tServiceYesNo extends BaseType {}
export interface tServiceYesNo extends _tServiceYesNo { constructor: { new(): tServiceYesNo }; }
export var tServiceYesNo: { new(): tServiceYesNo };

export interface _tSettingControl extends _tUnNaming {
	actSG?: number;
	numOfSGs: number;
	resvTms?: number;
}
export interface tSettingControl extends _tSettingControl { constructor: { new(): tSettingControl }; }
export var tSettingControl: { new(): tSettingControl };

type tSettingControlActSGType = number;
type _tSettingControlActSGType = Primitive._number;

type tSettingControlNumOfSGsType = number;
type _tSettingControlNumOfSGsType = Primitive._number;

export interface _tSettingGroups extends BaseType {}
export interface tSettingGroups extends _tSettingGroups { constructor: { new(): tSettingGroups }; }
export var tSettingGroups: { new(): tSettingGroups };

export type tSmpMod = ("SmpPerPeriod" | "SmpPerSec" | "SecPerSmp");
export interface _tSmpMod extends Primitive._string { content: tSmpMod; }

export interface _tSMV extends _tControlBlock {}
export interface tSMV extends _tSMV { constructor: { new(): tSMV }; }
export var tSMV: { new(): tSMV };

export type tSMVDeliveryEnum = ("unicast" | "multicast" | "both");
export interface _tSMVDeliveryEnum extends Primitive._string { content: tSMVDeliveryEnum; }

export interface _tSMVsc extends _tServiceWithMax {
	delivery?: _tSMVDeliveryEnum;
	deliveryConf?: boolean;
	rSV?: boolean;
	sv?: boolean;
}
export interface tSMVsc extends _tSMVsc { constructor: { new(): tSMVsc }; }
export var tSMVsc: { new(): tSMVsc };

export interface _tSMVSettings extends _tServiceSettings {
	kdaParticipant?: boolean;
	nofASDU?: _tServiceSettingsNoDynEnum;
	optFields?: _tServiceSettingsEnum;
	pdcTimeStamp?: boolean;
	svID?: _tServiceSettingsEnum;
	synchSrcId?: boolean;
	mcSecurity?: _tMcSecurity;
	samplesPerSec: number[];
	secPerSamples: number[];
	smpRate: number[];
}
export interface tSMVSettings extends _tSMVSettings { constructor: { new(): tSMVSettings }; }
export var tSMVSettings: { new(): tSMVSettings };

type tSMVSettingsSamplesPerSecType = number;
type _tSMVSettingsSamplesPerSecType = Primitive._number;

type tSMVSettingsSecPerSamplesType = number;
type _tSMVSettingsSecPerSamplesType = Primitive._number;

type tSMVSettingsSmpRateType = number;
type _tSMVSettingsSmpRateType = Primitive._number;

export type tSubDataName = string;
type _tSubDataName = _tRestrName1stL;

export interface _tSubEquipment extends _tPowerSystemResource {
	phase?: _tPhaseEnum;
	virtual?: boolean;
	eqFunction?: _tEqFunction[];
}
export interface tSubEquipment extends _tSubEquipment { constructor: { new(): tSubEquipment }; }
export var tSubEquipment: { new(): tSubEquipment };

export interface _tSubFunction extends _tPowerSystemResource {
	type?: string;
	conductingEquipment?: _tConductingEquipment[];
	generalEquipment?: _tGeneralEquipment[];
	subFunction?: _tSubFunction[];
}
export interface tSubFunction extends _tSubFunction { constructor: { new(): tSubFunction }; }
export var tSubFunction: { new(): tSubFunction };

export interface _tSubNetwork extends _tNaming {
	type?: string;
	bitRate?: _tBitRateInMbPerSec;
	connectedAP: _tConnectedAP[];
}
export interface tSubNetwork extends _tSubNetwork { constructor: { new(): tSubNetwork }; }
export var tSubNetwork: { new(): tSubNetwork };

type tSubNetworkTypeType = string;
type _tSubNetworkTypeType = Primitive._string;

export interface _tSubstation extends _tEquipmentContainer {
	function?: _tFunction[];
	voltageLevel: _tVoltageLevel[];
}
export interface tSubstation extends _tSubstation { constructor: { new(): tSubstation }; }
export var tSubstation: { new(): tSubstation };

export interface _tSupSubscription extends BaseType {
	maxGo: number;
	maxSv: number;
}
export interface tSupSubscription extends _tSupSubscription { constructor: { new(): tSupSubscription }; }
export var tSupSubscription: { new(): tSupSubscription };

export type tSystemLNGroupEnum = ("LLN0" | "LPHD" | "LCCH" | "LGOS" | "LSVS" | "LTIM" | "LTMS" | "LTRK");
export interface _tSystemLNGroupEnum extends Primitive._string { content: tSystemLNGroupEnum; }

export interface _tTapChanger extends _tPowerSystemResource {
	type: string;
	virtual?: boolean;
	eqFunction?: _tEqFunction[];
	subEquipment?: _tSubEquipment[];
}
export interface tTapChanger extends _tTapChanger { constructor: { new(): tTapChanger }; }
export var tTapChanger: { new(): tTapChanger };

export interface _tTerminal extends _tUnNaming {
	bayName?: string;
	cNodeName: string;
	connectivityNode: string;
	lineName?: string;
	name?: string;
	processName?: string;
	substationName?: string;
	voltageLevelName?: string;
}
export interface tTerminal extends _tTerminal { constructor: { new(): tTerminal }; }
export var tTerminal: { new(): tTerminal };

export interface _tText extends _tAnyContentFromOtherNamespace {
	source?: string;
}
export interface tText extends _tText { constructor: { new(): tText }; }
export var tText: { new(): tText };

export interface _tTimeSyncProt extends _tServiceYesNo {
	c37_238?: boolean;
	iec61850_9_3?: boolean;
	other?: boolean;
	sntp?: boolean;
}
export interface tTimeSyncProt extends _tTimeSyncProt { constructor: { new(): tTimeSyncProt }; }
export var tTimeSyncProt: { new(): tTimeSyncProt };

export interface _tTransformerWinding extends _tAbstractConductingEquipment {
	type: _tTransformerWindingEnum;
	eqFunction?: _tEqFunction[];
	neutralPoint?: _tTerminal;
	tapChanger?: _tTapChanger;
}
export interface tTransformerWinding extends _tTransformerWinding { constructor: { new(): tTransformerWinding }; }
export var tTransformerWinding: { new(): tTransformerWinding };

export type tTransformerWindingEnum = "PTW";
export interface _tTransformerWindingEnum extends Primitive._string { content: tTransformerWindingEnum; }

export interface _tTrgOps extends BaseType {
	dchg?: boolean;
	dupd?: boolean;
	gi?: boolean;
	period?: boolean;
	qchg?: boolean;
}
export interface tTrgOps extends _tTrgOps { constructor: { new(): tTrgOps }; }
export var tTrgOps: { new(): tTrgOps };

export type tUnitMultiplierEnum = ("" | "m" | "k" | "M" | "mu" | "y" | "z" | "a" | "f" | "p" | "n" | "c" | "d" | "da" | "h" | "G" | "T" | "P" | "E" | "Z" | "Y");
export interface _tUnitMultiplierEnum extends Primitive._string { content: tUnitMultiplierEnum; }

export interface _tUnNaming extends _tBaseElement {
	desc?: string;
}
export interface tUnNaming extends _tUnNaming { constructor: { new(): tUnNaming }; }
export var tUnNaming: { new(): tUnNaming };

export interface _tVal extends Primitive._string {
	sGroup?: number;
}
export interface tVal extends _tVal { constructor: { new(): tVal }; }
export var tVal: { new(): tVal };

export type tValKindEnum = ("Spec" | "Conf" | "RO" | "Set");
export interface _tValKindEnum extends Primitive._string { content: tValKindEnum; }

export interface _tValueHandling extends BaseType {
	setToRO?: boolean;
}
export interface tValueHandling extends _tValueHandling { constructor: { new(): tValueHandling }; }
export var tValueHandling: { new(): tValueHandling };

export interface _tValueWithUnit extends Primitive._number {
	multiplier?: _tUnitMultiplierEnum;
	unit: string;
}
export interface tValueWithUnit extends _tValueWithUnit { constructor: { new(): tValueWithUnit }; }
export var tValueWithUnit: { new(): tValueWithUnit };

export type tVisibleBasicLatin = string;
type _tVisibleBasicLatin = Primitive._string;

export interface _tVoltage extends _tValueWithUnit {
	multiplier?: _tUnitMultiplierEnum;
	unit: string;
}
export interface tVoltage extends _tVoltage { constructor: { new(): tVoltage }; }
export var tVoltage: { new(): tVoltage };

export interface _tVoltageLevel extends _tEquipmentContainer {
	nomFreq?: number;
	numPhases?: number;
	bay: _tBay[];
	function?: _tFunction[];
	voltage?: _tVoltage;
}
export interface tVoltageLevel extends _tVoltageLevel { constructor: { new(): tVoltageLevel }; }
export var tVoltageLevel: { new(): tVoltageLevel };

type tVoltageLevelNomFreqType = number;
type _tVoltageLevelNomFreqType = Primitive._number;

type tVoltageLevelNumPhasesType = number;
type _tVoltageLevelNumPhasesType = Primitive._number;

export interface document extends BaseType {
	communication: _tCommunication;
	dataTypeTemplates: _tDataTypeTemplates;
	ied: _tIED;
	line: _tLine;
	ln: _tLN;
	ln0: _LN0Type;
	process: _tProcess;
	scl: _SCLType;
	substation: _tSubstation;
}
export var document: document;
