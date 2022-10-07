import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers, ResponseCreateUser, RequestCreateUser, ResponseUser, RequestUpdateUser, ResponseUpdateUser } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }


  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  createUser(request: RequestCreateUser): Observable<ResponseCreateUser> {
    return this.http.post<ResponseCreateUser>(this.url, request);
  }

  getUser(id: string): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }

  updateUser(id: string, request: RequestUpdateUser): Observable<ResponseUpdateUser> {
    const _url = `${this.url}/${id}`;
    return this.http.put<ResponseUpdateUser>(_url, request);
  }

}
