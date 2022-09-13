import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolasCadastroComponent } from './escolas-cadastro/escolas-cadastro.component';
import { EscolasPesquisaComponent } from './escolas-pesquisa/escolas-pesquisa.component';




const routes: Routes = [

    { path: 'escolas/nova', component: EscolasCadastroComponent },
    { path: 'escolas', component: EscolasPesquisaComponent },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class TecnicosRoutingModule { }