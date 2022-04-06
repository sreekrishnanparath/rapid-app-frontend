export class Lookup {

    lookId : number
    companyId :  number
    lookRefId : String
    lookDesc : String
    status : String
    isActive : boolean

    constructor (lookId:number,
        companyId : number,
        lookRefId : String ,
        lookDesc : String,
        status : String,
        isActive :boolean  ) {

            this.lookId = lookId
            this.companyId = companyId
            this.lookRefId = lookRefId
            this.lookDesc = lookDesc
            this.status = status
            this.isActive = isActive
    }

}