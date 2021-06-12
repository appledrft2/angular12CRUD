import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  public url:string = "http://localhost:3001/";

  constructor(private http:HttpClient) { }

  getAllList(){
    return this.http.get<any>(this.url + "employees");
  }

  addFormData(data: any){
    return this.http.post<any>(this.url + "create",data);
  }
  getList(id: any){

     return this.http.get<any>(this.url + "employee/" + id);
  }
  updateFormData(data: any){
    return this.http.put<any>(this.url + "update",data);
  }

  deleteFormData(id: any){
    return this.http.delete<any>(this.url + "delete/" +id);
  }
}
