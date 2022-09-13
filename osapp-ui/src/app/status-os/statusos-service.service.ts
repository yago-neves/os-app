import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusosServiceService {
  statusosUrl = 'http://localhost:8080/statusos';

  constructor(private http: HttpClient) { }

  listarTodos(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.get(this.statusosUrl, { headers })
      .toPromise();
  }
}
