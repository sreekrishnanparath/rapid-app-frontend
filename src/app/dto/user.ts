export class User {

    lastName : String
    age : number
    userId : number
    userName:String
    password : String
    userEmail : String




    constructor(userId : number,userName:String,lastName : String,age : number,passwrod : String,userEmail : String){
        this.username  = userName
        this.age = age
        this.userId = userId
        this.userName = userName
        this.password = passwrod
        this.userEmail = userEmail
    }


}