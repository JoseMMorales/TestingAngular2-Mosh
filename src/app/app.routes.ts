import { TodosComponent } from './08-todos.Integration/todos.component';
import { UserDetailsComponent } from './09-user-details-integration/user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];
