import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './components/requests/request/request.component';
import { RequestsComponent } from './components/requests/requests.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';

const routes: Routes = [
  {path:'', component: RequestsComponent},
  {path:'requests', component: RequestsComponent },
  {path:'users', component: UsersComponent }, 
   {path:'categories', component: CategoriesComponent },
  {path:'request/:id', component: RequestComponent },
  {path:'user/:id', component: UserComponent },
  {path:'category/:id', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
