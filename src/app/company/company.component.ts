import { Component, OnInit } from '@angular/core';
import { Company } from '../dto/company';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyData : Company [] = []
  newCompany : Company = new Company (0,'','',false,'');
  popUpMsg =null;

  constructor(private configService : ConfiguationService) { }

  ngOnInit() {
      this.refreshTasks()
  }

  
  refreshTasks(){
    this.configService.getAllCompanyList().subscribe(
      response=> {this.companyData =  response 
      }
    );
    console.log( "company data : "+this.companyData);
  }
  createCompany(){
    console.log(this.newCompany);
    this.configService.createCompany(this.newCompany).subscribe(
      success=>{
        this.popUpMsg = "Company Created";
        
      },
      error=>{
        this.popUpMsg = "Unable to create Company";

      }
      
      
    );
  }
}
