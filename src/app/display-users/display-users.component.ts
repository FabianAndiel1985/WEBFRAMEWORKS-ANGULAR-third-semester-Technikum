import { DisplayService } from './display.service';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  stateOptions: any[];
  users:any[];

  value1: string = "off";


  constructor(private primeNGConfig: PrimeNGConfig, private httpService:HttpService, private displayService:DisplayService) {
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
   this.httpService.getAllUsers().subscribe(response=> this.users =  Object.keys(response)
   .map(function(key) {
       return response[key];
   }));
  }

  onDelete(event) {
    // Index rausholen
    let index = event.target.id;
    this.httpService.deleteUser(index);
    // Frage deleten von Array und Firebase?
  }





}
