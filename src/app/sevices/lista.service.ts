import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('https://api.github.com/users');
  }
}
