import { Component, OnInit } from '@angular/core';
import { SinglePropOffsetValuesIndex } from '@angular/core/src/render3/interfaces/styling';
import { Lookup } from '../dto/lookup';
import { Module } from '../dto/module';
import { ConfiguationService } from '../services/common/configuation.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  lookupData : Lookup [] = []
  lookupRefs : String [] = []
  newLookup : Lookup = new Lookup (0,1,"","","created",false);
  searchBox : string ; 
  popUpMsg =null;
  searchText : string ="";
  constructor(private configService : ConfiguationService) { }


  ngOnInit() {
    this.refreshTasks()
    this.getLookupRefIds()
}


  resetPopUpMsg()
  {
    this.popUpMsg = null;
  }

  showUpdate(lookup: Lookup){
    this.newLookup = lookup;
  }
  
  closeModal(){
    this.newLookup = new Lookup (0,1,"","","created",false);
  }

  updateLookup(){
    this.configService.updatLookup(this.newLookup).subscribe(
      success=>{
        this.popUpMsg = "Lookup Created";
        this.refreshTasks();
      },
      error=>{
        this.popUpMsg = "Unable to create Lookup";
      }
    );
  }

  refreshTasks(){
    this.configService.getAllLookupList().subscribe(
        response=> {this.lookupData =  response 
        }
      );
      console.log( "lookupData  : "+this.lookupData);
    }


    createLookup(){
    this.configService.createLookup(this.newLookup).subscribe(
      success=>{
        this.popUpMsg = "Lookup Created";
        this.refreshTasks();
        
      },
      error=>{
        this.popUpMsg = "Unable to create Lookup";

      }
      
      
    );

  }

  deleteModule(lookupId:number){
    
    this.configService.deleteLookup(lookupId).subscribe(
      success=>{
         this.popUpMsg = "Lookup Delete";
           console.log('Lookup');
      },
      error=>{
        this.popUpMsg = "Unable to Delete Lookup";
        this.refreshTasks();
        
      }
      
      
    );
  }

  getLookupRefIds(){
    this.configService.getLookupRefIds().subscribe(
        response=> {this.lookupRefs =  response 
        }
      );
      console.log( "getLookupRefIds  : "+this.lookupRefs);
    }


}
