export class User {

    lastName : String
    age : number
    userId : number
    username:String
    password : String
    userEmail : String




    constructor(userId : number,username:String,lastName : String,age : number,password : String,userEmail : String){
        this.lastName  = lastName
        this.age = age
        this.userId = userId
        this.username = username
        this.password = password
        this.userEmail = userEmail
    }


}