export class CoffeCont{
    
    static lastId: number = 0;
    id:number=CoffeCont.lastId++;;
    email:string = null;
    quat:number;
    create: Date;

    constructor(_email, _quant, _create: Date = new Date()){
            this.email = _email;
            this.quat = _quant;
            this.create = _create;
        }
    



}