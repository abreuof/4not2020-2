import { Component, OnInit } from '@angular/core';
import { JogoService } from '../jogo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jogo-list',
  templateUrl: './jogo-list.component.html',
  styleUrls: ['./jogo-list.component.scss']
})
export class JogoListComponent implements OnInit {

  // Nome da entidade no plural
  jogos : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'plataforma', 'data', 'preco', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private jogoSrv : JogoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.jogos = await this.jogoSrv.listar()
    console.log(this.jogos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.jogoSrv.excluir(id)
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