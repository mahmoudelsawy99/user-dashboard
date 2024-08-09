import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
 import { loadUsers, loadUsersSuccess, loadUsersFailure } from '../actions/user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../core/services/user.service';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(action =>
        this.userService.getUsers(action.page).pipe(
          map(data => loadUsersSuccess({ users: data.data, total: data.total })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
