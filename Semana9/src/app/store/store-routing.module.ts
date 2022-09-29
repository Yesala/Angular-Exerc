import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path:'', component: HomeComponent,
    children : [
      { path: 'add', component: AddComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductComponent },
      { path: 'search', component: SearchComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
