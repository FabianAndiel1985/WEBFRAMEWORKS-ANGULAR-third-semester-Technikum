import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers() {
   return this.httpClient.get("https://useradministration-55705-default-rtdb.firebaseio.com/users.json")
  }

}
