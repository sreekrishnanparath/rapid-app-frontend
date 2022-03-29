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
  createUser(){
    console.log();
    this.configService.createUser(this.newUser).subscribe(

      success=>{
        this.popUpMsg = "User Created";
        this.refreshTasks();
        
        
      },
      error=>{
        this.popUpMsg = "Unable to create user";
        this.refreshTasks();
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
