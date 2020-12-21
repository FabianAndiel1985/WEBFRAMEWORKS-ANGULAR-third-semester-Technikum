import { User } from './types';
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

  signUpUser(user:User) {
    this.httpClient.post('https://useradministration-55705-default-rtdb.firebaseio.com/users.json',user).subscribe(response=> console.log(response))
  }

  deleteUser(index:string) {
    this.httpClient.delete(`https://useradministration-55705-default-rtdb.firebaseio.com/users/u${index}.json`).subscribe(response=>console.log(response));
  }

}
