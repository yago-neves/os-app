import { Component, OnInit, ViewChild } from '@angular/core';
import { TecnicosServiceService, TecnicoFiltro } from '../tecnicos-service.service';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-tecnicos-pesquisa',
  templateUrl: './tecnicos-pesquisa.component.html',
  styleUrls: ['./tecnicos-pesquisa.component.css']
})
export class TecnicosPesquisaComponent  {
  totalRegistros = 0;
  filtro = new TecnicoFiltro();
  tecnicos: any = [];
  @ViewChild('tabela') grid!: any;

  constructor(
    private tecnicoService: TecnicosServiceService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService
  ) { }
  pesquisar(pagina: number = 0): void {        
    this.filtro.pagina = pagina;
    
    this.tecnicoService.pesquisar(this.filtro)
      .then((dados: any) => {
        this.tecnicos = dados.tecnicos;
        this.totalRegistros = dados.total; 
      });
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(tecnico: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(tecnico);
      }
    });
  }
  excluir(pessoa: any) {

    this.tecnicoService.excluir(pessoa.codigo)
      .then(
        () => {
          this.grid.reset();

          this.messageService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso!' })
        }
      )
      .catch((error) => this.errorHandler.handle(error))
      
  }

  alternarStatus(tecnico: any): void {
    const novoStatus = !tecnico.ativo;

    this.tecnicoService.mudarStatus(tecnico.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        tecnico.ativo = novoStatus;
        this.messageService.add({ severity: 'success', detail: `Tecnico ${acao} com sucesso!` });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
