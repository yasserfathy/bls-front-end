import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {User} from "../../model/user";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  userLoged: User = new User();
  user: User = new User();
  // name: string = "";
  // password: string = "";

  constructor(private userService: UserServiceService, private router: Router) {

  }
  refreshUserData(){
    this.userService.getUsers(this.userLoged).subscribe(
      data => {
        this.userService.currentUser = data
      }
    )
  }
  getUser() {
    this.userService.getUsers(this.userLoged).subscribe(
      data => {
        this.userService.currentUser = data
        if (this.userService.currentUser != null) {
          this.router.navigateByUrl('/home');
        } else {
          alert("Wrong user name or password ")
        }
      }
    )


  }

  change(event: any) {
    this.getUser();
  }
}
