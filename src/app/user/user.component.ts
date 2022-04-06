import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { User } from '../dto/user';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchBox: string ;
  userData : User [] = [];
  newUser : User = new User (0,"","",0,"","");
  popUpMsg =null;

  constructor(private configService : ConfiguationService) { }

  ngOnInit() {
      this.refreshTasks()
  }

  resetPopUpMsg()
  {
    this.refreshTasks()
    this.popUpMsg = null;
    this.newUser =  new User  (0,"","",0,"","");

  }
  refreshTasks(){
    this.configService.getAllUserList().subscribe(
      response=> {this.userData =  response ;
        console.log(response);
        
      }
    );
  }
  ErrorMsg : User;
  createUser(){
    console.log();
    this.configService.createUser(this.newUser).subscribe(

      success=>{
        this.popUpMsg = "User Created";
        this.refreshTasks();
        
        
      },
      error=>{
        this.popUpMsg = "Unable to create user";
        let errorMsg = new HttpErrorResponse(error);
        this.ErrorMsg = errorMsg.error;
        alert(this.ErrorMsg.userEmail+"\n"+this.ErrorMsg.username+"\n"+this.ErrorMsg.age+"\n"+this.ErrorMsg.password)
      }   
    
    );
  }
  updateUserDetails : User = new User (0,"","",0,"","");
  updateDetails(user:User)
  {
    console.log("user"+user);
    this.updateUserDetails = user;
  }
  updateUser(user : User)
  {
    console.log("user"+user);
    this.configService.updateUser(this.updateUserDetails).subscribe(
      success=>{
        this.popUpMsg = "Updated";
        
      },
      error=>{
        this.popUpMsg = "Unable to update company details";
        let errorMsg = new HttpErrorResponse(error);
        this.ErrorMsg = errorMsg.error;
        alert(this.ErrorMsg.password)
      }   
      
    );
   
    this.refreshTasks();
  }
  deleteUser(userId : number)
  {
    //console.log("btn delete " +companyId);
    this.configService.deleteUserById(userId).subscribe(
      success=>{
        alert("User Deleted");
      },
      error=>{
        this.refreshTasks();
        alert("Deleted");
      }
      
    );
    
  }
}
