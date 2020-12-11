import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.scss']
})
export class VendaListComponent implements OnInit {

  // Nome da entidade no plural
  vendas : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['data', 'vendedor', 'jogo', 'filme', 'musica', 'software', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private vendaSrv : VendaService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.vendas = await this.vendaSrv.listar()
    console.log(this.vendas)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.vendaSrv.excluir(id)
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