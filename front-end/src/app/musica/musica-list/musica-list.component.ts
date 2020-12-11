import { Component, OnInit } from '@angular/core';
import { MusicaService } from '../musica.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-musica-list',
  templateUrl: './musica-list.component.html',
  styleUrls: ['./musica-list.component.scss']
})
export class MusicaListComponent implements OnInit {

  // Nome da entidade no plural
  musicas : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'carga_horaria', 'nivel', 'valor_musica', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private musicaSrv : MusicaService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.musicas = await this.musicaSrv.listar()
    console.log(this.musicas)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.musicaSrv.excluir(id)
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