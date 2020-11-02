// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/XYCoordinates.html":'\x3cdiv class\x3d"esriCTPopupContainer" data-dojo-attach-point\x3d"coordinatesPopup"\x3e\r\n    \x3cdiv class\x3d"esriCTFieldDropdownContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTSelectTitle" title\x3d"${nls.coordinatesSelectTitle}"\x3e${nls.coordinatesSelectTitle}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTFieldInput" style\x3d"width: 100%;"\x3e\r\n            \x3cselect aria-label\x3d"${nls.coordinatesSelectTitle}" class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"coordinatesDropDown" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3coption value\x3d"Map Spatial Reference"\x3e${nls.mapSpecialReferenceDropdownOption}\x3c/option\x3e\r\n                \x3coption value\x3d"Latitude/Longitude"\x3e${nls.latLongDropdownOption}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTControlWidth"\x3e\r\n        \x3cdiv class\x3d"esriCTSelectTitle" data-dojo-attach-point\x3d"xAttributeTextBoxLabel"\x3e${nls.xAttributeTextBoxLabel}\x3c/div\x3e\r\n        \x3cdiv\x3e\r\n            \x3cdiv aria-label\x3d"${nls.xAttributeTextBoxLabel}" class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"xAttributeTextBox"  constraints\x3d"{places:\'0,10\', round:-1}" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n                data-dojo-props\x3d"intermediateChanges:true" trim\x3d"true"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"padding-bottom: 5px;"\x3e\r\n        \x3cdiv for\x3d"yAttributeTextBox" class\x3d"esriCTSelectTitle" data-dojo-attach-point\x3d"yAttributeTextBoxLabel"\x3e${nls.yAttributeTextBoxLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTControlWidth"\x3e\r\n            \x3cdiv aria-label\x3d"${nls.yAttributeTextBoxLabel}" class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"yAttributeTextBox" constraints\x3d"{places:\'0,10\', round:-1}" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n                data-dojo-props\x3d"intermediateChanges:true" trim\x3d"true"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/on dojo/text!./XYCoordinates.html dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/Popup dojo/dom-attr".split(" "),function(d,e,b,c,f,g,h,k,a){return d([h,e,g],{baseClass:"jimu-widget-smartEditor-XYCoordinates",templateString:f,fieldsPopup:null,postCreate:function(){this._createPopUp();this._eventListener()},_eventListener:function(){this.own(c(this.coordinatesDropDown,"change",b.hitch(this,this._onChangeDropDown)));this.own(c(this.xAttributeTextBox,
"change",b.hitch(this,this._onTextBoxValueChanged)));this.own(c(this.yAttributeTextBox,"change",b.hitch(this,this._onTextBoxValueChanged)))},_onChangeDropDown:function(){"Map Spatial Reference"===this.coordinatesDropDown.value?(a.set(this.xAttributeTextBoxLabel,"innerHTML",this.nls.xAttributeTextBoxLabel),a.set(this.yAttributeTextBoxLabel,"innerHTML",this.nls.yAttributeTextBoxLabel),this.xAttributeTextBox.set("value",""),this.yAttributeTextBox.set("value",""),a.set(this.xAttributeTextBox,"aria-label",
this.nls.xAttributeTextBoxLabel),a.set(this.yAttributeTextBox,"aria-label",this.nls.yAttributeTextBoxLabel)):(a.set(this.xAttributeTextBoxLabel,"innerHTML",this.nls.latitudeTextBoxLabel),a.set(this.yAttributeTextBoxLabel,"innerHTML",this.nls.longitudeTextBoxLabel),this.xAttributeTextBox.set("value",""),this.yAttributeTextBox.set("value",""),a.set(this.xAttributeTextBox,"aria-label",this.nls.latitudeTextBoxLabel),a.set(this.yAttributeTextBox,"aria-label",this.nls.longitudeTextBoxLabel))},_createPopUp:function(){this.fieldsPopup=
new k({titleLabel:this.nls.coordinatePopupTitle,width:400,maxHeight:300,autoHeight:!0,"class":this.baseClass,content:this,buttons:[{label:this.nls.ok,id:"okButton",onClick:b.hitch(this,function(){this._getData();this.xAttributeTextBox.set("value","");this.yAttributeTextBox.set("value","");this.fieldsPopup.close()})},{label:this.nls.cancel,id:"cancelButton",classNames:["jimu-btn-vacation"],onClick:b.hitch(this,function(){this.xAttributeTextBox.set("value","");this.yAttributeTextBox.set("value","");
this.fieldsPopup.close()})}]});this.fieldsPopup.disableButton(0);a.set(this.fieldsPopup.disabledButtons[0],"tabindex","-1")},_getData:function(){this.emit("gotoSelectedLocation",{coordinateSystem:this.coordinatesDropDown.getValue(),firstPoint:this.xAttributeTextBox.getValue(),secondPoint:this.yAttributeTextBox.getValue()})},_onTextBoxValueChanged:function(){isNaN(this.xAttributeTextBox.value)||isNaN(this.yAttributeTextBox.value)?(this.fieldsPopup.disableButton(0),a.set(this.fieldsPopup.disabledButtons[0],
"tabindex","-1")):(this.fieldsPopup.enableButton(0),a.set(this.fieldsPopup.enabledButtons[0],"tabindex","0"))}})});