import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/_shared';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';
import { RootStoreState, UsersStoreSelectors } from 'src/app/root-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user: User;
  userId: number;
  isCountryEdited = false;
  isLoadFinished = false;

  constructor(
    private store$: Store<RootStoreState.State>,
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
    this.store$.select(UsersStoreSelectors.selectById(this.userId))
      .subscribe(data => {
        this.user = data;
        this.isLoadFinished = true;
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
