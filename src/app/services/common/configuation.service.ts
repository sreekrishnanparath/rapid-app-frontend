import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/dto/company';
import { Attribute } from 'src/app/dto/attribute'; 
import { Module } from 'src/app/dto/module';
import { User } from 'src/app/dto/user';
import {tap} from 'rxjs/operators';
import { Lookup } from 'src/app/dto/lookup';
@Injectable({
  providedIn: 'root'
})
export class ConfiguationService {



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
    return this.http.post('/user/create',
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
    return this.http.put('/module/update/'+module.moduleId,JSON.stringify(module));
  }

  deleteModule(moduleId:number){
    return this.http.delete('/module/delete/'+moduleId);
  }

  companies : Company[] =[];
  getAllCompanyList() {   
    return this.http.get<Company[]>('/company/companies').pipe(
      tap((c)=>{this.companies = c})
    );
  }


  createCompany(company : Company)
  {
    return this.http.post('/company/create',JSON.stringify(company));
  }

  deleteCompanyById(companyId : number)
  {
    return this.http.delete('/company/delete/'+companyId);
  
  }
  updateCompany(company:Company)
  {
    return this.http.put('/company/update/'+company.companyId,JSON.stringify(company));
  }

  createAttributes(attribute: Attribute){
    return this.http.post('/attr/create',JSON.stringify(attribute));
  }
  
  updateAttribute(attribute: Attribute){
    return this.http.put('/attr/update/'+attribute.attributeId,JSON.stringify(attribute));
  }
  
  deleteAttribute(attributeId: number){
    return this.http.delete('/attr/delete/'+attributeId);
  }
  
  getModuleAttributes(moduleId : number) {   
    return this.http.get<Attribute[]>('/attr/module/'+moduleId

    );
  };
  getLookUpRef(){
    return this.http.get<string[]>('/lookup/lookups/'+1);
  }
  deleteUserById(userId : number)
  {
    return this.http.delete('/user/delete/'+userId);
  }

  updateUser(user:User)
  {
    return this.http.put('/user/update/'+user.userId,JSON.stringify(user));
  }
  users : User[] =[];
  getAllUserList() {   
    return this.http.get<User[]>('/user/users').pipe(
      tap((c)=>{this.users = c})
    );

  };

  createLookup(lookup : Lookup){
    return this.http.post('/lookup/create',JSON.stringify(lookup));
  }

  updatLookup(lookup : Lookup){
    return this.http.put('/lookup/update/'+lookup.lookId,JSON.stringify(lookup));
  }

  deleteLookup(lookupId:number){
    return this.http.delete('/lookup/delete/'+lookupId);
  }

  getAllLookupList() {   
    return this.http.post<Lookup[]>('/lookup/company/1',
        JSON.stringify({
          "not_close":"not_close"
      })
    );
  };
  
  getLookupRefIds() {   
    return this.http.get<String[]>('/lookup/lookups/1');
  };

}
