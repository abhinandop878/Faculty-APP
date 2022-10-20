import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewFaculty=()=>{
    return this.http.get("")
  }

  addFaculty=(data:any)=>{
    return this.http.post("",data)
  }
}
