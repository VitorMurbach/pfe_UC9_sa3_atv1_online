import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './view/contato/contato.component';
import { HomeComponent } from './view/home/home.component';
import { JogosComponent } from './view/jogos/jogos.component';
import { PromocoesComponent } from './view/promocoes/promocoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent},
  { path: 'jogos', component: JogosComponent},
  { path: 'promocoes', component: PromocoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
