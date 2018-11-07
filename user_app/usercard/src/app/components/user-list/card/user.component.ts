import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/_shared';

import * as _ from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
    if (!this.user) {
      this.populateUser();
    }
  }

  populateUser() {

  }

  pickKnowledge() {
    return _.map(this.user.knowledge, 'language');
  }

}
