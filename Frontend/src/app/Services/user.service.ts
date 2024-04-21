import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : String = 'http://localhost:8080/api';
  fullname = localStorage.getItem('firstname')+' '+localStorage.getItem('lastname')



  constructor(private http :HttpClient) { }

  
}
