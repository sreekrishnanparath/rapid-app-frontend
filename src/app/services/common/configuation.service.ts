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
    return this.http.post('/login',JSON.stringify(user),this.loginHeaderData);
  }
  createUser(user:User){
    console.log(user);
    return this.http.post('http://localhost:8082/rapidapp/user/create',
      user);
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

  updatModule(module:Module){
    return this.http.put('http://localhost:8082/rapidapp/module/update/'+module.moduleId,JSON.stringify(module),this.headerData);
  }
  deleteModule(moduleId:number){
    return this.http.delete('http://localhost:8082/rapidapp/module/delete/'+moduleId);
  }


  getAllCompanyList() {   
    return this.http.get<Company[]>('/company/companies')

  };

  createCompany(company : Company)
  {
    return this.http.post('/company/create',JSON.stringify(company));
  }


  createAttributes(attribute: Attribute){
    return this.http.post('http://localhost:8082/rapidapp/attr/create',JSON.stringify(attribute),this.headerData);
  }
  
  updateAttribute(attribute: Attribute){
    return this.http.put('http://localhost:8082/rapidapp/attr/update/'+attribute.attributeId,JSON.stringify(attribute),this.headerData);
  }
  
  deleteAttribute(attributeId: number){
    return this.http.delete('http://localhost:8082/rapidapp/attr/delete/'+attributeId);
  }
  
  getModuleAttributes(moduleId : number) {   
    return this.http.post<Attribute[]>('/attr/module/'+moduleId,
        JSON.stringify({
          "not_close":"not_close"
      })

    );
  };

}
