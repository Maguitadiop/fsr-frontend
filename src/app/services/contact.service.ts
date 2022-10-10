import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public addContact(contact : Contact) : Observable<Contact>{
    return this.http.post<Contact>(`${this.apiServerUrl}/contact/add/`,contact);
  }

  public updateContact(contact :Contact): Observable<Contact>{
    return this.http.put<Contact>(`${this.apiServerUrl}/contact/update/`,contact);
  }

  public getContactList(): Observable<any> {  
    return this.http.get(`${this.apiServerUrl}`+'/contact/all');  
  }  

  public deleteContact(contactId:number): Observable<void> {
    return this.http.delete<any>(`${this.apiServerUrl}/contact/delete/${contactId}`);
  }
}
