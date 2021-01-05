import { User } from './types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  userSubject = new BehaviorSubject(null);

  constructor(private httpClient:HttpClient) { }

  getAllUsers(): Observable<any> {
   return this.httpClient.get("https://useradministration-55705-default-rtdb.firebaseio.com/users.json")
  }

  getSpecificUser(id:string): Observable<any>{
    return this.httpClient.get(`https://useradministration-55705-default-rtdb.firebaseio.com/users/${id}.json`);
  }

  signUpUser(user:User):void {
    this.httpClient.post('https://useradministration-55705-default-rtdb.firebaseio.com/users.json',user).subscribe(response=> console.log(response))
  }

  deleteUser(index:string): Observable<any> {
   return this.httpClient.delete(`https://useradministration-55705-default-rtdb.firebaseio.com/users/${index}.json`);
  }

  public emitChosenUser(id:string):void {
    this.userSubject.next(id);
  }

 public updateUser(id:string,user:User):void {
    this.httpClient.put(`https://useradministration-55705-default-rtdb.firebaseio.com/users/${id}.json`,user).subscribe(response=>console.log(response));
  }

}
