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
import { TecnicosCadastroComponent } from './tecnicos-cadastro/tecnicos-cadastro.component';
import { TecnicosPesquisaComponent } from './tecnicos-pesquisa/tecnicos-pesquisa.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TecnicosPesquisaComponent,
    TecnicosCadastroComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    
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
    TecnicosCadastroComponent,
    TecnicosPesquisaComponent
  ]
})
export class TecnicosModule { }
