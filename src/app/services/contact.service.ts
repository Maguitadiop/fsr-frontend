import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Contact} from '../models/contact.model';

const url = 'http://localhost:8080/carnetContac/';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(data:any): Observable<any> {
    return this.http.post(url, data);
  }

  updateContact(id:any, data:any): Observable<any> {
    return this.http.put('${url}/${id}', data);
  }

  deleteContact(id:any): Observable<any> {
    return this.http.delete('${url}/${id}');
  }
}
