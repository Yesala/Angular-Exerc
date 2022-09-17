import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
