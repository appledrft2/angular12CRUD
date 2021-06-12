import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Sweet alert
import Swal from 'sweetalert2';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { UserComponent } from './user/user.component';
import { AddListComponent } from './list/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditListComponent } from './list/editlist.component';
import { NotFoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    DashboardComponent,
    AddListComponent,
    EditListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
