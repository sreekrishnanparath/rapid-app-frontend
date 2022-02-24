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
     this.menuList.push(new menu("home/report","Report","Report","fa fa-user"));
    //this.menuList.push(new menu("tasks","View Issues","customer","fa fa-eye"));
    //this.menuList.push(new menu("tasks","Active Issues","support","fa fa-clock-o"));
    //this.menuList.push(new menu("tasks/Closed","Closed Issues","support","fa fa-check-square-o "));
  }

  // getMenuList(group : String){
  //   return this.menuList.filter(
  //     menu => menu.menuGroup ===group);
  // }

  getMenuList(){
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
