import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from '../dto/user';
import { ConfiguationService } from '../services/common/configuation.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User =new User(0,"","",0,"","");

  errorMessage={
    password:'',
    email:''
  };
 
  
  constructor(private UserService:ConfiguationService) { }

  ngOnInit(): void {
  }
  validateForm(user:User){
  
    // if(!this.UserService.regex.test(user.passwrod)){
    // this.errorMessage.password="password should be atleast 8 character long example [0-9a-z#@]";
    // return false;
     
    // }else if(!this.UserService.regexEmail.test(user.userEmail)){
    //   this.errorMessage.email="email is not valid";
    //   return false;
    // }
    return true;
  }
  createUser(){
    if(this.validateForm(this.user)){
      //this.UserService.createUser(this.user);
      this.errorMessage={
        password:'',
        email:''
      }
    }
   
  }
}
