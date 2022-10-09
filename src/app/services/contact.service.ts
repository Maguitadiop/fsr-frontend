import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getContactList(): Observable<any> {  
    return this.http.get(`${this.apiServerUrl}`+'/find/all');  
  }  

  public deleteContact(contactId:number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/delete/${contactId}`);
  }
}
