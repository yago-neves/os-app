import { Component, OnInit, ViewChild } from '@angular/core';
import { EscolasFiltro, EscolasServiceService } from '../escolas-service.service';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-escolas-pesquisa',
  templateUrl: './escolas-pesquisa.component.html',
  styleUrls: ['./escolas-pesquisa.component.css']
})
export class EscolasPesquisaComponent implements OnInit {
  filtro = new EscolasFiltro()
  
  
  totalRegistros = 0;
  
  
  
  escolas: any[] = [];

  ngOnInit(){

    this.pesquisar();

  }


  @ViewChild('tabela') grid!: any;
  
  constructor(
    private escolaService: EscolasServiceService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService
  ) { }
  pesquisar(pagina: number = 0): void {        
    this.filtro.pagina = pagina;
    
    this.escolaService.pesquisar(this.filtro)
      .then((dados: any) => {
        this.escolas = dados.escolas;
        this.totalRegistros = dados.total; 
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }
  confirmarExclusao(escola: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(escola);
      }
    });
  }
  excluir(escola: any) {

    this.escolaService.excluir(escola.codigo)
      .then(
        () => {
          this.grid.reset();

          this.messageService.add({ severity: 'success', detail: 'Escola excluída com sucesso!' })
        }
      )
      .catch((error) => this.errorHandler.handle(error))
      
  }
}
