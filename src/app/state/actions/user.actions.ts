import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
 
export const loadUsers = createAction('[User List] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: User[], total: number }>());
export const loadUsersFailure = createAction('[User List] Load Users Failure', props<{ error: any }>());
