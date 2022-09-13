import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Escola } from 'src/app/core/model';
import { EscolasServiceService } from '../escolas-service.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-escolas-cadastro',
  templateUrl: './escolas-cadastro.component.html',
  styleUrls: ['./escolas-cadastro.component.css']
})
export class EscolasCadastroComponent implements OnInit {

  escola = new Escola;
  constructor(
    private escolaService: EscolasServiceService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService) {   }

  ngOnInit() {
  }
  salvar(form: NgForm) {
    this.escolaService.adicionar(this.escola)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Escola adicionada com sucesso!' });

        form.reset();
        this.escola = new Escola();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
