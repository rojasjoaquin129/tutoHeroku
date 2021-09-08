import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  edadUno:string='';
  edadDos:string='';
  myUsuario:any;
  resultado:string='';
  resultadoSuma:string='';
  calcular(){
    this.myUsuario=new Usuario(this.edadUno,this.edadDos);
    this.resultado=this.myUsuario.Promedio().toString();
    this.resultadoSuma=this.myUsuario.suma().toString();
  }
  limpiar(){
    this.edadUno='';
    this.edadDos='';
    this.myUsuario='';
    this.resultadoSuma='';
    this.resultado='';
  }
}
