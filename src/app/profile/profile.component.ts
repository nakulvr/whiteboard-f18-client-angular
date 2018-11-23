import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  user = {_id: 0, username: 'default', password: 'default'};
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.user = this.userService.findUserById(params.userId)
      // params => console.log(params)
    );
  }

}
