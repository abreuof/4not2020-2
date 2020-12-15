import { JogoService } from './../../jogo/jogo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VendaService } from '../venda.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VendedorService } from 'src/app/vendedor/vendedor.service';
import { MusicaService } from 'src/app/musica/musica.service';
import { SoftwareService } from 'src/app/software/software.service';
import { FilmeService } from 'src/app/filme/filme.service';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.scss']
})
export class VendaFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  venda : any = {}  // Objeto vazio, nome no SINGULAR

  title : string = 'Nova venda'

  // Variáveis para armazenar as listagens de objetos relacionados
  vendedores : any = []   // Vetor vazio, nome no PLURAL
  musicas : any = []
  filmes : any = []
  jogos : any = []
  softwares : any = []  

  constructor(
    private vendaSrv : VendaService,
    private vendedorSrv : VendedorService,
    private jogoSrv : JogoService,
    private filmeSrv : FilmeService,
    private musicaSrv : MusicaService,
    private softwareSrv : SoftwareService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.venda = await this.vendaSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando venda'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
    // Carrega as listagens das entidades relacionadas
    this.carregarDados()
  }

  async carregarDados() {
    try {
      this.softwares = await this.softwareSrv.listar()
      this.filmes = await this.filmeSrv.listar()
      this.jogos = await this.jogoSrv.listar()
      this.softwares = await this.softwareSrv.listar()
      this.musicas = await this.musicaSrv.listar()
      this.vendedores = await this.vendedorSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o venda já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.venda._id) {
          await this.vendaSrv.atualizar(this.venda) // Atualização
        }
        else {
          await this.vendaSrv.novo(this.venda)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}