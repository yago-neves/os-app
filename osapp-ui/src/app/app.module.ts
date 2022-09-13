import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { CampoColoridoDirective } from './campo-colorido.directive'

import { AppComponent } from './app.component';
import { OrdemdeservicoModule } from './ordemdeservico/ordemdeservico.module';
import { EscolasModule } from './escolas/escolas.module';
import { TecnicosModule } from './tecnicos/tecnicos.module';
import { StatusOsModule } from './status-os/status-os.module';
import { CoreModule } from './core/core.module';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { OrdemdeservicoPesquisaComponent } from './ordemdeservico/ordemdeservico-pesquisa/ordemdeservico-pesquisa.component';
import { OrdemdeservicoCadastroComponent } from './ordemdeservico/ordemdeservico-cadastro/ordemdeservico-cadastro.component';
import { TecnicosPesquisaComponent } from './tecnicos/tecnicos-pesquisa/tecnicos-pesquisa.component';
import { TecnicosCadastroComponent } from './tecnicos/tecnicos-cadastro/tecnicos-cadastro.component';
import { EscolasPesquisaComponent } from './escolas/escolas-pesquisa/escolas-pesquisa.component';
import { EscolasCadastroComponent } from './escolas/escolas-cadastro/escolas-cadastro.component';
import { SegurancaModule } from './seguranca/seguranca.module';

registerLocaleData(localePt);
/* const routes: Routes = [
  { path: 'ordensdeservico', component: OrdemdeservicoPesquisaComponent },
  { path: 'ordensdeservico/nova', component: OrdemdeservicoCadastroComponent },
  { path: 'tecnicos', component: TecnicosPesquisaComponent },
  { path: 'tecnicos/novo', component: TecnicosCadastroComponent },
  { path: 'escolas', component: EscolasPesquisaComponent },
  { path: 'escolas/nova', component: EscolasCadastroComponent },
]*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    EscolasModule,
    TecnicosModule,
    OrdemdeservicoModule,
    StatusOsModule,
    SegurancaModule,

    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
