import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../DTO/user';
import { ConfiguationService } from '../services/common/configuation.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string
  userInfo : User

  constructor(private configService : ConfiguationService) { }

  ngOnInit() {
      this.configService.getUserInfo().subscribe(userInfo => {
        this.userInfo = userInfo;
      });
        // this.headerService.title.subscribe(title => {
        //   this.title = title;
        // });
     }
       
}
