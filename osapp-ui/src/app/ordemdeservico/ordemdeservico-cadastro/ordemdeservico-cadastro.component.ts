import { NgForm } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/error-handler.service'; 
import { Ordemdeservico } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { OrdemdeservicoService } from '../ordemdeservico.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolasServiceService } from 'src/app/escolas/escolas-service.service';
import { TecnicosServiceService } from 'src/app/tecnicos/tecnicos-service.service';
import { StatusosServiceService } from 'src/app/status-os/statusos-service.service';
@Component({
  selector: 'app-ordemdeservico-cadastro',
  templateUrl: './ordemdeservico-cadastro.component.html',
  styleUrls: ['./ordemdeservico-cadastro.component.css']
})
export class OrdemdeservicoCadastroComponent implements OnInit {
  ordemdeservico = new Ordemdeservico();

  tecnicos: any = [];
  statusoss: any = [];
  escolas: any = [];

  constructor(
    private statusosService: StatusosServiceService,
    private tecnicoService: TecnicosServiceService,
    private escolaService: EscolasServiceService,
    private errorHandler: ErrorHandlerService,
    private ordemdeservicoService: OrdemdeservicoService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const codigoordemdeservico = this.route.snapshot.params['codigo'];
    if (codigoordemdeservico){
      this.carregarOrdemdeservico(codigoordemdeservico)
    }
    this.carregarEscolas()
    this.carregarTecnicos()
    this.carregarStatusos()
  }
  get editando(){
    return Boolean(this.ordemdeservico.codigo)
  }
  carregarOrdemdeservico(codigo: number){
    this.ordemdeservicoService.buscarPorCodigo(codigo)
      .then(ordemdeservico =>{
        this.ordemdeservico = ordemdeservico;
      },
      erro => this.errorHandler.handle(erro));
  }
  carregarTecnicos(){
    return this.tecnicoService.listarTodos()
    .then(tecnico =>{
      this.tecnicos = tecnico
      .map((t:any)=> ({label: t.nome, value: t.codigo}));

    })
    .catch(erro => this.errorHandler.handle(erro));
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
