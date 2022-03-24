import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Attribute } from '../dto/attribute';
import { Module } from '../dto/module';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-attribute-master',
  templateUrl: './attribute-master.component.html',
  styleUrls: ['./attribute-master.component.css']
})
export class AttributeMasterComponent implements OnInit {
  popUpMsg:string;
  moduleData : Module [] = []
  attributeData : Attribute [] = []
  attributeForm= new Attribute(0,0,0,"",0,0,0,"","",false,"","",0);
  constructor(private configService : ConfiguationService) { }

  ngOnInit() {
    this.refreshModules()
}


refreshModules(){
  this.configService.getAllModuleList().subscribe(
      response=> {this.moduleData =  response 
      }
    );
  }

  getModuleAttributes(moduleMasterId : number){
    
    this.configService.getModuleAttributes(moduleMasterId).subscribe(
        response=> {this.attributeData =  response 
          console.log(response);
        }
      );
    }
 add(){
   //console.log(this.moduleData);
    
 }
 closeModal(){
  this.attributeForm= new Attribute(0,0,0,"",0,0,0,"","",false,"","",0);
 }
 createAttribute(){
  
   this.configService.createAttributes(this.attributeForm).subscribe(
    response=> { 
      this.popUpMsg = "Module Created";
      this.getModuleAttributes(this.attributeForm.moduleMasterId);
    },
    error=>alert(error)
  );
 }
updateAttribute(){
  this.configService.updateAttribute(this.attributeForm).subscribe(
    success=>{
      this.popUpMsg = "Module Updated";
      this.getModuleAttributes(this.attributeForm.moduleMasterId);
      
    },
    error=>{
      this.popUpMsg = "Unable to create Module";

    }
    
    
  );
}
 deleteAttribute(attribute: Attribute){
  this.configService.deleteAttribute(attribute.attributeId).subscribe(
    success=>{
      this.popUpMsg = "Module Delete";
         console.log('deleloo');
    },
    error=>{
      this.popUpMsg = "Unable to create Module";
      this.getModuleAttributes(attribute.moduleMasterId);
      
    }
    
    
  );
 }

 showUpdate(attribute: Attribute){
  this.attributeForm= attribute;
 }
  moduleClicked(module : Module){
    this.attributeForm=new Attribute(0,module.companyId,module.moduleId,"",0,0,0,"","",false,"","",0);
   
    this.getModuleAttributes(module.moduleId)
  }
}
