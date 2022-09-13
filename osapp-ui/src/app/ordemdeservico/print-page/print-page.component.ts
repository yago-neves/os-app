import { Component, OnInit } from '@angular/core';
import { OrdemdeservicoService } from '../ordemdeservico.service';
import { Ordemdeservico } from 'src/app/core/model';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit {
  ordemdeservico = new Ordemdeservico;
  constructor(
    private ordemdeservicoService: OrdemdeservicoService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const codigoordemdeservico = this.route.snapshot.params['codigo'];
    if (codigoordemdeservico){
      this.carregarOrdemdeservico(codigoordemdeservico)
    }
  }
  carregarOrdemdeservico(codigo: number){
    this.ordemdeservicoService.buscarPorCodigo(codigo)
      .then(ordemdeservico =>{
        this.ordemdeservico = ordemdeservico;
      },
      erro => this.errorHandler.handle(erro));
  }

}
