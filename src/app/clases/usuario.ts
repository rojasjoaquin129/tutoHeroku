export class Usuario {
    nombre:string;
    edadUno:number;
    edadDos:number;


    constructor(edadUno:string,edadDos:string){
        this.nombre="natalia natalia";
        this.edadUno=Number(edadUno);
        this.edadDos=Number(edadDos);
    }

   

    Promedio (){
        return (this.edadUno+this.edadDos)/2;
    }
    
    suma(){
        return (this.edadUno+this.edadDos);
    }

}
