import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-forms',
  imports: [FormsModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  email: string = '';
  password: string = '';
  imgLogin = 'assets/reactFriends.avif';

  constructor(private router: Router) {}

  handleLogin() {
    if (this.email === 'email@teste.com' && this.password === '1234') {
      // Armazena o usuário logado
      localStorage.setItem('usuario', this.email);

      this.router.navigate(['/painel']);
      console.log('logando...');
    } else {
      alert('Credenciais inválidas!');
      console.log('Credenciais inválidas!');
    }
  }

  handleCreate() {
    this.router.navigate(['/cadastro']);
    console.log('direcionando...');
  }
}

