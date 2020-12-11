import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.scss']
})
export class VendedorListComponent implements OnInit {

  // Nome da entidade no plural
  vendedors : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'rg', 'telefone', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private vendedorSrv : VendedorService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.vendedors = await this.vendedorSrv.listar()
    console.log(this.vendedors)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.vendedorSrv.excluir(id)
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