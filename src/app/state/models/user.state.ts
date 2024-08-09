import { User } from './user.model';

export interface UserState {
  users: User[];
  total: number;
}

export const initialState: UserState = {
  users: [],
  total: 0
};
