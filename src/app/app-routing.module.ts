import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './components/requests/request/request.component';
import { RequestsComponent } from './components/requests/requests.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './components/auth/auth.guard';
import { RoleGuard } from './components/auth/role.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'requests', component: RequestsComponent },
  {path:'users', component: UsersComponent, canActivate:[AuthGuard,RoleGuard] }, 
  {path:'categories', component: CategoriesComponent },
  {path:'request/:id', component: RequestComponent},
  {path:'user/:id', component: UserComponent, canActivate:[RoleGuard] },
  {path:'category/:id', component: CategoryComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
