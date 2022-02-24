import { Component, OnInit } from '@angular/core';
import { ConfiguationService } from '../services/common/configuation.service';

function CreateTableFromJSON(data) {


    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.setAttribute('class', 'table table-bordered  table-sm');
    
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        tr.style.backgroundColor = "#1ABC9C";
        tr.style.color = "white";
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

@Component({
  selector: 'app-trans-list',
  templateUrl: './trans-list.component.html',
  styleUrls: ['./trans-list.component.css']
})
export class TransListComponent implements OnInit {

data:  any;
 headers: string[] = [];

  constructor(private transService : ConfiguationService) { }

  ngOnInit() {
  
    this.transService.getAllTransaction().subscribe(
      response=> { this.data = response
        CreateTableFromJSON(this.data);
        }
      
    );
  }

}
