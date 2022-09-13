import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { EscolasPesquisaComponent } from './escolas/escolas-pesquisa/escolas-pesquisa.component';
import { TecnicosPesquisaComponent } from './tecnicos/tecnicos-pesquisa/tecnicos-pesquisa.component';
import { TecnicosCadastroComponent } from './tecnicos/tecnicos-cadastro/tecnicos-cadastro.component';
import { EscolasCadastroComponent } from './escolas/escolas-cadastro/escolas-cadastro.component';
import { OrdemdeservicoCadastroComponent } from './ordemdeservico/ordemdeservico-cadastro/ordemdeservico-cadastro.component';
import { OrdemdeservicoPesquisaComponent } from './ordemdeservico/ordemdeservico-pesquisa/ordemdeservico-pesquisa.component';
import { OrdemdeservicoCriarComponent } from './ordemdeservico/ordemdeservico-criar/ordemdeservico-criar.component';
import { PrintDetailsComponent } from './ordemdeservico/print-details/print-details.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { PrintPageComponent } from './ordemdeservico/print-page/print-page.component';

const routes: Routes = [
/*  { path: 'ordensdeservico', component: OrdemdeservicoPesquisaComponent },
  { path: 'ordensdeservico/detalhes', component: PrintDetailsComponent },
  { path: 'ordensdeservico/detalhes/:codigo', component: PrintDetailsComponent },
  { path: 'ordensdeservico/nova', component: OrdemdeservicoCriarComponent },
  { path: 'ordensdeservico/editar', component: OrdemdeservicoCadastroComponent },
  { path: 'ordensdeservico/:codigo', component: OrdemdeservicoCadastroComponent },
  { path: 'tecnicos', component: TecnicosPesquisaComponent },
  { path: 'tecnicos/novo', component: TecnicosCadastroComponent },
  { path: 'escolas', component: EscolasPesquisaComponent },
  { path: 'escolas/nova', component: EscolasCadastroComponent }*/
  { path: '', redirectTo: 'ordensdeservico', pathMatch: 'full' },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: 'escolas', component: EscolasPesquisaComponent },
  { path: 'escolas/nova', component: EscolasCadastroComponent },
  { path: 'tecnicos', component: TecnicosPesquisaComponent },
  { path: 'ordensdeservico/detalhes', component: PrintDetailsComponent },
  { path: 'ordensdeservico/print', component: PrintPageComponent },
  { path: 'ordensdeservico/detalhes/:codigo', component: PrintDetailsComponent},
  { path: 'tecnicos/novo', component: TecnicosCadastroComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
