import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../../types';

@Component({
  selector: 'app-enter-form',
  templateUrl: './enter-form.component.html',
  styleUrls: ['./enter-form.component.css']
})
export class EnterFormComponent implements OnInit {

  constructor(private httpService:HttpService) { }

    firstname:string;
    lastname:string;
    birthday:string;

    onSubmit():void {
      let user = new User(this.firstname,this.lastname,this.birthday);
      this.clearFields();
      this.httpService.signUpUser(user);
    }

    private clearFields():void {
      this.firstname = ' ';
      this.lastname = ' ';
    }

  ngOnInit(): void {
  }

}
