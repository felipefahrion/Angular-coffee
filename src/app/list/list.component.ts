import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppCrudComponent } from 'src/app/app-crud/app-crud.component';
import { CoffeCont } from './app.coffee-cont';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input()
  list = [];

  @Output()
  delete = new EventEmitter<CoffeCont>();

  ngOnInit() {
  }

  public deleteCoffee(CoffeCont):void{
      this.delete.emit(CoffeCont);
  }

}
