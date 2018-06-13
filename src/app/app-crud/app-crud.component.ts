import { Component, OnInit, Input } from '@angular/core';
import { CoffeCont } from './app.coffee-cont';
import { CoffeeContService } from '../coffee-cont.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-crud',
  templateUrl: './app-crud.component.html',
  styleUrls: ['./app-crud.component.css']
})
export class AppCrudComponent implements OnInit {
  email:string;
  quat:number;
  
  @Input()
  listPai:Array<CoffeCont> = [];


  constructor (Contributions: CoffeeContService) {
    this.listPai = Contributions.getData(); 
  }

  ngOnInit() {
  }


  onButtonClick():void{
    this.listPai.push(new CoffeCont("felipe@lala.com", 12, new Date(2018,6,11)));
    this.listPai.push(new CoffeCont("gabriel@lala.com", 5, new Date(2018,6,11)));
  }

  submit():void{
    this.listPai.push(new CoffeCont(this.email,this.quat , new Date()));
    
  }

  deletar(CoffeCont):void{
    this.listPai.splice(this.listPai.indexOf(CoffeCont),1);
  }

  editar(CoffeCont):void{
    

  }
 
  
}
