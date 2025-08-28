import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnviarFormularioService } from '../../services/enviar-formulario.service';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, MatSidenavModule,  MatTooltipModule],
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

   funcionarios = [
  { nome: 'João da Silva', funcao: 'Líder Técnico', setor: 'Desenvolvimento', reacoes: ['😊', '👍', '🔥', '😎', '🌟'], analise: 'Proativo', pontos: 9.8 },
  { nome: 'Maria Souza', funcao: 'Analista de RH', setor: 'Recursos Humanos', reacoes: ['👏', '🌟', '😎', '💖', '😊'], analise: 'Amável', pontos: 9.5 },
  { nome: 'Carlos Lima', funcao: 'Designer', setor: 'Marketing', reacoes: ['💪', '✅', '🎯', '💡', '😄'], analise: 'Criativo', pontos: 9.3 },
  { nome: 'Fernanda Rocha', funcao: 'Desenvolvedora Front-end', setor: 'TI', reacoes: ['😊', '💪', '🎯', '🔥', '🌟'], analise: 'Resiliente', pontos: 9.2 },
  { nome: 'Lucas Almeida', funcao: 'Analista de Dados', setor: 'Business Intelligence', reacoes: ['📊', '👍', '🧠', '📈', '✅'], analise: 'Organizado', pontos: 8.7 },
  { nome: 'Aline Costa', funcao: 'Coordenadora de Projetos', setor: 'PMO', reacoes: ['👏', '🔥', '✅', '🎯', '😎'], analise: 'Colaborativo', pontos: 8.5 },
  { nome: 'Thiago Mendes', funcao: 'DevOps Engineer', setor: 'Infraestrutura', reacoes: ['💻', '⚙️', '✅', '🔌', '👍'], analise: 'Proativo', pontos: 8.2 },
  { nome: 'Patrícia Oliveira', funcao: 'UX Researcher', setor: 'Produto', reacoes: ['💡', '😄', '🌟', '😊', '🎯'], analise: 'Criativo', pontos: 8.1 },
  { nome: 'Bruno Henrique', funcao: 'Full Stack Dev', setor: 'Desenvolvimento', reacoes: ['🔥', '👌', '🎯', '💪', '😎'], analise: 'Resiliente', pontos: 7.9 },
  { nome: 'Juliana Ferreira', funcao: 'Recrutadora', setor: 'RH', reacoes: ['😊', '💖', '👏', '🌟', '😄'], analise: 'Amável', pontos: 7.7 },
  { nome: 'Rafael Teixeira', funcao: 'Analista Financeiro', setor: 'Financeiro', reacoes: ['📈', '✅', '🧮', '🧠', '👍'], analise: 'Organizado', pontos: 7.5 },
  { nome: 'Camila Borges', funcao: 'Scrum Master', setor: 'Agilidade', reacoes: ['🤝', '✅', '🔥', '😊', '👏'], analise: 'Colaborativo', pontos: 7.3 },
  { nome: 'Eduardo Nunes', funcao: 'QA Tester', setor: 'Qualidade', reacoes: ['🔍', '🧪', '👍', '🎯', '😎'], analise: 'Comprometido', pontos: 7.2 },
  { nome: 'Beatriz Ramos', funcao: 'Product Owner', setor: 'Produto', reacoes: ['🎯', '🌟', '📊', '💡', '📈'], analise: 'Organizado', pontos: 6.7 },
  { nome: 'Felipe Martins', funcao: 'Administrador de Redes', setor: 'Infraestrutura', reacoes: ['🔌', '💪', '✅', '⚙️', '💻'], analise: 'Resiliente', pontos: 6.5 }
];



getEmojiLabel(emoji: string): string {
  const mapa: Record<string, string> = {
  '😊': 'Simpático',
    '💪': 'Esforçado',
    '✅': 'Objetivo',
    '👌': 'Equilibrado',
    '🎯': 'Focado',
    '📊': 'Analítico',
    '🧠': 'Inteligente',
    '💻': 'Tecnológico',
    '⚙️': 'Engenhoso',
    '💡': 'Criativo',
    '😄': 'Brincalhão',
    '📈': 'Crescimento',
    '🧮': 'Financeiro',
    '🤝': 'Colaborativo',
    '🔍': 'Detalhista',
    '🧪': 'Experimental',
    '🔌': 'Conectado'
};

  return mapa[emoji] || 'Reação';
}

getAnaliseStyle(analise: string): any {
  const cores: Record<string, string> = {
    Proativo: '#90EE90',
    Criativo: '#f3d9fa',
    Resiliente: '#d1ebdf',
    Organizado: '#d0ebff',
    Comprometido: '#FF0000',
    Colaborativo: '#FFFFE0',
    Amável: '#DDA0DD'

  };

  const cor = cores[analise] || '#dee2e6';

  return {
    backgroundColor: cor,
    color: '#212529',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: '500'
  };
}





}
