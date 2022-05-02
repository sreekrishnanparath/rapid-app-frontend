import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Attribute } from '../dto/attribute';
import { Module } from '../dto/module';
import { ConfiguationService } from '../services/common/configuation.service';
import { constan } from './constant/constan';
@Component({
  selector: 'app-attribute-master',
  templateUrl: './attribute-master.component.html',
  styleUrls: ['./attribute-master.component.css']
})
export class AttributeMasterComponent implements OnInit {
  searchBox:string;
  popUpMsg: string;
  moduleData: Module[] = []
  attributeData: Attribute[] = []
  attributeForm = new Attribute(0, 0, 0, "", 0, 0, 0, "", "", false, "", "", 0, "");
  inputControlTypes = new constan().inputControlTypes;
  attributTypes = new constan().attributTypes;
  actionTypes = new constan().actionTypes;
  showBtn = false;
  singleModule:number;
  public dropDown = false;
  public showInput=true;
  public display = true;
  public lookUpRef: string[];
  public className="customBg"
   
  
  constructor(private configService: ConfiguationService) { }

  ngOnInit() {
    this.refreshModules()

  }


  refreshModules() {
    this.configService.getAllModuleList().subscribe(
      response => {
        this.moduleData = response
      }
    );
  }
  selectAtrribute(attr: string) {
  
    if (attr === "5") {
      this.showInput=false;
      this.showBtn = false;
      this.dropDown = true;
      this.configService.getLookUpRef().subscribe(
        response => {
          this.lookUpRef = response
        }
      );
    } else if(attr === "2"||attr === "6"||attr === "4") {
      this.dropDown = false;
      this.showBtn = true;
      this.showInput=false;
    }else if(attr === "1"||attr === "3"){
      this.dropDown = false;
      this.showBtn = false;
      this.showInput=true;
    }

   
  }
  getModuleAttributes(moduleMasterId: number) {

    this.configService.getModuleAttributes(moduleMasterId).subscribe(
      response => {
        this.attributeData = response
      }
    );
  }
  add() {
    //console.log(this.moduleData);

  }
  closeModal() {
    this.attributeForm = new Attribute(0, 0, 0, "", 0, 0, 0, "", "", false, "", "", 0, "");
  }
  createAttribute() {

    this.configService.createAttributes(this.attributeForm).subscribe(
      response => {
        this.popUpMsg = "Module Created";
        this.getModuleAttributes(this.attributeForm.moduleMasterId);
      },
      error => alert(JSON.stringify(error))
    );
  }

  updateAttribute() {
    this.configService.updateAttribute(this.attributeForm).subscribe(
      success => {
        this.popUpMsg = "Module Updated";
        this.getModuleAttributes(this.attributeForm.moduleMasterId);

      },
      error => {
        this.popUpMsg = "Unable to create Module";

      }


    );
  }
  deleteAttribute(attribute: Attribute) {
    this.configService.deleteAttribute(attribute.attributeId).subscribe(
      success => {
        this.popUpMsg = "Module Delete";
      },
      error => {
        this.popUpMsg = "Unable to create Module";
        this.getModuleAttributes(attribute.moduleMasterId);

      }


    );
  }

  showUpdate(attribute: Attribute) {
    this.selectAtrribute(attribute.inputControlType.toString());
    this.attributeForm = attribute;
    console.log(attribute)
    this.configService.getLookUpRef().subscribe(
      response => {
        this.lookUpRef = response
      }
    );
  }
  moduleClicked(module: Module) {
    this.attributeForm = new Attribute(0, module.companyId, module.moduleId, "", 0, 0, 0, "", "", false, "", "", 0, "");
    this.getModuleAttributes(module.moduleId)
    this.singleModule=module.moduleId;
  }
}
