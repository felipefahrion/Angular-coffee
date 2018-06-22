import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppCrudComponent } from 'src/app/app-crud/app-crud.component';
import { CoffeCont } from './app.coffee-cont';
import { CoffeeContService } from '../coffee-cont.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  list : Array<CoffeCont>;

  constructor (Contributions: CoffeeContService) {
    this.list = Contributions.getData(); 
  }
  
  @Output()
  delete = new EventEmitter<CoffeCont>();
  edit = new EventEmitter<CoffeCont>();

  ngOnInit() {
  }

  public deleteCoffee(CoffeCont):void{
      this.delete.emit(CoffeCont);
  }

  public editCoffee(CoffeCont):void{
    this.edit.emit(CoffeCont);
}

}
