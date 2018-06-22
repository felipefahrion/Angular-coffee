import { Component, OnInit } from '@angular/core';
import { CoffeeContService } from '../coffee-cont.service';
import { CoffeCont } from '../app-crud/app.coffee-cont';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list : Array<CoffeCont>;

  constructor (Contributions: CoffeeContService) {
    this.list = Contributions.getData();

  }

  ngOnInit() {
  }

}
