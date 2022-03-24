import { Component, OnInit } from '@angular/core';
import { Module } from '../dto/module';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  moduleData : Module [] = []
  newModule : Module = new Module (0,1,"","",false,"",0);
  popUpMsg =null;
  searchText : string ="";
  constructor(private configService : ConfiguationService) { }

  ngOnInit() {
      this.refreshTasks()
  }

  resetPopUpMsg()
  {
    this.popUpMsg = null;

  }
  refreshTasks(){
    this.configService.getAllModuleList().subscribe(
        response=> {this.moduleData =  response 
        }
      );
      console.log( "moduleData  : "+this.moduleData);
    }
  createModule(){
    // console.log(this.newModule);
    this.configService.createModule(this.newModule).subscribe(
      success=>{
        this.popUpMsg = "Module Created";
        
      },
      error=>{
        this.popUpMsg = "Unable to create Module";

      }
      
      
    );

  }

}
