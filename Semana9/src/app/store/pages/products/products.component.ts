import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = []

  constructor(private readonly productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsService.findAll().subscribe({
      next: data => this.products = data,
      error: err => console.warn(err),
      complete: () => console.log('Subscripción completa')
    })
  }

}
