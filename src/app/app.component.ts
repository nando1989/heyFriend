import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentDateComponent } from './components/parent-date/parent-date.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './components/login/forms.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HomeComponent,
    ParentDateComponent,
    FormsModule,
    FormsComponent,
     MatSlideToggleModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userName: string = 'Nando';

  userData = {
    email: 'joaqui@email.com',
    role: 'Dev',
  };

  imgLogin = 'assets/reactFriends.avif';

  public title: string = 'Primeiro APP em Angular';

  novoArray: [] = [];

  public subtitle: string = 'Testando e aprendendo Angular';

  contarCliques: number = 0;
  juntarPalavras: string = 'oi';

  cliquei() {
    this.contarCliques++;
    console.log('Clique detectado!', this.contarCliques);
  }
  zerei() {
    this.contarCliques = 0;
    console.log('Clique zerado!', this.contarCliques);
  }

  cliqueiComParametro(mensagem: string) {
    console.log('Mensagem:', mensagem);
  }

  nome = 'Nando'; // Usado na interpolação

  imagemUrl = 'https://placehold.co/100x100';
  // Property binding

  contador = 0; // Interpolação

  mensagem = ''; // Two-way binding

  cliqueSimples() {
    this.contador++;
  }

  cliqueComTexto(texto: string) {
    this.mensagem = texto;
  }
}
