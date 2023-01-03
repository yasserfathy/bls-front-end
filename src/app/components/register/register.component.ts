import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User=new User();
  ngOnInit(): void {
  }
  constructor(private userService: UserServiceService) {
  }
  saveUser() {
    this.userService.saveUsers(this.user).subscribe(
      data => {
        this.user = data
        alert(this.user);
      }
    )

  }
  save(event: any) {
    this.saveUser();
  }
}
