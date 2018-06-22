export class CoffeCont{
    
    static lastId: number = 0;
    id:number=CoffeCont.lastId++;;
    email:string = null;
    quat:number;
    create: Date;

    
    constructor(_email="", _quant=0, _create: Date = new Date()){
        this.email = _email;
        this.quat = _quant;
        this.create = _create;
    }
        
        getEmail(){return this.email;}
        setEmail(email: string){this.email=email}
        getQuat(){return this.quat;}
        setQuat(quat: number){this.quat=quat}
        getDate(){return this.create;}
        setDate(date: Date){this.create=date}



}