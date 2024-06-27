import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url="http://localhost:5000/api/user";

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  addUser(user:any):Observable<User>{
    return this.http.post<User>(this.url,user)
  }
  editUser(user:any):Observable<User>{
    return this.http.patch<User>(this.url,user)
  }
  delete(_id:string):Observable<User>{
    return this.http.delete<User>(this.url+"/"+_id)
  }
}
