import { Component, OnInit } from '@angular/core';
import { SinglePropOffsetValuesIndex } from '@angular/core/src/render3/interfaces/styling';
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
  searchBox : string ; 
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

  showUpdate(module: Module){
    this.newModule = module;
  }
  closeModal(){
    this.newModule = new Module (0,1,"","",false,"",0);
  }
  updateModule(){
    this.configService.updatModule(this.newModule).subscribe(
      success=>{
        this.popUpMsg = "Module Created";
        this.refreshTasks();
        
      },
      error=>{
        this.popUpMsg = "Unable to create Module";

      }
      
      
    );

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
        this.refreshTasks();
        
      },
      error=>{
        this.popUpMsg = "Unable to create Module";

      }
      
      
    );

  }
  deleteModule(moduleId:number){
    
    this.configService.deleteModule(moduleId).subscribe(
      success=>{
       // this.popUpMsg = "Module Delete";
           console.log('deleloo');
      },
      error=>{
        this.popUpMsg = "Unable to create Module";
        this.refreshTasks();
        
      }
      
      
    );
  }
}
