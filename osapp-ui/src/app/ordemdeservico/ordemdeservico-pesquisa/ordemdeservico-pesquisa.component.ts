import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemdeservicoService, OrdemdeservicoFiltro } from '../ordemdeservico.service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-ordemdeservico-pesquisa',
  templateUrl: './ordemdeservico-pesquisa.component.html',
  styleUrls: ['./ordemdeservico-pesquisa.component.css']
})
export class OrdemdeservicoPesquisaComponent implements OnInit{
  filtro = new OrdemdeservicoFiltro();
  
  totalRegistros: number = 0

  /*statusos?: string;
  assunto?: string;
  dataCriacao?: Date;
  escola?: string; */

  ordensdeservico: any[] = [];

  @ViewChild('tabela') grid!: Table;
  
  constructor (
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private ordemdeservicoService: OrdemdeservicoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ) { }
  
  ngOnInit(){
    this.pesquisar();
  }
  pesquisar(pagina: number = 0): void{
    this.filtro.pagina = pagina;

    this.ordemdeservicoService.pesquisar(this.filtro)
    .then((resultado: any)=> {
      this.ordensdeservico = resultado.ordensdeservico;
      this.totalRegistros = resultado.total;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }
    /*const filtro: OrdemdeservicoFiltro = {
      statusos: this.statusos,
      assunto: this.assunto,
      escola: this.escola,
      dataCriacao: this.dataCriacao 
    }
    this.ordemdeservicoservice.pesquisar(filtro)
    .then(ordensdeservico => this.ordensdeservico = ordensdeservico)
    */
  
  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event!.first! /event!.rows!;
    this.pesquisar(pagina);
  }
  confirmarExclusao(ordemdeservico: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(ordemdeservico);
      }
    });
  }
  excluir (ordemdeservico: any){
    
    this.ordemdeservicoService.excluir(ordemdeservico.codigo)
      .then(() => {
      if (this.grid.first === 0){
        this.pesquisar();
      }else {
        this.grid.reset();
      }
        this.messageService.add({severity: 'success', detail: 'Ordem de servico excluida com sucesso'})
      })
      .catch(erro => this.errorHandler.handle(erro));;
  }

  temPermissao(permissao: string) {
    return this.auth.temPermissao(permissao);
  }
}
