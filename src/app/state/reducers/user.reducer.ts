import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess } from '../actions/user.actions';
import { initialState, UserState } from '../models/user.state';
 
const _userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users, total }) => ({ ...state, users, total }))
);

export function userReducer(state: UserState | undefined, action: any): UserState {
  return _userReducer(state, action);
}
