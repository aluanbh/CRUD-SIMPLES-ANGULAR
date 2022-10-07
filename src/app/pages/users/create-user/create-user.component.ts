import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ResponseCreateUser } from './../user.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: ResponseCreateUser = {
    name: '',
    job: '',
    id: '',
    createdAt: new Date()
  };

  response!: ResponseCreateUser;

  constructor(private userSevice: UsersService) { }

  ngOnInit(): void {
  }

  save() {
    this.userSevice.createUser(this.request).subscribe(
      res => {
        this.response = res;
        console.log(res);
      }
    );
  }

}
