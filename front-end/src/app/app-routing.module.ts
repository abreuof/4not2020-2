import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { VendedorListComponent } from './vendedor/vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './vendedor/vendedor-form/vendedor-form.component';
import { VendaListComponent } from './venda/venda-list/venda-list.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';
import { SoftwareListComponent } from './software/software-list/software-list.component';
import { SoftwareFormComponent } from './software/software-form/software-form.component';
import { JogoListComponent } from './jogo/jogo-list/jogo-list.component';
import { JogoFormComponent } from './jogo/jogo-form/jogo-form.component';
import { MusicaListComponent } from './musica/musica-list/musica-list.component';
import { MusicaFormComponent } from './musica/musica-form/musica-form.component';
import { FilmeListComponent } from './filme/filme-list/filme-list.component';
import { FilmeFormComponent } from './filme/filme-form/filme-form.component'



const routes: Routes = [
    // Nomes de rota no Angular (path) NÃO começam com uma barra
    { path: 'curso', component: CursoListComponent },
    { path: 'curso/novo', component: CursoFormComponent },
    { path: 'curso/:id', component: CursoFormComponent },

    { path: 'turma', component: TurmaListComponent },
    { path: 'turma/novo', component: TurmaFormComponent },
    { path: 'turma/:id', component: TurmaFormComponent},

    { path: 'vendedor', component: VendedorListComponent },
    { path: 'vendedor/novo', component: VendedorFormComponent },
    { path: 'vendedor/:id', component: VendedorFormComponent},

    { path: 'venda', component: VendaListComponent },
    { path: 'venda/novo', component: VendaFormComponent },
    { path: 'venda/:id', component: VendaFormComponent},

    { path: 'software', component: SoftwareListComponent },
    { path: 'software/novo', component: SoftwareFormComponent },
    { path: 'software/:id', component: SoftwareFormComponent},

    { path: 'jogo', component: JogoListComponent },
    { path: 'jogo/novo', component: JogoFormComponent },
    { path: 'jogo/:id', component: JogoFormComponent},

    { path: 'musica', component: MusicaListComponent },
    { path: 'musica/novo', component: MusicaFormComponent },
    { path: 'musica/:id', component: MusicaFormComponent},

    { path: 'filme', component: FilmeListComponent },
    { path: 'filme/novo', component: FilmeFormComponent },
    { path: 'filme/:id', component: FilmeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
