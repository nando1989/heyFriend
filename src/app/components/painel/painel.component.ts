import { Component, OnInit } from '@angular/core';
import { EnviarFormularioService } from '../../services/enviar-formulario.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-painel',
  imports: [CommonModule, MatCardModule, MatSidenavModule,  MatTooltipModule, HomeComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss',
})
export class PainelComponent implements OnInit {

  usuario: string | null = '';
  dados: any;

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario');
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

