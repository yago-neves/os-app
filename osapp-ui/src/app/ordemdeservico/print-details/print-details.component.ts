import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { OrdemdeservicoService } from '../ordemdeservico.service';
import { Ordemdeservico } from 'src/app/core/model';

@Component({
  selector: 'app-print-details',
  templateUrl: './print-details.component.html',
  styleUrls: ['./print-details.component.css']
})
export class PrintDetailsComponent implements OnInit {
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