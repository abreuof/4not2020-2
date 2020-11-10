import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {
  
  // Variável para armazenar os dados do registro
  curso : any = {} // Objeto vazio, nome no SINGULAR

  niveis : any = [
      { valor: 'Básico' },
      { valor: 'Intermediário'},
      { valor: 'Avançado'}
  ]

  title : string = 'Novo curso'

  constructor() { }

  ngOnInit(): void {
  }

}
