import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserOptionsComponent } from './user-options/user-options.component';
import { GetUserComponent } from './get-user/get-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'user-options',
    component: UserOptionsComponent,
    
  },
  { path: 'get-user', component: GetUserComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'delete-user', component: DeleteUserComponent},
  { path: '**', redirectTo: '/login' } // Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
