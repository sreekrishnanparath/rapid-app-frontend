import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../DTO/user';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user : User

  constructor(private router:Router,
    //,private headerService : HeaderService,
    private configService :ConfiguationService
    ) { 
    
  }

  ngOnInit() {
     this.user = this.configService.getUserInfo();
   // this.user = new User("");//this.configService.getUserInfo();
    
   
  }

  logout() {
    //sessionStorage.removeItem('token')
    //sessionStorage.removeItem('RefreshToken')
    localStorage.removeItem("user_info");
   // window.location.assign("https://task-manager-service.auth.us-east-2.amazoncognito.com/logout?client_id=a7g4g154p1dp2cdjlocsujhag&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile+phone&redirect_uri=http://localhost:4200/callback");
 
    //window.location.assign("https://call-log-test.auth.us-east-2.amazoncognito.com/logout?client_id=4mdo6oba6llfcvh2qbpg83ak6&logout_uri=http://localhost:4200");
   
    this.router.navigate(['login'])
  }

}
