import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent {
  @Input() nombreValido: string | undefined;
  @Input() emailValido: string | undefined;
  @Input() mensajeValido: string | undefined;
  @Input() respuestaValido: string | undefined;
  @Input() datos: any;
  
}
