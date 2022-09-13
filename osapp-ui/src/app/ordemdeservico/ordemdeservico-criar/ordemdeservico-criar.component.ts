import { Component, OnInit } from '@angular/core';
import { OrdemdeservicoService } from '../ordemdeservico.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Ordemdeservico, Statusos } from 'src/app/core/model';
import { NgForm } from '@angular/forms';
import { EscolasServiceService } from 'src/app/escolas/escolas-service.service';
import { StatusosServiceService } from 'src/app/status-os/statusos-service.service';
import { TecnicosServiceService } from 'src/app/tecnicos/tecnicos-service.service';

@Component({
  selector: 'app-ordemdeservico-criar',
  templateUrl: './ordemdeservico-criar.component.html',
  styleUrls: ['./ordemdeservico-criar.component.css']
})
export class OrdemdeservicoCriarComponent implements OnInit {

  ordemdeservico = new Ordemdeservico();

  statusoss: any = [];
  escolas: any = [];
  tecnicos: any =[];

  constructor(
    private statusosService: StatusosServiceService,
    private escolaService: EscolasServiceService,
    private tecnicoService: TecnicosServiceService,
    private errorHandler: ErrorHandlerService,
    private ordemdeservicoService: OrdemdeservicoService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.carregarStatusos(),
    this.carregarEscolas(),
    this.carregarTecnicos()
  }
  carregarEscolas(){
    return this.escolaService.listarTodas()
    .then(escola =>{
      this.escolas = escola
      .map((e:any)=> ({label: e.nome, value: e.codigo}));

    })
    .catch(erro => this.errorHandler.handle(erro));
  }
  
  carregarStatusos(){
    return this.statusosService.listarTodos()
    .then(statusos =>{
      this.statusoss = statusos
      .map((s:any)=> ({label: s.nome, value: s.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarTecnicos(){
    return this.tecnicoService.listarTodos()
    .then(tecnico =>{
      this.tecnicos = tecnico
      .map((t:any)=> ({label: t.nome, value: t.codigo}));

    })
    .catch(erro => this.errorHandler.handle(erro));
  }
  salvar (form: NgForm){
    this.ordemdeservicoService.adicionar(this.ordemdeservico)
    .then(() => {
      this.messageService.add({ severity: 'success', detail: 'Ordem de serviço adicionada com sucesso!' });

      form.reset();
      this.ordemdeservico = new Ordemdeservico();
    })
    .catch(erro => this.errorHandler.handle(erro));
  }
  novo(ordemdeservicoForm: NgForm) {
    ordemdeservicoForm.reset(new Ordemdeservico);

    this.router.navigate(['ordensdeservico/nova']);
  }
}
