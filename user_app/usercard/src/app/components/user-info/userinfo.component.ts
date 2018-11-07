import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/_shared';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user: User;
  userId: number;
  isCountryEdited = false;
  isLoadComplited = false;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
  ) {
    route.params.subscribe(p => {
      this.userId = +p['id'] || 0;
    });
  }

  ngOnInit() {
    if (!this.user) {
      this.populateUser();
    }
  }

  populateUser() {
    this.userService.getById(this.userId)
      .subscribe(user => {
        this.user = user;
        this.isLoadComplited = true;
      });
  }

  pickLanguages() {
    return _.join(_.map(this.user.knowledge || {}, 'language'), ', ');
  }

  onCityClick() {
    this.isCountryEdited = !this.isCountryEdited;
  }

  onCityEnter(input: string) {
    this.user.city = input;
    this.isCountryEdited = !this.isCountryEdited;
  }
}
