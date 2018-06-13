import { Component, OnInit, Input } from '@angular/core';
import { CoffeCont } from '../app-crud/app.coffee-cont';
import { CoffeeContService } from '../coffee-cont.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  list : Array<CoffeCont>;

  constructor (Contributions: CoffeeContService) {
    this.list = Contributions.getData(); 
  }
  ngOnInit() {
  }

  informarMaior():void{
    var listaSort = this.list.sort(
      function (a:CoffeCont, b:CoffeCont){
        return (a.quat > b.quat) ? -1 : 1;
      }
    );
    // return this.list[-1];
  }

  informarMenor():void{
    var listaSort = this.list.sort(
      function (a:CoffeCont, b:CoffeCont){
        return (a.quat < b.quat) ? -1 : 1;
      }
    );
    // return this.list[-1];
  }


}
