
export class Module {

    moduleId:number
    companyId : number
    moduleDesc : String 
    status : String 
    isActive : boolean
    createdDate : String
    createdBy : number 

    constructor (moduleId:number,
        companyId : number,
        moduleDesc : String ,
        status : String ,
        isActive : boolean,
        createdDate : String,
        createdBy : number ) {

            this.moduleId = moduleId
            this.companyId = companyId
            this.moduleDesc = moduleDesc
            this.status = status
            this.isActive = isActive
            this.createdBy = createdBy
            this.createdDate = createdDate
    }

}