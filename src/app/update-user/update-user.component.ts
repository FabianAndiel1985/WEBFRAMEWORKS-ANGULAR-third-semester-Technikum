import { User } from './../types';
import { HttpService } from './../http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';




@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {

  constructor(private httpService:HttpService) { }

  id:string;
  firstname:string;
  lastname:string;
  birthday:string;

  onSubmit() {
    let user = new User(this.firstname,this.lastname,this.birthday);
    this.httpService.updateUser(this.id,user);
  }

ngOnInit(): void {
  this.httpService.userSubject.subscribe((response) => {this.id=response});
  this.httpService.getSpecificUser(this.id).subscribe(response=>{
    this.firstname = response.firstname;
    this.lastname = response.lastname;
    this.birthday = response.birthday;
  });

}


}
