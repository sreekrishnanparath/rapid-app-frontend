import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/dto/company';
import { Attribute } from 'src/app/dto/attribute'; 
import { Module } from 'src/app/dto/module';
import { User } from 'src/app/dto/user';

@Injectable({
  providedIn: 'root'
})
export class ConfiguationService {

  // headerData = {
  //   headers: new HttpHeaders()
  //     .set("Authorization", "Bearer "+localStorage.getItem('jwtToken'))
  //     .set("Content-Type", "application/json")     
  //   }

    loginHeaderData = {
      headers: new HttpHeaders()
        .set("Content-Type", "application/json")     
      }
  
    
  constructor(private http:HttpClient) { }

  doLogin(user : User){
    //user  = new User("sree","","1","sree","123")
    return this.http.post('/login',JSON.stringify(user),this.loginHeaderData);
  }

  getAllTransaction() {   
    return this.http.post('/trans/comMod/1/3',
        JSON.stringify({
          "not_close":"not_close"
      })
    );
  };

  getUserInfo(){

    return  JSON.parse(localStorage.getItem('user_info'));
  }

  getAllModuleList() {   
    return this.http.post<Module[]>('/module/company/1',
        JSON.stringify({
          "not_close":"not_close"
      })
    );
  };
 
  createModule(module : Module){
    return this.http.post('/module/create',JSON.stringify(module));
  }

  getAllCompanyList() {   
    return this.http.get<Company[]>('/company/companies')

  };

  createCompany(company : Company)
  {
    return this.http.post('/company/create',JSON.stringify(company));
  }

  getModuleAttributes(moduleId : number) {   
    return this.http.post<Attribute[]>('/attr/module/'+moduleId,
        JSON.stringify({
          "not_close":"not_close"
      })
    );
  };

}
