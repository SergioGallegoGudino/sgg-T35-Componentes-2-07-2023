import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes-2-sgallego';

  // Creamos variables que muestren un mensaje de error

  nombreValido: string = "";
  emailValido:string = "";
  mensajeValido:string = "";
  respuestaValido:string = "";
  datos: any;
  
  // Creamos un metodo que compruebe si hemos rellenado los campos correactamente, pasandole los datos del formulario

  comprobar(form: any){
    // Creamos un validador auxiliar para asegurarnos de mostrar la información en caso de que se haya enviado correactamente
    let valido = true;
    // Comprobamos cada campo del formulario individualmente, buscando que se haya rellenado o completado correctamente
    // En caso negativo, modificaremos las variables Valido para que muestren un mensaje de error y cambiaremos la variable auxiliar a false
    if(form.nombre === ""){
      this.nombreValido = "Introduce un nombre válido";
      valido = false;
    } else{
      // En caso de que el campo esté correcto eliminaremos el mensaje de error
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
    // Comprobamos si todos los campos han sido introducidos correctamente. Si esto ocurre, mostraremos los datos por pantalla mediante la variable datos
    if(valido){
      this.datos = form;
    }
    // Finalmente dejaremos la variable valido en true de nuevo para la próxima revision
    valido = true;

  }

}
