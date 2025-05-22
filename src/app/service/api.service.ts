import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(API_URL);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  addUser(userData: any): Observable<any> {
    return this.http.post(API_URL, userData);
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, userData);
  }


  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
