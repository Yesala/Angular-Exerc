import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './posts/pages/about/about.component';
import { NotfoundComponent } from './posts/pages/notfound/notfound.component';
import { PostDetailComponent } from './posts/pages/post-detail/post-detail.component';
import { PostsComponent } from './posts/pages/posts/posts.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations : [PostsComponent, PostDetailComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
