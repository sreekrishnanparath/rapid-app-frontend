export class User {

    lastName : String
    age : number
    userId : number
    username:String
    passwrod : String
    userEmail : String

    constructor(userId : number,userName:String,lastName : String,age : number,passwrod : String,userEmail : String){
        this.username  = userName
        this.age = age
        this.userId = userId
        this.username = userName
        this.passwrod = passwrod
        this.userEmail = userEmail
    }


}