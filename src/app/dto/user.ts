export class User {

    lastName : String
    age : number
    userId : number
    userName:String
    password : String
    userEmail : String

    constructor(userId : number,userName:String,lastName : String,age : number,password : String,userEmail : String){
        this.userName  = userName
        this.age = age
        this.userId = userId
        this.userName = userName
        this.password = password
        this.userEmail = userEmail
    }


}