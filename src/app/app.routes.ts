import { Routes } from '@angular/router';
import { PainelComponent } from './components/painel/painel.component';
import { FormsComponent } from './components/login/forms.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RecoveryPageComponent } from './components/recovery-page/recovery-page.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { ShellComponent } from './shared/shell/shell.component';

export const routes: Routes = [
   path: '',
    component: ShellComponent,
    canActivate: [canActivate],

    children: [
  { path: '', component: FormsComponent },
  { path: 'painel', component: PainelComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'recuperação', component: RecoveryPageComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },]
]

