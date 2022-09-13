import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Escola } from '../core/model';


export class EscolasFiltro {
  nome?: string;
  pagina: number = 0;
  itensPorPagina: number = 5;
}

@Injectable({
  providedIn: 'root'
})
export class EscolasServiceService {
  escolasUrl = 'http://localhost:8080/escolas';

  constructor(private http: HttpClient)  { }

  pesquisar(filtro: EscolasFiltro) : Promise<any> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    let params = new HttpParams()
                      .set('page', filtro.pagina)
                      .set('size', filtro.itensPorPagina);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }   

    return this.http.get(`${this.escolasUrl}`, { headers, params })
      .toPromise()
      .then((response : any) => {
        const escolas = response['content'];

        const resultado = {
          escolas,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  listarTodas() : Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.get(this.escolasUrl, { headers })
      .toPromise()
      .then((response: any) => response['content']);
  }

  excluir(codigo: number) : Promise<void> {    
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.delete<void>(`${this.escolasUrl}/${codigo}`, { headers }).toPromise();
  }
  adicionar(escola: Escola): Promise<Escola> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.post<Escola>(this.escolasUrl, escola, { headers })
      .toPromise();
  }

}