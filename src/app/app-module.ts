import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Calcular } from './calcular/calcular';
import { Apolice } from './apolice/apolice';
import { Temperatura } from './temperatura/temperatura';
import { Imc } from './imc/imc';
import { Home } from './home/home';
import { MenuSuperior } from './menu-superior/menu-superior';

@NgModule({
  declarations: [
    App,
    Calcular,
    Apolice,
    Temperatura,
    Imc,
    Home,
    MenuSuperior
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
