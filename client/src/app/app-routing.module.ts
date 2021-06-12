import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// 404
import { NotFoundComponent } from './notfound/notfound.component';
// Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
// List
import { ListComponent } from './list/list.component';
import { AddListComponent } from './list/add.component';
import { EditListComponent } from './list/editlist.component';
// User
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/add', component: AddListComponent },
  { path: 'list/edit/:id', component: EditListComponent },
  { path: 'user', component: UserComponent },
  { path: '404', component: NotFoundComponent },
  { path: "**", redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }