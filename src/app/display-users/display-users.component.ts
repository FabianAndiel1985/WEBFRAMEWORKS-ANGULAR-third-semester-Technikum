import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  stateOptions: any[];

  value1: string = "off";


  constructor(private primeNGConfig: PrimeNGConfig) {
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

    }

    else {
      this.value1 = "off";
      // Benutzer entfernen
    }

  }



}
