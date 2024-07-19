import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class P003Service {
  private apiUrl = 'URL_DEL_BACKEND/api/contracts'; // Reemplaza 'URL_DEL_BACKEND' con la URL real de tu backend

  constructor(private http: HttpClient) {}

  getContracts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updatePaymentStatus(contractId: number, paid: boolean): Observable<any> {
    const url = `${this.apiUrl}/${contractId}`;
    return this.http.put<any>(url, { paid });
  }
}
