import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users/users.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';
import { SaveValidationGuard } from './guards/save-validation.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canDeactivate: [ SaveValidationGuard ]},
  {path: 'users', component: UsersComponent, canActivate:[ AuthGuard ],
   children: [
    {path: 'list', component: ListComponent},
    {path: 'details', component: DetailsComponent}
   ]},
   {path: 'blog', loadChildren: () => import ('./blog/blog.module')
          .then(m => m.BlogModule)},
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
