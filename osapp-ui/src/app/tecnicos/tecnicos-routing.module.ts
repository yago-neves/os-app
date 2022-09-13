import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecnicosCadastroComponent } from './tecnicos-cadastro/tecnicos-cadastro.component';
import { TecnicosPesquisaComponent } from './tecnicos-pesquisa/tecnicos-pesquisa.component';



const routes: Routes = [

    { path: 'tecnicos/novo', component: TecnicosCadastroComponent },
    { path: 'tecnicos', component: TecnicosPesquisaComponent },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class TecnicosRoutingModule { }