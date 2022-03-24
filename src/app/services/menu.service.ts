import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { menu } from '../DTO/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuList : menu[] = []; 

  constructor(private http : HttpClient) { 
    this.menuList.push(new menu("home/module","Module","Module","fa fa-check-square-o"));
     this.menuList.push(new menu("home/report","Report","Report","fa fa-eye"));
    this.menuList.push(new menu("home/attribute","Attribute","Attribute","fa fa-clock-o"));
    this.menuList.push(new menu("home/company","Company","Company","fa fa-industry"));
    this.menuList.push(new menu("home/user","User","User","fa fa-User"))
  }

  // getMenuList(group : String){
  //   return this.menuList.filter(
  //     menu => menu.menuGroup ===group);
  // }

  getMenuList(){
    console.log('yes')
    return this.menuList
  }

  getMenuListService(group : String) {   
    return this.http.post<menu[]>('https://dv6vciwxnj.execute-api.us-east-2.amazonaws.com/getMenuMaster',
        JSON.stringify({
          "menuGroup": group
      })
    );
  };
  

}
