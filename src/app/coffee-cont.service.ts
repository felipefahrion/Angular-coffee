import { Injectable } from '@angular/core';
import { CoffeCont } from './app-crud/app.coffee-cont';
import { Chart } from './charts';

@Injectable({
  providedIn: 'root'
})
export class CoffeeContService {

  private data:Array<CoffeCont>=[
  
    new CoffeCont("felipe@lala.com", 12, new Date()),
    new CoffeCont("yasmin@lala.com", 100, new Date()),
    new CoffeCont("stella@lala.com", 78, new Date()),
    new CoffeCont("enrico@lala.com", 11, new Date()),
    new CoffeCont("gabriel@lala.com", 45, new Date())
  
  ];

  constructor() {console.log('Coffe-cont contruido') }
  
 public getData(): Array<CoffeCont>{
    return  this.data;
  }

}
