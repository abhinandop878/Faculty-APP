import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewFaculty=()=>{
    return this.http.get("http://localhost:8080/viewFaculty")
  }

  addFaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/addFaculty",data)
  }
}
