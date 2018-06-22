import { Component, OnInit, Output, NgModule } from '@angular/core';
import { AppCrudComponent } from 'src/app/app-crud/app-crud.component';
import { CoffeCont } from 'src/app/app-crud/app.coffee-cont';
import { EventEmitter } from '@angular/core';
import { CoffeeContService } from 'src/app/coffee-cont.service';
import { BrowserModule } from '@angular/platform-browser';
import { Chart } from 'src/app/charts';

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

  constructor (Contributions: CoffeeContService) {
    this.list = Contributions.getData();

  }
  
  ngOnInit() {
  }

  chart = new Chart();
  
}
