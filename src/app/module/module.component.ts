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

  constructor(private configService : ConfiguationService) { }

  ngOnInit() {
      this.refreshTasks()
  }

  
  refreshTasks(){
    this.configService.getAllModuleList().subscribe(
        response=> {this.moduleData =  response 
        }
      );
    }
  

}
