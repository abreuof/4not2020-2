import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit {

  // Nome da entidade no plural
  filmes : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'data', 'preco', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private filmeSrv : FilmeService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.filmes = await this.filmeSrv.listar()
    console.log(this.filmes)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.filmeSrv.excluir(id)
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