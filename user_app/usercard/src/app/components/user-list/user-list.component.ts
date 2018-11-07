import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/_shared';
import { Router } from '@angular/router';
import { trigger, transition, query, animate, style } from '@angular/animations';
import { RootStoreState, UsersStoreSelectors } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 }))
        ])
      ])
    ])
  ]
})
export class UserListComponent implements OnInit {
  users: User[];
  users$: Observable<User[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(
    private router: Router,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
    this.populateUsers();
  }

  populateUsers() {
    this.store$.select(UsersStoreSelectors.selectAllItems)
      .subscribe(data => {
        this.users = data;
      });
  }

  onCardClick(userId: number) {
    this.router.navigate(['/user/', userId]);
  }

}
