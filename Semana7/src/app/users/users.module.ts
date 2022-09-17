import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule { }
