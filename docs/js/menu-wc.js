'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@opentemplate/scl-lib documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ScllibService.html" data-type="entity-link" >ScllibService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/_any.html" data-type="entity-link" >_any</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_boolean.html" data-type="entity-link" >_boolean</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_Date.html" data-type="entity-link" >_Date</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_LN0Type.html" data-type="entity-link" >_LN0Type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_number.html" data-type="entity-link" >_number</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_SCLType.html" data-type="entity-link" >_SCLType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_string.html" data-type="entity-link" >_string</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAbstractConductingEquipment.html" data-type="entity-link" >_tAbstractConductingEquipment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAbstractDataAttribute.html" data-type="entity-link" >_tAbstractDataAttribute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAbstractEqFuncSubFunc.html" data-type="entity-link" >_tAbstractEqFuncSubFunc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAccessControl.html" data-type="entity-link" >_tAccessControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAccessPoint.html" data-type="entity-link" >_tAccessPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAddress.html" data-type="entity-link" >_tAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAnyContentFromOtherNamespace.html" data-type="entity-link" >_tAnyContentFromOtherNamespace</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAnyLN.html" data-type="entity-link" >_tAnyLN</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAssociation.html" data-type="entity-link" >_tAssociation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAssociationKindEnum.html" data-type="entity-link" >_tAssociationKindEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tAuthenticationEnum.html" data-type="entity-link" >_tAuthenticationEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tBaseElement.html" data-type="entity-link" >_tBaseElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tBay.html" data-type="entity-link" >_tBay</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tBDA.html" data-type="entity-link" >_tBDA</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tBitRateInMbPerSec.html" data-type="entity-link" >_tBitRateInMbPerSec</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tCert.html" data-type="entity-link" >_tCert</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tCertificate.html" data-type="entity-link" >_tCertificate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tClientLN.html" data-type="entity-link" >_tClientLN</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tClientServices.html" data-type="entity-link" >_tClientServices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tCommProt.html" data-type="entity-link" >_tCommProt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tCommunication.html" data-type="entity-link" >_tCommunication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tConductingEquipment.html" data-type="entity-link" >_tConductingEquipment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tConfLNs.html" data-type="entity-link" >_tConfLNs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tConnectedAP.html" data-type="entity-link" >_tConnectedAP</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tConnectivityNode.html" data-type="entity-link" >_tConnectivityNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tControl.html" data-type="entity-link" >_tControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tControlBlock.html" data-type="entity-link" >_tControlBlock</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tControlWithIEDName.html" data-type="entity-link" >_tControlWithIEDName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tControlWithIEDNameIEDNameType.html" data-type="entity-link" >_tControlWithIEDNameIEDNameType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tControlWithTriggerOpt.html" data-type="entity-link" >_tControlWithTriggerOpt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDA.html" data-type="entity-link" >_tDA</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDAI.html" data-type="entity-link" >_tDAI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDataSet.html" data-type="entity-link" >_tDataSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDataTypeTemplates.html" data-type="entity-link" >_tDataTypeTemplates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDAType.html" data-type="entity-link" >_tDAType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDO.html" data-type="entity-link" >_tDO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDOI.html" data-type="entity-link" >_tDOI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupAEnum.html" data-type="entity-link" >_tDomainLNGroupAEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupCEnum.html" data-type="entity-link" >_tDomainLNGroupCEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupFEnum.html" data-type="entity-link" >_tDomainLNGroupFEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupGEnum.html" data-type="entity-link" >_tDomainLNGroupGEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupIEnum.html" data-type="entity-link" >_tDomainLNGroupIEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupKEnum.html" data-type="entity-link" >_tDomainLNGroupKEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupMEnum.html" data-type="entity-link" >_tDomainLNGroupMEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupPEnum.html" data-type="entity-link" >_tDomainLNGroupPEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupQEnum.html" data-type="entity-link" >_tDomainLNGroupQEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupREnum.html" data-type="entity-link" >_tDomainLNGroupREnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupSEnum.html" data-type="entity-link" >_tDomainLNGroupSEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupTEnum.html" data-type="entity-link" >_tDomainLNGroupTEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupXEnum.html" data-type="entity-link" >_tDomainLNGroupXEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupYEnum.html" data-type="entity-link" >_tDomainLNGroupYEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDomainLNGroupZEnum.html" data-type="entity-link" >_tDomainLNGroupZEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDOType.html" data-type="entity-link" >_tDOType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDurationInMilliSec.html" data-type="entity-link" >_tDurationInMilliSec</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tDurationInSec.html" data-type="entity-link" >_tDurationInSec</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tEnumType.html" data-type="entity-link" >_tEnumType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tEnumVal.html" data-type="entity-link" >_tEnumVal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tEqFunction.html" data-type="entity-link" >_tEqFunction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tEqSubFunction.html" data-type="entity-link" >_tEqSubFunction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tEquipment.html" data-type="entity-link" >_tEquipment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tEquipmentContainer.html" data-type="entity-link" >_tEquipmentContainer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tExtRef.html" data-type="entity-link" >_tExtRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tFCDA.html" data-type="entity-link" >_tFCDA</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tFCEnum.html" data-type="entity-link" >_tFCEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tFileHandling.html" data-type="entity-link" >_tFileHandling</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tFunction.html" data-type="entity-link" >_tFunction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tGeneralEquipment.html" data-type="entity-link" >_tGeneralEquipment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tGeneralEquipmentContainer.html" data-type="entity-link" >_tGeneralEquipmentContainer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tGOOSEcapabilities.html" data-type="entity-link" >_tGOOSEcapabilities</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tGSE.html" data-type="entity-link" >_tGSE</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tGSEControl.html" data-type="entity-link" >_tGSEControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tGSEControlTypeEnum.html" data-type="entity-link" >_tGSEControlTypeEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tGSESettings.html" data-type="entity-link" >_tGSESettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tHeader.html" data-type="entity-link" >_tHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tHeaderHistoryType.html" data-type="entity-link" >_tHeaderHistoryType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tHeaderNameStructureType.html" data-type="entity-link" >_tHeaderNameStructureType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tHitem.html" data-type="entity-link" >_tHitem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tIDNaming.html" data-type="entity-link" >_tIDNaming</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tIED.html" data-type="entity-link" >_tIED</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tInputs.html" data-type="entity-link" >_tInputs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tKDC.html" data-type="entity-link" >_tKDC</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLDevice.html" data-type="entity-link" >_tLDevice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLine.html" data-type="entity-link" >_tLine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLLN0Enum.html" data-type="entity-link" >_tLLN0Enum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLN.html" data-type="entity-link" >_tLN</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLN0.html" data-type="entity-link" >_tLN0</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLNode.html" data-type="entity-link" >_tLNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLNodeContainer.html" data-type="entity-link" >_tLNodeContainer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLNodeType.html" data-type="entity-link" >_tLNodeType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLog.html" data-type="entity-link" >_tLog</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLogControl.html" data-type="entity-link" >_tLogControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLogSettings.html" data-type="entity-link" >_tLogSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tLPHDEnum.html" data-type="entity-link" >_tLPHDEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tMcSecurity.html" data-type="entity-link" >_tMcSecurity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tNaming.html" data-type="entity-link" >_tNaming</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP.html" data-type="entity-link" >_tP</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_APPID.html" data-type="entity-link" >_tP_APPID</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_C37118IPPort.html" data-type="entity-link" >_tP_C37118IPPort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_DNSName.html" data-type="entity-link" >_tP_DNSName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IP.html" data-type="entity-link" >_tP_IP</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPbase.html" data-type="entity-link" >_tP_IPbase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPClassOfTraffic.html" data-type="entity-link" >_tP_IPClassOfTraffic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPGATEWAY.html" data-type="entity-link" >_tP_IPGATEWAY</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPIGMPv3Src.html" data-type="entity-link" >_tP_IPIGMPv3Src</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPSUBNET.html" data-type="entity-link" >_tP_IPSUBNET</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPv6.html" data-type="entity-link" >_tP_IPv6</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPv6base.html" data-type="entity-link" >_tP_IPv6base</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPv6ClassOfTraffic.html" data-type="entity-link" >_tP_IPv6ClassOfTraffic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPv6FlowLabel.html" data-type="entity-link" >_tP_IPv6FlowLabel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPv6GATEWAY.html" data-type="entity-link" >_tP_IPv6GATEWAY</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPv6IGMPv3Src.html" data-type="entity-link" >_tP_IPv6IGMPv3Src</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_IPv6SUBNET.html" data-type="entity-link" >_tP_IPv6SUBNET</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_MACAddress.html" data-type="entity-link" >_tP_MACAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_MMSPort.html" data-type="entity-link" >_tP_MMSPort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSIAEInvoke.html" data-type="entity-link" >_tP_OSIAEInvoke</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSIAEQualifier.html" data-type="entity-link" >_tP_OSIAEQualifier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSIAPInvoke.html" data-type="entity-link" >_tP_OSIAPInvoke</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSIAPTitle.html" data-type="entity-link" >_tP_OSIAPTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSINSAP.html" data-type="entity-link" >_tP_OSINSAP</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSIPSEL.html" data-type="entity-link" >_tP_OSIPSEL</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSISSEL.html" data-type="entity-link" >_tP_OSISSEL</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_OSITSEL.html" data-type="entity-link" >_tP_OSITSEL</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_PhysConn.html" data-type="entity-link" >_tP_PhysConn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_Port.html" data-type="entity-link" >_tP_Port</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_SNTPPort.html" data-type="entity-link" >_tP_SNTPPort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_TCPPort.html" data-type="entity-link" >_tP_TCPPort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_UDPPort.html" data-type="entity-link" >_tP_UDPPort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_VLANID.html" data-type="entity-link" >_tP_VLANID</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tP_VLANPRIORITY.html" data-type="entity-link" >_tP_VLANPRIORITY</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPhaseEnum.html" data-type="entity-link" >_tPhaseEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPhysConn.html" data-type="entity-link" >_tPhysConn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPowerSystemResource.html" data-type="entity-link" >_tPowerSystemResource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPowerTransformer.html" data-type="entity-link" >_tPowerTransformer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPowerTransformerEnum.html" data-type="entity-link" >_tPowerTransformerEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedAttributeNameEnum.html" data-type="entity-link" >_tPredefinedAttributeNameEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedBasicTypeEnum.html" data-type="entity-link" >_tPredefinedBasicTypeEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedCDCEnum.html" data-type="entity-link" >_tPredefinedCDCEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedCommonConductingEquipmentEnum.html" data-type="entity-link" >_tPredefinedCommonConductingEquipmentEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedGeneralEquipmentEnum.html" data-type="entity-link" >_tPredefinedGeneralEquipmentEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedPhysConnTypeEnum.html" data-type="entity-link" >_tPredefinedPhysConnTypeEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedPTypeEnum.html" data-type="entity-link" >_tPredefinedPTypeEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedPTypePhysConnEnum.html" data-type="entity-link" >_tPredefinedPTypePhysConnEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPredefinedTypeOfSecurityEnum.html" data-type="entity-link" >_tPredefinedTypeOfSecurityEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tPrivate.html" data-type="entity-link" >_tPrivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tProcess.html" data-type="entity-link" >_tProcess</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tProtNs.html" data-type="entity-link" >_tProtNs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tProtocol.html" data-type="entity-link" >_tProtocol</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tRedProt.html" data-type="entity-link" >_tRedProt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tRedProtEnum.html" data-type="entity-link" >_tRedProtEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tReportControl.html" data-type="entity-link" >_tReportControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tReportControlOptFieldsType.html" data-type="entity-link" >_tReportControlOptFieldsType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tReportSettings.html" data-type="entity-link" >_tReportSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tRightEnum.html" data-type="entity-link" >_tRightEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tRptEnabled.html" data-type="entity-link" >_tRptEnabled</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSampledValueControl.html" data-type="entity-link" >_tSampledValueControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSampledValueControlSmvOptsType.html" data-type="entity-link" >_tSampledValueControlSmvOptsType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSDI.html" data-type="entity-link" >_tSDI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSDO.html" data-type="entity-link" >_tSDO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServer.html" data-type="entity-link" >_tServer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServerAt.html" data-type="entity-link" >_tServerAt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServerAuthenticationType.html" data-type="entity-link" >_tServerAuthenticationType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceConfReportControl.html" data-type="entity-link" >_tServiceConfReportControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceConfReportControlBufModeType.html" data-type="entity-link" >_tServiceConfReportControlBufModeType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceForConfDataSet.html" data-type="entity-link" >_tServiceForConfDataSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServices.html" data-type="entity-link" >_tServices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceSettings.html" data-type="entity-link" >_tServiceSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceSettingsEnum.html" data-type="entity-link" >_tServiceSettingsEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceSettingsNoDynEnum.html" data-type="entity-link" >_tServiceSettingsNoDynEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceType.html" data-type="entity-link" >_tServiceType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceWithMax.html" data-type="entity-link" >_tServiceWithMax</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceWithMaxAndMaxAttributes.html" data-type="entity-link" >_tServiceWithMaxAndMaxAttributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceWithMaxAndModify.html" data-type="entity-link" >_tServiceWithMaxAndModify</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceWithMaxNonZero.html" data-type="entity-link" >_tServiceWithMaxNonZero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceWithOptionalMax.html" data-type="entity-link" >_tServiceWithOptionalMax</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tServiceYesNo.html" data-type="entity-link" >_tServiceYesNo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSettingControl.html" data-type="entity-link" >_tSettingControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSettingGroups.html" data-type="entity-link" >_tSettingGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSmpMod.html" data-type="entity-link" >_tSmpMod</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSMV.html" data-type="entity-link" >_tSMV</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSMVDeliveryEnum.html" data-type="entity-link" >_tSMVDeliveryEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSMVsc.html" data-type="entity-link" >_tSMVsc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSMVSettings.html" data-type="entity-link" >_tSMVSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSubEquipment.html" data-type="entity-link" >_tSubEquipment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSubFunction.html" data-type="entity-link" >_tSubFunction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSubNetwork.html" data-type="entity-link" >_tSubNetwork</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSubstation.html" data-type="entity-link" >_tSubstation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSupSubscription.html" data-type="entity-link" >_tSupSubscription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tSystemLNGroupEnum.html" data-type="entity-link" >_tSystemLNGroupEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tTapChanger.html" data-type="entity-link" >_tTapChanger</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tTerminal.html" data-type="entity-link" >_tTerminal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tText.html" data-type="entity-link" >_tText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tTimeSyncProt.html" data-type="entity-link" >_tTimeSyncProt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tTransformerWinding.html" data-type="entity-link" >_tTransformerWinding</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tTransformerWindingEnum.html" data-type="entity-link" >_tTransformerWindingEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tTrgOps.html" data-type="entity-link" >_tTrgOps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tUnitMultiplierEnum.html" data-type="entity-link" >_tUnitMultiplierEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tUnNaming.html" data-type="entity-link" >_tUnNaming</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tVal.html" data-type="entity-link" >_tVal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tValKindEnum.html" data-type="entity-link" >_tValKindEnum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tValueHandling.html" data-type="entity-link" >_tValueHandling</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tValueWithUnit.html" data-type="entity-link" >_tValueWithUnit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tVoltage.html" data-type="entity-link" >_tVoltage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/_tVoltageLevel.html" data-type="entity-link" >_tVoltageLevel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseType.html" data-type="entity-link" >BaseType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseType-1.html" data-type="entity-link" >BaseType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IType.html" data-type="entity-link" >IType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LN0Type.html" data-type="entity-link" >LN0Type</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SCLType.html" data-type="entity-link" >SCLType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tControlWithIEDNameIEDNameType.html" data-type="entity-link" >tControlWithIEDNameIEDNameType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tHeaderHistoryType.html" data-type="entity-link" >tHeaderHistoryType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tReportControlOptFieldsType.html" data-type="entity-link" >tReportControlOptFieldsType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tSampledValueControlSmvOptsType.html" data-type="entity-link" >tSampledValueControlSmvOptsType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tServerAuthenticationType.html" data-type="entity-link" >tServerAuthenticationType</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});