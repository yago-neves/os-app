import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EscolasCadastroComponent } from './escolas-cadastro/escolas-cadastro.component';
import { EscolasPesquisaComponent } from './escolas-pesquisa/escolas-pesquisa.component';
import { EscolasGridComponent } from './escolas-grid/escolas-grid.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EscolasPesquisaComponent,
    EscolasCadastroComponent,
    EscolasGridComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    EscolasCadastroComponent,
    EscolasPesquisaComponent
  ]
})
export class EscolasModule { }
