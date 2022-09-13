import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdemdeservicoPesquisaComponent } from './ordemdeservico-pesquisa/ordemdeservico-pesquisa.component';
import { OrdemdeservicoCadastroComponent } from './ordemdeservico-cadastro/ordemdeservico-cadastro.component';
import { PrintPageComponent } from './print-page/print-page.component';
import { PrintDetailsComponent } from './print-details/print-details.component';
import { OrdemdeservicoCriarComponent } from './ordemdeservico-criar/ordemdeservico-criar.component';



const routes: Routes = [
    { path: 'ordensdeservico', component: OrdemdeservicoPesquisaComponent },
    { path: 'ordensdeservico/nova', component: OrdemdeservicoCriarComponent },
    { path: 'ordensdeservico/criar', component: OrdemdeservicoCadastroComponent },
    { path: 'ordensdeservico/:codigo', component: OrdemdeservicoCadastroComponent },
    { path: 'ordensdeservico/print/', component: PrintPageComponent },
    { path: 'ordensdeservico/detalhes', component: PrintDetailsComponent },
    { path: 'ordensdeservico/detalhes/:codigo', component: PrintDetailsComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class OrdemdeservicoRoutingModule { }