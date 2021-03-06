import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// No app.module.ts
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { FilmeListComponent } from './filme/filme-list/filme-list.component';
import { JogoListComponent } from './jogo/jogo-list/jogo-list.component';
import { MusicaListComponent } from './musica/musica-list/musica-list.component';
import { SoftwareListComponent } from './software/software-list/software-list.component';
import { VendaListComponent } from './venda/venda-list/venda-list.component';
import { VendedorListComponent } from './vendedor/vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './vendedor/vendedor-form/vendedor-form.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';
import { SoftwareFormComponent } from './software/software-form/software-form.component';
import { JogoFormComponent } from './jogo/jogo-form/jogo-form.component';
import { MusicaFormComponent } from './musica/musica-form/musica-form.component';
import { FilmeFormComponent } from './filme/filme-form/filme-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    CursoListComponent,
    CursoFormComponent,
    TurmaListComponent,
    TurmaFormComponent,
    FilmeListComponent,
    JogoListComponent,
    MusicaListComponent,
    SoftwareListComponent,
    VendaListComponent,
    VendedorListComponent,
    VendedorFormComponent,
    VendaFormComponent,
    SoftwareFormComponent,
    JogoFormComponent,
    MusicaFormComponent,
    FilmeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
  // No app.module.ts, dentro seção providers
  /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  /**********************************************/ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }