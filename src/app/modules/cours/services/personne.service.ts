import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Personne2 } from 'src/app/interfaces/personne2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class PersonneService {
  private url = 'http://localhost:8000/api/personnes';
  headers : HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  getAllPersonnes() {
    return this.http
      .get<Array<Personne2>>(this.url, { headers: this.headers })
      .pipe(map((elt) => elt['hydra:member']));
  }
  addPersonne(personne: Personne2) {
    return this.http.post(this.url, personne);
  }
  deletePersonne(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  getById(id: number) {
    return this.http.get<Personne2>(this.url + '/' + id);
  }
  editPersonne(personne: Personne2) {
    return this.http.put(this.url + '/' + personne.id, personne);
  }
}
