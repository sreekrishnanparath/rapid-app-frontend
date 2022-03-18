
export class Company {

    companyId:number
    companyName : String
    companyUser : String 
    isActive : boolean
    status : String 

    constructor (companyId:number,
        companyName : String,
        companyUser : String ,
        isActive : boolean,
        status : String ) {

            this.companyId = companyId
            this.companyName = companyName
            this.companyUser = companyUser
            this.isActive = isActive
            this.status = status

    }

}