import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
        AddComponent,
        SearchComponent,
        ProductsComponent,
        ProductComponent,
        CartComponent,
        ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreRoutingModule,
  ]
})
export class StoreModule { }
