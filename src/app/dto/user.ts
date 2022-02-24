export class User {

    lastName : String
    age : number
    userId : number
    userName:String
    passwrod : String
    userEmail : String

    constructor(userId : number,userName:String,lastName : String,age : number,passwrod : String,userEmail : String){
        this.userName  = userName
        this.age = age
        this.userId = userId
        this.userName = userName
        this.passwrod = passwrod
        this.userEmail = userEmail
    }


}