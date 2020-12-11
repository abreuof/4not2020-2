import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../software.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.scss']
})
export class SoftwareListComponent implements OnInit {

  // Nome da entidade no plural
  softwares : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'plataforma', 'categoria', 'data', 'preco', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private softwareSrv : SoftwareService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.softwares = await this.softwareSrv.listar()
    console.log(this.softwares)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.softwareSrv.excluir(id)
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