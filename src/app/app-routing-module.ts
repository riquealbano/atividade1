import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Temperatura } from './temperatura/temperatura';
import { Apolice } from './apolice/apolice';
import { Imc } from './imc/imc';
import { Calcular } from './calcular/calcular';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'temperatura', component: Temperatura},
  { path: 'apolice', component: Apolice},
  { path: 'imc', component: Imc},
  { path: 'calcular', component: Calcular}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
