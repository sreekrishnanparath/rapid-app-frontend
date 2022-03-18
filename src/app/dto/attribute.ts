export class Attribute {

   attributeId : number
   companyId : number
   moduleMasterId : number
   attrDesc : String
   inputControlType  : number
   attrType : number
   attrLength : number
   style : String
   status : String
   isActive : boolean
   createdDate : String
   createdBy : String
   action : number

   constructor(   attributeId : number,
    companyId : number,
    moduleMasterId : number,
    attrDesc : String,
    inputControlType  : number,
    attrType : number,
    attrLength : number,
    style : String,
    status : String,
    isActive : boolean,
    createdDate : String,
    createdBy : String,
    action : number
 ) {
    this.attributeId = attributeId;
    this.companyId = companyId;
    this.moduleMasterId = moduleMasterId;
    this.attrDesc = attrDesc;
    this.inputControlType  = inputControlType;
    this.attrType = attrType;
    this.attrLength = attrLength;
    this.style = style;
    this.status = status;
    this.isActive = isActive;
    this.createdDate = createdDate;
    this.createdBy = createdBy;
    this.action = action;
 }

}