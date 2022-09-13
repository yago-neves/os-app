import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Tecnico } from '../core/model';


export class TecnicoFiltro{
  nome?: string;
  pagina: number = 0;
  itensPorPagina: number = 5;
}

@Injectable({
  providedIn: 'root'
})
export class TecnicosServiceService {
  tecnicosUrl = 'http://localhost:8080/tecnicos';

  constructor(private http: HttpClient)  { }

  pesquisar(filtro: TecnicoFiltro) : Promise<any> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    let params = new HttpParams()
                      .set('page', filtro.pagina)
                      .set('size', filtro.itensPorPagina);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }
    return this.http.get(`${this.tecnicosUrl}`, { headers, params })
      .toPromise()
      .then((response : any) => {
        const tecnicos = response['content'];

        const resultado = {
          tecnicos,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  listarTodos() : Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.get(this.tecnicosUrl, { headers })
      .toPromise()
      .then((response: any) => response['content']);
  }

  excluir(codigo: number) : Promise<void> {    
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.delete<void>(`${this.tecnicosUrl}/${codigo}`, { headers }).toPromise();
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.put<void>(`${this.tecnicosUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise();
  }  
  adicionar(tecnico: Tecnico): Promise<Tecnico> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.post<Tecnico>(this.tecnicosUrl, tecnico, { headers })
      .toPromise();
  }

}