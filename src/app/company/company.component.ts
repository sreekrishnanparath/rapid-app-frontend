import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';
import { Company } from '../dto/company';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  searchBox : string ;
  companyData : Company [] = []
  newCompany : Company = new Company (0,'','',false,'');
  popUpMsg =null;
  asd:Company;
  constructor(private configService : ConfiguationService) { }

  ngOnInit() {
      this.refreshTasks()
  }

  resetPopUpMsg()
  {
    this.popUpMsg = null;
    this.newCompany =  new Company (0,'','',false,'');

  }
  refreshTasks(){
    this.configService.getAllCompanyList().subscribe(
      response=> {this.companyData =  response ;
        console.log(response);
      }
    );
    
  }
  ErrorMsg : Company ;
  createCompany(){
    console.log(this.newCompany);
    this.configService.createCompany(this.newCompany).subscribe(

      success=>{
        this.popUpMsg = "Company Created";
        this.refreshTasks();
        
      },
      error=>{
        this.popUpMsg = "Unable to create Company";
        let errorMsg = new HttpErrorResponse(error);
        this.ErrorMsg = errorMsg.error;
        alert(this.ErrorMsg.companyName+". "+this.ErrorMsg.companyUser)
      }   
      
      
      
    );
  }
  deleteCompany(companyId : number)
  {
    //console.log("btn delete " +companyId);
    this.configService.deleteCompanyById(companyId).subscribe(
      success=>{
        this.popUpMsg = "Company Deleted";
        this.refreshTasks();
        alert("Company Deleted");
      },
      error=>{
        this.popUpMsg = "Unable to delete Company";
        this.refreshTasks();
        alert("Deleted");
      }
      
      
    );
    
  }
  updateDetails(company:Company)
  {
    this.newCompany = company;
  }
  updateCompany(company : Company)
  {
    console.log("company"+company);
    this.configService.updateCompany(this.newCompany).subscribe(
      success=>{
        this.popUpMsg = "Updated";
        this.refreshTasks();
      },
      error=>{
        this.popUpMsg = "Unable to update company details";
      }   
    );
  }
}
