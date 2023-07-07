import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes-2-sgallego';
  nombreValido: string = "";
  emailValido:string = "";
  mensajeValido:string = "";
  respuestaValido:string = "";
  datos: any;
  
  comprobar(form: any){
    let valido = true;

    if(form.nombre === ""){
      this.nombreValido = "Introduce un nombre válido";
      valido = false;
    } else{
      this.nombreValido = "";
    }

    if(form.email === ""){
      this.emailValido = "Introduce una dirección de correo válida";
      valido = false;
    } else{
      this.emailValido = "";
    }

    if(form.mensaje === ""){
      this.mensajeValido = "Introduce un mensaje válido";
      valido = false;
    } else{
      this.mensajeValido = "";
    }

    if(form.validador != 5){
      this.respuestaValido = "Introduce una respuesta válida";
      valido = false;
    } else{
      this.respuestaValido = "";
    }

    if(valido){
      console.log("q");
      this.datos = form;
    }

    valido = true;

  }

}
