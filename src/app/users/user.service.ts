import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResult} from "../httpresult";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.url_api + '/users';
  constructor(private http: HttpClient) { }

  getAll() :Observable<HttpResult> {
    return this.http.get<HttpResult>(this.url);
  }

  delete(id: number): Observable<HttpResult> {
    return this.http.delete<HttpResult>(this.url + '/' + id + '/delete' )
  }

  add(data: any): Observable<HttpResult>{
    return this.http.post<HttpResult>(this.url + '/create', data );
  }

  findById(id: number): Observable<HttpResult>{
    return this.http.get<HttpResult>(this.url + '/' + id);
  }

  update(data: any, id: number): Observable<HttpResult>{
    return this.http.put<HttpResult>(this.url + '/' + id + '/update', data);
  }
}
