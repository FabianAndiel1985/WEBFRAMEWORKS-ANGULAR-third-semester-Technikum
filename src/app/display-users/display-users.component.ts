import { User } from './../types';
import { DisplayService } from './display.service';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  stateOptions: any[];
  users:any[];

  value1: string = "off";


  constructor(private primeNGConfig: PrimeNGConfig, private httpService:HttpService, private router:Router) {
    this.stateOptions = [
      { label: "Off", value: "off" },
      { label: "On", value: "on" }
    ];
  }

  ngOnInit():void {
    this.primeNGConfig.ripple = true;
  }

  public onToggle():void {
    if(this.value1 == "off") {
      this.value1 = "on";
      this.displayAllUsers();
    }
    else {
      this.value1 = "off";
    }
  }

  public displayAllUsers():void{
   this.httpService.getAllUsers()
   .pipe(
    map(response => this.transformToArray(response)
    )
  )
   .subscribe(response=>
    {this.users =  response}
   );
  }

  private transformToArray(responseData):User[]{
    let userArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          userArray.push({ ...responseData[key], id: key });
        }
      }
      return userArray;
  }

  public onDelete(event):void {
    let index = event.target.id;
    this.httpService.deleteUser(index).subscribe(response =>{
    this.displayAllUsers();
  } )
  }


  public filter(event):void{
    const searchterm = event.target.value.toLowerCase()
    this.httpService.getAllUsers()
   .pipe(
    map(response => this.transformToArray(response)
    )
  )
   .subscribe(response=>
    {
      let userArray =  response.filter(el=> el.lastname.toLowerCase().substring(0,searchterm.length)==searchterm);
      this.users =  userArray}
   );

  }

  public onEdit(event):void{
    let index = event.target.id;
    this.httpService.emitChosenUser(index);
    this.router.navigate(['./updateUserComponent']);
  }





}
