import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemdeservicoCadastroComponent } from './ordemdeservico-cadastro/ordemdeservico-cadastro.component';
import { OrdemdeservicoPesquisaComponent } from './ordemdeservico-pesquisa/ordemdeservico-pesquisa.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { RouterModule } from '@angular/router';
import { OrdemdeservicoCriarComponent } from './ordemdeservico-criar/ordemdeservico-criar.component';
import {NgxPrintModule} from 'ngx-print';
import { PrintPageComponent } from './print-page/print-page.component';
import { PrintDetailsComponent } from './print-details/print-details.component';
import { OrdemdeservicoRoutingModule } from './ordemdeservico-routing.module';

@NgModule({
  declarations: [
    OrdemdeservicoCadastroComponent,
    OrdemdeservicoPesquisaComponent,
    OrdemdeservicoCriarComponent,
    PrintPageComponent,
    PrintDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxPrintModule,
    OrdemdeservicoRoutingModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    SharedModule,
    MultiSelectModule,
    InputMaskModule
    
  ],
  exports: [  ]
})
export class OrdemdeservicoModule { }
