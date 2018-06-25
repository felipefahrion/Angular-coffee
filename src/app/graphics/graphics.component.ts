import { Component, OnInit, Output, NgModule } from '@angular/core';
import { AppCrudComponent } from 'src/app/app-crud/app-crud.component';
import { CoffeCont } from 'src/app/app-crud/app.coffee-cont';
import { EventEmitter } from '@angular/core';
import { CoffeeContService } from 'src/app/coffee-cont.service';
import { BrowserModule } from '@angular/platform-browser';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'], 

})

@NgModule({
  bootstrap: [GraphicsComponent],
  declarations: [GraphicsComponent],
  imports: [BrowserModule]
})

export class GraphicsComponent implements OnInit {

  list : Array<CoffeCont>;
  //ctx:any;

  constructor (Contributions: CoffeeContService) {
    this.list = Contributions.getData();

  }
  
  ngOnInit() {
    var canvas : any = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");

    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});
  }

}
