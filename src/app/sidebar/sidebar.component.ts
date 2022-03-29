import { Component, OnInit } from '@angular/core';
import { menu } from '../DTO/menu';
import { User } from '../DTO/user';
import { ConfiguationService } from '../services/common/configuation.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   menuList : menu[] = [];
  user : User
  constructor(
   private menuService : MenuService,private configService : ConfiguationService
    ) { }

  ngOnInit() {
    
    //this.user = this.configService.getUserInfo();
    this.menuList = this.menuService.getMenuList();
    
  }

}
