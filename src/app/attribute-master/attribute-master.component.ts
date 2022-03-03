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

  moduleData : Module [] = []
  attributeData : Attribute [] = []
  
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
        }
      );
    }

  moduleClicked(module : Module){
    //alert("refresh")
    this.getModuleAttributes(module.moduleId)
  }
}
