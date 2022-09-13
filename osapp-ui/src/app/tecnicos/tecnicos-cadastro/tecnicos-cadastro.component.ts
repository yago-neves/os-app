import { Component, OnInit } from '@angular/core';
import { Tecnico } from 'src/app/core/model';
import { TecnicosServiceService } from '../tecnicos-service.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tecnicos-cadastro',
  templateUrl: './tecnicos-cadastro.component.html',
  styleUrls: ['./tecnicos-cadastro.component.css']
})
export class TecnicosCadastroComponent implements OnInit {

  tecnico = new Tecnico();

  constructor(
    private tecnicoService: TecnicosServiceService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService
  ){}

  ngOnInit(): void {
  }
  salvar(form: NgForm) {
    this.tecnicoService.adicionar(this.tecnico)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });

        form.reset();
        this.tecnico = new Tecnico();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
