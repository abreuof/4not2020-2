import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './ui/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBarComponent } from './ui/header-bar/header-bar.component';
import {​​ MaterialModule }​​ from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
