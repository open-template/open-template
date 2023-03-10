// SPDX-FileCopyrightText: 2022 2023 Samir Romdhani <samir.romdhani1994@gmail.com>
//
// SPDX-License-Identifier: MIT license

var cxml = require("cxml");
var Primitive = require('../../../xml-primitives');

cxml.register('http://www.iec.ch/61850/2003/SCL', exports, [
	[Primitive, ['any', 'boolean', 'number', 'string'], []]
], [
	'tAbstractConductingEquipment',
	'tAbstractDataAttribute',
	'tAbstractEqFuncSubFunc',
	'tAccessControl',
	'tAccessPoint',
	'tAccessPointName',
	'tAcsiName',
	'tAddress',
	'tAnyContentFromOtherNamespace',
	'tAnyLN',
	'tAnyName',
	'tAssociation',
	'tAssociationID',
	'tAssociationKindEnum',
	'tAttributeNameEnum',
	'tAuthenticationEnum',
	'tBaseElement',
	'tBasicTypeEnum',
	'tBay',
	'tBDA',
	'tBitRateInMbPerSec',
	'tCBName',
	'tCDCEnum',
	'tCert',
	'tCertificate',
	'tClientLN',
	'tClientServices',
	'tCommonConductingEquipmentEnum',
	'tCommProt',
	'tCommunication',
	'tConductingEquipment',
	'tConfLNs',
	'tConnectedAP',
	'tConnectivityNode',
	'tConnectivityNodeReference',
	'tControl',
	'tControlBlock',
	'tControlWithIEDName',
	'tControlWithTriggerOpt',
	'tDA',
	'tDACount',
	'tDAI',
	'tDataName',
	'tDataSet',
	'tDataSetName',
	'tDataTypeTemplates',
	'tDAType',
	'tDO',
	'tDOI',
	'tDomainLNEnum',
	'tDomainLNGroupAEnum',
	'tDomainLNGroupCEnum',
	'tDomainLNGroupFEnum',
	'tDomainLNGroupGEnum',
	'tDomainLNGroupIEnum',
	'tDomainLNGroupKEnum',
	'tDomainLNGroupMEnum',
	'tDomainLNGroupPEnum',
	'tDomainLNGroupQEnum',
	'tDomainLNGroupREnum',
	'tDomainLNGroupSEnum',
	'tDomainLNGroupTEnum',
	'tDomainLNGroupXEnum',
	'tDomainLNGroupYEnum',
	'tDomainLNGroupZEnum',
	'tDOType',
	'tDurationInMilliSec',
	'tDurationInSec',
	'tEmpty',
	'tEnumStringValue',
	'tEnumType',
	'tEnumVal',
	'tEqFunction',
	'tEqSubFunction',
	'tEquipment',
	'tEquipmentContainer',
	'tExtensionAttributeNameEnum',
	'tExtensionCDCEnum',
	'tExtensionEquipmentEnum',
	'tExtensionGeneralEquipmentEnum',
	'tExtensionLNClassEnum',
	'tExtensionPhysConnTypeEnum',
	'tExtensionPTypeEnum',
	'tExtRef',
	'tFCDA',
	'tFCEnum',
	'tFileHandling',
	'tFullAttributeName',
	'tFullDOName',
	'tFunction',
	'tGeneralEquipment',
	'tGeneralEquipmentContainer',
	'tGeneralEquipmentEnum',
	'tGOOSEcapabilities',
	'tGSE',
	'tGSEControl',
	'tGSEControlTypeEnum',
	'tGSESettings',
	'tHeader',
	'tHitem',
	'tID',
	'tIDNaming',
	'tIED',
	'tIEDName',
	'tIEDNameIsNone',
	'tIEDNameOrNone',
	'tIEDNameOrRelative',
	'tInputs',
	'tKDC',
	'tLDevice',
	'tLDInst',
	'tLDInstOrEmpty',
	'tLDName',
	'tLine',
	'tLineType',
	'tLLN0Enum',
	'tLN',
	'tLN0',
	'tLNClassEnum',
	'tLNInst',
	'tLNInstOrEmpty',
	'tLNode',
	'tLNodeContainer',
	'tLNodeType',
	'tLog',
	'tLogControl',
	'tLogName',
	'tLogSettings',
	'tLPHDEnum',
	'tMcSecurity',
	'tMessageID',
	'tName',
	'tNamespaceName',
	'tNaming',
	'tOnlyRelativeIEDName',
	'tP',
	'tP_APPID',
	'tP_C37118IPPort:tP_C37-118-IP-Port',
	'tP_DNSName',
	'tP_IP',
	'tP_IPbase',
	'tP_IPClassOfTraffic:tP_IP-ClassOfTraffic',
	'tP_IPGATEWAY:tP_IP-GATEWAY',
	'tP_IPIGMPv3Src:tP_IP-IGMPv3Src',
	'tP_IPSUBNET:tP_IP-SUBNET',
	'tP_IPv6',
	'tP_IPv6base',
	'tP_IPv6ClassOfTraffic',
	'tP_IPv6FlowLabel',
	'tP_IPv6GATEWAY:tP_IPv6-GATEWAY',
	'tP_IPv6IGMPv3Src:tP_IPv6-IGMPv3Src',
	'tP_IPv6SUBNET:tP_IPv6-SUBNET',
	'tP_MACAddress:tP_MAC-Address',
	'tP_MMSPort:tP_MMS-Port',
	'tP_OSIAEInvoke:tP_OSI-AE-Invoke',
	'tP_OSIAEQualifier:tP_OSI-AE-Qualifier',
	'tP_OSIAPInvoke:tP_OSI-AP-Invoke',
	'tP_OSIAPTitle:tP_OSI-AP-Title',
	'tP_OSINSAP:tP_OSI-NSAP',
	'tP_OSIPSEL:tP_OSI-PSEL',
	'tP_OSISSEL:tP_OSI-SSEL',
	'tP_OSITSEL:tP_OSI-TSEL',
	'tP_PhysConn',
	'tP_Port',
	'tP_SNTPPort:tP_SNTP-Port',
	'tP_TCPPort:tP_TCP-Port',
	'tP_UDPPort:tP_UDP-Port',
	'tP_VLANID:tP_VLAN-ID',
	'tP_VLANPRIORITY:tP_VLAN-PRIORITY',
	'tPAddr',
	'tPhaseEnum',
	'tPhysConn',
	'tPhysConnTypeEnum',
	'tPowerSystemResource',
	'tPowerTransformer',
	'tPowerTransformerEnum',
	'tPredefinedAttributeNameEnum',
	'tPredefinedBasicTypeEnum',
	'tPredefinedCDCEnum',
	'tPredefinedCommonConductingEquipmentEnum',
	'tPredefinedGeneralEquipmentEnum',
	'tPredefinedLNClassEnum',
	'tPredefinedPhysConnTypeEnum',
	'tPredefinedPTypeEnum',
	'tPredefinedPTypePhysConnEnum',
	'tPredefinedTypeOfSecurityEnum',
	'tPrefix',
	'tPrivate',
	'tProcess',
	'tProcessName',
	'tProcessType',
	'tProtNs',
	'tProtocol',
	'tPTypeEnum',
	'tPTypePhysConnEnum',
	'tRedProt',
	'tRedProtEnum',
	'tReportControl',
	'tReportSettings',
	'tRestrName1stL',
	'tRestrName1stU',
	'tRightEnum',
	'tRptEnabled',
	'tSampledValueControl',
	'tSclRelease',
	'tSclRevision',
	'tSclVersion',
	'tSDI',
	'tSDO',
	'tSDOCount',
	'tServer',
	'tServerAt',
	'tServiceConfReportControl',
	'tServiceForConfDataSet',
	'tServices',
	'tServiceSettings',
	'tServiceSettingsEnum',
	'tServiceSettingsNoDynEnum',
	'tServiceType',
	'tServiceWithMax',
	'tServiceWithMaxAndMaxAttributes',
	'tServiceWithMaxAndModify',
	'tServiceWithMaxNonZero',
	'tServiceWithOptionalMax',
	'tServiceYesNo',
	'tSettingControl',
	'tSettingGroups',
	'tSmpMod',
	'tSMV',
	'tSMVDeliveryEnum',
	'tSMVsc',
	'tSMVSettings',
	'tSubDataName',
	'tSubEquipment',
	'tSubFunction',
	'tSubNetwork',
	'tSubstation',
	'tSupSubscription',
	'tSystemLNGroupEnum',
	'tTapChanger',
	'tTerminal',
	'tText',
	'tTimeSyncProt',
	'tTransformerWinding',
	'tTransformerWindingEnum',
	'tTrgOps',
	'tUnitMultiplierEnum',
	'tUnNaming',
	'tVal',
	'tValKindEnum',
	'tValueHandling',
	'tValueWithUnit',
	'tVisibleBasicLatin',
	'tVoltage',
	'tVoltageLevel'
], [
	[0, 0, [[16, 0], [24, 0], [46, 0], [59, 0], [60, 0], [61, 0], [84, 0], [108, 0], [119, 0]], []],
	[0, 79, [[392, 3], [403, 3]], []],
	[0, 252, [[457, 3]], [[171, 0], [189, 1], [315, 0], [104, 1], [451, 1], [142, 1], [459, 1]]],
	[0, 178, [[216, 3], [228, 3]], [[133, 1]]],
	[0, 13, [], []],
	[0, 252, [[230, 3], [60, 3], [374, 1], [375, 1], [377, 1], [386, 3]], [[15, 1], [58, 1], [308, 0], [98, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 0, [[334, 2]], []],
	[0, 0, [[4, 3]], [[3, 0]]],
	[0, 252, [[197, 3], [203, 3], [247, 1], [285, 3], [286, 3], [360, 3]], [[284, 0]]],
	[3, 4, [], []],
	[0, 0, [], [[165, 1], [28, 1], [239, 0], [254, 0], [257, 0], [267, 0], [276, 0], [344, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 0, [[2, 3], [350, 3], [404, 1]], [[1, 0]]],
	[3, 182, [], []],
	[0, 80, [[180, 3], [187, 3], [223, 3]], []],
	[0, 6, [], []],
	[1, 3, [], [[305, 1], [140, 1]]],
	[3, 11, [], []],
	[3, 183, [], []],
	[0, 0, [], [[179, 0], [237, 0]]],
	[0, 138, [[252, 0], [397, 0]], [[373, 0], [151, 1]]],
	[0, 0, [], [[162, 1], [28, 1], [239, 0], [257, 0], [267, 0], [276, 0], [344, 1]]],
	[0, 0, [[297, 1], [406, 1]], [[10, 1], [40, 1], [42, 1], [292, 1], [293, 1], [294, 1], [295, 1], [75, 1], [88, 1], [96, 1], [100, 1], [120, 1], [121, 1], [135, 1]]],
	[3, 4, [], []],
	[0, 229, [], [[51, 1]]],
	[0, 252, [[398, 2]], []],
	[0, 5, [[210, 3]], [[411, 0]]],
	[0, 0, [], [[35, 1], [36, 1]]],
	[0, 252, [[156, 1], [231, 3], [340, 3], [383, 3]], [[159, 0], [242, 0], [358, 1]]],
	[0, 127, [], [[336, 0]]],
	[3, 4, [], []],
	[0, 252, [], [[198, 1], [310, 0]]],
	[0, 252, [[155, 1]], [[175, 0], [262, 0]]],
	[0, 40, [[243, 3]], [[20, 1]]],
	[0, 40, [[410, 1]], [[50, 1]]],
	[0, 6, [[353, 3]], [[26, 1], [30, 1], [219, 0], [87, 1]]],
	[3, 4, [], []],
	[0, 252, [[456, 3]], [[55, 1], [314, 0], [103, 1], [141, 1], [458, 1]]],
	[3, 205, [], []],
	[0, 252, [[220, 2]], [[309, 0]]],
	[3, 11, [], []],
	[0, 0, [[200, 3], [206, 2], [208, 3], [282, 2]], []],
	[0, 106, [[169, 2], [354, 3]], [[246, 1]]],
	[0, 252, [], [[6, 1], [316, 0], [129, 1], [452, 0]]],
	[0, 252, [[192, 3], [367, 3]], [[5, 1], [53, 1], [312, 0]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 106, [[191, 3], [369, 3]], [[176, 0], [245, 1]]],
	[1, 3, [], [[304, 1], [139, 1]]],
	[1, 256, [], [[303, 1], [138, 0]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 106, [[209, 2]], []],
	[1, 74, [], [[28, 1], [77, 0]]],
	[0, 7, [], []],
	[0, 7, [], []],
	[0, 178, [], [[145, 1]]],
	[0, 178, [[225, 3], [342, 3]], []],
	[3, 204, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 0, [], [[195, 1], [28, 1], [205, 1], [240, 1], [49, 1], [260, 1], [272, 1], [279, 1], [337, 1], [338, 1], [341, 1], [348, 1], [357, 1], [378, 1], [387, 1], [388, 1], [389, 1], [390, 1], [391, 1]]],
	[0, 0, [], [[194, 1], [204, 1], [218, 0], [52, 1], [258, 1], [270, 1], [277, 1], [346, 1]]],
	[3, 4, [], []],
	[0, 229, [], [[37, 1], [38, 1], [69, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 178, [[181, 3], [226, 3], [395, 3]], [[131, 1]]],
	[0, 79, [[215, 3]], [[414, 0]]],
	[0, 178, [[224, 3], [229, 3]], []],
	[3, 4, [], []],
	[0, 224, [], [[34, 1], [41, 1], [97, 1]]],
	[0, 41, [[296, 1], [300, 1]], []],
	[0, 42, [[355, 1]], [[160, 0], [33, 1], [371, 1], [417, 1]]],
	[3, 4, [], []],
	[0, 220, [[298, 1]], [[161, 1], [196, 1], [56, 1]]],
	[0, 0, [[234, 1], [405, 1]], [[44, 0], [320, 1], [94, 1], [128, 1], [143, 1]]],
	[0, 13, [], [[95, 0], [144, 0], [147, 0], [148, 0], [149, 0], [150, 0]]],
	[3, 4, [], []],
	[0, 21, [], [[28, 1], [236, 0]]],
	[0, 252, [[153, 2], [253, 3], [376, 1]], [[18, 1], [207, 1], [63, 1], [307, 0], [331, 1], [332, 1], [333, 1], [79, 1], [134, 1]]],
	[3, 11, [], []],
	[3, 11, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 252, [[217, 2]], []],
	[0, 0, [], [[158, 0], [241, 0]]],
	[0, 252, [[152, 1], [60, 3], [61, 0]], [[248, 0], [263, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 96, [[183, 2], [188, 3], [462, 1]], [[324, 1], [327, 1], [415, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 14, [], [[249, 0], [268, 0], [345, 1]]],
	[0, 14, [[232, 3], [365, 3], [379, 1]], [[48, 0], [269, 0]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 252, [], [[238, 1], [256, 1], [266, 0], [275, 1], [283, 1], [343, 1]]],
	[0, 138, [[281, 3]], []],
	[0, 106, [[202, 2]], [[244, 1], [274, 0]]],
	[0, 252, [], [[311, 1]]],
	[0, 43, [], [[12, 1], [259, 1], [271, 1], [278, 1], [62, 1], [288, 0], [347, 1], [90, 1]]],
	[3, 11, [], []],
	[0, 220, [], [[251, 1], [287, 1], [409, 1]]],
	[3, 4, [], []],
	[0, 0, [], [[31, 1], [113, 1]]],
	[3, 257, [], []],
	[3, 15, [], []],
	[3, 4, [], []],
	[0, 21, [], [[28, 1], [318, 0]]],
	[3, 4, [], []],
	[1, 174, [], [[421, 0]]],
	[1, 140, [], [[439, 0]]],
	[1, 140, [], [[447, 0]]],
	[1, 140, [], [[428, 0]]],
	[1, 145, [], [[422, 0]]],
	[1, 140, [], []],
	[1, 140, [], [[450, 0]]],
	[1, 145, [], [[424, 0]]],
	[1, 145, [], [[449, 0]]],
	[1, 145, [], [[423, 0]]],
	[1, 151, [], [[425, 0]]],
	[1, 140, [], []],
	[1, 140, [], [[446, 0]]],
	[1, 140, [], [[429, 0]]],
	[1, 151, [], [[427, 0]]],
	[1, 151, [], [[448, 0]]],
	[1, 140, [], [[426, 0]]],
	[1, 140, [], [[438, 0]]],
	[1, 168, [], [[443, 0]]],
	[1, 140, [], [[437, 0]]],
	[1, 140, [], [[436, 0]]],
	[1, 140, [], [[435, 0]]],
	[1, 140, [], [[434, 0]]],
	[1, 140, [], [[430, 0]]],
	[1, 140, [], [[433, 0]]],
	[1, 140, [], [[432, 0]]],
	[1, 140, [], [[431, 0]]],
	[1, 174, [], [[420, 0]]],
	[1, 140, [], []],
	[1, 168, [], [[442, 0]]],
	[1, 168, [], [[445, 0]]],
	[1, 168, [], [[444, 0]]],
	[1, 140, [], [[441, 0]]],
	[1, 140, [], [[440, 0]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 252, [[335, 3]], [[419, 0]]],
	[3, 4, [], []],
	[0, 127, [], []],
	[0, 79, [[212, 3], [393, 3], [407, 2]], [[412, 0]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 13, [], [[117, 1], [455, 0]]],
	[0, 96, [[184, 3], [264, 3], [351, 3], [399, 3]], [[416, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[1, 137, [], [[454, 1]]],
	[1, 4, [], [[73, 0]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 0, [], [[43, 1], [85, 1], [99, 1]]],
	[3, 4, [], []],
	[0, 43, [[330, 0], [362, 1]], [[8, 1], [11, 1], [19, 0], [47, 1], [363, 1]]],
	[0, 220, [], [[173, 1], [250, 1], [328, 1], [80, 1], [93, 1], [364, 1], [408, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 252, [[177, 3]], [[289, 1]]],
	[0, 42, [[356, 1], [385, 0]], [[72, 0], [74, 0], [372, 1], [380, 1], [114, 0], [384, 0]]],
	[3, 3, [], []],
	[3, 4, [], []],
	[3, 136, [], []],
	[0, 252, [[193, 3], [368, 3]], [[54, 1], [313, 0], [102, 1]]],
	[0, 252, [], [[190, 1], [317, 0], [453, 0]]],
	[3, 4, [], []],
	[0, 252, [[164, 3], [166, 0], [255, 2]], [[125, 1]]],
	[0, 252, [], [[157, 0]]],
	[0, 224, [], [[7, 1], [172, 1], [66, 1]]],
	[0, 225, [], [[71, 1]]],
	[0, 0, [], [[319, 1]]],
	[0, 0, [], [[174, 1], [199, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 0, [], [[65, 0]]],
	[0, 224, [], [[291, 1]]],
	[0, 224, [], [[70, 1]]],
	[0, 0, [], [[290, 0]]],
	[0, 0, [], [[64, 1]]],
	[0, 0, [], []],
	[0, 252, [], [[154, 1], [325, 0], [92, 1]]],
	[0, 0, [], []],
	[3, 4, [], []],
	[0, 41, [], []],
	[3, 4, [], []],
	[0, 224, [], [[201, 1], [27, 1], [101, 1], [122, 1]]],
	[0, 220, [[299, 1], [366, 2], [370, 2], [382, 2]], [[57, 1], [322, 1], [329, 1], [82, 1], [106, 1], [381, 1], [401, 1], [124, 1]]],
	[3, 204, [], []],
	[0, 178, [[211, 3]], [[339, 1], [145, 1]]],
	[0, 178, [[182, 3], [227, 3], [396, 3]], [[132, 1]]],
	[0, 138, [[170, 1], [185, 2]], [[418, 1]]],
	[0, 80, [[221, 3], [463, 2]], []],
	[0, 0, [], [[67, 0], [68, 0]]],
	[3, 4, [], []],
	[0, 178, [[214, 3], [394, 3]], [[130, 0], [145, 1]]],
	[0, 252, [], [[168, 1], [178, 0], [186, 0], [265, 1], [306, 1], [352, 1], [400, 1], [464, 1]]],
	[0, 13, [], [[116, 1]]],
	[0, 229, [], [[13, 1], [45, 1], [78, 1], [115, 1]]],
	[0, 5, [[213, 3], [321, 1], [402, 1]], [[413, 0]]],
	[3, 4, [], []],
	[0, 0, [], [[25, 1], [29, 1], [39, 1], [83, 1], [86, 1]]],
	[3, 4, [], []],
	[0, 21, [], [[28, 1]]],
	[1, 4, [], [[112, 1]]],
	[3, 4, [], []],
	[0, 0, [], [[111, 1]]],
	[1, 3, [], [[301, 1], [136, 0]]],
	[3, 4, [], []],
	[1, 256, [], [[302, 1], [137, 0]]],
	[0, 80, [[167, 2], [222, 3], [461, 1]], [[323, 1], [326, 1]]],
	[0, 122, [], []],
	[0, 21, [[16, 1], [24, 1], [233, 0], [46, 3], [59, 3], [84, 3], [119, 3]], [[359, 0], [361, 0], [460, 0]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[1, 108, [], [[163, 1], [261, 1], [273, 1], [280, 1], [349, 1]]],
	[0, 0, [[235, 2]], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[0, 0, [], [[9, 1], [17, 1], [21, 1], [22, 1], [32, 1], [89, 1], [110, 1], [127, 1]]],
	[3, 3, [], []],
	[0, 0, [], [[23, 1], [91, 1], [105, 1], [107, 1], [109, 1], [123, 1], [126, 1]]],
	[0, 0, [], [[14, 1], [76, 1], [81, 1], [118, 1], [146, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[3, 3, [], []]
], [
	['*', [1], 4],
	['*', [1], 4],
	['*', [1], 4],
	['*', [1], 4],
	['accessControl', [4], 0],
	['accessControl', [4], 0],
	['bufConf', [2], 0],
	['buffered', [2], 0],
	['bufOvfl', [2], 0],
	['bufReport', [2], 0],
	['bufTime', [3], 0],
	['bufTime', [3], 0],
	['c37_238', [2], 0],
	['certificate', [2], 0],
	['clock', [2], 0],
	['Communication', [34], 0],
	['configRef', [2], 0],
	['configVersion', [4], 0],
	['confRev', [3], 0],
	['confRev', [3], 0],
	['dataRef', [2], 0],
	['dataSet', [2], 0],
	['dataSet', [2], 0],
	['DataTypeTemplates', [50], 0],
	['dchg', [2], 0],
	['dchg', [2], 0],
	['deliveryConf', [2], 0],
	['desc', [4], 0],
	['dupd', [2], 0],
	['dupd', [2], 0],
	['encryption', [2], 0],
	['entryID', [2], 0],
	['fixedOffs', [2], 0],
	['fixedOffs', [2], 0],
	['fixLnInst', [2], 0],
	['fixPrefix', [2], 0],
	['ftp', [2], 0],
	['ftps', [2], 0],
	['gi', [2], 0],
	['goose', [2], 0],
	['goose', [2], 0],
	['gsse', [2], 0],
	['hsr', [2], 0],
	['id', [4], 0],
	['iec61850_9_3', [2], 0],
	['IED', [107], 0],
	['indexed', [2], 0],
	['inst', [4], 0],
	['intAddr', [4], 0],
	['intgPd', [3], 0],
	['ipv6', [2], 0],
	['ix', [3], 0],
	['ix', [3], 0],
	['ix', [3], 0],
	['ix', [3], 0],
	['kdaParticipant', [2], 0],
	['kdaParticipant', [2], 0],
	['kdc', [2], 0],
	['Line', [118], 0],
	['LN', [121], 0],
	['LN0', [260], 0],
	['logEna', [2], 0],
	['manufacturer', [4], 0],
	['max', [3], 0],
	['max', [3], 0],
	['maxBuf', [3], 0],
	['maxGo', [3], 0],
	['maxSv', [3], 0],
	['mms', [2], 0],
	['modify', [2], 0],
	['modify', [2], 0],
	['multicast', [2], 0],
	['mustUnderstand', [2], 0],
	['nofASDU', [3], 0],
	['noIctBinding', [2], 0],
	['none', [2], 0],
	['ord', [3], 0],
	['other', [2], 0],
	['owner', [4], 0],
	['owner', [2], 0],
	['password', [2], 0],
	['pdcTimeStamp', [2], 0],
	['period', [2], 0],
	['Process', [193], 0],
	['prp', [2], 0],
	['qchg', [2], 0],
	['qchg', [2], 0],
	['readLog', [2], 0],
	['reasonCode', [2], 0],
	['reasonCode', [2], 0],
	['refreshTime', [2], 0],
	['resvTms', [3], 0],
	['resvTms', [2], 0],
	['revision', [4], 0],
	['revision', [4], 0],
	['rGOOSE', [2], 0],
	['rGOOSE', [2], 0],
	['router', [2], 0],
	['rstp', [2], 0],
	['rSV', [2], 0],
	['rSV', [2], 0],
	['sAddr', [4], 0],
	['sAddr', [4], 0],
	['sAddr', [4], 0],
	['sampleRate', [2], 0],
	['samplesPerSec', [2], 0],
	['sampleSynchronized', [2], 0],
	['SCL', [261], 0],
	['security', [2], 0],
	['seqNum', [2], 0],
	['setToRO', [2], 0],
	['sGroup', [3], 0],
	['signature', [2], 0],
	['smpRate', [3], 0],
	['sntp', [2], 0],
	['source', [4], 0],
	['source', [4], 0],
	['strong', [2], 0],
	['Substation', [241], 0],
	['supportsLdName', [2], 0],
	['sv', [2], 0],
	['sv', [2], 0],
	['synchSourceId', [2], 0],
	['synchSrcId', [2], 0],
	['timeout', [3], 0],
	['timestamp', [2], 0],
	['timeStamp', [2], 0],
	['toolID', [4], 0],
	['transient', [2], 0],
	['type', [4], 0],
	['type', [4], 0],
	['type', [4], 0],
	['type', [4], 0],
	['type', [4], 0],
	['unbufReport', [2], 0],
	['unit', [4], 0],
	['unit', [4], 0],
	['unit', [4], 0],
	['unit', [4], 0],
	['unit', [4], 0],
	['valImport', [2], 0],
	['valImport', [2], 0],
	['version', [4], 0],
	['version', [4], 0],
	['virtual', [2], 0],
	['weak', [2], 0],
	['what', [4], 0],
	['when', [4], 0],
	['who', [4], 0],
	['why', [4], 0],
	['xferNumber', [3], 0],
	['AccessControl', [8], 0],
	['AccessPoint', [9], 0],
	['actSG', [284], 0],
	['Address', [12], 0],
	['Address', [12], 0],
	['apName', [10], 0],
	['apName', [10], 0],
	['apName', [10], 0],
	['appID', [135], 0],
	['appID', [221], 0],
	['apRef', [10], 0],
	['apRef', [10], 0],
	['Association', [16], 0],
	['associationID', [17], 0],
	['Authentication', [279], 0],
	['Bay', [23], 0],
	['bayName', [136], 0],
	['BDA', [24], 0],
	['BitRate', [25], 0],
	['bType', [22], 0],
	['bufMode', [280], 0],
	['bufTime', [221], 0],
	['cbName', [222], 0],
	['cbName', [26], 0],
	['cdc', [27], 0],
	['ClientLN', [30], 0],
	['cNodeName', [136], 0],
	['commonName', [262], 0],
	['ConductingEquipment', [35], 0],
	['ConductingEquipment', [35], 0],
	['ConductingEquipment', [35], 0],
	['ConductingEquipment', [35], 0],
	['ConductingEquipment', [35], 0],
	['ConnectedAP', [37], 0],
	['connectivityNode', [39], 0],
	['ConnectivityNode', [38], 0],
	['ConnectivityNode', [38], 0],
	['count', [45], 0],
	['count', [214], 0],
	['DA', [44], 0],
	['DAI', [46], 0],
	['DAI', [46], 0],
	['daName', [92], 0],
	['daName', [92], 0],
	['dataLabel', [221], 0],
	['DataSet', [48], 0],
	['datSet', [49], 0],
	['datSet', [221], 0],
	['DAType', [51], 0],
	['delivery', [234], 0],
	['DO', [52], 0],
	['DOI', [53], 0],
	['doName', [93], 0],
	['doName', [93], 0],
	['DOType', [70], 0],
	['engRight', [206], 0],
	['EnumType', [75], 0],
	['EnumVal', [76], 0],
	['EqFunction', [77], 0],
	['EqFunction', [77], 0],
	['EqFunction', [77], 0],
	['EqFunction', [77], 0],
	['EqFunction', [77], 0],
	['EqFunction', [77], 0],
	['EqSubFunction', [78], 0],
	['ExtRef', [88], 0],
	['fc', [90], 0],
	['fc', [90], 0],
	['FCDA', [89], 0],
	['Function', [94], 0],
	['Function', [94], 0],
	['Function', [94], 0],
	['Function', [94], 0],
	['GeneralEquipment', [95], 0],
	['GeneralEquipment', [95], 0],
	['GeneralEquipment', [95], 0],
	['GeneralEquipment', [95], 0],
	['GeneralEquipment', [95], 0],
	['GOOSESecurity', [29], 0],
	['GSE', [99], 0],
	['GSEControl', [100], 0],
	['Header', [103], 0],
	['History', [270], 0],
	['Hitem', [104], 0],
	['id', [105], 0],
	['idHierarchy', [263], 0],
	['iedName', [110], 0],
	['iedName', [108], 0],
	['iedName', [111], 0],
	['iedName', [108], 0],
	['iedName', [108], 0],
	['IEDName', [269], 0],
	['iedType', [15], 0],
	['iedType', [15], 0],
	['iedType', [15], 0],
	['Inputs', [112], 0],
	['inst', [115], 0],
	['inst', [124], 0],
	['intgPd', [221], 0],
	['intgPd', [221], 0],
	['IssuerName', [28], 0],
	['KDC', [113], 0],
	['kind', [18], 0],
	['LDevice', [114], 0],
	['ldInst', [116], 0],
	['ldInst', [115], 0],
	['ldInst', [115], 0],
	['ldInst', [115], 0],
	['ldInst', [115], 0],
	['ldInst', [115], 0],
	['ldInst', [115], 0],
	['ldName', [117], 0],
	['Line', [118], 0],
	['lineName', [136], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnClass', [123], 0],
	['lnInst', [125], 0],
	['lnInst', [125], 0],
	['lnInst', [124], 0],
	['lnInst', [124], 0],
	['lnInst', [124], 0],
	['lnInst', [124], 0],
	['LNode', [126], 0],
	['LNodeType', [128], 0],
	['lnType', [136], 0],
	['lnType', [136], 0],
	['Log', [129], 0],
	['LogControl', [130], 0],
	['logEna', [221], 0],
	['logName', [131], 0],
	['max', [277], 0],
	['max', [283], 0],
	['maxAttributes', [282], 0],
	['maxAttributes', [265], 0],
	['maxGOOSE', [266], 0],
	['maxReports', [267], 0],
	['maxSMV', [268], 0],
	['MaxTime', [71], 0],
	['McSecurity', [134], 0],
	['McSecurity', [134], 0],
	['McSecurity', [134], 0],
	['MinTime', [71], 0],
	['multiplier', [251], 0],
	['multiplier', [251], 0],
	['multiplier', [251], 0],
	['multiplier', [251], 0],
	['multiplier', [251], 0],
	['name', [15], 0],
	['name', [108], 0],
	['name', [10], 0],
	['name', [49], 0],
	['name', [26], 0],
	['name', [131], 0],
	['name', [47], 0],
	['name', [19], 0],
	['name', [19], 0],
	['name', [19], 0],
	['name', [47], 0],
	['name', [237], 0],
	['name', [136], 0],
	['nameLength', [281], 0],
	['nameStructure', [271], 0],
	['NeutralPoint', [245], 0],
	['nofASDU', [222], 0],
	['nomFreq', [290], 0],
	['nomFreq', [272], 0],
	['numOfSGs', [285], 0],
	['numPhases', [291], 0],
	['numPhases', [273], 0],
	['optFields', [221], 0],
	['optFields', [221], 0],
	['OptFields', [276], 0],
	['originalSclRelease', [209], 0],
	['originalSclRevision', [210], 0],
	['originalSclVersion', [211], 0],
	['P', [140], 0],
	['P', [167], 0],
	['pathName', [39], 0],
	['pDA', [92], 0],
	['pDO', [93], 0],
	['phase', [175], 0],
	['PhysConn', [176], 0],
	['pLN', [123], 0],
	['PowerTransformer', [179], 0],
	['prefix', [191], 0],
	['prefix', [191], 0],
	['prefix', [191], 0],
	['prefix', [191], 0],
	['prefix', [191], 0],
	['prefix', [191], 0],
	['prefix', [191], 0],
	['Private', [192], 0],
	['Process', [193], 0],
	['processName', [194], 0],
	['ProtNs', [196], 0],
	['ProtNs', [196], 0],
	['Protocol', [197], 0],
	['Protocol', [197], 0],
	['pServT', [223], 0],
	['redProt', [201], 0],
	['release', [209], 0],
	['ReportControl', [202], 0],
	['revision', [210], 0],
	['RptEnabled', [207], 0],
	['rptID', [135], 0],
	['rptID', [221], 0],
	['SampledValueControl', [208], 0],
	['SamplesPerSec', [286], 0],
	['SDI', [212], 0],
	['SDI', [212], 0],
	['SDO', [213], 0],
	['SecPerSamples', [287], 0],
	['securityEnable', [190], 0],
	['securityEnable', [190], 0],
	['serialNumber', [264], 0],
	['Server', [215], 0],
	['ServerAt', [216], 0],
	['Services', [219], 0],
	['Services', [219], 0],
	['serviceType', [223], 0],
	['SettingControl', [230], 0],
	['smpMod', [232], 0],
	['smpRate', [221], 0],
	['SmpRate', [288], 0],
	['SMV', [233], 0],
	['smvID', [135], 0],
	['SmvOpts', [278], 0],
	['SMVSecurity', [29], 0],
	['srcCBName', [26], 0],
	['srcLDInst', [115], 0],
	['srcLNClass', [123], 0],
	['srcLNInst', [124], 0],
	['srcPrefix', [191], 0],
	['SubEquipment', [238], 0],
	['SubEquipment', [238], 0],
	['SubEquipment', [238], 0],
	['SubFunction', [239], 0],
	['SubFunction', [239], 0],
	['Subject', [28], 0],
	['SubNetwork', [240], 0],
	['Substation', [241], 0],
	['substationName', [136], 0],
	['svID', [221], 0],
	['TapChanger', [244], 0],
	['Terminal', [245], 0],
	['Text', [246], 0],
	['Text', [246], 0],
	['TimeSyncProt', [247], 0],
	['TransformerWinding', [248], 0],
	['trgOps', [221], 0],
	['trgOps', [221], 0],
	['TrgOps', [250], 0],
	['type', [32], 0],
	['type', [180], 0],
	['type', [249], 0],
	['type', [97], 0],
	['type', [119], 0],
	['type', [195], 0],
	['type', [101], 0],
	['type', [289], 0],
	['type', [177], 0],
	['type', [199], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [198], 0],
	['type', [15], 0],
	['type', [136], 0],
	['type', [136], 0],
	['type', [275], 0],
	['type', [274], 0],
	['Val', [253], 0],
	['Val', [253], 0],
	['valKind', [254], 0],
	['valKind', [254], 0],
	['version', [211], 0],
	['Voltage', [258], 0],
	['Voltage', [258], 0],
	['VoltageLevel', [259], 0],
	['voltageLevelName', [136], 0]
]);