import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'user-list', component: UserListComponentComponent },
  { path: 'user/:firstname', component: UserProfileComponent },// Define a parameterized route for user details
  { path: '', redirectTo: '/register', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
