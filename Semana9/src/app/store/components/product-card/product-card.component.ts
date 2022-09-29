import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: [`
    img {
      max-height: 20rem;
    }
  `]
})
export class ProductCardComponent {

  @Input() product! : Product

}
