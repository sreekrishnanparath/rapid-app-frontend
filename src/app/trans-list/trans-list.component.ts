import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ConfiguationService } from '../services/common/configuation.service';

function CreateTableFromJSON(data,resultMap) {


    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
          var current = [];
          if(resultMap.get(key)==null){
            current.push(data[i][key])
            resultMap.set(key, current);
          }else{            
            current = resultMap.get(key)
            current.push(data[i][key])
            resultMap.set(key, current);
          }
          
          
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
 chartFieldY : string
 chartFieldX: string
 chartFieldX1 : string
  resultMap: Map<string, []> = new Map<string, []>();

// Tuple type variable 
 resultData: [string, []][] = [["",[]]]

 public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels = []
  barChartLabelsFull=[]
 // barChartData : []
  //public barChartLabels = ['dundalk', 'lout'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
   {data: [1, 29, 29, 29], label: 'Series A'}
  ];

  doughnutChartLabels = [];
  doughnutChartData = [];
  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4']
  radarChartData = [
      {data: [120, 130, 180, 70], label: '2017'},
      {data: [90, 150, 200, 45], label: '2018'}
    ];
  //public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  //public radarChartData = [
  //  {data: [120, 130, 180, 70], label: '2017'},
  //  {data: [90, 150, 200, 45], label: '2018'}
 // ];
  public radarChartType = 'radar';

 polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
 polarAreaChartData = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private transService : ConfiguationService) { }

  ngOnInit() {
  
    this.transService.getAllTransaction().subscribe(
      response=> { this.data = response
        CreateTableFromJSON(this.data,this.resultMap);
        this.setDonutChartData();
        }
    );
    
  }

  setDonutChartData(){
    this.barChartLabelsFull = Array.from( this.resultMap.keys() );
      //console.log(this.resultMap);
  }

  updateChart2(){
    //console.log(this.barChartLabels)
    this.resultMap.forEach((key,value)=>{
      if(value==this.chartFieldX1){
        this.doughnutChartLabels =  key   
        this.doughnutChartData = key;   
      }
     
    })

  }

  updateBarChart(){
    //console.log(this.barChartLabels)
    this.resultMap.forEach((key,value)=>{
      if(value==this.chartFieldX){
        this.barChartData[0]['data'] = key
        this.barChartData[0]['label'] = value
        this.polarAreaChartData = key
      }
      if(value==this.chartFieldY){
        this.barChartLabels = []
        this.barChartLabels = key
        this.polarAreaChartLabels = []
        this.polarAreaChartLabels = key
        
      }
    })
  }

}
