import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnviarFormularioService } from '../../services/enviar-formulario.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviarFormularioService)
  meuBooleano:boolean = false;
  idButton = "btnTest"
  mostrarTitulo:boolean = false
  profissao:string = "desenvolvedor"
  listItems:string[] = ["feijao", "arroz", "macarrao"]
  car = {
    year:2010,
    model:'hb20',
    price:16000
  }



}
