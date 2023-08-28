import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'', redirectTo:'/not-found',pathMatch:"full"},
  {path:'todo-list', component: TodoListComponent},
  {path:'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
