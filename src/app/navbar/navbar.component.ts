import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
      this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
        {label: 'Add user', icon: 'pi pi-fw pi-user-edit',routerLink: ['/signUpUsers']},
        {label: 'Display users', icon: 'pi pi-fw pi-users',routerLink: ['/displayUsers']}
    ];
  }

}
