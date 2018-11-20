import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
              private userService: UserService) { }
  username = '';
  password = '';
  ngOnInit() {
  }
  login(username: string, password: string) {
  // login(user) {
  //   console.log(username, password);
    const user = this.userService.findUserByCredentials(username, password);
    // console.log(user);
    if (user) {
      this.router.navigate(['/profile', user._id]);
    }
    // this.router.navigate(['/profile']);
  }
}
