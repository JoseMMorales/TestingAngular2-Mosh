import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from './08-todos.Integration/todo.service';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './08-todos.Integration/todos.component';
import { UserDetailsComponent } from './09-user-details-integration/user-details.component';
import { VoterComponent } from './07-voter-integration/voter.component';
import { UsersComponent } from './users/users.component';


import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
