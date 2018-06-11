import { Component, OnInit } from '@angular/core';
import { CoffeCont } from './app.coffee-cont';


@Component({
  selector: 'app-app-crud',
  templateUrl: './app-crud.component.html',
  styleUrls: ['./app-crud.component.css']
})
export class AppCrudComponent implements OnInit {
  email:string;
  quat:number;
  constructor() { }

  ngOnInit() {
  }

  list = [
    new CoffeCont("felipe@lala.com", 12, new Date(2018,6,11)),
    new CoffeCont("gabriel@lala.com", 5, new Date(2018,6,11))
  ];

  onButtonClick():void{
    this.list.push(new CoffeCont("felipe@lala.com", 12, new Date(2018,6,11)));
    this.list.push(new CoffeCont("gabriel@lala.com", 5, new Date(2018,6,11)));
    alert(this.email);
  }

  submit():void{
    this.list.push(new CoffeCont(this.email,this.quat , new Date()));
    alert(this.email + " " + this.quat);
  }
 
  
}
