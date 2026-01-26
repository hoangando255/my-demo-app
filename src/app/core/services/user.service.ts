import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl =  'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<any[]>(this.apiUrl, {headers});
  }
}
