import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/toPromise';
import { DatePipe } from '@angular/common';
import { Ordemdeservico } from '../core/model';

export class OrdemdeservicoFiltro {
  statusos?: string;
  assunto?: string;
  dataCriacao?: Date;
  escola?: string;
  pagina: number = 0;
  itensPorPagina: number = 5;
}


@Injectable({
  providedIn: 'root'
})
export class OrdemdeservicoService {
  ordensdeservicoUrl = 'http://localhost:8080/ordensdeservico';
  constructor(private http: HttpClient,
              private datePipe: DatePipe) { }

  pesquisar(filtro: OrdemdeservicoFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

      let params = new HttpParams()
                    .set('page', filtro.pagina)
                    .set('size', filtro.itensPorPagina);

      if (filtro.dataCriacao) {
        params = params.set('dataCriacao', this.datePipe.transform(filtro.dataCriacao, 'yyyy-MM-dd')!);
      }

      if (filtro.escola){
        params = params.set('escola', filtro.escola);

      }
      return this.http.get(`${this.ordensdeservicoUrl}?resumo`, { headers, params })
        .toPromise()
        .then((response: any) =>{
        const ordensdeservico = response['content'];

        const resultado = {
          ordensdeservico,
          total: response['totalElements']
        };
        return resultado;
        });
      }


      excluir ( codigo: number): Promise<void>{
        const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');
        
        return this.http.delete(`${this.ordensdeservicoUrl}/${codigo}`, { headers })
          .toPromise()
            .then(() =>{
              console.log('Excluido');
            }
          );
      }
      adicionar(ordemdeservico: Ordemdeservico): Promise<Ordemdeservico>{
        const headers = new HttpHeaders()
          .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
          .append('Content-Type', 'application/json');
        
          return this.http.post<Ordemdeservico>(this.ordensdeservicoUrl, ordemdeservico, { headers })
          .toPromise();
          
      }
      atualizar(ordemdeservico: Ordemdeservico): Promise<Ordemdeservico>{
        const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
        .append('Content-Type', 'application/json');
        return this.http.put<Ordemdeservico>(`${this.ordensdeservicoUrl}/${ordemdeservico.codigo}`, ordemdeservico, { headers })
          .toPromise();
      }
      buscarPorCodigo(codigo: number): Promise<Ordemdeservico>{
        const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');
        return this.http.get(`${this.ordensdeservicoUrl}/${codigo}`, { headers })
          .toPromise()
          .then((response:any) => {
            this.converterStringsParaDatas([response]);
            return response;
          });
      }
      private converterStringsParaDatas(ordensdeservico: any[]){
        for( const ordemdeservico of ordensdeservico){
            ordemdeservico.dataCriacao = new Date(ordemdeservico.dataCriacao);
          
            if (ordemdeservico.dataTermino){
            ordemdeservico.dataTermino = new Date(ordemdeservico.dataTermino);
          }
        }
      }

}
