// card-producto.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductosService } from 'src/app/productos.service';
import { DetailSaleService } from 'src/app/service/detail-sale.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductosService, private detailSaleService: DetailSaleService) {}

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
    this.detailSaleService.addProductSale(product);
    console.log('Product added to cart:', product);
  }
}
