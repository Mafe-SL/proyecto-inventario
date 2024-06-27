import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductosService } from 'src/app/productos.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  products: Product[] = [];

  constructor(private productService: ProductosService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productListMethod();
  }

  productListMethod(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (error) => {
        console.error('Error fetching products', error);
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product);
  }

}
