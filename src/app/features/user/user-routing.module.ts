import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
