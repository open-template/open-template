var $_Module_Factory = function () {
  var $ = {
      name: '$',
      defaultElementNamespaceURI: 'http:\/\/www.iec.ch\/61850\/2003\/SCL',
      typeInfos: [{
              localName: 'TProtocol',
              typeName: 'tProtocol',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'NormalizedString',
                      type: 'value'
                  }, {
                      name: 'mustUnderstand',
                      required: true,
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'mustUnderstand'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TLDevice',
              typeName: 'tLDevice',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'ln0',
                      required: true,
                      elementName: 'LN0',
                      typeInfo: '.LN0'
                  }, {
                      name: 'ln',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'LN',
                      typeInfo: '.TLN'
                  }, {
                      name: 'accessControl',
                      elementName: 'AccessControl',
                      typeInfo: '.TAccessControl'
                  }, {
                      name: 'inst',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'inst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ldName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldName'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPPhysConn',
              typeName: 'tP_PhysConn',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'NormalizedString',
                      type: 'value'
                  }, {
                      name: 'type',
                      required: true,
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSettingControl',
              typeName: 'tSettingControl',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'numOfSGs',
                      required: true,
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'numOfSGs'
                      },
                      type: 'attribute'
                  }, {
                      name: 'actSG',
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'actSG'
                      },
                      type: 'attribute'
                  }, {
                      name: 'resvTms',
                      typeInfo: 'UnsignedShort',
                      attributeName: {
                          localPart: 'resvTms'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSMVsc',
              typeName: 'tSMVsc',
              baseTypeInfo: '.TServiceWithMax',
              propertyInfos: [{
                      name: 'delivery',
                      typeInfo: '.TSMVDeliveryEnum',
                      attributeName: {
                          localPart: 'delivery'
                      },
                      type: 'attribute'
                  }, {
                      name: 'deliveryConf',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'deliveryConf'
                      },
                      type: 'attribute'
                  }, {
                      name: 'sv',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'sv'
                      },
                      type: 'attribute'
                  }, {
                      name: 'rsv',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'rSV'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TDA',
              typeName: 'tDA',
              baseTypeInfo: '.TAbstractDataAttribute',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'protNs',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ProtNs',
                      typeInfo: '.TProtNs'
                  }, {
                      name: 'fc',
                      required: true,
                      typeInfo: '.TFCEnum',
                      attributeName: {
                          localPart: 'fc'
                      },
                      type: 'attribute'
                  }, {
                      name: 'dchg',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'dchg'
                      },
                      type: 'attribute'
                  }, {
                      name: 'qchg',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'qchg'
                      },
                      type: 'attribute'
                  }, {
                      name: 'dupd',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'dupd'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPVLANPRIORITY',
              typeName: 'tP_VLAN-PRIORITY',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TPSNTPPort',
              typeName: 'tP_SNTP-Port',
              baseTypeInfo: '.TPPort'
          }, {
              localName: 'TDOType',
              typeName: 'tDOType',
              baseTypeInfo: '.TIDNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'sdoOrDA',
                      minOccurs: 0,
                      collection: true,
                      elementTypeInfos: [{
                              elementName: 'SDO',
                              typeInfo: '.TSDO'
                          }, {
                              elementName: 'DA',
                              typeInfo: '.TDA'
                          }],
                      type: 'elements'
                  }, {
                      name: 'iedType',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'iedType'
                      },
                      type: 'attribute'
                  }, {
                      name: 'cdc',
                      required: true,
                      typeInfo: '.TPredefinedCDCEnum',
                      attributeName: {
                          localPart: 'cdc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSMV',
              typeName: 'tSMV',
              baseTypeInfo: '.TControlBlock',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }]
          }, {
              localName: 'TPIPIGMPv3Src',
              typeName: 'tP_IP-IGMPv3Src',
              baseTypeInfo: '.TPIPbase'
          }, {
              localName: 'TIED',
              typeName: 'tIED',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'services',
                      elementName: 'Services',
                      typeInfo: '.TServices'
                  }, {
                      name: 'accessPoint',
                      required: true,
                      collection: true,
                      elementName: 'AccessPoint',
                      typeInfo: '.TAccessPoint'
                  }, {
                      name: 'kdc',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'KDC',
                      typeInfo: '.TKDC'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'type',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'manufacturer',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'manufacturer'
                      },
                      type: 'attribute'
                  }, {
                      name: 'configVersion',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'configVersion'
                      },
                      type: 'attribute'
                  }, {
                      name: 'originalSclVersion',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'originalSclVersion'
                      },
                      type: 'attribute'
                  }, {
                      name: 'originalSclRevision',
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'originalSclRevision'
                      },
                      type: 'attribute'
                  }, {
                      name: 'originalSclRelease',
                      typeInfo: 'UnsignedByte',
                      attributeName: {
                          localPart: 'originalSclRelease'
                      },
                      type: 'attribute'
                  }, {
                      name: 'engRight',
                      typeInfo: '.TRightEnum',
                      attributeName: {
                          localPart: 'engRight'
                      },
                      type: 'attribute'
                  }, {
                      name: 'owner',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'owner'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TP',
              typeName: 'tP',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'NormalizedString',
                      type: 'value'
                  }, {
                      name: 'type',
                      required: true,
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TEqSubFunction',
              typeName: 'tEqSubFunction',
              baseTypeInfo: '.TAbstractEqFuncSubFunc',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }]
          }, {
              localName: 'TLogControl',
              typeName: 'tLogControl',
              baseTypeInfo: '.TControlWithTriggerOpt',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'ldInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'lnInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'logName',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'logName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'logEna',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'logEna'
                      },
                      type: 'attribute'
                  }, {
                      name: 'reasonCode',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'reasonCode'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bufTime',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'bufTime'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TTrgOps',
              typeName: 'tTrgOps',
              propertyInfos: [{
                      name: 'dchg',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'dchg'
                      },
                      type: 'attribute'
                  }, {
                      name: 'qchg',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'qchg'
                      },
                      type: 'attribute'
                  }, {
                      name: 'dupd',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'dupd'
                      },
                      type: 'attribute'
                  }, {
                      name: 'period',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'period'
                      },
                      type: 'attribute'
                  }, {
                      name: 'gi',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'gi'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSettingGroups',
              typeName: 'tSettingGroups',
              propertyInfos: [{
                      name: 'sgEdit',
                      elementName: 'SGEdit',
                      typeInfo: '.TSettingGroups.SGEdit'
                  }, {
                      name: 'confSG',
                      elementName: 'ConfSG',
                      typeInfo: '.TSettingGroups.ConfSG'
                  }]
          }, {
              localName: 'TPAPPID',
              typeName: 'tP_APPID',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TPMACAddress',
              typeName: 'tP_MAC-Address',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TControlWithIEDName',
              typeName: 'tControlWithIEDName',
              baseTypeInfo: '.TControl',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'iedName',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'IEDName',
                      typeInfo: '.TControlWithIEDName.IEDName'
                  }, {
                      name: 'confRev',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'confRev'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TLogSettings',
              typeName: 'tLogSettings',
              baseTypeInfo: '.TServiceSettings',
              propertyInfos: [{
                      name: 'logEna',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'logEna'
                      },
                      type: 'attribute'
                  }, {
                      name: 'trgOps',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'trgOps'
                      },
                      type: 'attribute'
                  }, {
                      name: 'intgPd',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'intgPd'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TCommunication',
              typeName: 'tCommunication',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'subNetwork',
                      required: true,
                      collection: true,
                      elementName: 'SubNetwork',
                      typeInfo: '.TSubNetwork'
                  }]
          }, {
              localName: 'TBDA',
              typeName: 'tBDA',
              baseTypeInfo: '.TAbstractDataAttribute',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }]
          }, {
              localName: 'TAbstractEqFuncSubFunc',
              typeName: 'tAbstractEqFuncSubFunc',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'generalEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'GeneralEquipment',
                      typeInfo: '.TGeneralEquipment'
                  }, {
                      name: 'eqSubFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EqSubFunction',
                      typeInfo: '.TEqSubFunction'
                  }, {
                      name: 'type',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPv6IGMPv3Src',
              typeName: 'tP_IPv6-IGMPv3Src',
              baseTypeInfo: '.TPIPv6Base'
          }, {
              localName: 'TFCDA',
              typeName: 'tFCDA',
              propertyInfos: [{
                      name: 'ldInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'lnInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'doName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'doName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'daName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'daName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'fc',
                      required: true,
                      typeInfo: '.TFCEnum',
                      attributeName: {
                          localPart: 'fc'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ix',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'ix'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TAssociation',
              typeName: 'tAssociation',
              propertyInfos: [{
                      name: 'kind',
                      required: true,
                      typeInfo: '.TAssociationKindEnum',
                      attributeName: {
                          localPart: 'kind'
                      },
                      type: 'attribute'
                  }, {
                      name: 'associationID',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'associationID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      required: true,
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnInst',
                      required: true,
                      attributeName: {
                          localPart: 'lnInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'iedName',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'iedName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ldInst',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'desc',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'desc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPUDPPort',
              typeName: 'tP_UDP-Port',
              baseTypeInfo: '.TPPort'
          }, {
              localName: 'TAbstractDataAttribute',
              typeName: 'tAbstractDataAttribute',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'val',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Val',
                      typeInfo: '.TVal'
                  }, {
                      name: 'name',
                      required: true,
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'sAddr',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'sAddr'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bType',
                      required: true,
                      typeInfo: '.TPredefinedBasicTypeEnum',
                      attributeName: {
                          localPart: 'bType'
                      },
                      type: 'attribute'
                  }, {
                      name: 'valKind',
                      typeInfo: '.TValKindEnum',
                      attributeName: {
                          localPart: 'valKind'
                      },
                      type: 'attribute'
                  }, {
                      name: 'type',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'count',
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'count'
                      },
                      type: 'attribute'
                  }, {
                      name: 'valImport',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'valImport'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TEnumType',
              typeName: 'tEnumType',
              baseTypeInfo: '.TIDNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'enumVal',
                      required: true,
                      collection: true,
                      elementName: 'EnumVal',
                      typeInfo: '.TEnumVal'
                  }]
          }, {
              localName: 'TFileHandling',
              typeName: 'tFileHandling',
              baseTypeInfo: '.TServiceYesNo',
              propertyInfos: [{
                      name: 'mms',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'mms'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ftp',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'ftp'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ftps',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'ftps'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TGSE',
              typeName: 'tGSE',
              baseTypeInfo: '.TControlBlock',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'minTime',
                      elementName: 'MinTime',
                      typeInfo: '.TDurationInMilliSec'
                  }, {
                      name: 'maxTime',
                      elementName: 'MaxTime',
                      typeInfo: '.TDurationInMilliSec'
                  }]
          }, {
              localName: 'THeader',
              typeName: 'tHeader',
              propertyInfos: [{
                      name: 'text',
                      elementName: 'Text',
                      typeInfo: '.TText'
                  }, {
                      name: 'history',
                      elementName: 'History',
                      typeInfo: '.THeader.History'
                  }, {
                      name: 'id',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'id'
                      },
                      type: 'attribute'
                  }, {
                      name: 'version',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'version'
                      },
                      type: 'attribute'
                  }, {
                      name: 'revision',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'revision'
                      },
                      type: 'attribute'
                  }, {
                      name: 'toolID',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'toolID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'nameStructure',
                      values: ['IEDName'],
                      attributeName: {
                          localPart: 'nameStructure'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSubNetwork',
              typeName: 'tSubNetwork',
              baseTypeInfo: '.TNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'bitRate',
                      elementName: 'BitRate',
                      typeInfo: '.TBitRateInMbPerSec'
                  }, {
                      name: 'connectedAP',
                      required: true,
                      collection: true,
                      elementName: 'ConnectedAP',
                      typeInfo: '.TConnectedAP'
                  }, {
                      name: 'type',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TBay',
              typeName: 'tBay',
              baseTypeInfo: '.TEquipmentContainer',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'conductingEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ConductingEquipment',
                      typeInfo: '.TConductingEquipment'
                  }, {
                      name: 'connectivityNode',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ConnectivityNode',
                      typeInfo: '.TConnectivityNode'
                  }, {
                      name: 'function',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Function',
                      typeInfo: '.TFunction'
                  }]
          }, {
              localName: 'TFunction',
              typeName: 'tFunction',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'subFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'SubFunction',
                      typeInfo: '.TSubFunction'
                  }, {
                      name: 'generalEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'GeneralEquipment',
                      typeInfo: '.TGeneralEquipment'
                  }, {
                      name: 'conductingEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ConductingEquipment',
                      typeInfo: '.TConductingEquipment'
                  }, {
                      name: 'type',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TControl',
              typeName: 'tControl',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'datSet',
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'datSet'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServiceYesNo',
              typeName: 'tServiceYesNo'
          }, {
              localName: 'TServiceConfReportControl',
              typeName: 'tServiceConfReportControl',
              baseTypeInfo: '.TServiceWithMax',
              propertyInfos: [{
                      name: 'bufMode',
                      values: ['unbuffered', 'buffered', 'both'],
                      attributeName: {
                          localPart: 'bufMode'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bufConf',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'bufConf'
                      },
                      type: 'attribute'
                  }, {
                      name: 'maxBuf',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'maxBuf'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPOSIAPInvoke',
              typeName: 'tP_OSI-AP-Invoke',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TEnumVal',
              typeName: 'tEnumVal',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'NormalizedString',
                      type: 'value'
                  }, {
                      name: 'ord',
                      required: true,
                      typeInfo: 'Int',
                      attributeName: {
                          localPart: 'ord'
                      },
                      type: 'attribute'
                  }, {
                      name: 'desc',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'desc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPSUBNET',
              typeName: 'tP_IP-SUBNET',
              baseTypeInfo: '.TPIPbase'
          }, {
              localName: 'TServiceWithMaxAndMaxAttributes',
              typeName: 'tServiceWithMaxAndMaxAttributes',
              baseTypeInfo: '.TServiceWithMax',
              propertyInfos: [{
                      name: 'maxAttributes',
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'maxAttributes'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TGeneralEquipmentContainer',
              typeName: 'tGeneralEquipmentContainer',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'generalEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'GeneralEquipment',
                      typeInfo: '.TGeneralEquipment'
                  }, {
                      name: 'function',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Function',
                      typeInfo: '.TFunction'
                  }]
          }, {
              localName: 'TPowerTransformer',
              typeName: 'tPowerTransformer',
              baseTypeInfo: '.TEquipment',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'transformerWinding',
                      required: true,
                      collection: true,
                      elementName: 'TransformerWinding',
                      typeInfo: '.TTransformerWinding'
                  }, {
                      name: 'subEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'SubEquipment',
                      typeInfo: '.TSubEquipment'
                  }, {
                      name: 'eqFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EqFunction',
                      typeInfo: '.TEqFunction'
                  }, {
                      name: 'type',
                      required: true,
                      typeInfo: '.TPowerTransformerEnum',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPOSITSEL',
              typeName: 'tP_OSI-TSEL',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TServices',
              typeName: 'tServices',
              propertyInfos: [{
                      name: 'dynAssociation',
                      elementName: 'DynAssociation',
                      typeInfo: '.TServiceWithOptionalMax'
                  }, {
                      name: 'settingGroups',
                      elementName: 'SettingGroups',
                      typeInfo: '.TSettingGroups'
                  }, {
                      name: 'getDirectory',
                      elementName: 'GetDirectory',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'getDataObjectDefinition',
                      elementName: 'GetDataObjectDefinition',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'dataObjectDirectory',
                      elementName: 'DataObjectDirectory',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'getDataSetValue',
                      elementName: 'GetDataSetValue',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'setDataSetValue',
                      elementName: 'SetDataSetValue',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'dataSetDirectory',
                      elementName: 'DataSetDirectory',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'confDataSet',
                      elementName: 'ConfDataSet',
                      typeInfo: '.TServiceForConfDataSet'
                  }, {
                      name: 'dynDataSet',
                      elementName: 'DynDataSet',
                      typeInfo: '.TServiceWithMaxAndMaxAttributes'
                  }, {
                      name: 'readWrite',
                      elementName: 'ReadWrite',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'timerActivatedControl',
                      elementName: 'TimerActivatedControl',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'confReportControl',
                      elementName: 'ConfReportControl',
                      typeInfo: '.TServiceConfReportControl'
                  }, {
                      name: 'getCBValues',
                      elementName: 'GetCBValues',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'confLogControl',
                      elementName: 'ConfLogControl',
                      typeInfo: '.TServiceWithMaxNonZero'
                  }, {
                      name: 'reportSettings',
                      elementName: 'ReportSettings',
                      typeInfo: '.TReportSettings'
                  }, {
                      name: 'logSettings',
                      elementName: 'LogSettings',
                      typeInfo: '.TLogSettings'
                  }, {
                      name: 'gseSettings',
                      elementName: 'GSESettings',
                      typeInfo: '.TGSESettings'
                  }, {
                      name: 'smvSettings',
                      elementName: 'SMVSettings',
                      typeInfo: '.TSMVSettings'
                  }, {
                      name: 'gseDir',
                      elementName: 'GSEDir',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'goose',
                      elementName: 'GOOSE',
                      typeInfo: '.TGOOSEcapabilities'
                  }, {
                      name: 'gsse',
                      elementName: 'GSSE',
                      typeInfo: '.TServiceWithMax'
                  }, {
                      name: 'smVsc',
                      elementName: 'SMVsc',
                      typeInfo: '.TSMVsc'
                  }, {
                      name: 'fileHandling',
                      elementName: 'FileHandling',
                      typeInfo: '.TFileHandling'
                  }, {
                      name: 'confLNs',
                      elementName: 'ConfLNs',
                      typeInfo: '.TConfLNs'
                  }, {
                      name: 'clientServices',
                      elementName: 'ClientServices',
                      typeInfo: '.TClientServices'
                  }, {
                      name: 'confLdName',
                      elementName: 'ConfLdName',
                      typeInfo: '.TServiceYesNo'
                  }, {
                      name: 'supSubscription',
                      elementName: 'SupSubscription',
                      typeInfo: '.TSupSubscription'
                  }, {
                      name: 'confSigRef',
                      elementName: 'ConfSigRef',
                      typeInfo: '.TServiceWithMaxNonZero'
                  }, {
                      name: 'valueHandling',
                      elementName: 'ValueHandling',
                      typeInfo: '.TValueHandling'
                  }, {
                      name: 'redProt',
                      elementName: 'RedProt',
                      typeInfo: '.TRedProt'
                  }, {
                      name: 'timeSyncProt',
                      elementName: 'TimeSyncProt',
                      typeInfo: '.TTimeSyncProt'
                  }, {
                      name: 'commProt',
                      elementName: 'CommProt',
                      typeInfo: '.TCommProt'
                  }, {
                      name: 'nameLength',
                      attributeName: {
                          localPart: 'nameLength'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServiceWithMax',
              typeName: 'tServiceWithMax',
              propertyInfos: [{
                      name: 'max',
                      required: true,
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'max'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPPort',
              typeName: 'tP_Port',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TLine',
              typeName: 'tLine',
              baseTypeInfo: '.TGeneralEquipmentContainer',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'voltage',
                      elementName: 'Voltage',
                      typeInfo: '.TVoltage'
                  }, {
                      name: 'conductingEquipment',
                      required: true,
                      collection: true,
                      elementName: 'ConductingEquipment',
                      typeInfo: '.TConductingEquipment'
                  }, {
                      name: 'connectivityNode',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ConnectivityNode',
                      typeInfo: '.TConnectivityNode'
                  }, {
                      name: 'type',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'nomFreq',
                      typeInfo: 'Decimal',
                      attributeName: {
                          localPart: 'nomFreq'
                      },
                      type: 'attribute'
                  }, {
                      name: 'numPhases',
                      typeInfo: 'Short',
                      attributeName: {
                          localPart: 'numPhases'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPowerSystemResource',
              typeName: 'tPowerSystemResource',
              baseTypeInfo: '.TLNodeContainer',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }]
          }, {
              localName: 'TServiceWithMaxAndModify',
              typeName: 'tServiceWithMaxAndModify',
              baseTypeInfo: '.TServiceWithMax',
              propertyInfos: [{
                      name: 'modify',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'modify'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TProcess',
              typeName: 'tProcess',
              baseTypeInfo: '.TGeneralEquipmentContainer',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'conductingEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ConductingEquipment',
                      typeInfo: '.TConductingEquipment'
                  }, {
                      name: 'substation',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Substation',
                      typeInfo: '.TSubstation'
                  }, {
                      name: 'line',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Line',
                      typeInfo: '.TLine'
                  }, {
                      name: 'process',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Process',
                      typeInfo: '.TProcess'
                  }, {
                      name: 'type',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TValueHandling',
              typeName: 'tValueHandling',
              propertyInfos: [{
                      name: 'setToRO',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'setToRO'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServer',
              typeName: 'tServer',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'authentication',
                      required: true,
                      elementName: 'Authentication',
                      typeInfo: '.TServer.Authentication'
                  }, {
                      name: 'lDevice',
                      required: true,
                      collection: true,
                      elementName: 'LDevice',
                      typeInfo: '.TLDevice'
                  }, {
                      name: 'association',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Association',
                      typeInfo: '.TAssociation'
                  }, {
                      name: 'timeout',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'timeout'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TRedProt',
              typeName: 'tRedProt',
              propertyInfos: [{
                      name: 'hsr',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'hsr'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prp',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'prp'
                      },
                      type: 'attribute'
                  }, {
                      name: 'rstp',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'rstp'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TClientServices',
              typeName: 'tClientServices',
              propertyInfos: [{
                      name: 'timeSyncProt',
                      elementName: 'TimeSyncProt',
                      typeInfo: '.TTimeSyncProt'
                  }, {
                      name: 'mcSecurity',
                      elementName: 'McSecurity',
                      typeInfo: '.TMcSecurity'
                  }, {
                      name: 'goose',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'goose'
                      },
                      type: 'attribute'
                  }, {
                      name: 'gsse',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'gsse'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bufReport',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'bufReport'
                      },
                      type: 'attribute'
                  }, {
                      name: 'unbufReport',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'unbufReport'
                      },
                      type: 'attribute'
                  }, {
                      name: 'readLog',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'readLog'
                      },
                      type: 'attribute'
                  }, {
                      name: 'sv',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'sv'
                      },
                      type: 'attribute'
                  }, {
                      name: 'supportsLdName',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'supportsLdName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'maxAttributes',
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'maxAttributes'
                      },
                      type: 'attribute'
                  }, {
                      name: 'maxReports',
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'maxReports'
                      },
                      type: 'attribute'
                  }, {
                      name: 'maxGOOSE',
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'maxGOOSE'
                      },
                      type: 'attribute'
                  }, {
                      name: 'maxSMV',
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'maxSMV'
                      },
                      type: 'attribute'
                  }, {
                      name: 'rgoose',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'rGOOSE'
                      },
                      type: 'attribute'
                  }, {
                      name: 'rsv',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'rSV'
                      },
                      type: 'attribute'
                  }, {
                      name: 'noIctBinding',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'noIctBinding'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPOSIAPTitle',
              typeName: 'tP_OSI-AP-Title',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TBaseElement',
              typeName: 'tBaseElement',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'any',
                      minOccurs: 0,
                      collection: true,
                      mixed: false,
                      type: 'anyElement'
                  }, {
                      name: 'text',
                      elementName: 'Text',
                      typeInfo: '.TText'
                  }, {
                      name: 'private',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Private',
                      typeInfo: '.TPrivate'
                  }]
          }, {
              localName: 'TEquipmentContainer',
              typeName: 'tEquipmentContainer',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'powerTransformer',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'PowerTransformer',
                      typeInfo: '.TPowerTransformer'
                  }, {
                      name: 'generalEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'GeneralEquipment',
                      typeInfo: '.TGeneralEquipment'
                  }]
          }, {
              localName: 'TGSEControl',
              typeName: 'tGSEControl',
              baseTypeInfo: '.TControlWithIEDName',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'protocol',
                      elementName: 'Protocol',
                      typeInfo: '.TProtocol'
                  }, {
                      name: 'type',
                      typeInfo: '.TGSEControlTypeEnum',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'appID',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'appID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'fixedOffs',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'fixedOffs'
                      },
                      type: 'attribute'
                  }, {
                      name: 'securityEnable',
                      typeInfo: '.TPredefinedTypeOfSecurityEnum',
                      attributeName: {
                          localPart: 'securityEnable'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TAbstractConductingEquipment',
              typeName: 'tAbstractConductingEquipment',
              baseTypeInfo: '.TEquipment',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'terminal',
                      minOccurs: 0,
                      maxOccurs: 2,
                      collection: true,
                      elementName: 'Terminal',
                      typeInfo: '.TTerminal'
                  }, {
                      name: 'subEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'SubEquipment',
                      typeInfo: '.TSubEquipment'
                  }]
          }, {
              localName: 'TDOI',
              typeName: 'tDOI',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'sdiOrDAI',
                      minOccurs: 0,
                      collection: true,
                      elementTypeInfos: [{
                              elementName: 'SDI',
                              typeInfo: '.TSDI'
                          }, {
                              elementName: 'DAI',
                              typeInfo: '.TDAI'
                          }],
                      type: 'elements'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ix',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'ix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'accessControl',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'accessControl'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPGATEWAY',
              typeName: 'tP_IP-GATEWAY',
              baseTypeInfo: '.TPIPbase'
          }, {
              localName: 'TIDNaming',
              typeName: 'tIDNaming',
              baseTypeInfo: '.TBaseElement',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'id',
                      required: true,
                      typeInfo: 'Token',
                      attributeName: {
                          localPart: 'id'
                      },
                      type: 'attribute'
                  }, {
                      name: 'desc',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'desc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPOSIAEInvoke',
              typeName: 'tP_OSI-AE-Invoke',
              baseTypeInfo: '.TP'
          }, {
              localName: 'SCL',
              typeName: null,
              baseTypeInfo: '.TBaseElement',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'header',
                      required: true,
                      elementName: 'Header',
                      typeInfo: '.THeader'
                  }, {
                      name: 'substation',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Substation',
                      typeInfo: '.TSubstation'
                  }, {
                      name: 'communication',
                      elementName: 'Communication',
                      typeInfo: '.TCommunication'
                  }, {
                      name: 'ied',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'IED',
                      typeInfo: '.TIED'
                  }, {
                      name: 'dataTypeTemplates',
                      elementName: 'DataTypeTemplates',
                      typeInfo: '.TDataTypeTemplates'
                  }, {
                      name: 'line',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Line',
                      typeInfo: '.TLine'
                  }, {
                      name: 'process',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Process',
                      typeInfo: '.TProcess'
                  }, {
                      name: 'version',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'version'
                      },
                      type: 'attribute'
                  }, {
                      name: 'revision',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'revision'
                      },
                      type: 'attribute'
                  }, {
                      name: 'release',
                      required: true,
                      typeInfo: 'UnsignedByte',
                      attributeName: {
                          localPart: 'release'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TReportControl.OptFields',
              typeName: null,
              propertyInfos: [{
                      name: 'seqNum',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'seqNum'
                      },
                      type: 'attribute'
                  }, {
                      name: 'timeStamp',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'timeStamp'
                      },
                      type: 'attribute'
                  }, {
                      name: 'dataSet',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'dataSet'
                      },
                      type: 'attribute'
                  }, {
                      name: 'reasonCode',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'reasonCode'
                      },
                      type: 'attribute'
                  }, {
                      name: 'dataRef',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'dataRef'
                      },
                      type: 'attribute'
                  }, {
                      name: 'entryID',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'entryID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'configRef',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'configRef'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bufOvfl',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'bufOvfl'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPVLANID',
              typeName: 'tP_VLAN-ID',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TAccessPoint',
              typeName: 'tAccessPoint',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'server',
                      required: true,
                      elementName: 'Server',
                      typeInfo: '.TServer'
                  }, {
                      name: 'ln',
                      required: true,
                      collection: true,
                      elementName: 'LN',
                      typeInfo: '.TLN'
                  }, {
                      name: 'serverAt',
                      required: true,
                      elementName: 'ServerAt',
                      typeInfo: '.TServerAt'
                  }, {
                      name: 'services',
                      elementName: 'Services',
                      typeInfo: '.TServices'
                  }, {
                      name: 'gooseSecurity',
                      minOccurs: 0,
                      maxOccurs: 7,
                      collection: true,
                      elementName: 'GOOSESecurity',
                      typeInfo: '.TCertificate'
                  }, {
                      name: 'smvSecurity',
                      minOccurs: 0,
                      maxOccurs: 7,
                      collection: true,
                      elementName: 'SMVSecurity',
                      typeInfo: '.TCertificate'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'router',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'router'
                      },
                      type: 'attribute'
                  }, {
                      name: 'clock',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'clock'
                      },
                      type: 'attribute'
                  }, {
                      name: 'kdc',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'kdc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TExtRef',
              typeName: 'tExtRef',
              propertyInfos: [{
                      name: 'iedName',
                      attributeName: {
                          localPart: 'iedName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ldInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'lnInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'doName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'doName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'daName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'daName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'intAddr',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'intAddr'
                      },
                      type: 'attribute'
                  }, {
                      name: 'serviceType',
                      typeInfo: '.TServiceType',
                      attributeName: {
                          localPart: 'serviceType'
                      },
                      type: 'attribute'
                  }, {
                      name: 'srcLDInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'srcLDInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'srcPrefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'srcPrefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'srcLNClass',
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'srcLNClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'srcLNInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'srcLNInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'srcCBName',
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'srcCBName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'pServT',
                      typeInfo: '.TServiceType',
                      attributeName: {
                          localPart: 'pServT'
                      },
                      type: 'attribute'
                  }, {
                      name: 'pln',
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'pLN'
                      },
                      type: 'attribute'
                  }, {
                      name: 'pdo',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'pDO'
                      },
                      type: 'attribute'
                  }, {
                      name: 'pda',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'pDA'
                      },
                      type: 'attribute'
                  }, {
                      name: 'desc',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'desc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TClientLN',
              typeName: 'tClientLN',
              propertyInfos: [{
                      name: 'apRef',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'apRef'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      required: true,
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnInst',
                      required: true,
                      attributeName: {
                          localPart: 'lnInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'iedName',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'iedName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ldInst',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'desc',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'desc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServiceWithMaxNonZero',
              typeName: 'tServiceWithMaxNonZero',
              propertyInfos: [{
                      name: 'max',
                      required: true,
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'max'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TGOOSEcapabilities',
              typeName: 'tGOOSEcapabilities',
              baseTypeInfo: '.TServiceWithMax',
              propertyInfos: [{
                      name: 'fixedOffs',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'fixedOffs'
                      },
                      type: 'attribute'
                  }, {
                      name: 'goose',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'goose'
                      },
                      type: 'attribute'
                  }, {
                      name: 'rgoose',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'rGOOSE'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TVal',
              typeName: 'tVal',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'NormalizedString',
                      type: 'value'
                  }, {
                      name: 'sGroup',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'sGroup'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPv6FlowLabel',
              typeName: 'tP_IPv6FlowLabel',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TLNodeContainer',
              typeName: 'tLNodeContainer',
              baseTypeInfo: '.TNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'lNode',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'LNode',
                      typeInfo: '.TLNode'
                  }]
          }, {
              localName: 'TVoltage',
              typeName: 'tVoltage',
              baseTypeInfo: '.TValueWithUnit'
          }, {
              localName: 'TUnNaming',
              typeName: 'tUnNaming',
              baseTypeInfo: '.TBaseElement',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'desc',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'desc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TGeneralEquipment',
              typeName: 'tGeneralEquipment',
              baseTypeInfo: '.TEquipment',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'eqFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EqFunction',
                      typeInfo: '.TEqFunction'
                  }, {
                      name: 'type',
                      required: true,
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TKDC',
              typeName: 'tKDC',
              propertyInfos: [{
                      name: 'iedName',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'iedName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'apName',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'apName'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSubEquipment',
              typeName: 'tSubEquipment',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'eqFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EqFunction',
                      typeInfo: '.TEqFunction'
                  }, {
                      name: 'phase',
                      typeInfo: '.TPhaseEnum',
                      attributeName: {
                          localPart: 'phase'
                      },
                      type: 'attribute'
                  }, {
                      name: 'virtual',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'virtual'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSettingGroups.ConfSG',
              typeName: null,
              baseTypeInfo: '.TServiceYesNo',
              propertyInfos: [{
                      name: 'resvTms',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'resvTms'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TLNode',
              typeName: 'tLNode',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'iedName',
                      attributeName: {
                          localPart: 'iedName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ldInst',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      required: true,
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnInst',
                      attributeName: {
                          localPart: 'lnInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnType',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'lnType'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServer.Authentication',
              typeName: null,
              propertyInfos: [{
                      name: 'none',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'none'
                      },
                      type: 'attribute'
                  }, {
                      name: 'password',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'password'
                      },
                      type: 'attribute'
                  }, {
                      name: 'weak',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'weak'
                      },
                      type: 'attribute'
                  }, {
                      name: 'strong',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'strong'
                      },
                      type: 'attribute'
                  }, {
                      name: 'certificate',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'certificate'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TControlWithTriggerOpt',
              typeName: 'tControlWithTriggerOpt',
              baseTypeInfo: '.TControl',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'trgOps',
                      elementName: 'TrgOps',
                      typeInfo: '.TTrgOps'
                  }, {
                      name: 'intgPd',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'intgPd'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPrivate',
              typeName: 'tPrivate',
              baseTypeInfo: '.TAnyContentFromOtherNamespace',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'type',
                      required: true,
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'source',
                      attributeName: {
                          localPart: 'source'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TInputs',
              typeName: 'tInputs',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'extRef',
                      required: true,
                      collection: true,
                      elementName: 'ExtRef',
                      typeInfo: '.TExtRef'
                  }]
          }, {
              localName: 'TConfLNs',
              typeName: 'tConfLNs',
              propertyInfos: [{
                      name: 'fixPrefix',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'fixPrefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'fixLnInst',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'fixLnInst'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TRptEnabled',
              typeName: 'tRptEnabled',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'clientLN',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ClientLN',
                      typeInfo: '.TClientLN'
                  }, {
                      name: 'max',
                      typeInfo: 'Long',
                      attributeName: {
                          localPart: 'max'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSDI',
              typeName: 'tSDI',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'sdiOrDAI',
                      minOccurs: 0,
                      collection: true,
                      elementTypeInfos: [{
                              elementName: 'SDI',
                              typeInfo: '.TSDI'
                          }, {
                              elementName: 'DAI',
                              typeInfo: '.TDAI'
                          }],
                      type: 'elements'
                  }, {
                      name: 'name',
                      required: true,
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ix',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'ix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'sAddr',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'sAddr'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPhysConn',
              typeName: 'tPhysConn',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'p',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'P',
                      typeInfo: '.TPPhysConn'
                  }, {
                      name: 'type',
                      required: true,
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'THeader.History',
              typeName: null,
              propertyInfos: [{
                      name: 'hitem',
                      required: true,
                      collection: true,
                      elementName: 'Hitem',
                      typeInfo: '.THitem'
                  }]
          }, {
              localName: 'TPIPv6SUBNET',
              typeName: 'tP_IPv6-SUBNET',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TTerminal',
              typeName: 'tTerminal',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'name',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'connectivityNode',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'connectivityNode'
                      },
                      type: 'attribute'
                  }, {
                      name: 'processName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'processName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'substationName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'substationName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'voltageLevelName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'voltageLevelName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bayName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'bayName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'cNodeName',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'cNodeName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lineName',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'lineName'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TVoltageLevel',
              typeName: 'tVoltageLevel',
              baseTypeInfo: '.TEquipmentContainer',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'voltage',
                      elementName: 'Voltage',
                      typeInfo: '.TVoltage'
                  }, {
                      name: 'bay',
                      required: true,
                      collection: true,
                      elementName: 'Bay',
                      typeInfo: '.TBay'
                  }, {
                      name: 'function',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Function',
                      typeInfo: '.TFunction'
                  }, {
                      name: 'nomFreq',
                      typeInfo: 'Decimal',
                      attributeName: {
                          localPart: 'nomFreq'
                      },
                      type: 'attribute'
                  }, {
                      name: 'numPhases',
                      typeInfo: 'Short',
                      attributeName: {
                          localPart: 'numPhases'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TCert',
              typeName: 'tCert',
              propertyInfos: [{
                      name: 'commonName',
                      required: true,
                      attributeName: {
                          localPart: 'commonName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'idHierarchy',
                      required: true,
                      attributeName: {
                          localPart: 'idHierarchy'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServiceForConfDataSet',
              typeName: 'tServiceForConfDataSet',
              baseTypeInfo: '.TServiceWithMaxAndMaxAttributes',
              propertyInfos: [{
                      name: 'modify',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'modify'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSupSubscription',
              typeName: 'tSupSubscription',
              propertyInfos: [{
                      name: 'maxGo',
                      required: true,
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'maxGo'
                      },
                      type: 'attribute'
                  }, {
                      name: 'maxSv',
                      required: true,
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'maxSv'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TProtNs',
              typeName: 'tProtNs',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'NormalizedString',
                      type: 'value'
                  }, {
                      name: 'type',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TAddress',
              typeName: 'tAddress',
              propertyInfos: [{
                      name: 'p',
                      required: true,
                      collection: true,
                      elementName: 'P',
                      typeInfo: '.TP'
                  }]
          }, {
              localName: 'TDataSet',
              typeName: 'tDataSet',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'fcda',
                      required: true,
                      collection: true,
                      elementName: 'FCDA',
                      typeInfo: '.TFCDA'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TTapChanger',
              typeName: 'tTapChanger',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'subEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'SubEquipment',
                      typeInfo: '.TSubEquipment'
                  }, {
                      name: 'eqFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EqFunction',
                      typeInfo: '.TEqFunction'
                  }, {
                      name: 'type',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'virtual',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'virtual'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPv6',
              typeName: 'tP_IPv6',
              baseTypeInfo: '.TPIPv6Base'
          }, {
              localName: 'TEqFunction',
              typeName: 'tEqFunction',
              baseTypeInfo: '.TAbstractEqFuncSubFunc',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }]
          }, {
              localName: 'TCertificate',
              typeName: 'tCertificate',
              baseTypeInfo: '.TNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'subject',
                      required: true,
                      elementName: 'Subject',
                      typeInfo: '.TCert'
                  }, {
                      name: 'issuerName',
                      required: true,
                      elementName: 'IssuerName',
                      typeInfo: '.TCert'
                  }, {
                      name: 'xferNumber',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'xferNumber'
                      },
                      type: 'attribute'
                  }, {
                      name: 'serialNumber',
                      required: true,
                      attributeName: {
                          localPart: 'serialNumber'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TDAI',
              typeName: 'tDAI',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'val',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Val',
                      typeInfo: '.TVal'
                  }, {
                      name: 'name',
                      required: true,
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'sAddr',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'sAddr'
                      },
                      type: 'attribute'
                  }, {
                      name: 'valKind',
                      typeInfo: '.TValKindEnum',
                      attributeName: {
                          localPart: 'valKind'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ix',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'ix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'valImport',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'valImport'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TLog',
              typeName: 'tLog',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'name',
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TAnyLN',
              typeName: 'tAnyLN',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'dataSet',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'DataSet',
                      typeInfo: '.TDataSet'
                  }, {
                      name: 'reportControl',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ReportControl',
                      typeInfo: '.TReportControl'
                  }, {
                      name: 'logControl',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'LogControl',
                      typeInfo: '.TLogControl'
                  }, {
                      name: 'doi',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'DOI',
                      typeInfo: '.TDOI'
                  }, {
                      name: 'inputs',
                      elementName: 'Inputs',
                      typeInfo: '.TInputs'
                  }, {
                      name: 'log',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Log',
                      typeInfo: '.TLog'
                  }, {
                      name: 'lnType',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'lnType'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSMVSettings',
              typeName: 'tSMVSettings',
              baseTypeInfo: '.TServiceSettings',
              propertyInfos: [{
                      name: 'smpRateOrSamplesPerSecOrSecPerSamples',
                      required: true,
                      collection: true,
                      mixed: false,
                      allowDom: false,
                      elementTypeInfos: [{
                              elementName: 'SmpRate',
                              typeInfo: 'Long'
                          }, {
                              elementName: 'SamplesPerSec',
                              typeInfo: 'Long'
                          }, {
                              elementName: 'SecPerSamples',
                              typeInfo: 'Long'
                          }],
                      type: 'elementRefs'
                  }, {
                      name: 'mcSecurity',
                      elementName: 'McSecurity',
                      typeInfo: '.TMcSecurity'
                  }, {
                      name: 'svID',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'svID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'optFields',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'optFields'
                      },
                      type: 'attribute'
                  }, {
                      name: 'smpRate',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'smpRate'
                      },
                      type: 'attribute'
                  }, {
                      name: 'samplesPerSec',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'samplesPerSec'
                      },
                      type: 'attribute'
                  }, {
                      name: 'pdcTimeStamp',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'pdcTimeStamp'
                      },
                      type: 'attribute'
                  }, {
                      name: 'synchSrcId',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'synchSrcId'
                      },
                      type: 'attribute'
                  }, {
                      name: 'nofASDU',
                      typeInfo: '.TServiceSettingsNoDynEnum',
                      attributeName: {
                          localPart: 'nofASDU'
                      },
                      type: 'attribute'
                  }, {
                      name: 'kdaParticipant',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'kdaParticipant'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPv6GATEWAY',
              typeName: 'tP_IPv6-GATEWAY',
              baseTypeInfo: '.TPIPv6Base'
          }, {
              localName: 'TLNodeType',
              typeName: 'tLNodeType',
              baseTypeInfo: '.TIDNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: '_do',
                      required: true,
                      collection: true,
                      elementName: 'DO',
                      typeInfo: '.TDO'
                  }, {
                      name: 'iedType',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'iedType'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      required: true,
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSampledValueControl',
              typeName: 'tSampledValueControl',
              baseTypeInfo: '.TControlWithIEDName',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'smvOpts',
                      required: true,
                      elementName: 'SmvOpts',
                      typeInfo: '.TSampledValueControl.SmvOpts'
                  }, {
                      name: 'protocol',
                      elementName: 'Protocol',
                      typeInfo: '.TProtocol'
                  }, {
                      name: 'smvID',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'smvID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'multicast',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'multicast'
                      },
                      type: 'attribute'
                  }, {
                      name: 'smpRate',
                      required: true,
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'smpRate'
                      },
                      type: 'attribute'
                  }, {
                      name: 'nofASDU',
                      required: true,
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'nofASDU'
                      },
                      type: 'attribute'
                  }, {
                      name: 'smpMod',
                      typeInfo: '.TSmpMod',
                      attributeName: {
                          localPart: 'smpMod'
                      },
                      type: 'attribute'
                  }, {
                      name: 'securityEnable',
                      typeInfo: '.TPredefinedTypeOfSecurityEnum',
                      attributeName: {
                          localPart: 'securityEnable'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TText',
              typeName: 'tText',
              baseTypeInfo: '.TAnyContentFromOtherNamespace',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'source',
                      attributeName: {
                          localPart: 'source'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TValueWithUnit',
              typeName: 'tValueWithUnit',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'Decimal',
                      type: 'value'
                  }, {
                      name: 'unit',
                      required: true,
                      typeInfo: 'Token',
                      attributeName: {
                          localPart: 'unit'
                      },
                      type: 'attribute'
                  }, {
                      name: 'multiplier',
                      typeInfo: 'NormalizedString',
                      values: ['', 'm', 'k', 'M', 'mu', 'y', 'z', 'a', 'f', 'p', 'n', 'c', 'd', 'da', 'h', 'G', 'T', 'P', 'E', 'Z', 'Y'],
                      attributeName: {
                          localPart: 'multiplier'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPClassOfTraffic',
              typeName: 'tP_IP-ClassOfTraffic',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TLN',
              typeName: 'tLN',
              baseTypeInfo: '.TAnyLN',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      required: true,
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'inst',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'inst'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TConnectedAP',
              typeName: 'tConnectedAP',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'address',
                      elementName: 'Address',
                      typeInfo: '.TAddress'
                  }, {
                      name: 'gse',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'GSE',
                      typeInfo: '.TGSE'
                  }, {
                      name: 'smv',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'SMV',
                      typeInfo: '.TSMV'
                  }, {
                      name: 'physConn',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'PhysConn',
                      typeInfo: '.TPhysConn'
                  }, {
                      name: 'iedName',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'iedName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'apName',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'apName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'redProt',
                      typeInfo: '.TRedProtEnum',
                      attributeName: {
                          localPart: 'redProt'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSettingGroups.SGEdit',
              typeName: null,
              baseTypeInfo: '.TServiceYesNo',
              propertyInfos: [{
                      name: 'resvTms',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'resvTms'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPOSINSAP',
              typeName: 'tP_OSI-NSAP',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TDataTypeTemplates',
              typeName: 'tDataTypeTemplates',
              propertyInfos: [{
                      name: 'lNodeType',
                      required: true,
                      collection: true,
                      elementName: 'LNodeType',
                      typeInfo: '.TLNodeType'
                  }, {
                      name: 'doType',
                      required: true,
                      collection: true,
                      elementName: 'DOType',
                      typeInfo: '.TDOType'
                  }, {
                      name: 'daType',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'DAType',
                      typeInfo: '.TDAType'
                  }, {
                      name: 'enumType',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EnumType',
                      typeInfo: '.TEnumType'
                  }]
          }, {
              localName: 'THitem',
              typeName: 'tHitem',
              baseTypeInfo: '.TAnyContentFromOtherNamespace',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'version',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'version'
                      },
                      type: 'attribute'
                  }, {
                      name: 'revision',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'revision'
                      },
                      type: 'attribute'
                  }, {
                      name: 'when',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'when'
                      },
                      type: 'attribute'
                  }, {
                      name: 'who',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'who'
                      },
                      type: 'attribute'
                  }, {
                      name: 'what',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'what'
                      },
                      type: 'attribute'
                  }, {
                      name: 'why',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'why'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSubstation',
              typeName: 'tSubstation',
              baseTypeInfo: '.TEquipmentContainer',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'voltageLevel',
                      required: true,
                      collection: true,
                      elementName: 'VoltageLevel',
                      typeInfo: '.TVoltageLevel'
                  }, {
                      name: 'function',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'Function',
                      typeInfo: '.TFunction'
                  }]
          }, {
              localName: 'TConnectivityNode',
              typeName: 'tConnectivityNode',
              baseTypeInfo: '.TLNodeContainer',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'pathName',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'pathName'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TGSESettings',
              typeName: 'tGSESettings',
              baseTypeInfo: '.TServiceSettings',
              propertyInfos: [{
                      name: 'mcSecurity',
                      elementName: 'McSecurity',
                      typeInfo: '.TMcSecurity'
                  }, {
                      name: 'appID',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'appID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'dataLabel',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'dataLabel'
                      },
                      type: 'attribute'
                  }, {
                      name: 'kdaParticipant',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'kdaParticipant'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TBitRateInMbPerSec',
              typeName: 'tBitRateInMbPerSec',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'Decimal',
                      type: 'value'
                  }, {
                      name: 'unit',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'unit'
                      },
                      type: 'attribute'
                  }, {
                      name: 'multiplier',
                      typeInfo: 'NormalizedString',
                      values: ['', 'm', 'k', 'M', 'mu', 'y', 'z', 'a', 'f', 'p', 'n', 'c', 'd', 'da', 'h', 'G', 'T', 'P', 'E', 'Z', 'Y'],
                      attributeName: {
                          localPart: 'multiplier'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServiceWithOptionalMax',
              typeName: 'tServiceWithOptionalMax',
              propertyInfos: [{
                      name: 'max',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'max'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServerAt',
              typeName: 'tServerAt',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'apName',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'apName'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPDNSName',
              typeName: 'tP_DNSName',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TPOSIAEQualifier',
              typeName: 'tP_OSI-AE-Qualifier',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TPC37118IPPort',
              typeName: 'tP_C37-118-IP-Port',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TDAType',
              typeName: 'tDAType',
              baseTypeInfo: '.TIDNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'bda',
                      required: true,
                      collection: true,
                      elementName: 'BDA',
                      typeInfo: '.TBDA'
                  }, {
                      name: 'protNs',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ProtNs',
                      typeInfo: '.TProtNs'
                  }, {
                      name: 'iedType',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'iedType'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TAnyContentFromOtherNamespace',
              typeName: 'tAnyContentFromOtherNamespace',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'content',
                      collection: true,
                      type: 'anyElement'
                  }]
          }, {
              localName: 'TTransformerWinding',
              typeName: 'tTransformerWinding',
              baseTypeInfo: '.TAbstractConductingEquipment',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'tapChanger',
                      elementName: 'TapChanger',
                      typeInfo: '.TTapChanger'
                  }, {
                      name: 'neutralPoint',
                      elementName: 'NeutralPoint',
                      typeInfo: '.TTerminal'
                  }, {
                      name: 'eqFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EqFunction',
                      typeInfo: '.TEqFunction'
                  }, {
                      name: 'type',
                      required: true,
                      typeInfo: '.TTransformerWindingEnum',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TNaming',
              typeName: 'tNaming',
              baseTypeInfo: '.TBaseElement',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'desc',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'desc'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'LN0',
              typeName: null,
              baseTypeInfo: '.TLN0',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }]
          }, {
              localName: 'TControlBlock',
              typeName: 'tControlBlock',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'address',
                      elementName: 'Address',
                      typeInfo: '.TAddress'
                  }, {
                      name: 'ldInst',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'cbName',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'cbName'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TReportControl',
              typeName: 'tReportControl',
              baseTypeInfo: '.TControlWithTriggerOpt',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'optFields',
                      required: true,
                      elementName: 'OptFields',
                      typeInfo: '.TReportControl.OptFields'
                  }, {
                      name: 'rptEnabled',
                      elementName: 'RptEnabled',
                      typeInfo: '.TRptEnabled'
                  }, {
                      name: 'rptID',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'rptID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'confRev',
                      required: true,
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'confRev'
                      },
                      type: 'attribute'
                  }, {
                      name: 'buffered',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'buffered'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bufTime',
                      typeInfo: 'UnsignedInt',
                      attributeName: {
                          localPart: 'bufTime'
                      },
                      type: 'attribute'
                  }, {
                      name: 'indexed',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'indexed'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TAccessControl',
              typeName: 'tAccessControl',
              baseTypeInfo: '.TAnyContentFromOtherNamespace',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }]
          }, {
              localName: 'TPIPv6Base',
              typeName: 'tP_IPv6base',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TControlWithIEDName.IEDName',
              typeName: null,
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'Name',
                      type: 'value'
                  }, {
                      name: 'apRef',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'apRef'
                      },
                      type: 'attribute'
                  }, {
                      name: 'ldInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'ldInst'
                      },
                      type: 'attribute'
                  }, {
                      name: 'prefix',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'prefix'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnClass',
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'lnInst',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'lnInst'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TDurationInMilliSec',
              typeName: 'tDurationInMilliSec',
              propertyInfos: [{
                      name: 'value',
                      typeInfo: 'Decimal',
                      type: 'value'
                  }, {
                      name: 'unit',
                      typeInfo: 'Token',
                      attributeName: {
                          localPart: 'unit'
                      },
                      type: 'attribute'
                  }, {
                      name: 'multiplier',
                      typeInfo: 'NormalizedString',
                      values: ['', 'm', 'k', 'M', 'mu', 'y', 'z', 'a', 'f', 'p', 'n', 'c', 'd', 'da', 'h', 'G', 'T', 'P', 'E', 'Z', 'Y'],
                      attributeName: {
                          localPart: 'multiplier'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TLN0',
              typeName: 'tLN0',
              baseTypeInfo: '.TAnyLN',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'gseControl',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'GSEControl',
                      typeInfo: '.TGSEControl'
                  }, {
                      name: 'sampledValueControl',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'SampledValueControl',
                      typeInfo: '.TSampledValueControl'
                  }, {
                      name: 'settingControl',
                      elementName: 'SettingControl',
                      typeInfo: '.TSettingControl'
                  }, {
                      name: 'lnClass',
                      required: true,
                      typeInfo: {
                          type: 'list'
                      },
                      attributeName: {
                          localPart: 'lnClass'
                      },
                      type: 'attribute'
                  }, {
                      name: 'inst',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'inst'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPOSISSEL',
              typeName: 'tP_OSI-SSEL',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TSampledValueControl.SmvOpts',
              typeName: null,
              propertyInfos: [{
                      name: 'refreshTime',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'refreshTime'
                      },
                      type: 'attribute'
                  }, {
                      name: 'sampleSynchronized',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'sampleSynchronized'
                      },
                      type: 'attribute'
                  }, {
                      name: 'sampleRate',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'sampleRate'
                      },
                      type: 'attribute'
                  }, {
                      name: 'dataSet',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'dataSet'
                      },
                      type: 'attribute'
                  }, {
                      name: 'security',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'security'
                      },
                      type: 'attribute'
                  }, {
                      name: 'timestamp',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'timestamp'
                      },
                      type: 'attribute'
                  }, {
                      name: 'synchSourceId',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'synchSourceId'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPbase',
              typeName: 'tP_IPbase',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TPTCPPort',
              typeName: 'tP_TCP-Port',
              baseTypeInfo: '.TPPort'
          }, {
              localName: 'TDO',
              typeName: 'tDO',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'type',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'accessControl',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'accessControl'
                      },
                      type: 'attribute'
                  }, {
                      name: '_transient',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'transient'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TReportSettings',
              typeName: 'tReportSettings',
              baseTypeInfo: '.TServiceSettings',
              propertyInfos: [{
                      name: 'rptID',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'rptID'
                      },
                      type: 'attribute'
                  }, {
                      name: 'optFields',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'optFields'
                      },
                      type: 'attribute'
                  }, {
                      name: 'bufTime',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'bufTime'
                      },
                      type: 'attribute'
                  }, {
                      name: 'trgOps',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'trgOps'
                      },
                      type: 'attribute'
                  }, {
                      name: 'intgPd',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'intgPd'
                      },
                      type: 'attribute'
                  }, {
                      name: 'resvTms',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'resvTms'
                      },
                      type: 'attribute'
                  }, {
                      name: 'owner',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'owner'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSDO',
              typeName: 'tSDO',
              baseTypeInfo: '.TUnNaming',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'name',
                      required: true,
                      typeInfo: 'Name',
                      attributeName: {
                          localPart: 'name'
                      },
                      type: 'attribute'
                  }, {
                      name: 'type',
                      required: true,
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }, {
                      name: 'count',
                      attributeName: {
                          localPart: 'count'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TServiceSettings',
              typeName: 'tServiceSettings',
              propertyInfos: [{
                      name: 'cbName',
                      typeInfo: '.TServiceSettingsNoDynEnum',
                      attributeName: {
                          localPart: 'cbName'
                      },
                      type: 'attribute'
                  }, {
                      name: 'datSet',
                      typeInfo: '.TServiceSettingsEnum',
                      attributeName: {
                          localPart: 'datSet'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TCommProt',
              typeName: 'tCommProt',
              baseTypeInfo: '.TServiceYesNo',
              propertyInfos: [{
                      name: 'ipv6',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'ipv6'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TMcSecurity',
              typeName: 'tMcSecurity',
              propertyInfos: [{
                      name: 'signature',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'signature'
                      },
                      type: 'attribute'
                  }, {
                      name: 'encryption',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'encryption'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TTimeSyncProt',
              typeName: 'tTimeSyncProt',
              baseTypeInfo: '.TServiceYesNo',
              propertyInfos: [{
                      name: 'sntp',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'sntp'
                      },
                      type: 'attribute'
                  }, {
                      name: 'iec6185093',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'iec61850_9_3'
                      },
                      type: 'attribute'
                  }, {
                      name: 'c37238',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'c37_238'
                      },
                      type: 'attribute'
                  }, {
                      name: 'other',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'other'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TEquipment',
              typeName: 'tEquipment',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'virtual',
                      typeInfo: 'Boolean',
                      attributeName: {
                          localPart: 'virtual'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TSubFunction',
              typeName: 'tSubFunction',
              baseTypeInfo: '.TPowerSystemResource',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'generalEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'GeneralEquipment',
                      typeInfo: '.TGeneralEquipment'
                  }, {
                      name: 'conductingEquipment',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'ConductingEquipment',
                      typeInfo: '.TConductingEquipment'
                  }, {
                      name: 'subFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'SubFunction',
                      typeInfo: '.TSubFunction'
                  }, {
                      name: 'type',
                      typeInfo: 'NormalizedString',
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TDurationInSec',
              typeName: 'tDurationInSec',
              baseTypeInfo: '.TValueWithUnit'
          }, {
              localName: 'TConductingEquipment',
              typeName: 'tConductingEquipment',
              baseTypeInfo: '.TAbstractConductingEquipment',
              propertyInfos: [{
                      name: 'otherAttributes',
                      type: 'anyAttribute'
                  }, {
                      name: 'eqFunction',
                      minOccurs: 0,
                      collection: true,
                      elementName: 'EqFunction',
                      typeInfo: '.TEqFunction'
                  }, {
                      name: 'type',
                      required: true,
                      attributeName: {
                          localPart: 'type'
                      },
                      type: 'attribute'
                  }]
          }, {
              localName: 'TPIPv6ClassOfTraffic',
              typeName: 'tP_IPv6ClassOfTraffic',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TPIP',
              typeName: 'tP_IP',
              baseTypeInfo: '.TPIPbase'
          }, {
              localName: 'TPOSIPSEL',
              typeName: 'tP_OSI-PSEL',
              baseTypeInfo: '.TP'
          }, {
              localName: 'TPMMSPort',
              typeName: 'tP_MMS-Port',
              baseTypeInfo: '.TPPort'
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupAEnum',
              baseTypeInfo: 'Name',
              values: ['ANCR', 'ARCO', 'ARIS', 'ATCC', 'AVCO']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupSEnum',
              baseTypeInfo: 'Name',
              values: ['SARC', 'SCBR', 'SIMG', 'SIML', 'SLTC', 'SOPM', 'SPDC', 'SPTR', 'SSWI', 'STMP', 'SVBR']
          }, {
              type: 'enumInfo',
              localName: 'TFCEnum',
              baseTypeInfo: 'Name',
              values: ['ST', 'MX', 'CO', 'SP', 'SG', 'SE', 'SV', 'CF', 'DC', 'EX', 'SR', 'BL', 'OR']
          }, {
              type: 'enumInfo',
              localName: 'TLLN0Enum',
              baseTypeInfo: 'Name',
              values: ['LLN0']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedCommonConductingEquipmentEnum',
              baseTypeInfo: 'Name',
              values: ['CBR', 'DIS', 'VTR', 'CTR', 'GEN', 'CAP', 'REA', 'CON', 'MOT', 'EFN', 'PSH', 'BAT', 'BSH', 'CAB', 'GIL', 'LIN', 'RES', 'RRC', 'SAR', 'TCF', 'TCR', 'IFL', 'FAN', 'SCR', 'SMC', 'PMP']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupQEnum',
              baseTypeInfo: 'Name',
              values: ['QFVR', 'QITR', 'QIUB', 'QVTR', 'QVUB', 'QVVR']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupKEnum',
              baseTypeInfo: 'Name',
              values: ['KFAN', 'KFIL', 'KPMP', 'KTNK', 'KVLV']
          }, {
              type: 'enumInfo',
              localName: 'TGSEControlTypeEnum',
              baseTypeInfo: 'Name',
              values: ['GSSE', 'GOOSE']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedBasicTypeEnum',
              baseTypeInfo: 'Name',
              values: ['BOOLEAN', 'INT8', 'INT16', 'INT24', 'INT32', 'INT64', 'INT128', 'INT8U', 'INT16U', 'INT24U', 'INT32U', 'FLOAT32', 'FLOAT64', 'Enum', 'Dbpos', 'Tcmd', 'Quality', 'Timestamp', 'VisString32', 'VisString64', 'VisString65', 'VisString129', 'VisString255', 'Octet64', 'Unicode255', 'Struct', 'EntryTime', 'Check', 'ObjRef', 'Currency', 'PhyComAddr', 'TrgOps', 'OptFlds', 'SvOptFlds', 'LogOptFlds', 'EntryID', 'Octet6', 'Octet16']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupFEnum',
              baseTypeInfo: 'Name',
              values: ['FCNT', 'FCSD', 'FFIL', 'FLIM', 'FPID', 'FRMP', 'FSPT', 'FXOT', 'FXUT']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupTEnum',
              baseTypeInfo: 'Name',
              values: ['TANG', 'TAXD', 'TCTR', 'TDST', 'TFLW', 'TFRQ', 'TGSN', 'THUM', 'TLVL', 'TMGF', 'TMVM', 'TPOS', 'TPRS', 'TRTN', 'TSND', 'TTMP', 'TTNS', 'TVBR', 'TVTR', 'TWPH']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupGEnum',
              baseTypeInfo: 'Name',
              values: ['GAPC', 'GGIO', 'GLOG', 'GSAL']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupCEnum',
              baseTypeInfo: 'Name',
              values: ['CALH', 'CCGR', 'CILO', 'CPOW', 'CSWI', 'CSYN']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedCDCEnum',
              baseTypeInfo: 'Name',
              values: ['SPS', 'DPS', 'INS', 'ENS', 'ACT', 'ACD', 'SEC', 'BCR', 'HST', 'VSS', 'MV', 'CMV', 'SAV', 'WYE', 'DEL', 'SEQ', 'HMV', 'HWYE', 'HDEL', 'SPC', 'DPC', 'INC', 'ENC', 'BSC', 'ISC', 'APC', 'BAC', 'SPG', 'ING', 'ENG', 'ORG', 'TSG', 'CUG', 'VSG', 'ASG', 'CURVE', 'CSG', 'DPL', 'LPL', 'CSD', 'CST', 'BTS', 'UTS', 'LTS', 'GTS', 'MTS', 'NTS', 'STS', 'CTS', 'OTS', 'VSD', 'ORS', 'TCS']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupMEnum',
              baseTypeInfo: 'Name',
              values: ['MDIF', 'MENV', 'MFLK', 'MHAI', 'MHAN', 'MHYD', 'MMDC', 'MMET', 'MMTN', 'MMTR', 'MMXN', 'MMXU', 'MSQI', 'MSTA']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedTypeOfSecurityEnum',
              baseTypeInfo: 'NormalizedString',
              values: ['None', 'Signature', 'SignatureAndEncryption']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedPhysConnTypeEnum',
              baseTypeInfo: 'NormalizedString',
              values: ['Connection', 'RedConn']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupIEnum',
              baseTypeInfo: 'Name',
              values: ['IARC', 'IHMI', 'ISAF', 'ITCI', 'ITMI', 'ITPC']
          }, {
              type: 'enumInfo',
              localName: 'TAuthenticationEnum',
              baseTypeInfo: 'Name',
              values: ['none', 'password', 'weak', 'strong', 'certificate']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupREnum',
              baseTypeInfo: 'Name',
              values: ['RADR', 'RBDR', 'RBRF', 'RDIR', 'RDRE', 'RDRS', 'RFLO', 'RMXU', 'RPSB', 'RREC', 'RSYN']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedPTypeEnum',
              baseTypeInfo: 'Name',
              values: ['IP', 'IP-SUBNET', 'IP-GATEWAY', 'OSI-NSAP', 'OSI-TSEL', 'OSI-SSEL', 'OSI-PSEL', 'OSI-AP-Title', 'OSI-AP-Invoke', 'OSI-AE-Qualifier', 'OSI-AE-Invoke', 'MAC-Address', 'APPID', 'VLAN-PRIORITY', 'VLAN-ID', 'SNTP-Port', 'MMS-Port', 'DNSName', 'IPv6FlowLabel', 'IPv6ClassOfTraffic', 'C37-118-IP-Port', 'IP-UDP-PORT', 'IP-TCP-PORT', 'IPv6', 'IPv6-SUBNET', 'IPv6-GATEWAY', 'IPv6-IGMPv3Src', 'IP-IGMPv3Src', 'IP-ClassOfTraffic']
          }, {
              type: 'enumInfo',
              localName: 'TRedProtEnum',
              baseTypeInfo: 'Name',
              values: ['none', 'hsr', 'prp', 'rstp']
          }, {
              type: 'enumInfo',
              localName: 'TPowerTransformerEnum',
              baseTypeInfo: 'Name',
              values: ['PTR']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupPEnum',
              baseTypeInfo: 'Name',
              values: ['PDIF', 'PDIR', 'PDIS', 'PDOP', 'PDUP', 'PFRC', 'PHAR', 'PHIZ', 'PIOC', 'PMRI', 'PMSS', 'POPF', 'PPAM', 'PRTR', 'PSCH', 'PSDE', 'PTEF', 'PTHF', 'PTOC', 'PTOF', 'PTOV', 'PTRC', 'PTTR', 'PTUC', 'PTUF', 'PTUV', 'PUPF', 'PVOC', 'PVPH', 'PZSU']
          }, {
              type: 'enumInfo',
              localName: 'TRightEnum',
              baseTypeInfo: 'NormalizedString',
              values: ['full', 'fix', 'dataflow']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedGeneralEquipmentEnum',
              baseTypeInfo: 'Name',
              values: ['AXN', 'BAT', 'MOT', 'FAN', 'FIL', 'PMP', 'TNK', 'VLV']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupYEnum',
              baseTypeInfo: 'Name',
              values: ['YEFN', 'YLTC', 'YPSH', 'YPTR']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupZEnum',
              baseTypeInfo: 'Name',
              values: ['ZAXN', 'ZBAT', 'ZBSH', 'ZCAB', 'ZCAP', 'ZCON', 'ZGEN', 'ZGIL', 'ZLIN', 'ZMOT', 'ZREA', 'ZRES', 'ZRRC', 'ZSAR', 'ZSCR', 'ZSMC', 'ZTCF', 'ZTCR']
          }, {
              type: 'enumInfo',
              localName: 'TPhaseEnum',
              baseTypeInfo: 'Name',
              values: ['A', 'B', 'C', 'N', 'all', 'none', 'AB', 'BC', 'CA']
          }, {
              type: 'enumInfo',
              localName: 'TServiceType',
              baseTypeInfo: 'Name',
              values: ['Poll', 'Report', 'GOOSE', 'SMV']
          }, {
              type: 'enumInfo',
              localName: 'TLPHDEnum',
              baseTypeInfo: 'Name',
              values: ['LPHD']
          }, {
              type: 'enumInfo',
              localName: 'TDomainLNGroupXEnum',
              baseTypeInfo: 'Name',
              values: ['XCBR', 'XSWI']
          }, {
              type: 'enumInfo',
              localName: 'TSmpMod',
              baseTypeInfo: 'NormalizedString',
              values: ['SmpPerPeriod', 'SmpPerSec', 'SecPerSmp']
          }, {
              type: 'enumInfo',
              localName: 'TSystemLNGroupEnum',
              baseTypeInfo: 'Name',
              values: ['LLN0', 'LPHD', 'LCCH', 'LGOS', 'LSVS', 'LTIM', 'LTMS', 'LTRK']
          }, {
              type: 'enumInfo',
              localName: 'TSMVDeliveryEnum',
              baseTypeInfo: 'Name',
              values: ['unicast', 'multicast', 'both']
          }, {
              type: 'enumInfo',
              localName: 'TServiceSettingsEnum',
              baseTypeInfo: 'Name',
              values: ['Dyn', 'Conf', 'Fix']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedAttributeNameEnum',
              baseTypeInfo: 'Name',
              values: ['T', 'Test', 'Check', 'SIUnit', 'Oper', 'SBO', 'SBOw', 'Cancel', 'Addr', 'PRIORITY', 'VID', 'APPID', 'TransportInUse', 'IPClassOfTraffic', 'IPv6FlowLabel', 'IPAddressLength', 'IPAddress']
          }, {
              type: 'enumInfo',
              localName: 'TServiceSettingsNoDynEnum',
              baseTypeInfo: 'Name',
              values: ['Conf', 'Fix']
          }, {
              type: 'enumInfo',
              localName: 'TAssociationKindEnum',
              baseTypeInfo: 'Token',
              values: ['pre-established', 'predefined']
          }, {
              type: 'enumInfo',
              localName: 'TValKindEnum',
              baseTypeInfo: 'Name',
              values: ['Spec', 'Conf', 'RO', 'Set']
          }, {
              type: 'enumInfo',
              localName: 'TPredefinedPTypePhysConnEnum',
              baseTypeInfo: 'Name',
              values: ['Type', 'Plug', 'Cable', 'Port']
          }, {
              type: 'enumInfo',
              localName: 'TTransformerWindingEnum',
              baseTypeInfo: 'Name',
              values: ['PTW']
          }],
      elementInfos: [{
              typeInfo: '.TSubstation',
              elementName: 'Substation'
          }, {
              typeInfo: '.TProcess',
              elementName: 'Process'
          }, {
              typeInfo: 'Long',
              elementName: 'SecPerSamples',
              scope: '.TSMVSettings'
          }, {
              typeInfo: '.TDataTypeTemplates',
              elementName: 'DataTypeTemplates'
          }, {
              typeInfo: '.TIED',
              elementName: 'IED'
          }, {
              typeInfo: 'Long',
              elementName: 'SmpRate',
              scope: '.TSMVSettings'
          }, {
              typeInfo: 'Long',
              elementName: 'SamplesPerSec',
              scope: '.TSMVSettings'
          }, {
              typeInfo: '.TCommunication',
              elementName: 'Communication'
          }, {
              typeInfo: '.TLine',
              elementName: 'Line'
          }, {
              typeInfo: '.LN0',
              elementName: 'LN0'
          }, {
              typeInfo: '.SCL',
              elementName: 'SCL'
          }, {
              typeInfo: '.TLN',
              elementName: 'LN'
          }]
  };
  return {
      $: $
  };
};
if (typeof define === 'function' && define.amd) {
  define([], $_Module_Factory);
}
else {
  var $_Module = $_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
      module.exports.$ = $_Module.$;
  }
  else {
      var $ = $_Module.$;
  }
}
var Module = $_Module_Factory();
// export { Module as default };
exports.Module = Module;