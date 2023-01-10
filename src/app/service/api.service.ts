import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl:string="https://dummyjson.com/users"
  constructor(private http:HttpClient) { }

  apiCall(){
    return this.http.get(this.baseUrl)

  }
}
