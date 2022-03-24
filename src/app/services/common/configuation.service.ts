import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/dto/company';
import { Attribute } from 'src/app/dto/attribute'; 
import { Module } from 'src/app/dto/module';
import { User } from 'src/app/dto/user';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfiguationService {

  headerData = {
    headers: new HttpHeaders()
      .set("Authorization", "Bearer "+sessionStorage.getItem('token'))
      .set("Content-Type", "application/json")     
    }
    
  constructor(private http:HttpClient) { }

  doLogin(user : User){
    //user  = new User("sree","","1","sree","123")
    return this.http.post('http://localhost:8082/rapidapp/user/login',JSON.stringify(user),this.headerData);
  }

  getAllTransaction() {   
    return this.http.post('http://localhost:8082/rapidapp/trans/comMod/1/3',
        JSON.stringify({
          "not_close":"not_close"
      })
    );
  };

  getUserInfo(){
    return  JSON.parse(localStorage.getItem('user_info'));
  }

  getAllModuleList() {   
    return this.http.post<Module[]>('http://localhost:8082/rapidapp/module/company/1',
        JSON.stringify({
          "not_close":"not_close"
      })
    );
  };
  
  createModule(module : Module){
    return this.http.post('http://localhost:8082/rapidapp/module/create',JSON.stringify(module),this.headerData);
  }
  companies : Company[] =[];
  getAllCompanyList() {   
    return this.http.get<Company[]>('http://localhost:8082/rapidapp/company/companies').pipe(
      tap((c)=>{this.companies = c})
    );

  };
  createCompany(company : Company)
  {
    return this.http.post('http://localhost:8082/rapidapp/company/create',JSON.stringify(company),this.headerData);
  }

  deleteCompanyById(companyId : number)
  {
    return this.http.delete('http://localhost:8082/rapidapp/company/delete/'+companyId,this.headerData);

  }
  updateCompany(company:Company)
  {
    return this.http.put('http://localhost:8082/rapidapp/company/update/'+company.companyId,JSON.stringify(company),this.headerData);
  }
  getModuleAttributes(moduleId : number) {   
    return this.http.post<Attribute[]>('http://localhost:8082/rapidapp/attr/module/'+moduleId,
        JSON.stringify({
          "not_close":"not_close"
      })
    );
  };
  createUser(user:User)
  {
    return this.http.post('http://localhost:8082/rapidapp/user/create',JSON.stringify(user),this.headerData);
  }
  deleteUserById(userId : number)
  {
    return this.http.delete('http://localhost:8082/rapidapp/user/delete/'+userId,this.headerData);
  }
  updateUser(user:User)
  {
    return this.http.put('http://localhost:8082/rapidapp/user/update/'+user.userId,JSON.stringify(user),this.headerData);
  }
  users : User[] =[];
  getAllUserList() {   
    return this.http.get<User[]>('http://localhost:8082/rapidapp/user/users').pipe(
      tap((c)=>{this.users = c})
    );

  };
}
