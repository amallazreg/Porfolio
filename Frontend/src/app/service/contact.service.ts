import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = environment.apiUrl;  // Optionnel, pour plus de clarté

  constructor(private http: HttpClient) {}

  sendMessage(data: any): Observable<any> {
    // Envoie vers l’URL correcte en production ou en dev
    return this.http.post(`${this.apiUrl}/send-email`, data);
  }
}
