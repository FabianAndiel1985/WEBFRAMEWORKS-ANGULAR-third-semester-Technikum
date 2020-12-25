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


  constructor(private primeNGConfig: PrimeNGConfig, private httpService:HttpService, private displayService:DisplayService,private router:Router) {
    this.stateOptions = [
      { label: "Off", value: "off" },
      { label: "On", value: "on" }
    ];
  }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  onToggle() {
    if(this.value1 == "off") {
      this.value1 = "on";
      this.displayAllUsers();
    }
    else {
      this.value1 = "off";
    }
  }

  displayAllUsers(){

    // VALIDIEREN OB RESPONSE NULL IST ODER NICHT

   this.httpService.getAllUsers()
   .pipe(
    map(responseData => {
      let userArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          userArray.push({ ...responseData[key], id: key });
        }
      }
      return userArray;
    })
  )
   .subscribe(response=>
    {this.users =  response}
   );

  }

  onDelete(event) {
    let index = event.target.id;
    this.httpService.deleteUser(index);
    this.displayAllUsers();
  }

  onEdit(event){
    let index = event.target.id;
    console.log(index);
    this.httpService.emitChosenUser(index);
    this.router.navigate(['./updateUserComponent']);
  }





}
