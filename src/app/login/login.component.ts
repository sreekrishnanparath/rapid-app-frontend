import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../dto/user';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User =new User(0,"","",0,"","");

  constructor(private router : Router,private confService : ConfiguationService) { }

  ngOnInit() {
  }

  //jay
  doLogin(){
    if( this.user.userEmail.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      this.confService.doLogin(this.user).subscribe(
        (response : User) => {
          localStorage.setItem("user_info", JSON.stringify(response));
          alert(response.userName) 
          this.router.navigate(['home'])
        },
        error => { alert('Failed!') }
      );
    }
    
  }

   redirectToRegister(){
     this.router.navigate(['register']);
   }

}
