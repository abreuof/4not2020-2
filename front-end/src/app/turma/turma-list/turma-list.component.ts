import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.scss']
})
export class TurmaListComponent implements OnInit {

  // Nome da entidade no plural
  turmas : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'curso', 'professor', 'dias_semana', 'horario', 'sala_aula', 'periodo', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private turmaSrv : TurmaService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.turmas = await this.turmaSrv.listar()
    console.log(this.turmas)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.turmaSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }

}