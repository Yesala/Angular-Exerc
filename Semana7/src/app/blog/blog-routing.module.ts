import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  {path: 'posts',  component: PostsComponent, resolve: {data: PostsResolver}},
  {path: 'posts/:id', component: PostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
