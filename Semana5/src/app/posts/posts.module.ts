import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';



@NgModule({
  declarations: [
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
